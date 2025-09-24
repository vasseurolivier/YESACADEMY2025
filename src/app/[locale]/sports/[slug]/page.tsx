import { notFound } from 'next/navigation';
import { sports } from '@/lib/sports-data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { useTranslations } from 'next-intl';

type Props = {
  params: { slug: string, locale: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const sport = sports.find(s => s.slug === params.slug);
  const t = (await import(`@/messages/${params.locale}.json`)).default.HomePage.sports;

  if (!sport) {
    return {
      title: 'Sport Not Found',
    };
  }
  const sportName = t[sport.slug as keyof typeof t].name;

  return {
    title: sportName,
    description: `Learn all about the ${sportName} program at YES ACADEMY. ${t[sport.slug as keyof typeof t].description}`,
  };
}

export async function generateStaticParams() {
  return sports.map(sport => ({
    slug: sport.slug,
  }));
}

export default function SportDetailPage({ params }: Props) {
  const sport = sports.find(s => s.slug === params.slug);
  const t = useTranslations('SportDetailPage');
  const tSports = useTranslations('HomePage.sports');

  if (!sport) {
    notFound();
  }

  const sportName = tSports(`${sport.slug}.name`);

  return (
    <div>
      <section className="relative h-72 w-full">
        <Image
          src={sport.image.url}
          alt={sport.image.alt}
          data-ai-hint={sport.image.hint}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white container">
          <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight md:text-6xl">
            {sportName}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                <div className="prose prose-lg dark:prose-invert">
                    <h2 className="font-headline text-3xl font-bold">{t('about_program_title', { sportName })}</h2>
                    <p className="lead text-muted-foreground">
                      {tSports(`${sport.slug}.description`)}
                    </p>
                    <p>{tSports(`${sport.slug}.longDescription`)}</p>
                </div>
                <div>
                    <Image
                        src={sport.image.url}
                        alt={sport.image.alt}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container max-w-3xl text-center mx-auto">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">{t('ready_to_start_title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            {t('ready_to_start_subtitle', { sportName })}
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">{t('enroll_button', { sportName })}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
