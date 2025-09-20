import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User, Users, Calendar, Building2, Building } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslations } from 'next-intl';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = (await import(`@/messages/${locale}.json`)).default;
  const programsPage = t.ProgramsPage;
  return {
    title: programsPage.metadata.title,
    description: programsPage.metadata.description,
  };
}

const programs = [
  {
    icon: Building,
    title: 'schools_title',
    target: "schools_target",
    description: 'schools_desc',
    image: PlaceHolderImages.find(p => p.id === 'program-schools'),
  },
  {
    icon: User,
    title: 'private_title',
    target: "private_target",
    description: 'private_desc',
    image: PlaceHolderImages.find(p => p.id === 'program-private'),
  },
  {
    icon: Users,
    title: 'group_title',
    target: "group_target",
    description: 'group_desc',
    image: PlaceHolderImages.find(p => p.id === 'program-group'),
  },
  {
    icon: Calendar,
    title: 'intensive_title',
    target: "intensive_target",
    description: 'intensive_desc',
    image: PlaceHolderImages.find(p => p.id === 'program-intensive'),
  },
  {
    icon: Building2,
    title: 'corporate_title',
    target: "corporate_target",
    description: 'corporate_desc',
    image: PlaceHolderImages.find(p => p.id === 'program-corporate'),
  },
];

export default function ProgramsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'programs-hero');
    const t = useTranslations('ProgramsPage');

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
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              {t('section_title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('section_subtitle')}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map(program => (
              <Card key={program.title} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                {program.image && (
                    <div className="aspect-video relative">
                        <Image 
                            src={program.image.imageUrl}
                            alt={program.image.description}
                            data-ai-hint={program.image.imageHint}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <program.icon className="h-8 w-8 text-primary" />
                    <span className="text-2xl">{t(`programs.${program.title}`)}</span>
                  </CardTitle>
                  <CardDescription>{t(`programs.${program.target}`)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{t(`programs.${program.description}`)}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">{t('learn_more_button')}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
