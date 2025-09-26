import { BrainCircuit, HeartPulse, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Methodology",
    description: "Learn about our French-inspired methodology that focuses on technical foundation, tactical intelligence, and long-term player development.",
};

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
];

export default function MethodologyPage() {
    return (
        <div>
            <section className="bg-primary py-16 text-primary-foreground">
                <div className="container text-center">
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">The French Methodology</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Our training is built on the pillars of the renowned French sports education system, famous for producing technically gifted and intelligent players.
                    </p>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="container max-w-5xl mx-auto">
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
        </div>
    );
}
