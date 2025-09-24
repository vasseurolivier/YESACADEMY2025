import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Baby, School, Backpack, GraduationCap, Building2 } from "lucide-react"
import type { Metadata } from "next"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        description: "kindergarten.description",
        image: PlaceHolderImages.find(p => p.id === 'age-group-kindergarten')
    },
    {
        icon: School,
        title: "elementary.title",
        description: "elementary.description",
        image: PlaceHolderImages.find(p => p.id === 'age-group-elementary')
    },
    {
        icon: Backpack,
        title: "middle_school.title",
        description: "middle_school.description",
        image: PlaceHolderImages.find(p => p.id === 'age-group-middle-school')
    },
    {
        icon: GraduationCap,
        title: "high_school.title",
        description: "high_school.description",
        image: PlaceHolderImages.find(p => p.id === 'age-group-high-school')
    },
    {
        icon: Building2,
        title: "university_adults.title",
        description: "university_adults.description",
        image: PlaceHolderImages.find(p => p.id === 'age-group-adults')
    }
];

export default function AgeGroupsPage() {
    const t = useTranslations('AgeGroupsPage');
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
                <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">{t('hero_title')}</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        {t('hero_subtitle')}
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-8">
                        {ageCategories.map((category, index) => (
                            <div key={category.title} className="grid items-center gap-8 overflow-hidden rounded-lg border shadow-sm md:grid-cols-2 lg:gap-12">
                                <div className={`relative aspect-video h-full w-full ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                    {category.image && (
                                        <Image
                                            src={category.image.imageUrl}
                                            alt={category.image.description}
                                            data-ai-hint={category.image.imageHint}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col justify-center p-6 md:p-0">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <category.icon className="h-6 w-6" />
                                        </div>
                                        <h2 className="font-headline text-2xl font-bold">{t(`categories.${category.title}`)}</h2>
                                    </div>
                                    <p className="mt-4 text-muted-foreground">{t(`categories.${category.description}`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-primary py-16 text-primary-foreground md:py-24">
                <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">{t('cta.title')}</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg">
                    {t('cta.subtitle')}
                </p>
                <div className="mt-8 flex justify-center">
                    <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">{t('cta.button')}</Link>
                    </Button>
                </div>
                </div>
            </section>
        </div>
    )
}
