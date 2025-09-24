import { Baby, School, Backpack, GraduationCap, Building2 } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Programs by Age",
  description: "Discover our age-specific programs designed to foster development from early childhood to adult competition.",
};


const ageCategories = [
    {
        icon: Baby,
        title: "Kindergarten (Ages 3-5)",
        description: "A playful introduction to sport. Our program focuses on developing fundamental motor skills, coordination, and a love for physical activity through fun games and positive reinforcement.",
        image: PlaceHolderImages.find(p => p.id === 'age-group-kindergarten')
    },
    {
        icon: School,
        title: "Elementary School (Ages 6-10)",
        description: "Building the foundation. At this stage, we introduce core techniques and basic rules in a structured yet fun environment. Emphasis is placed on teamwork, sportsmanship, and skill development.",
        image: PlaceHolderImages.find(p => p.id === 'age-group-elementary')
    },
    {
        icon: Backpack,
        title: "Middle School (Ages 11-14)",
        description: "Developing the athlete. Training becomes more structured with an introduction to tactical concepts, position-specific skills, and physical conditioning. This is where game intelligence begins to take shape.",
        image: PlaceHolderImages.find(p => p.id === 'age-group-middle-school')
    },
    {
        icon: GraduationCap,
        title: "High School (Ages 15-18)",
        description: "Preparing for the next level. This elite program is for serious athletes aiming to compete at a high level. It involves advanced tactical training, strength and conditioning, and guidance for university recruitment.",
        image: PlaceHolderImages.find(p => p.id === 'age-group-high-school')
    },
    {
        icon: Building2,
        title: "University & Adults",
        description: "Lifelong passion and performance. We offer elite training for collegiate athletes, competitive adult leagues, and recreational programs for those who want to stay active, refine their skills, and be part of a community.",
        image: PlaceHolderImages.find(p => p.id === 'age-group-adults')
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
                    priority
                    />
                )}
                <div className="absolute inset-0 bg-black/50" />
                <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">A Program for Every Age and Stage</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Our curriculum is carefully designed to foster development from early childhood to adult competition, ensuring a clear path for growth.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {ageCategories.map((category) => (
                           <Card key={category.title} className="group overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
                                <div className="relative aspect-[4/3] w-full">
                                    {category.image && (
                                        <Image
                                            src={category.image.imageUrl}
                                            alt={category.image.description}
                                            data-ai-hint={category.image.imageHint}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                               <CardContent className="p-6">
                                     <div className="flex items-center gap-4 mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <category.icon className="h-6 w-6" />
                                        </div>
                                        <h2 className="font-headline text-2xl font-bold text-gray-800">{category.title}</h2>
                                    </div>
                                    <p className="text-muted-foreground">{category.description}</p>
                               </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-primary py-16 text-primary-foreground md:py-24">
                <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">Find the Perfect Program</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg">
                    No matter the age or skill level, we have a place for you. Contact us to find the perfect fit for your family.
                </p>
                <div className="mt-8 flex justify-center">
                    <Button asChild size="lg" variant="secondary" className="text-lg py-6 px-10">
                    <Link href="/contact">Enroll Now</Link>
                    </Button>
                </div>
                </div>
            </section>
        </div>
    )
}
