import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { sports } from '@/lib/sports-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

const testimonials = [
  {
    name: 'Li Wei',
    role: 'testimonial1_role',
    avatar: 'LW',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageUrl,
    testimonial: 'testimonial1_text',
  },
  {
    name: 'Alex Johnson',
    role: 'testimonial2_role',
    avatar: 'AJ',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl,
    testimonial: 'testimonial2_text',
  },
  {
    name: 'Trần Minh',
    role: 'testimonial3_role',
    avatar: 'TM',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-3')?.imageUrl,
    testimonial: 'testimonial3_text',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-football-match');
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col">
       <section className="relative h-[80vh] min-h-[600px] w-full">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                sizes="100vw"
                className="object-cover"
                priority
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white container">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-6xl">
                {t('hero_title')}
            </h1>
            <p className="mt-4 max-w-2xl text-lg">
                {t('hero_subtitle')}
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">{t('hero_cta')}</Link>
            </Button>
        </div>
      </section>

      <section id="sports" className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              {t('sports_title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('sports_subtitle')}
            </p>
          </div>
          <div className="mt-12">
            <div className="mx-auto grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-6">
                {sports.map(sport => (
                <Link href={`/sports/${sport.slug}`} key={sport.name} className="group mx-auto">
                    <div className="relative aspect-square w-36 overflow-hidden rounded-lg">
                        <Image 
                            src={sport.image.url}
                            alt={sport.image.alt}
                            data-ai-hint={sport.image.hint}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center p-2">
                            <h3 className="font-semibold text-white shadow-md">{t(`sports.${sport.slug}.name`)}</h3>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16 md:py-24">
        <div className="container grid gap-12 text-center md:grid-cols-2 md:items-center md:text-left">
          <div className="md:order-2">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">{t('why_us_title')}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t('why_us_subtitle')}</p>
            <ul className="mt-8 space-y-4 text-lg">
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-6 w-6 shrink-0 text-primary" />
                <span><span className="font-semibold">{t('why_us_point1_title')}</span> {t('why_us_point1_text')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-6 w-6 shrink-0 text-primary" />
                <span><span className="font-semibold">{t('why_us_point2_title')}</span> {t('why_us_point2_text')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-6 w-6 shrink-0 text-primary" />
                <span><span className="font-semibold">{t('why_us_point3_title')}</span> {t('why_us_point3_text')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-6 w-6 shrink-0 text-primary" />
                <span><span className="font-semibold">{t('why_us_point4_title')}</span> {t('why_us_point4_text')}</span>
              </li>
            </ul>
          </div>
           <div className="flex justify-center md:order-1">
            {PlaceHolderImages.find(p => p.id === 'why-us-1') && 
              <Image 
                src={PlaceHolderImages.find(p => p.id === 'why-us-1')?.imageUrl!}
                alt={PlaceHolderImages.find(p => p.id === 'why-us-1')?.description!}
                data-ai-hint={PlaceHolderImages.find(p => p.id === 'why-us-1')?.imageHint!}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            }
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              {t('testimonials_title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('testimonials_subtitle')}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(testimonial => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">"{t(testimonial.testimonial)}"</p>
                </CardContent>
                <CardHeader className="mt-auto flex-row items-center gap-4">
                  <Avatar>
                    {testimonial.image && <AvatarImage src={testimonial.image} alt={testimonial.name} />}
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{t(testimonial.role)}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">{t('cta_title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            {t('cta_subtitle')}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/programs">{t('cta_button_programs')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">{t('cta_button_contact')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
