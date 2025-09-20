import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { sports } from '@/lib/sports-data';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Sports',
  description: 'Explore the wide range of sports offered at YES ACADEMY, from football and basketball to climbing and scuba diving.',
};

export default function SportsPage() {
  return (
    <div>
       <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Sports Disciplines</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Find your passion. Master your craft. YES ACADEMY offers a comprehensive range of sports programs for every interest and skill level.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sports.map(sport => (
              <Link href={`/sports/${sport.slug}`} key={sport.name} className="group">
                <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={sport.image.url}
                      alt={sport.image.alt}
                      data-ai-hint={sport.image.hint}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div>
                      <CardTitle>{sport.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{sport.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
