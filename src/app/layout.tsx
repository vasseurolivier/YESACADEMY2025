
// This layout is needed to prevent a Not Found error on the root path.
// It redirects the user to the default locale.
import { redirect } from 'next/navigation';

export default function RootLayout() {
  redirect('/en');
}
