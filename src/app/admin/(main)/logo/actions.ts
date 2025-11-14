'use server';

import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { revalidatePath } from 'next/cache';

export async function handleLogoUpload(formData: FormData): Promise<void> {
  const file = formData.get('logo') as File;

  if (!file || file.size === 0) {
    throw new Error('Aucun fichier sélectionné.');
  }

  // Ensure the /public directory exists, although it should
  const publicDir = join(process.cwd(), 'public');
  await mkdir(publicDir, { recursive: true });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  // Always name the file logo.png for consistency
  const filename = `logo.png`;
  const path = join(publicDir, filename);

  try {
    // Write the file to /public/logo.png
    await writeFile(path, buffer);
    console.log(`Logo successfully uploaded to ${path}`);

    // Invalidate cache for the entire site to ensure the new logo is served
    revalidatePath('/', 'layout');
    
  } catch (error) {
    console.error('Error uploading logo:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erreur lors du téléversement du logo.';
    throw new Error(errorMessage);
  }
}
