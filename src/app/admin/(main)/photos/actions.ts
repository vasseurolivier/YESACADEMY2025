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
    await mkdir(publicImagesDir, { recursive: true });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const filename = `${imageId}-${Date.now()}.png`;
    const path = join(publicImagesDir, filename);

    await writeFile(path, buffer);

    const imagesDataRaw = await readFile(imagesFilePath, 'utf-8');
    const imagesData = JSON.parse(imagesDataRaw);
    
    const imageIndex = imagesData.placeholderImages.findIndex((img: { id: string }) => img.id === imageId);

    if (imageIndex !== -1) {
      imagesData.placeholderImages[imageIndex].imageUrl = `/images/${filename}`;
      await writeFile(imagesFilePath, JSON.stringify(imagesData, null, 2), 'utf-8');
    } else {
        throw new Error(`Image with ID ${imageId} not found in JSON file.`);
    }

  } catch (error) {
    console.error('Error uploading image:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erreur lors du téléversement de l\'image.';
    throw new Error(errorMessage);
  }
}
