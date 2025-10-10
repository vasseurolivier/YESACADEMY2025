'use server';

import { cookies } from 'next/headers';

export async function handleAdminLogin(formData: FormData) {
  const password = formData.get('password') as string;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    // This case should ideally not be reached if the site is configured properly
    return { success: false, message: 'Admin password is not configured.' };
  }

  if (password === adminPassword) {
    // Set a cookie to remember the session
    cookies().set('admin-auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    return { success: true };
  } else {
    return { success: false, message: 'Invalid password.' };
  }
}
