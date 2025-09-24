import { notFound } from 'next/navigation';
import { sports } from '@/lib/sports-data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BrainCircuit, HeartPulse, Medal, ShieldCheck, Star, Trophy, Users, Baby, School, Backpack, GraduationCap, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const sport = sports.find(s => s.slug === params.slug);

  if (!sport) {
    return {
      title: 'Sport Not Found',
    };
  }

  return {
    title: sport.name,
    description: `Learn all about the ${sport.name} program at YES ACADEMY. ${sport.description}`,
  };
}

export async function generateStaticParams() {
  return sports.map(sport => ({
    slug: sport.slug,
  }));
}

const keyBenefits = [
    { icon: Medal, title: 'World-Class Coaching', description: "Our coaches aren't just experienced; they hold elite certifications (UEFA, ATP, PGA). Receive personalized, professional-grade instruction to unlock your true potential." },
    { icon: Users, title: 'Holistic Athlete Development', description: 'We build champions in life, not just in sports. Our programs instill discipline, resilience, and leadership, focusing on character as much as technical skill.' },
    { icon: Star, title: 'State-of-the-Art Facilities', description: 'Train like a pro in premium, fully-equipped environments. Our facilities are designed for optimal performance, safety, and a world-class training experience.' },
    { icon: Trophy, title: 'Pathway to Competition', description: 'Go beyond training. We provide clear pathways to compete, from local leagues to international tournaments, giving you the platform to showcase your skills.' },
];

