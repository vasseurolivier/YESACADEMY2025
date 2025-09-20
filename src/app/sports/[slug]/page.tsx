import { notFound } from 'next/navigation';
import { sports } from '@/lib/sports-data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Medal, Star, Users, Trophy, BrainCircuit, ShieldCheck, HeartPulse } from 'lucide-react';
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
    { icon: Medal, title: 'World-Class Coaching', description: "Our coaches aren't just experienced; they hold elite certifications (UEFA, ATP, PGA). Receive personalized, professional-grade instruction to unlock your true potential." },
    { icon: Users, title: 'Holistic Athlete Development', description: 'We build champions in life, not just in sports. Our programs instill discipline, resilience, and leadership, focusing on character as much as technical skill.' },
    { icon: Star, title: 'State-of-the-Art Facilities', description: 'Train like a pro in premium, fully-equipped environments. Our facilities are designed for optimal performance, safety, and a world-class training experience.' },
    { icon: Trophy, title: 'Pathway to Competition', description: 'Go beyond training. We provide clear pathways to compete, from local leagues to international tournaments, giving you the platform to showcase your skills.' },
];

const methodologyPillars = [
    {
        icon: ShieldCheck,
        title: "Technical Foundation First",
        description: "We believe mastery begins with fundamentals. Our French-inspired approach prioritizes perfect technique from day one, building a solid base that allows for more advanced and creative play later on. Every drill is designed to refine motor skills and create muscle memory for flawless execution."
    },
    {
        icon: BrainCircuit,
        title: "Tactical Intelligence & Decision-Making",
        description: "A great athlete doesn't just play; they think. We dedicate significant time to developing 'game intelligence.' Players learn to read the game, anticipate opponent actions, and make smart, split-second decisions under pressure. We train the mind as much as the body."
    },
    {
        icon: HeartPulse,
        title: "Long-Term Player Development",
        description: "We don't look for quick, temporary wins. Our methodology is built around the long-term athletic and personal growth of each player. We focus on age-appropriate training, injury prevention, and fostering a lifelong love for the sport, ensuring sustainable success and well-being."
    }
]

const testimonials = [
  {
    name: 'Li Wei',
    role: 'Parent of a U12 Player',
    avatar: 'LW',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageUrl,
    testimonial: "The training methodology has completely transformed my son's game. The coaches don't just teach, they inspire.",
  },
  {
    name: 'Alex Johnson',
    role: 'Adult Tennis Member',
    avatar: 'AJ',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl,
    testimonial: "I've progressed more in six months here than in two years elsewhere. The personalized attention and community atmosphere are unmatched.",
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
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                <div className="prose prose-lg dark:prose-invert">
                    <h2 className="font-headline text-3xl font-bold">About our {sport.name} program</h2>
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
             <div className="text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">The French Methodology: A Smarter Approach to Sport</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Our training is built on the pillars of the renowned French sports education system, famous for producing technically gifted and intelligent players.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {methodologyPillars.map(pillar => (
                    <div key={pillar.title} className="text-center p-6 border rounded-lg">
                        <div className="flex justify-center mb-4">
                             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <pillar.icon className="h-8 w-8" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                        <p className="text-muted-foreground">{pillar.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">The YES ACADEMY Advantage</h2>
                <p className="mt-4 text-lg text-muted-foreground">This is where potential meets opportunity. Discover why our program is the ultimate choice for aspiring champions.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
            <h2 className="font-headline text-3xl font-bold md:text-4xl">In Action</h2>
            <p className="mt-4 text-lg text-muted-foreground">A glimpse of the intensity and passion on the field.</p>
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
            <h2 className="font-headline text-3xl font-bold md:text-4xl">What our athletes say</h2>
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
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to start?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Join our {sport.name} program and begin your journey to excellence. Spaces are limited.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Enroll in the {sport.name} program</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
