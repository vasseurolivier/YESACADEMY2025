import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sun, Snowflake, Flag, Info } from 'lucide-react';
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
    description: "An action-packed summer of sports, friendship, and fun. Our multi-sport camps offer a chance to try new activities and master existing skills in a vibrant, international environment. Participants will benefit from professional coaching, competitive matches, and cultural excursions, creating lasting memories.",
    active: false,
    image: PlaceHolderImages.find(p => p.id === 'camps-hero'),
  },
  {
    icon: Snowflake,
    title: 'Winter Intensive Camp',
    location: 'China & Vietnam',
    description: "Use the winter break to gain a competitive edge. These intensive camps focus on deep skill development, advanced tactical training, and strategic gameplay analysis to prepare athletes for the upcoming season. It's a perfect opportunity for dedicated players to elevate their game.",
    active: false,
    image: PlaceHolderImages.find(p => p.id === 'program-intensive'),
  },
   {
    icon: Flag,
    title: 'France 2026 Special Camp',
    location: 'France',
    description: "A unique opportunity to train in France, immersing yourself in a country renowned for sporting excellence. This special camp will offer specialized coaching, participation in local tournaments, and a rich cultural experience. More information will be available soon.",
    active: false,
    image: PlaceHolderImages.find(p => p.id === 'france-camp'),
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
             sizes="100vw"
             className="object-cover"
           />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
            Academy Camps
          </h1>
          <p className="mt-2 max-w-2xl text-lg">Unforgettable Experiences, Lifelong Skills</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                  An Adventure in Sport
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our camps are far more than just training sessions; they are transformative life experiences. We believe that true athletic development goes hand-in-hand with personal growth. Participants step out of their comfort zones, fostering independence and resilience as they navigate new challenges. In our vibrant, international environment, they forge friendships with peers from diverse backgrounds, creating a global network of friends and future leaders bonded by a shared passion for sport.
                </p>
              </div>
        </div>
      </section>

      <section className="container mx-auto py-16 md:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {camps.map(camp => (
              <Card key={camp.title} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                {camp.image && (
                  <div className="aspect-video relative">
                    <Image 
                      src={camp.image.imageUrl}
                      alt={camp.image.description}
                      data-ai-hint={camp.image.imageHint}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <camp.icon className="h-8 w-8 text-accent" />
                    <CardTitle className="text-2xl">{camp.title}</CardTitle>
                  </div>
                  <CardDescription>{camp.location}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{camp.description}</p>
                </CardContent>
                <CardFooter>
                  {camp.active ? (
                    <Button asChild className="w-full">
                      <Link href="/contact">Learn More & Register</Link>
                    </Button>
                  ) : (
                    <Button variant="secondary" disabled className="w-full">
                      <Info className="mr-2 h-4 w-4" />
                      Information Coming Soon
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
