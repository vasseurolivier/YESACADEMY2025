import { Medal, Users, Star, Trophy, CheckCircle, Heart, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Why Us - The Academy Advantage",
    description: "Discover why YES ACADEMY is the ultimate choice for aspiring champions with our world-class coaching, holistic development approach, state-of-the-art facilities, and clear pathways to competition.",
};

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Adult Tennis Member',
    avatar: 'AJ',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl,
    testimonial: "The level of coaching is unlike anything I've experienced. My coach identified weaknesses in my game I didn't even know I had. The improvement has been phenomenal.",
  },
  {
    name: 'Li Wei',
    role: 'Parent of a U12 Player',
    avatar: 'LW',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageUrl,
    testimonial: "YES ACADEMY has taught my son discipline and resilience. He's not just a better player; he's a more confident and responsible young man. I couldn't be prouder.",
  },
];


export default function WhyUsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'advantage-hero');
    const coachingImage = PlaceHolderImages.find(p => p.id === 'advantage-coaching');
    const developmentImage = PlaceHolderImages.find(p => p.id === 'advantage-development');
    const facilitiesImage = PlaceHolderImages.find(p => p.id === 'advantage-facilities');
    const competitionImage = PlaceHolderImages.find(p => p.id === 'advantage-competition');

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
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">The YES ACADEMY Advantage</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        We don't just build athletes; we build champions. Discover the four pillars that elevate our academy beyond the competition.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container max-w-5xl mx-auto text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Commitment to Excellence</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Choosing a sports academy is a commitment to a dream. At YES ACADEMY, we honor that commitment by providing an environment where potential is not just nurtured, but maximized. Our advantage lies in a holistic ecosystem designed for success, where every detail is tailored to help our athletes achieve their personal best.
                    </p>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="container grid gap-16 md:gap-24">
                    
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div className="md:order-2">
                            <h3 className="font-headline text-3xl font-bold flex items-center gap-4"><Medal className="h-10 w-10 text-primary" />World-Class Coaching</h3>
                            <p className="mt-4 text-muted-foreground">
                                Our coaches are the cornerstone of our academy. They are not just instructors; they are mentors, strategists, and leaders who have competed and succeeded at the highest levels of their sports. They bring a wealth of knowledge and a passion for teaching that is second to none.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>Elite Certifications:</strong> All lead coaches hold top-tier professional diplomas (e.g., UEFA, ATP, PGA), ensuring instruction is based on the latest, most effective methodologies.</span></li>
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>Personalized Development Plans:</strong> We use data-driven analysis to create tailored training programs that target individual weaknesses and amplify strengths.</span></li>
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>Mentorship:</strong> Our coaches invest in each player's journey, providing the guidance and support needed to navigate the challenges of competitive sports.</span></li>
                            </ul>
                        </div>
                        {coachingImage && (
                            <div className="md:order-1">
                                <Image src={coachingImage.imageUrl} alt={coachingImage.description} data-ai-hint={coachingImage.imageHint} width={600} height={400} className="rounded-lg shadow-xl" />
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div>
                             <h3 className="font-headline text-3xl font-bold flex items-center gap-4"><Users className="h-10 w-10 text-primary" />Holistic Athlete Development</h3>
                            <p className="mt-4 text-muted-foreground">
                                We believe that a true champion is defined by their character as much as their athletic ability. Our program is designed to forge resilient, disciplined, and respectful individuals who are leaders both on and off the field.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>Character Building:</strong> We explicitly teach values like sportsmanship, integrity, and perseverance, integrating them into every training session.</span></li>
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>Mental Toughness Training:</strong> Athletes learn to handle pressure, overcome adversity, and maintain focus through dedicated mental conditioning workshops.</span></li>
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>Leadership Opportunities:</strong> We empower athletes to take on leadership roles within their teams, fostering communication skills and accountability.</span></li>
                            </ul>
                        </div>
                        {developmentImage && (
                             <div>
                                <Image src={developmentImage.imageUrl} alt={developmentImage.description} data-ai-hint={developmentImage.imageHint} width={600} height={400} className="rounded-lg shadow-xl" />
                            </div>
                        )}
                    </div>
                    
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div className="md:order-2">
                            <h3 className="font-headline text-3xl font-bold flex items-center gap-4"><Star className="h-10 w-10 text-primary" />State-of-the-Art Facilities</h3>
                            <p className="mt-4 text-muted-foreground">
                                To be the best, you must train with the best. We provide our athletes with access to premium, professional-grade facilities that are meticulously maintained for optimal performance and safety.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>Professional-Grade Surfaces:</strong> Train on pristine pitches, perfectly maintained courts, and world-class greens that mirror competitive environments.</span></li>
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>Advanced Training Technology:</strong> Utilize cutting-edge equipment, including video analysis and performance tracking tools, to gain a competitive edge.</span></li>
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>Supporting Amenities:</strong> Our facilities include dedicated strength and conditioning zones, recovery areas, and classrooms for tactical sessions.</span></li>
                            </ul>
                        </div>
                        {facilitiesImage && (
                            <div className="md:order-1">
                                <Image src={facilitiesImage.imageUrl} alt={facilitiesImage.description} data-ai-hint={facilitiesImage.imageHint} width={600} height={400} className="rounded-lg shadow-xl" />
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div>
                             <h3 className="font-headline text-3xl font-bold flex items-center gap-4"><Trophy className="h-10 w-10 text-primary" />Pathway to Competition</h3>
                            <p className="mt-4 text-muted-foreground">
                                Training is only part of the journey. We provide our athletes with invaluable opportunities to test their skills, gain experience, and showcase their talent on a competitive stage.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>Academy Leagues & Tournaments:</strong> Regular, structured competition within our academy network ensures consistent, high-level match play.</span></li>
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>International Exposure:</strong> We facilitate participation in prestigious national and international tournaments, offering exposure to different styles of play and a chance to shine.</span></li>
                                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong>University & Pro Scouting:</strong> Our strong network and reputation provide a direct line to scouts and recruiters from universities and professional organizations.</span></li>
                            </ul>
                        </div>
                         {competitionImage && (
                            <div>
                                <Image src={competitionImage.imageUrl} alt={competitionImage.description} data-ai-hint={competitionImage.imageHint} width={600} height={400} className="rounded-lg shadow-xl" />
                            </div>
                        )}
                    </div>

                </div>
            </section>

            <section id="testimonials" className="py-16 md:py-24">
                <div className="container mx-auto">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">
                    Proof of Our Advantage
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                    Don't just take our word for it. Hear from the members of our community.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {testimonials.map(testimonial => (
                    <Card key={testimonial.name} className="flex flex-col">
                        <CardContent className="pt-6">
                        <p className="italic text-muted-foreground">"{testimonial.testimonial}"</p>
                        </CardContent>
                        <CardHeader className="mt-auto flex-row items-center gap-4">
                        <Avatar>
                            {testimonial.image && <AvatarImage src={testimonial.image} alt={testimonial.name} />}
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-base">{testimonial.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                        </CardHeader>
                    </Card>
                    ))}
                </div>
                </div>
            </section>
            
            <section className="bg-primary py-16 text-primary-foreground md:py-24">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Invest in Your Potential</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        The YES ACADEMY advantage is an investment in your future. Join us and gain access to the coaching, resources, and community you need to achieve your dreams.
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

    