const defaultMethodologyPillars = [
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

const sportSpecificMethodologyPillars: {[key: string]: typeof defaultMethodologyPillars} = {
  football: [
      {
          icon: ShieldCheck,
          title: "Technical Mastery of the Ball",
          description: "Our French-inspired approach prioritizes an exceptional first touch and ball control. We build players who are comfortable and creative with the ball at their feet, forming the foundation for advanced passing, dribbling, and shooting. Drills are centered on creating a 'second-nature' relationship with the ball."
      },
      {
          icon: BrainCircuit,
          title: "Football Intelligence (Jeu d'Intelligence)",
          description: "A great footballer reads the game. We develop 'football IQ' by teaching players to understand space, movement, and tactical positioning. They learn to anticipate plays, make intelligent runs, and make split-second decisions that break down defenses. We train players to think two steps ahead."
      },
      {
          icon: HeartPulse,
          title: "Long-Term Footballer Pathway",
          description: "We focus on the holistic and progressive development of a footballer. Our methodology ensures age-appropriate physical and tactical loads to prevent burnout and injury, fostering a deep, enduring passion for the beautiful game. We build careers, not just seasonal players."
      }
  ],
  basketball: [
    {
        icon: ShieldCheck,
        title: "Mastery of Fundamentals",
        description: "Our philosophy starts with flawless fundamentals. We instill perfect form in shooting, precise ball-handling, and crisp passing. Every player builds a versatile technical toolkit, becoming a threat from anywhere on the court and a reliable teammate in any situation."
    },
    {
        icon: BrainCircuit,
        title: "Basketball IQ & Court Vision",
        description: "We develop players who see the game in slow motion. Training focuses on reading defenses, understanding floor spacing, and making high-percentage decisions. Players learn not just how to execute plays, but why, turning them into on-court coaches who elevate their entire team."
    },
    {
        icon: HeartPulse,
        title: "Long-Term Athlete Pathway",
        description: "We build durable, intelligent athletes for the long haul. Our program integrates basketball-specific conditioning to enhance agility and prevent injury, while managing workload to avoid burnout. We foster resilience and a strategic mindset for a long and successful career."
    }
]
};


const defaultAgeCategories = [
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

const sportSpecificAgeCategories: {[key: string]: typeof defaultAgeCategories} = {
  football: [
    {
        icon: Baby,
        title: "Foot-Discovery (Ages 3-5)",
        description: "A playful first touch with the ball. Our program focuses on motor skills, coordination, and fun through games. We awaken a love for football in a safe and positive environment."
    },
    {
        icon: School,
        title: "Youth Formation (Ages 6-10)",
        description: "Building the fundamentals. We introduce core techniques like dribbling, passing, and shooting in a structured, fun way. Emphasis is on teamwork, fair play, and technical skill development."
    },
    {
        icon: Backpack,
        title: "Pre-Academy (Ages 11-14)",
        description: "Developing the footballer. Training intensifies with tactical concepts (1v1, 2v2), position-specific drills, and conditioning. This is where 'football intelligence' starts to build."
    },
    {
        icon: GraduationCap,
        title: "Elite Academy (Ages 15-18)",
        description: "Pathway to pro. For serious players aiming for a high level. Involves advanced tactical systems, intense strength and conditioning, video analysis, and guidance for university or pro pathways."
    },
    {
        icon: Building2,
        title: "Adult & Corporate Leagues",
        description: "Passion for life. We offer elite training for university athletes, competitive adult leagues, and recreational programs for those who want to stay active, refine skills, and enjoy the beautiful game."
    }
  ],
  basketball: [
      {
          icon: Baby,
          title: "Mini-Dribblers (Ages 3-5)",
          description: "An energetic and fun introduction to the court. Our focus is on developing coordination, balance, and a love for basketball through playful games centered around dribbling and movement."
      },
      {
          icon: School,
          title: "Foundations (Ages 6-10)",
          description: "Building the complete player from the ground up. We introduce fundamental skills like proper shooting form, basic dribbling moves, and defensive stances in an encouraging and structured setting."
      },
      {
          icon: Backpack,
          title: "Pre-Competition (Ages 11-14)",
          description: "Developing game-time skills. Training shifts to incorporate tactical understanding, including offensive plays, team defense concepts, and in-game decision-making, preparing players for competitive scenarios."
      },
      {
          icon: GraduationCap,
          title: "Elite Performance (Ages 15-18)",
          description: "Honing the competitive athlete. This program is for dedicated players targeting high-level competition. It includes advanced strategies, rigorous physical conditioning, and performance analysis."
      },
      {
          icon: Building2,
          title: "Adult League & Performance",
          description: "For the lifelong baller. We provide competitive adult leagues, high-level training for collegiate players, and skill clinics for adults who want to stay sharp, compete, and enjoy the game."
      }
  ]
};


const allTestimonials: {[key: string]: {name: string, role: string, avatar: string, image?: string, testimonial: string}[]} = {
  football: [
    {
      name: 'Wang Hao',
      role: 'Parent of a U14 Football Player',
      avatar: 'WH',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageUrl,
      testimonial: "The tactical training is incredible. My son understands the game on a much deeper level now. The coaches are truly world-class.",
    },
    {
      name: 'Chen Wei',
      role: 'U16 Goalkeeper',
      avatar: 'CW',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl,
      testimonial: "The specific goalkeeper training has been a game-changer. I feel more confident and my reaction times have improved dramatically.",
    },
  ],
  basketball: [
    {
      name: 'Li Na',
      role: 'Parent of a U15 Basketball Player',
      avatar: 'LN',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-3')?.imageUrl,
      testimonial: "The focus on fundamental skills is outstanding. My daughter's dribbling and shooting have improved so much, and she loves going to practice.",
    },
    {
      name: 'Mike Anderson',
      role: 'Adult League Player',
      avatar: 'MA',
      testimonial: "Great way to stay fit and competitive. The facilities are top-notch and the league is well-organized. It's the highlight of my week.",
    },
  ],
  volleyball: [
    {
      name: 'Zoe Tran',
      role: 'U18 Volleyball Captain',
      avatar: 'ZT',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl,
      testimonial: "Our team cohesion has improved massively. The coaches teach us how to communicate effectively on the court, and it shows in our results.",
    },
    {
      name: 'David Garcia',
      role: 'Parent of a Volleyball Player',
      avatar: 'DG',
      testimonial: "I'm impressed by the positive and supportive environment. The coaches build confidence in the players, both on and off the court.",
    },
  ],
  tennis: [
    {
      name: 'Sophie Dubois',
      role: 'Competitive Tennis Player (U16)',
      avatar: 'SD',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageUrl,
      testimonial: "The one-on-one coaching has refined my backhand and serve immensely. The video analysis sessions are incredibly helpful to see what I need to work on.",
    },
    {
      name: 'Alex Johnson',
      role: 'Adult Tennis Member',
      avatar: 'AJ',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl,
      testimonial: "I've progressed more in six months here than in two years elsewhere. The personalized attention and community atmosphere are unmatched.",
    },
  ],
  golf: [
    {
      name: 'Kenji Tanaka',
      role: 'Golf Program Member',
      avatar: 'KT',
      testimonial: "My handicap has dropped by 5 strokes since I joined. The PGA pros here know exactly how to fine-tune your swing for consistency and power.",
    },
    {
      name: 'Emily Carter',
      role: 'Beginner Golfer',
      avatar: 'EC',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-3')?.imageUrl,
      testimonial: "As a complete beginner, I was intimidated. But the coaches made it so accessible and fun. Now I have a passion for golf I never expected!",
    },
  ],
  'scuba-diving': [
    {
      name: 'Isabelle Rossi',
      role: 'PADI Advanced Open Water Diver',
      avatar: 'IR',
      testimonial: "The instructors are incredibly patient and thorough. I felt completely safe and prepared. Seeing the coral reefs was an unforgettable experience.",
    },
    {
      name: 'Tom Nguyen',
      role: 'New Diver',
      avatar: 'TN',
      testimonial: "I was nervous about breathing underwater, but the training was top-notch. It opened up a whole new world to me. Highly recommend!",
    },
  ],
  climbing: [
    {
      name: 'Chloe Kim',
      role: 'Youth Climbing Team',
      avatar: 'CK',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl,
      testimonial: "I love the problem-solving aspect of bouldering. The route setters are so creative, and there's always a new challenge to conquer.",
    },
    {
      name: 'Liam Chen',
      role: 'Adult Climber',
      avatar: 'LC',
      testimonial: "The community here is amazing. Everyone is so encouraging. It's a great workout for both body and mind.",
    },
  ],
};

export default function SportDetailPage({ params }: Props) {
  const sport = sports.find(s => s.slug === params.slug);

  if (!sport) {
    notFound();
  }

  const testimonials = allTestimonials[sport.slug] || [];
  const ageCategories = sportSpecificAgeCategories[sport.slug] || defaultAgeCategories;
  const methodologyPillars = sportSpecificMethodologyPillars[sport.slug] || defaultMethodologyPillars;



  return (
    <div>
      <section className="relative h-72 w-full">
        <Image
          src={sport.image.url}
          alt={sport.image.alt}
          data-ai-hint={sport.image.hint}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white container">
          <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight md:text-6xl">
            {sport.name}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                <div className="prose prose-lg dark:prose-invert">
                    <h2 className="font-headline text-3xl font-bold">About our {sport.name} program</h2>
                    <p className="lead text-muted-foreground">
                    {sport.description}
                    </p>
                    <p>{sport.longDescription}</p>
                </div>
                <div>
                    <Image
                        src={sport.image.url}
                        alt={sport.image.alt}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-5xl mx-auto">
             <div className="text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">The French Methodology: A Smarter Approach to Sport</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Our training is built on the pillars of the renowned French sports education system, famous for producing technically gifted and intelligent players.</p>
            </div>
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
      
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">A Program for Every Age and Stage</h2>
            <p className="mt-4 text-lg text-muted-foreground">Our curriculum is carefully designed to foster development from early childhood to adult competition, ensuring a clear path for growth.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      
      <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
        <div className="container max-w-5xl mx-auto">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">The YES ACADEMY Advantage</h2>
                <p className="mt-4 text-lg text-muted-foreground">This is where potential meets opportunity. Discover why our program is the ultimate choice for aspiring champions.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-5xl mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">What our {sport.name} athletes say</h2>
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
        <div className="container max-w-3xl text-center mx-auto">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to start?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Join our {sport.name} program and begin your journey to excellence. Spaces are limited.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Enroll in the {sport.name} program</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
