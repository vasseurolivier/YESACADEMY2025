import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sun, Snowflake } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Camps',
  description: 'Join our exciting summer and winter sports camps in China and Vietnam for an unforgettable experience of growth and fun.',
};

const camps = [
  {
    icon: Sun,
    title: 'Summer Champions Camp',
    location: 'China & Vietnam',
    description: 'An action-packed summer of sports, friendship, and fun. Our multi-sport camps offer a chance to try new activities and master existing skills in a vibrant, international environment.',
    image: PlaceHolderImages.find(p => p.id === 'gallery-1')?.imageUrl,
  },
  {
    icon: Snowflake,
    title: 'Winter Intensive Camp',
    location: 'China & Vietnam',
    description: 'Use the winter break to gain a competitive edge. These intensive camps focus on deep skill development and strategic gameplay, preparing athletes for the upcoming season.',
    image: PlaceHolderImages.find(p => p.id === 'gallery-2')?.imageUrl,
  },
];

export default function CampsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'camps-hero');
  return (
    <div>
       <section className="relative h-64 w-full bg-primary">
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
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
            Academy Camps
          </h1>
          <p className="mt-2 max-w-2xl text-lg">Unforgettable Experiences, Lifelong Skills</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              An Adventure in Sport
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our camps are more than just training; they are an opportunity for growth, independence, and making friends from around the world.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {camps.map(camp => (
              <Card key={camp.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <camp.icon className="h-8 w-8 text-accent" />
                    <CardTitle className="text-2xl">{camp.title}</CardTitle>
                  </div>
                  <CardDescription>{camp.location}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                   {camp.image && <Image src={camp.image} alt={camp.title} width={600} height={400} className="mb-4 rounded-lg object-cover" />}
                  <p className="text-muted-foreground">{camp.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Learn More & Register</Link>
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
