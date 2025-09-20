import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Target, Heart, Users, Medal, Calendar } from 'lucide-react';
import { FutbolIcon } from '@/components/icons';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = (await import(`@/messages/${locale}.json`)).default;
  const aboutPage = t.AboutPage;
  return {
    title: aboutPage.metadata.title,
    description: aboutPage.metadata.description,
  };
}

const values = [
    { icon: Medal, title: 'excellence_title', description: 'excellence_desc' },
    { icon: Heart, title: 'passion_title', description: 'passion_desc' },
    { icon: Users, title: 'community_title', description: 'community_desc' },
    { icon: Target, title: 'growth_title', description: 'growth_desc' },
];

const stats = [
    { icon: Users, value: '3,000+', label: 'stats_athletes' },
    { icon: FutbolIcon, value: '7', label: 'stats_sports' },
    { icon: Calendar, value: '2015', label: 'stats_founded' },
    { icon: Medal, value: '2', label: 'stats_countries' },
]

export default function AboutPage() {
  const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');
  const t = useTranslations('AboutPage');

  return (
    <div>
      <section className="relative h-64 w-full bg-primary">
        <div className="container">
        {aboutHeroImage && (
             <Image
             src={aboutHeroImage.imageUrl}
             alt={aboutHeroImage.description}
             data-ai-hint={aboutHeroImage.imageHint}
             fill
             className="object-cover"
           />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white container">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
            {t('hero_title')}
          </h1>
          <p className="mt-2 max-w-2xl text-lg">{t('hero_subtitle')}</p>
        </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 text-center md:grid-cols-2 md:text-left">
            <div>
              <h2 className="font-headline text-3xl font-bold">{t('story_title')}</h2>
              <p className="mt-4 text-muted-foreground">
                {t('story_text')}
              </p>
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold">{t('mission_title')}</h2>
              <p className="mt-4 text-muted-foreground">
                {t('mission_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">{t('values_title')}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{t('values_subtitle')}</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {values.map(value => (
                    <div key={value.title} className="text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <value.icon className="h-8 w-8" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold">{t(`values.${value.title}`)}</h3>
                        <p className="mt-2 text-muted-foreground">{t(`values.${value.description}`)}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              {t('impact_title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('impact_subtitle')}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map(stat => (
              <div key={stat.label} className="rounded-lg border bg-card p-6 shadow-sm">
                <stat.icon className="mx-auto h-12 w-12 text-accent" />
                <p className="mt-4 text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t(`impact.${stat.label}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
