import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sun, Snowflake, Flag, Info, Check, Square } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
    title: "Camps",
    description: "Join our exciting summer and winter sports camps in China and Vietnam for an unforgettable experience of growth and fun.",
};

const camps = [
  {
    icon: Sun,
    title: 'Summer Champions Camp',
    location: 'China & Vietnam',
    description: 'An action-packed summer of sports, friendship, and fun. Our multi-sport camps offer a chance to try new activities and master existing skills in a vibrant, international environment. Participants will benefit from professional coaching, competitive matches, and cultural excursions, creating a lasting memories.',
    active: false,
    image: PlaceHolderImages.find(p => p.id === 'camps-hero'),
  },
  {
    icon: Snowflake,
    title: 'Winter Intensive Camp',
    location: 'China & Vietnam',
    description: 'Use the winter break to gain a competitive edge. These intensive camps focus on deep skill development, advanced tactical training, and strategic gameplay analysis to prepare athletes for the upcoming season. It\'s a perfect opportunity for dedicated players to elevate their game.',
    active: false,

    image: PlaceHolderImages.find(p => p.id === 'program-intensive'),
  },
   {
    icon: Flag,
    title: 'France 2026 Special Camp',
    location: 'France',
    description: 'A unique opportunity to train in France, immersing yourself in a country renowned for sporting excellence. This special camp will offer specialized coaching, participation in local tournaments, and a rich cultural experience. More information will be available soon.',
    active: false,
    image: PlaceHolderImages.find(p => p.id === 'france-camp'),
  },
];

const internationalCamp = {
  dates: ['Summer vacation', 'Winter vacation', 'Spring vacation'],
  countries: ['France', 'China', 'Vietnam', 'Japan...'],
  sports: ['Football', 'Climbing', 'Basketball', 'Horse-riding', 'Volley-ball', 'Golf', 'Tennis', 'Sailing', 'Skiing', 'Fencing'],
  images: [
    PlaceHolderImages.find(p => p.id === 'gallery-fencing'),
    PlaceHolderImages.find(p => p.id === 'gallery-skiing'),
    PlaceHolderImages.find(p => p.id === 'gallery-sailing'),
    PlaceHolderImages.find(p => p.id === 'gallery-football-kids'),
    PlaceHolderImages.find(p => p.id === 'gallery-tennis-kid'),
    PlaceHolderImages.find(p => p.id === 'gallery-horse-riding'),
  ]
}

const vipCamps = [
  {
    title: 'Skiing Camp',
    description: "France is a country with many mountains where you can practice SNOW sports, especially skiing. It is therefore not surprising that our athletes obtain very good results during world competitions."
  },
  {
    title: 'Sailing Camp',
    description: "France has been training exceptional navigators for decades. From Eric Tabarly to François Gabart, the country has established itself as a nation with a strong sailing culture. Sailing courses for children are designed to be both fun and educational. While sailing, young sailors learn the basics of sailing, equipment management, and develop a strong sense of direction and responsibility. These courses are also an excellent opportunity for children to develop their self-confidence."
  },
  {
    title: 'Horse Riding Camp',
    description: "The question of France's reputation in the equestrian sector no longer arises since the country has become a demographically essential country for horse riding. France also hosts the largest equestrian gathering in the world in Sologne. A record officially validated by the Guinness World Records. It is a gentle sport which promotes awareness in young people, gives muscle tone and improves balance and longevity of the body."
  }
];

const vipCampImages = {
  main: PlaceHolderImages.find(p => p.id === 'gallery-skiing'),
  side1: PlaceHolderImages.find(p => p.id === 'gallery-sailing'),
  side2: PlaceHolderImages.find(p => p.id === 'gallery-horse-riding'),
  vip: PlaceHolderImages.find(p => p.id === 'vip-kids'),
}

