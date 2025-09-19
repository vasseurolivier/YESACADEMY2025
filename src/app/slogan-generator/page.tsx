import { SloganGeneratorForm } from "@/components/slogan-generator-form";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Slogan Generator',
    description: 'Use our AI tool to generate inspirational and dynamic slogans for your team or brand, inspired by the spirit of YES ACADEMY.',
};


export default function SloganGeneratorPage() {
    
    return (
        <div>
            <section className="bg-primary py-16 text-primary-foreground">
                <div className="container text-center">
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">AI Slogan Generator</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Powered by YES ACADEMY's creative spirit. Generate a modern, dynamic, and inspiring slogan based on your keywords.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container max-w-2xl">
                    <SloganGeneratorForm formType='slogan' />
                </div>
            </section>
        </div>
    );
}