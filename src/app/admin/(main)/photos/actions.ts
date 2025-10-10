'use server';

import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { revalidatePath } from 'next/cache';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    console.log(`Image successfully uploaded to ${path}`);

    // Update placeholder-images.json
    const imagesDataRaw = await readFile(imagesFilePath, 'utf-8');
    const imagesData = JSON.parse(imagesDataRaw);
    
    const imageIndex = imagesData.placeholderImages.findIndex((img: { id: string }) => img.id === imageId);

    if (imageIndex !== -1) {
      imagesData.placeholderImages[imageIndex].imageUrl = `/images/${filename}`;
      // You might want to update description and hint as well if fields are provided in the form
      // For now, we just update the URL.
      await writeFile(imagesFilePath, JSON.stringify(imagesData, null, 2), 'utf-8');
      console.log(`Updated ${imagesFilePath} for image ID ${imageId}`);
    } else {
        throw new Error(`Image with ID ${imageId} not found in JSON file.`);
    }

    // Invalidate cache for all relevant paths
    revalidatePath('/');
    revalidatePath('/(.)', 'layout');
    
    return { success: true, message: 'Image téléversée et mise à jour avec succès !' };
  } catch (error) {
    console.error('Error uploading image:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erreur lors du téléversement de l\'image.';
    return { success: false, message: errorMessage };
  }
}
