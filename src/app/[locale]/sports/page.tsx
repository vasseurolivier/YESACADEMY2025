import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { sports } from '@/lib/sports-data';
import type { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = (await import(`@/messages/${locale}.json`)).default;
  const sportsPage = t.SportsPage;
  return {
    title: sportsPage.metadata.title,
    description: sportsPage.metadata.description,
  };
}

export default function SportsPage() {
  const t = useTranslations('SportsPage');
  const tSports = useTranslations('HomePage.sports');
  return (
    <div>
       <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">{t('hero_title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            {t('hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sports.map(sport => (
              <Link href={`/sports/${sport.slug}`} key={sport.name} className="group">
                <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={sport.image.url}
                      alt={sport.image.alt}
                      data-ai-hint={sport.image.hint}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="flex-row items-center gap-4">
                    <sport.icon className="h-10 w-10 shrink-0 text-primary" />
                    <div>
                      <CardTitle>{tSports(`${sport.slug}.name`)}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tSports(`${sport.slug}.description`)}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
