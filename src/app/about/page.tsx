import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Target, Heart, Users, Medal, Calendar } from 'lucide-react';
import { FutbolIcon } from '@/components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: "Learn about YES ACADEMY's mission, values, and the expert team dedicated to fostering champions.",
};

const values = [
    { icon: Medal, title: 'Excellence', description: 'Striving for the highest standards in coaching, facilities, and personal achievement.' },
    { icon: Heart, title: 'Passion', description: 'Fostering a deep love for sport that inspires lifelong dedication and enjoyment.' },
    { icon: Users, title: 'Community', description: 'Building a supportive, inclusive, and diverse family of athletes, parents, and coaches.' },
    { icon: Target, title: 'Growth', description: 'Committing to the holistic development of every member, both as athletes and individuals.' },
];

const stats = [
    { icon: Users, value: '3,000+', label: 'Athletes Trained' },
    { icon: FutbolIcon, value: '7', label: 'Sports Offered' },
    { icon: Calendar, value: '2015', label: 'Founded In' },
    { icon: Medal, value: '2', label: 'Countries' },
]

export default function AboutPage() {
  const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');

  return (
    <div>
      <section className="relative h-64 w-full bg-primary">
        {aboutHeroImage && (
             <Image
             src={aboutHeroImage.imageUrl}
             alt={aboutHeroImage.description}
             data-ai-hint={aboutHeroImage.imageHint}
             fill
             className="object-cover"
           />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white container">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
            About YES ACADEMY
          </h1>
          <p className="mt-2 max-w-2xl text-lg">Pioneering Sports Excellence in Asia</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 text-center md:grid-cols-2 md:text-left">
            <div>
              <h2 className="font-headline text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2015, YES ACADEMY was born from a vision to bring world-class, professional sports training to the heart of Asia. We started in China with a small group of passionate coaches and a handful of students. Today, we are a leading institution in both China and Vietnam, trusted by thousands of families.
              </p>
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                Our mission is to provide a premium, dynamic, and inspiring environment where individuals of all ages and backgrounds can unlock their full potential. We aim to develop not just skilled athletes, but also resilient, confident, and well-rounded individuals ready to take on any challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Core Values</h2>
                <p className="mt-4 text-lg text-muted-foreground">The principles that guide every decision we make.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {values.map(value => (
                    <div key={value.title} className="text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <value.icon className="h-8 w-8" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
                        <p className="mt-2 text-muted-foreground">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are proud of the community we've built and the milestones we've achieved together.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map(stat => (
              <div key={stat.label} className="rounded-lg border bg-card p-6 shadow-sm">
                <stat.icon className="mx-auto h-12 w-12 text-accent" />
                <p className="mt-4 text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
