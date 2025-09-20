import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User, Users, Calendar, Building2, Building } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Our Programs',
  description: 'Discover the variety of programs at YES ACADEMY, including private lessons, group classes, school programs, and corporate events.',
};

const programs = [
  {
    icon: Building,
    title: 'Cooperation with International Schools',
    target: "For educational partners",
    description: 'We partner with international schools to provide high-quality sports education as part of their curriculum or as extracurricular activities, promoting a healthy and active lifestyle.',
    image: PlaceHolderImages.find(p => p.id === 'program-schools'),
  },
  {
    icon: User,
    title: 'Private Coaching',
    target: "For the dedicated athlete",
    description: 'One-on-one sessions tailored to your specific goals. Accelerate your learning with personalized feedback and unlock your peak performance.',
    image: PlaceHolderImages.find(p => p.id === 'program-private'),
  },
  {
    icon: Users,
    title: 'Group Classes',
    target: "For the social competitor",
    description: 'Join a dynamic group environment to learn, compete, and grow with peers. Perfect for developing teamwork and game-sense in a fun atmosphere.',
    image: PlaceHolderImages.find(p => p.id === 'program-group'),
  },
  {
    icon: Calendar,
    title: 'Intensive Stages',
    target: "For the ambitious player",
    description: 'Immersive training camps during holidays. A perfect opportunity to significantly boost your skills and gain a competitive edge in a short amount of time.',
    image: PlaceHolderImages.find(p => p.id === 'program-intensive'),
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    target: "For the modern team",
    description: 'Unique team-building experiences centered around sports. Boost morale, communication, and teamwork within your organization in an active, engaging way.',
    image: PlaceHolderImages.find(p => p.id === 'program-corporate'),
  },
];

export default function ProgramsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'programs-hero');

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
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white container">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
            Our Programs
          </h1>
          <p className="mt-2 max-w-2xl text-lg">A Path for Every Athlete</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Find Your Perfect Fit
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you're a beginner taking your first steps, a dedicated athlete aiming for the top, or a company looking for a unique event, we have a program for you.
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
                    <span className="text-2xl">{program.title}</span>
                  </CardTitle>
                  <CardDescription>{program.target}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Learn More</Link>
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
