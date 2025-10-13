'use server';

import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { revalidatePath } from 'next/cache';

const imagesFilePath = join(process.cwd(), 'src', 'lib', 'placeholder-images.json');
const publicImagesDir = join(process.cwd(), 'public', 'images');

export async function handleImageUpload(formData: FormData) {
  const file = formData.get('image') as File;
  const imageId = formData.get('imageId') as string;

  if (!file || file.size === 0 || !imageId) {
    throw new Error('Fichier ou ID d\'image manquant.');
  }

  try {
    // Ensure the /public/images directory exists
    await mkdir(publicImagesDir, { recursive: true });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Use a consistent file extension, for example .png
    const filename = `${imageId}.png`;
    const path = join(publicImagesDir, filename);

    // Write the file to /public/images/
    await writeFile(path, buffer);

    // Update placeholder-images.json
    const imagesDataRaw = await readFile(imagesFilePath, 'utf-8');
    const imagesData = JSON.parse(imagesDataRaw);
    
    const imageIndex = imagesData.placeholderImages.findIndex((img: { id: string }) => img.id === imageId);

    if (imageIndex !== -1) {
      imagesData.placeholderImages[imageIndex].imageUrl = `/images/${filename}`;
      await writeFile(imagesFilePath, JSON.stringify(imagesData, null, 2), 'utf-8');
    } else {
        throw new Error(`Image with ID ${imageId} not found in JSON file.`);
    }

    // Invalidate cache for all relevant paths.
    // This is what was causing issues with the return value.
    // We can still call it, but we won't return a value from this function.
    revalidatePath('/', 'layout');

  } catch (error) {
    console.error('Error uploading image:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erreur lors du téléversement de l\'image.';
    // Throw error to be caught by the client-side try/catch block
    throw new Error(errorMessage);
  }
}
