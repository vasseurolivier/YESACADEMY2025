import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { sports } from '@/lib/sports-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Li Wei',
    role: 'Parent of a U12 Player',
    avatar: 'LW',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageUrl,
    testimonial:
      "The coaching at YES ACADEMY is world-class. My son's confidence and skills have skyrocketed since he joined the football program. The facilities are top-notch and the community is so welcoming.",
  },
  {
    name: 'Alex Johnson',
    role: 'Adult Tennis Member',
    avatar: 'AJ',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl,
    testimonial:
      "As an expat, finding a premium sports community was key. YES ACADEMY exceeded my expectations. The tennis coaches are fantastic and I've met so many great people here.",
  },
  {
    name: 'Trần Minh',
    role: 'Teenage Basketball Player',
    avatar: 'TM',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-3')?.imageUrl,
    testimonial:
      'The summer camp was the best experience of my life! I learned so much, improved my game, and made friends from all over the world. I can\'t wait for the next one.',
  },
];

export default function Home() {
  const heroImages = [
    PlaceHolderImages.find(p => p.id === 'hero-football-match'),
    PlaceHolderImages.find(p => p.id === 'hero-basketball-match'),
    PlaceHolderImages.find(p => p.id === 'hero-golfer'),
  ].filter(Boolean);

  return (
    <div className="flex flex-col">
      <section className="relative w-full text-white">
        <Carousel className="h-[60vh] min-h-[400px] w-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroImages.map((image, index) => (
                image && (
              <CarouselItem key={index} className="relative h-full w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                 <div className="absolute inset-0 bg-black/50 z-10" />
              </CarouselItem>
                )
            ))}
          </CarouselContent>
        </Carousel>

        <div className="container absolute inset-0 z-20 flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            YOUR JOURNEY, YOUR SPORT, YOUR VICTORY
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Experience premium multi-sport training at YES ACADEMY. We forge champions in China and Vietnam.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/programs">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      <section id="sports" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Discover Your Passion
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From the court to the field, the wall to the water, we offer a diverse range of sports for all ages and skill levels.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            {sports.map(sport => (
              <Link href={`/sports/${sport.slug}`} key={sport.name} className="group flex flex-col items-center text-center">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <Image 
                      src={sport.image.url}
                      alt={sport.image.alt}
                      data-ai-hint={sport.image.hint}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-4 font-semibold">{sport.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16 md:py-24">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Why YES ACADEMY?</h2>
            <p className="mt-4 text-lg text-muted-foreground">We are more than just an academy. We are a community dedicated to excellence, growth, and passion for sport.</p>
            <ul className="mt-8 space-y-4 text-lg">
              <li className="flex items-start justify-center md:justify-start">
                <CheckCircle className="mr-3 mt-1 h-6 w-6 shrink-0 text-primary" />
                <span><span className="font-semibold">Expert International Coaches:</span> Learn from the best in the industry.</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <CheckCircle className="mr-3 mt-1 h-6 w-6 shrink-0 text-primary" />
                <span><span className="font-semibold">State-of-the-Art Facilities:</span> Train in premium, fully-equipped environments.</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <CheckCircle className="mr-3 mt-1 h-6 w-6 shrink-0 text-primary" />
                <span><span className="font-semibold">Holistic Development:</span> We focus on both athletic skills and personal growth.</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <CheckCircle className="mr-3 mt-1 h-6 w-6 shrink-0 text-primary" />
                <span><span className="font-semibold">Vibrant Community:</span> Join a diverse and inclusive family of sports lovers.</span>
              </li>
            </ul>
          </div>
           <div className="flex justify-center">
            {PlaceHolderImages.find(p => p.id === 'why-us-1') && 
              <Image 
                src={PlaceHolderImages.find(p => p.id === 'why-us-1')?.imageUrl!}
                alt={PlaceHolderImages.find(p => p.id === 'why-us-1')?.description!}
                data-ai-hint={PlaceHolderImages.find(p => p.id === 'why-us-1')?.imageHint!}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            }
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Hear From Our Champions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our members are our greatest pride. See what they have to say about their experience.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to Join the Elite?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Your journey towards sporting excellence starts now. Explore our programs or get in touch with our team today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/programs">View Programs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
