import { Medal, Users, Star, Trophy } from "lucide-react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
    const t = (await import(`@/messages/${locale}.json`)).default.WhyUsPage;
    return {
      title: t.metadata.title,
      description: t.metadata.description,
    };
  }

const keyBenefits = [
    { icon: Medal, title: 'world_class_coaching.title', description: "world_class_coaching.description" },
    { icon: Users, title: 'holistic_development.title', description: 'holistic_development.description' },
    { icon: Star, title: 'top_facilities.title', description: 'top_facilities.description' },
    { icon: Trophy, title: 'pathway_to_competition.title', description: 'pathway_to_competition.description' },
];

export default function WhyUsPage() {
    const t = useTranslations('WhyUsPage');
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

            <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
                <div className="container max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {keyBenefits.map(benefit => (
                            <div key={benefit.title} className="text-center">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <benefit.icon className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold">{t(`benefits.${benefit.title}`)}</h3>
                                <p className="mt-2 text-muted-foreground">{t(`benefits.${benefit.description}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
