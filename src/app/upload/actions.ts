'use server';

import { writeFile } from 'fs/promises';
import { join } from 'path';
import { revalidatePath } from 'next/cache';

export async function handleLogoUpload(formData: FormData) {
  const file = formData.get('logo') as File;

  if (!file || file.size === 0) {
    throw new Error('Aucun fichier sélectionné.');
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Le chemin vers le dossier `public`
  const publicDir = join(process.cwd(), 'public');
  const path = join(publicDir, 'logo.png');

  try {
    // Écrire le fichier dans `/public/logo.png`
    await writeFile(path, buffer);
    console.log(`Logo successfully uploaded to ${path}`);

    // Invalider le cache pour que Next.js serve la nouvelle image
    revalidatePath('/');
    
    return { success: true, message: 'Logo téléversé avec succès !' };
  } catch (error) {
    console.error('Error uploading logo:', error);
    return { success: false, message: 'Erreur lors du téléversement du logo.' };
  }
}
