
import { Link } from '@/navigation';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';

const navLinks = [
  { href: '/about', label: 'about' },
  { href: '/sports', label: 'sports' },
  { href: '/programs', label: 'programs' },
  { href: '/camps', label: 'camps' },
  { href: '/contact', label: 'enroll' },
];

const socialLinks = [
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Youtube, label: 'YouTube' },
];

export function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Header.nav');

  return (
    <footer className="bg-white dark:bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {t('tagline')}
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
              <p className="font-semibold">{t('quick_links')}</p>
              <ul className="mt-4 space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {tNav(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold">{t('locations_title')}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>{t('locations.beijing')}</li>
                <li>{t('locations.yiwu')}</li>
                <li>{t('locations.hanoi')}</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">{t('contact_title')}</p>
               <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>info@yesacademy.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground sm:flex sm:justify-between">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          <div className="mt-4 sm:mt-0">
            <Link href="/legal" className="hover:text-primary">
              {t('legal_link')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
