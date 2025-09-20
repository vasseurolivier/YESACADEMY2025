import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sun, Snowflake, Flag, Info } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslations } from 'next-intl';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = (await import(`@/messages/${locale}.json`)).default;
  const campsPage = t.CampsPage;
  return {
    title: campsPage.metadata.title,
    description: campsPage.metadata.description,
  };
}

const camps = [
  {
    icon: Sun,
    title: 'summer_camp_title',
    location: 'summer_camp_location',
    description: 'summer_camp_desc',
    active: false,
  },
  {
    icon: Snowflake,
    title: 'winter_camp_title',
    location: 'winter_camp_location',
    description: 'winter_camp_desc',
    active: false,
  },
   {
    icon: Flag,
    title: 'france_camp_title',
    location: 'france_camp_location',
    description: 'france_camp_desc',
    active: false,
  },
];

export default function CampsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'camps-hero');
    const t = useTranslations('CampsPage');

  return (
    <div>
       <section className="relative h-64 w-full bg-primary">
         <div className="container">
         {heroImage && (
             <Image
             src={heroImage.imageUrl}
             alt={heroImage.description}
             data-ai-hint={heroImage.imageHint}
             fill
             className="object-cover"
           />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
            {t('hero_title')}
          </h1>
          <p className="mt-2 max-w-2xl text-lg">{t('hero_subtitle')}</p>
        </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              {t('section_title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('section_subtitle')}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {camps.map(camp => (
              <Card key={camp.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <camp.icon className="h-8 w-8 text-accent" />
                    <CardTitle className="text-2xl">{t(`camps.${camp.title}`)}</CardTitle>
                  </div>
                  <CardDescription>{t(`camps.${camp.location}`)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{t(`camps.${camp.description}`)}</p>
                </CardContent>
                <CardFooter>
                  {camp.active ? (
                    <Button asChild className="w-full">
                      <Link href="/contact">{t('register_button')}</Link>
                    </Button>
                  ) : (
                    <Button variant="secondary" disabled className="w-full">
                      <Info className="mr-2 h-4 w-4" />
                      {t('coming_soon_button')}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
      </section>
    </div>
  );
}
