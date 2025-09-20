
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';
import { Logo } from '@/components/icons';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

const navLinks = [
  { href: '/about', label: 'about' },
  { href: '/sports', label: 'sports' },
  { href: '/programs', label: 'programs' },
  { href: '/camps', label: 'camps' },
  { href: '/contact', label: 'enroll' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations('Header');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">{t('toggle_menu')}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Logo />
                  </Link>
                  <nav className="mt-8 flex flex-col gap-4">
                    {navLinks.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(`nav.${link.label}`)}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link href="/">
            <Logo />
          </Link>
        </div>

        <nav className="ml-6 hidden items-center gap-4 md:flex lg:gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              {t(`nav.${link.label}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          {isClient && (
            <Button asChild className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">{t('enroll_now')}</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
