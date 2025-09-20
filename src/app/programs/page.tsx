import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User, Users, Calendar, Building2 } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Our Programs',
  description: 'Discover the variety of programs at YES ACADEMY, including private lessons, group classes, school programs, and corporate events.',
};

const programs = [
  {
    icon: User,
    title: 'Private Coaching',
    description: 'One-on-one sessions tailored to your specific goals. Accelerate your learning with personalized feedback from our expert coaches.',
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Join a dynamic group environment to learn, compete, and grow with peers. Classes are available for all age groups and skill levels.',
  },
  {
    icon: Calendar,
    title: 'Intensive Stages',
    description: 'Immersive training camps during holidays. A perfect opportunity to significantly boost your skills in a short amount of time.',
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    description: 'Unique team-building experiences centered around sports. Boost morale, communication, and teamwork within your organization.',
  },
];

export default function ProgramsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'programs-hero');
  return (
    <div>
      <section className="relative h-64 w-full bg-primary -mx-4 sm:-mx-6 lg:-mx-8">
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
            Our Programs
          </h1>
          <p className="mt-2 max-w-2xl text-lg">A Path for Every Athlete</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Find Your Perfect Fit
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you are a beginner taking your first steps, a dedicated athlete aiming for the top, or a company looking for a unique event, we have a program for you.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {programs.map(program => (
              <Card key={program.title}>
                <CardHeader className="flex-row items-center gap-4">
                  <program.icon className="h-10 w-10 text-primary" />
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Enroll Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
