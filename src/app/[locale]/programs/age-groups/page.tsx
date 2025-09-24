import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Baby, School, Backpack, GraduationCap, Building2 } from "lucide-react"
import type { Metadata } from "next"
import { useTranslations } from "next-intl";

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = (await import(`@/messages/${locale}.json`)).default.AgeGroupsPage;
  return {
    title: t.metadata.title,
    description: t.metadata.description,
  };
}

const ageCategories = [
    {
        icon: Baby,
        title: "kindergarten.title",
        description: "kindergarten.description"
    },
    {
        icon: School,
        title: "elementary.title",
        description: "elementary.description"
    },
    {
        icon: Backpack,
        title: "middle_school.title",
        description: "middle_school.description"
    },
    {
        icon: GraduationCap,
        title: "high_school.title",
        description: "high_school.description"
    },
    {
        icon: Building2,
        title: "university_adults.title",
        description: "university_adults.description"
    }
];

export default function AgeGroupsPage() {
    const t = useTranslations('AgeGroupsPage');
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

            <section className="py-16 md:py-24">
                <div className="container max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {ageCategories.map((category) => (
                            <Card key={category.title}>
                                <CardHeader className="flex-row items-start gap-4">
                                    <category.icon className="h-8 w-8 shrink-0 text-primary" />
                                    <div>
                                        <CardTitle className="text-xl">{t(`categories.${category.title}`)}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{t(`categories.${category.description}`)}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
