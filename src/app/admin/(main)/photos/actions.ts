'use server';

import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { revalidatePath } from 'next/cache';

const imagesFilePath = join(process.cwd(), 'src', 'lib', 'placeholder-images.json');

// This action updates an image URL in the JSON file.
export async function handleImageUrlUpdate(formData: FormData): Promise<void> {
  const imageUrl = formData.get('imageUrl') as string;
  const imageId = formData.get('imageId') as string;

  if (!imageUrl || !imageId) {
    throw new Error('URL ou ID d\'image manquant.');
  }

  // Validate if the URL is a proper URL
  try {
    new URL(imageUrl);
  } catch (_) {
    throw new Error('Veuillez fournir une URL valide.');
  }

  try {
    // 1. Read the JSON file
    const imagesDataRaw = await readFile(imagesFilePath, 'utf-8');
    const imagesData = JSON.parse(imagesDataRaw);
    
    // 2. Find and update the image URL in the JSON data
    const imageIndex = imagesData.placeholderImages.findIndex((img: { id: string }) => img.id === imageId);

    if (imageIndex !== -1) {
      imagesData.placeholderImages[imageIndex].imageUrl = imageUrl;
    } else {
        throw new Error(`Image with ID ${imageId} not found in JSON file.`);
    }

    // 3. Write the updated JSON data back to the file
    await writeFile(imagesFilePath, JSON.stringify(imagesData, null, 2), 'utf-8');

    // 4. Revalidate paths to ensure new images are shown across the site
    revalidatePath('/', 'layout');

  } catch (error) {
    console.error('Error updating image URL:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erreur lors de la mise à jour de l\'URL de l\'image.';
    // Re-throw the error to be caught by the client
    throw new Error(errorMessage);
  }
}