export default function CampsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-football-match');

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
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                  An Adventure in Sport
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Youth Elite Sports Academy has served as a haven for children and their families since 2000.  Every summer, our caring and enthusiastic counselors dream up a wide range of creative programs for campers of all ages. Our activities and offerings are fun, challenging and accepting of everyone’s individual abilities. Above all, we are a down-to-earth Sports Camp dedicated to ensuring everyone have the time of their lives.
                </p>
              </div>
        </div>
      </section>
      
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto">
          <div>
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              SPORTS CAMPS
            </h2>
            <p className="font-headline text-2xl text-primary">
              INTERNATIONAL EXPERIENCE
            </p>
            <div className="mt-4 space-y-3 text-muted-foreground">
              <p>
                Concerned about the development and the well-being of children, YES Academy offers numerous camps to its athletes during the various school holidays.
              </p>
              <p>
                In order to provide new experiences and introduce them to new sports, we organize, during certain school vacations, our sports camps in different countries. These boarding camps aim to cultivate a cultural diversity are highlighted and expand their horizons.
              </p>
               <p>
                These camps can have different formats ranging from 5 days to 2 weeks, depending on the chosen activities. The camps also provides kids with many opportunities for cultural enrichment via diverse cultural activities (french courses, cultural centers visit, Go initiation, etc...).
              </p>
            </div>
             <p className="mt-6 font-semibold text-lg">
              A HUMAN AND SPORTS EXPERIENCE AVAILABLE TO EVERYONE!
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>DATES</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {internationalCamp.dates.map(date => (
                      <li key={date} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {date}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>COUNTRIES</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {internationalCamp.countries.map(country => (
                      <li key={country} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {country}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>SPORTS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm grid grid-cols-2">
                     {internationalCamp.sports.map(sport => (
                      <li key={sport} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {sport}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
           <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {internationalCamp.images.map((img, index) => 
              img && (
                <div 
                  key={img.id}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg`}
                >
                  <Image
                    src={img.imageUrl}
                    alt={img.description}
                    data-ai-hint={img.imageHint}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
        <div 
          className="absolute inset-0 bg-primary-foreground/10"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 100%)',
          }}
        />
        <div className="container relative z-10 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              {vipCampImages.side1 && (
                <div className="relative aspect-[4/3] w-2/3 self-start overflow-hidden rounded-lg shadow-xl">
                  <Image src={vipCampImages.side1.imageUrl} alt={vipCampImages.side1.description} fill data-ai-hint={vipCampImages.side1.imageHint} className="object-cover" />
                </div>
              )}
              
               {vipCampImages.side2 && (
                <div className="relative aspect-[4/3] w-2/3 self-end overflow-hidden rounded-lg shadow-xl">
                   <Image src={vipCampImages.side2.imageUrl} alt={vipCampImages.side2.description} fill data-ai-hint={vipCampImages.side2.imageHint} className="object-cover" />
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-headline text-4xl font-bold">SPECIAL EXPERIENCE</h2>
              <h3 className="font-headline text-2xl text-accent">PRIVATE AND VIP SPORTS</h3>
              {vipCampImages.vip && (
                <div className="relative my-4 h-24 w-40 overflow-hidden rounded-lg border-2 border-accent shadow-lg">
                   <Image src={vipCampImages.vip.imageUrl} alt={vipCampImages.vip.description} fill data-ai-hint={vipCampImages.vip.imageHint} className="object-cover" />
                </div>
              )}
              <p className="text-primary-foreground/80">
                To respond to numerous and increasing demands, we have been developing our elite sports camps programs. Often meant for a high society clientele, with sports such as skiing, horse riding or even sailing which are very popular with our VIPs.
              </p>
              <p className="mt-2 text-primary-foreground/80">
                These sports are exclusively offered during our camps since they are only accessible in specific countries.
              </p>
              <div className="mt-8 space-y-6">
                {vipCamps.map(camp => (
                  <div key={camp.title}>
                    <h4 className="flex items-center gap-2 font-headline text-lg font-semibold text-accent">
                      <Square className="h-4 w-4" />
                      {camp.title.toUpperCase()}
                    </h4>
                    <p className="mt-1 text-sm text-primary-foreground/80">{camp.description}</p>
                  </div>
                ))}
              </div>
            </div>
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
