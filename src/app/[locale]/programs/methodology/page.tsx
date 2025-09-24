import { BrainCircuit, HeartPulse, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = (await import(`@/messages/${locale}.json`)).default.MethodologyPage;
  return {
    title: t.metadata.title,
    description: t.metadata.description,
  };
}

const methodologyPillars = [
    {
        icon: ShieldCheck,
        title: "technical_foundation.title",
        description: "technical_foundation.description"
    },
    {
        icon: BrainCircuit,
        title: "tactical_intelligence.title",
        description: "tactical_intelligence.description"
    },
    {
        icon: HeartPulse,
        title: "long_term_development.title",
        description: "long_term_development.description"
    }
];

export default function MethodologyPage() {
    const t = useTranslations('MethodologyPage');

    return (
        <div>
            <section className="bg-primary py-16 text-primary-foreground">
                <div className="container text-center">
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">{t('hero_title')}</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        {t('hero_subtitle')}
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
                                <h3 className="text-xl font-semibold mb-2">{t(`pillars.${pillar.title}`)}</h3>
                                <p className="text-muted-foreground">{t(`pillars.${pillar.description}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
