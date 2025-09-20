import { notFound } from 'next/navigation';
import { sports } from '@/lib/sports-data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Medal, Star, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const sport = sports.find(s => s.slug === params.slug);

  if (!sport) {
    return {
      title: 'Sport Not Found',
    };
  }

  return {
    title: sport.name,
    description: `Learn all about the ${sport.name} program at YES ACADEMY. ${sport.description}`,
  };
}

export async function generateStaticParams() {
  return sports.map(sport => ({
    slug: sport.slug,
  }));
}

const keyBenefits = [
    { icon: Medal, title: 'Coaching d\'Élite', description: 'Apprenez des meilleurs avec nos entraîneurs certifiés et expérimentés.' },
    { icon: Users, title: 'Développement Holistique', description: 'Nous formons des athlètes complets, en nous concentrant sur la technique et le caractère.' },
    { icon: Star, title: 'Installations de Pointe', description: 'Entraînez-vous dans des environnements de première qualité conçus pour la performance.' },
];

const testimonials = [
  {
    name: 'Li Wei',
    role: 'Parent of a U12 Player',
    avatar: 'LW',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageUrl,
    testimonial:
      "La méthodologie d'entraînement a complètement transformé le jeu de mon fils. Les entraîneurs ne se contentent pas d'enseigner, ils inspirent.",
  },
  {
    name: 'Alex Johnson',
    role: 'Adult Tennis Member',
    avatar: 'AJ',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl,
    testimonial:
      "J'ai plus progressé en six mois ici qu'en deux ans ailleurs. L'attention personnalisée et l'ambiance communautaire sont inégalées.",
  },
];

export default function SportDetailPage({ params }: Props) {
  const sport = sports.find(s => s.slug === params.slug);

  if (!sport) {
    notFound();
  }

  const galleryImages = [
    PlaceHolderImages.find(p => p.id === 'gallery-1'),
    PlaceHolderImages.find(p => p.id === 'gallery-2'),
    PlaceHolderImages.find(p => p.id === 'gallery-3'),
  ].filter(Boolean) as (typeof PlaceHolderImages[0])[];

  return (
    <div>
      <section className="relative h-72 w-full">
        <Image
          src={sport.image.url}
          alt={sport.image.alt}
          data-ai-hint={sport.image.hint}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white container">
          <sport.icon className="h-16 w-16" />
          <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight md:text-6xl">
            {sport.name}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
            <div className="mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                <div className="prose prose-lg dark:prose-invert">
                    <h2 className="font-headline text-3xl font-bold">À propos de notre programme {sport.name}</h2>
                    <p className="lead text-muted-foreground">
                    {sport.description}
                    </p>
                    <p>{sport.longDescription}</p>
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

      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">Avantages Clés</h2>
                <p className="mt-4 text-lg text-muted-foreground">Découvrez pourquoi notre programme se démarque.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {keyBenefits.map(benefit => (
                    <div key={benefit.title} className="text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <benefit.icon className="h-8 w-8" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold">{benefit.title}</h3>
                        <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
       <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">En Action</h2>
            <p className="mt-4 text-lg text-muted-foreground">Un aperçu de l'intensité et de la passion sur le terrain.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Ce que disent nos athlètes</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map(testimonial => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">"{testimonial.testimonial}"</p>
                </CardContent>
                <CardHeader className="mt-auto flex-row items-center gap-4">
                  <Avatar>
                    {testimonial.image && <AvatarImage src={testimonial.image} alt={testimonial.name} />}
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Prêt à commencer ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Rejoignez notre programme de {sport.name} et commencez votre parcours vers l'excellence. Les places sont limitées.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Inscrivez-vous au programme {sport.name}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
