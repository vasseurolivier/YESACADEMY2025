import { Medal, Users, Star, Trophy } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Why Us - The Academy Advantage",
    description: "Discover why YES ACADEMY is the ultimate choice for aspiring champions with our world-class coaching and holistic development approach.",
};

const keyBenefits = [
    { icon: Medal, title: 'World-Class Coaching', description: "Our coaches aren't just experienced; they hold elite certifications (UEFA, ATP, PGA). Receive personalized, professional-grade instruction to unlock your true potential." },
    { icon: Users, title: 'Holistic Athlete Development', description: 'We build champions in life, not just in sports. Our programs instill discipline, resilience, and leadership, focusing on character as much as technical skill.' },
    { icon: Star, title: 'State-of-the-Art Facilities', description: 'Train like a pro in premium, fully-equipped environments. Our facilities are designed for optimal performance, safety, and a world-class training experience.' },
    { icon: Trophy, title: 'Pathway to Competition', description: 'Go beyond training. We provide clear pathways to compete, from local leagues to international tournaments, giving you the platform to showcase your skills.' },
];

export default function WhyUsPage() {
    return (
        <div>
            <section className="bg-primary py-16 text-primary-foreground">
                <div className="container text-center">
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">The YES ACADEMY Advantage</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        This is where potential meets opportunity. Discover why our program is the ultimate choice for aspiring champions.
                    </p>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
                <div className="container max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
        </div>
    );
}
