import { notFound } from 'next/navigation';
import { sports } from '@/lib/sports-data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';

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

  return (
    <div>
      <section className="relative h-72 w-full -mx-4 sm:-mx-6 lg:-mx-8">
        <Image
          src={sport.image.url}
          alt={sport.image.alt}
          data-ai-hint={sport.image.hint}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <sport.icon className="h-16 w-16" />
          <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight md:text-6xl">
            {sport.name}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p className="lead text-xl text-muted-foreground">
              {sport.description}
            </p>
            <p>{sport.longDescription}</p>
            
            <h3 className="font-headline text-2xl font-bold">Program Highlights</h3>
            <ul>
                <li>World-class coaching staff</li>
                <li>State-of-the-art facilities and equipment</li>
                <li>Personalized training plans</li>
                <li>Competitive and recreational pathways</li>
                <li>Focus on skill, strategy, and sportsmanship</li>
            </ul>

          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Inquire About {sport.name}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
