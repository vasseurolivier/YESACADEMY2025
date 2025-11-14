'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function handleAdminLogin(formData: FormData) {
  const password = formData.get('password') as string;
  // Use the environment variable if it exists, otherwise fall back to the default password.
  // This ensures login works in both development (with .env) and production.
  const adminPassword = process.env.ADMIN_PASSWORD || 'YESACADEMY2025';

  if (!adminPassword) {
    // This case should ideally not be reached anymore.
    return { success: false, message: 'Le mot de passe administrateur n\'est pas configuré.' };
  }

  if (password === adminPassword) {
    cookies().set('admin-auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    // Redirect on the server-side
    redirect('/admin/photos');
  } else {
    return { success: false, message: 'Mot de passe invalide.' };
  }
}
