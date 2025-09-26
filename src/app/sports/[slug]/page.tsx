import { notFound } from 'next/navigation';
import { sports } from '@/lib/sports-data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { Check, Medal } from 'lucide-react';
import { Blockquote } from 'recharts';

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

export default function SportDetailPage({ params }: Props) {
  const sport = sports.find(s => s.slug === params.slug);

  if (!sport) {
    notFound();
  }

  const isBasketball = sport.slug === 'basketball';
  const isVolleyball = sport.slug === 'volleyball';

  return (
    <div>
      <section className="relative h-72 w-full">
        <Image
          src={sport.image.url}
          alt={sport.image.alt}
          data-ai-hint={sport.image.hint}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white container">
          <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight md:text-6xl">
            {sport.name}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                <div className="prose prose-lg dark:prose-invert">
                    <h2 className="font-headline text-3xl font-bold">About our {sport.name} program</h2>
                    
                    {isBasketball ? (
                      <>
                        <p className="lead">
                          The YES Basketball program focuses on our students' development as both players and individuals. Participants have access to three core types of training designed for holistic growth.
                        </p>
                        
                        <h3 className="font-headline text-xl font-semibold">SKILLS DEVELOPMENT TRAINING</h3>
                        <p>Enhances a student’s ability to perform and grow individually with more confidence on the court.</p>

                        <h3 className="font-headline text-xl font-semibold">TEAM TRAINING</h3>
                        <p>Fosters chemistry and collective performance, allowing the team to excel together on both offense and defense.</p>
                        
                        <h3 className="font-headline text-xl font-semibold">STRENGTH TRAINING</h3>
                        <p>Boosts athletic abilities, enabling students to perform at a high intensity for longer periods with sustained focus.</p>

                        <h3 className="font-headline text-xl font-semibold">Core Principles</h3>
                        <p>The YES Basketball philosophy is built on principles that transcend the court. We aim to instill:</p>
                        <ul className="list-none p-0">
                          <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Leadership</li>
                          <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Resilience</li>
                          <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Discipline</li>
                          <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Courage</li>
                        </ul>
                        <p>These are crucial values that each student will carry with them into the future.</p>
                      </>
                    ) : isVolleyball ? (
                      <>
                        <p className="lead">
                          Our volleyball program is built on the world-renowned French training methodology, which has consistently produced elite international players like Earvin N'Gapeth, Jenia Grebennikov, and Benjamin Toniutti.
                        </p>
                        
                        <h3 className="font-headline text-xl font-semibold">A Legacy of Excellence</h3>
                        <p>The success of the French national teams is a testament to this methodology:</p>
                         <ul className="list-none p-0">
                          <li className="flex items-center gap-2"><Medal className="text-yellow-500 h-5 w-5" /> Gold Medal, Olympic Games (2020)</li>
                          <li className="flex items-center gap-2"><Medal className="text-yellow-500 h-5 w-5" /> Gold Medal, Europe (2015)</li>
                          <li className="flex items-center gap-2"><Medal className="text-amber-700 h-5 w-5" /> Bronze Medal, World Championship (2002)</li>
                        </ul>
                        
                        <h3 className="font-headline text-xl font-semibold">The Benefits of Volleyball</h3>
                        <p>As our head coach explains, volleyball is a uniquely complete sport:</p>
                        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                            "On a physical level, it develops cardiovascular capacities, improves speed, and tones the body. At the psychomotor level, it significantly improves coordination and reflexes. And on a mental level, it builds concentration and anticipation."
                        </blockquote>

                      </>
                    ) : (
                      <>
                        <p className="lead text-muted-foreground">
                          {sport.description}
                        </p>
                        <p>{sport.longDescription}</p>
                      </>
                    )}
                </div>
                <div>
                    <Image
                        src={sport.image.url}
                        alt={sport.image.alt}
                        width={500}
                        height={333}
                        className="rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container max-w-3xl text-center mx-auto">
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
