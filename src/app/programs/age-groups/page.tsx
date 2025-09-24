import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Baby, School, Backpack, GraduationCap, Building2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Programs by Age",
    description: "Discover our age-specific programs designed to foster development from early childhood to adult competition.",
};

const ageCategories = [
    {
        icon: Baby,
        title: "Kindergarten (Ages 3-5)",
        description: "A playful introduction to the sport. Our program focuses on developing fundamental motor skills, coordination, and a love for physical activity through fun games and positive reinforcement."
    },
    {
        icon: School,
        title: "Elementary School (Ages 6-10)",
        description: "Building the foundation. At this stage, we introduce core techniques and basic rules in a structured yet fun environment. Emphasis is placed on teamwork, sportsmanship, and skill development."
    },
    {
        icon: Backpack,
        title: "Middle School (Ages 11-14)",
        description: "Developing the athlete. Training becomes more structured with an introduction to tactical concepts, position-specific skills, and physical conditioning. This is where game intelligence begins to take shape."
    },
    {
        icon: GraduationCap,
        title: "High School (Ages 15-18)",
        description: "Preparing for the next level. This elite program is for serious athletes aiming to compete at a high level. It involves advanced tactical training, strength and conditioning, and guidance for university recruitment."
    },
    {
        icon: Building2,
        title: "University & Adults",
        description: "Lifelong passion and performance. We offer elite training for collegiate athletes, competitive adult leagues, and recreational programs for those who want to stay active, refine their skills, and be part of a community."
    }
];

export default function AgeGroupsPage() {
    return (
        <div>
            <section className="bg-primary py-16 text-primary-foreground">
                <div className="container text-center">
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">A Program for Every Age and Stage</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Our curriculum is carefully designed to foster development from early childhood to adult competition, ensuring a clear path for growth.
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
                                        <CardTitle className="text-xl">{category.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{category.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
