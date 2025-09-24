import { BrainCircuit, HeartPulse, ShieldCheck, Scale, Users, TrendingUp, CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Our Methodology",
    description: "Learn about our French-inspired methodology that focuses on technical foundation, tactical intelligence, and long-term player development.",
};

const methodologyPillars = [
    {
        icon: ShieldCheck,
        title: "Technical Foundation First",
        points: [
            "Mastery of fundamental movements and ball control.",
            "Repetition of perfect technique to build muscle memory.",
            "Emphasis on two-footed play and versatility.",
        ]
    },
    {
        icon: BrainCircuit,
        title: "Tactical Intelligence & Decision-Making",
        points: [
            "Developing 'Game IQ' through real-match scenarios.",
            "Training players to read the game and anticipate plays.",
            "Fostering creativity and smart decision-making under pressure.",
        ]
    },
    {
        icon: HeartPulse,
        title: "Long-Term Player Development (LTPD)",
        points: [
            "Age-appropriate training loads and objectives.",
            "Focus on health, injury prevention, and sustainable growth.",
            "Building resilient, confident, and well-rounded individuals.",
        ]
    }
];

const ageAdaptations = [
    {
        age: "3-5 years",
        title: "Discovery & Fun",
        description: "Focus on motor skills, coordination, and loving the game through playful activities.",
        icon: TrendingUp
    },
    {
        age: "6-10 years",
        title: "Learning Fundamentals",
        description: "Introduction to core techniques and basic rules in a structured, encouraging environment.",
        icon: TrendingUp
    },
    {
        age: "11-14 years",
        title: "Developing Game Sense",
        description: "Introduction of tactical concepts and position-specific skills.",
        icon: TrendingUp
    },
    {
        age: "15+ years",
        title: "Preparing for Competition",
        description: "Advanced tactical training, strength & conditioning, and preparation for high-level play.",
        icon: TrendingUp
    }
]


export default function MethodologyPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'methodology-hero');
    const philosophyImage = PlaceHolderImages.find(p => p.id === 'methodology-philosophy');

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
                <div className="absolute inset-0 bg-black/60" />
                <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">The French Methodology</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Our training is built on the pillars of the renowned French sports education system, famous for producing technically gifted and intelligent players.
                    </p>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="font-headline text-3xl font-bold">Our Philosophy: The Player at the Center</h2>
                            <p className="mt-4 text-muted-foreground">
                                Inspired by the French "Formation", our philosophy places the individual player's development at the heart of everything we do. We don't just train athletes; we educate them. Our goal is to create autonomous, intelligent, and creative players who understand the "why" behind every action on the field.
                            </p>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Scale className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Balance</h3>
                                        <p className="text-sm text-muted-foreground">A balanced approach between individual skill and collective success.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Holistic Growth</h3>
                                        <p className="text-sm text-muted-foreground">Developing the person as much as the player, focusing on character, discipline, and resilience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            {philosophyImage && (
                                <Image
                                    src={philosophyImage.imageUrl}
                                    alt={philosophyImage.description}
                                    data-ai-hint={philosophyImage.imageHint}
                                    width={500}
                                    height={500}
                                    className="rounded-lg shadow-xl"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container max-w-6xl mx-auto">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">The Three Pillars of Our Methodology</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Our curriculum is built upon three core pillars that work in synergy to create complete, modern athletes.</p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {methodologyPillars.map(pillar => (
                            <div key={pillar.title} className="rounded-lg border bg-card p-6 shadow-sm">
                                 <div className="flex justify-center mb-4">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <pillar.icon className="h-8 w-8" />
                                    </div>
                                </div>
                                <h3 className="text-center text-xl font-semibold mb-4">{pillar.title}</h3>
                                <ul className="space-y-3">
                                    {pillar.points.map((point, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" />
                                            <span className="text-muted-foreground">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">A Method for Every Age</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our methodology is not one-size-fits-all. It dynamically adapts to the cognitive and physical development of each age group, ensuring optimal learning and long-term passion for the sport.
                        </p>
                    </div>
                    <div className="relative mt-12">
                        <div className="absolute left-1/2 top-0 hidden h-full w-0.5 bg-border md:block" />
                        {ageAdaptations.map((item, index) => (
                             <div key={item.age} className={`relative flex items-center md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'}`}>
                                <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className={`w-full rounded-lg border p-6 my-4 ${index % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}`}>
                                    <p className="text-sm font-semibold text-primary">{item.age}</p>
                                    <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="bg-primary py-16 text-primary-foreground md:py-24">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Experience the Difference</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Ready to see how our methodology can transform your game? Join a program and start your journey to excellence.
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

    