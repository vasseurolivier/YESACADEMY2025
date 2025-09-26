import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
    title: "Programs by Age",
    description: "Discover our tailor-made sports programs for every age group, from kindergarten to adults.",
};

const ageGroups = [
    {
        title: 'Kindergarten (Ages 3-5)',
        description: 'A playful introduction to sports. Our program focuses on developing fundamental motor skills, coordination, and a love for physical activity in a fun, positive, and safe environment. We use games and creative drills to keep our youngest athletes engaged and excited.',
        image: PlaceHolderImages.find(p => p.id === 'age-group-kindergarten'),
        keyPoints: ['Motor skills development', 'Fun and games-based learning', 'Introduction to teamwork']
    },
    {
        title: 'Elementary School (Ages 6-10)',
        description: 'Building the foundations of a future champion. At this stage, we introduce sport-specific techniques and basic tactical concepts. The focus remains on fun and participation while starting to build discipline, respect, and a passion for the game.',
        image: PlaceHolderImages.find(p => p.id === 'age-group-elementary'),
        keyPoints: ['Sport-specific fundamentals', 'Basic tactical understanding', 'Developing discipline']
    },
    {
        title: 'Middle School (Ages 11-14)',
        description: 'Developing the competitive athlete. Training becomes more structured and intensive. We focus on advanced technical skills, tactical awareness, and physical conditioning. Players are encouraged to think strategically and work together as a cohesive unit.',
        image: PlaceHolderImages.find(p => p.id === 'age-group-middle-school'),
        keyPoints: ['Advanced skills training', 'Competitive match play', 'Physical and mental conditioning']
    },
    {
        title: 'High School & Adults (Ages 15+)',
        description: 'Pathway to excellence. This program is for serious athletes looking to compete at a high level. We offer elite coaching, personalized training plans, and exposure to competitive leagues and tournaments. For adults, we offer both competitive and recreational options to stay active and enjoy the sport.',
        image: PlaceHolderImages.find(p => p.id === 'age-group-adults'),
        keyPoints: ['Elite-level coaching', 'Personalized development plans', 'Competitive and recreational tracks']
    }
];

export default function AgeGroupsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-1');

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
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white container">
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
                        A Path for Every Player
                    </h1>
                    <p className="mt-2 max-w-2xl text-lg">From the first kick to the final victory, our programs grow with you.</p>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">
                            Tailored for Every Stage of Development
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We understand that athletes have different needs at different ages. Our curriculum is expertly designed to provide the right challenges and support at every step of the journey, ensuring optimal growth and a lasting love for the sport.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="container mx-auto py-16 md:py-8">
                <div className="space-y-16">
                    {ageGroups.map((group, index) => (
                        <Card key={group.title} className={`overflow-hidden transition-shadow hover:shadow-lg ${index % 2 !== 0 ? 'bg-muted' : 'bg-card'}`}>
                             <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className={`flex items-center justify-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                    {group.image && (
                                    <div className="aspect-video relative w-full h-full min-h-[300px]">
                                        <Image
                                            src={group.image.imageUrl}
                                            alt={group.image.description}
                                            data-ai-hint={group.image.imageHint}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    )}
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <h3 className="font-headline text-2xl font-bold">{group.title}</h3>
                                    <p className="mt-4 text-muted-foreground">{group.description}</p>
                                    <ul className="mt-6 space-y-2">
                                        {group.keyPoints.map(point => (
                                            <li key={point} className="flex items-center gap-2">
                                                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                <span className="text-muted-foreground">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

             <section className="bg-primary py-16 text-primary-foreground md:py-24">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to Find Your Place?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Whatever your age or ambition, your journey starts here. Contact us to find the perfect program for you or your child.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Button asChild size="lg" variant="secondary">
                        <Link href="/contact">Enroll Now</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
