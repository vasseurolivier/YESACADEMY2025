import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/sports', label: 'Sports' },
  { href: '/programs', label: 'Programs' },
  { href: '/camps', label: 'Camps' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Youtube, label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Forging champions through passion, dedication, and expert guidance.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map(social => (
                <Button key={social.label} variant="ghost" size="icon" asChild>
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <p className="font-semibold">Quick Links</p>
              <ul className="mt-4 space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold">Contact (China)</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>123 Sports Avenue, Beijing</li>
                <li>+86 10 1234 5678</li>
                <li>china@yesacademy.com</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Contact (Vietnam)</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>456 Athlete Road, Hanoi</li>
                <li>+84 24 8765 4321</li>
                <li>vietnam@yesacademy.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground sm:flex sm:justify-between">
          <p>&copy; {new Date().getFullYear()} YES ACADEMY. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <Link href="/legal" className="hover:text-primary">
              Legal & Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
