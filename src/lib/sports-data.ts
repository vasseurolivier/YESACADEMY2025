import { Dribbble, Volleyball, type LucideIcon } from 'lucide-react';
import { TennisIcon, GolfIcon, ScubaIcon, ClimbingIcon, FutbolIcon } from '@/components/icons';
import type { SVGProps } from 'react';
import { PlaceHolderImages } from './placeholder-images';

type Sport = {
  name: string;
  slug: string;
  icon: LucideIcon | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
  description: string;
  longDescription: string;
  image: {
    url: string;
    alt: string;
    hint: string;
  }
};

export const sports: Sport[] = [
  {
    name: 'Football',
    slug: 'football',
    icon: FutbolIcon,
    description: 'Team play, strategy, and skill on the pitch.',
    longDescription: 'Our football program, rooted in the celebrated French methodology, is designed to forge intelligent, technically skilled, and versatile players. We go beyond basic drills, focusing on developing a deep "football IQ"—the ability to read the game, make smart decisions under pressure, and execute with precision. Led by UEFA-certified coaches, our training covers every facet of the beautiful game: from mastering the first touch and perfecting passing range to understanding complex tactical systems and position-specific responsibilities. We cultivate an environment where players from grassroots beginners to elite youth talents can thrive, preparing them for competitive leagues and potential professional pathways. Join us to not only play football, but to understand it, master it, and live it.',
    image: {
      url: PlaceHolderImages.find(p => p.id === 'sport-football')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'sport-football')?.description || '',
      hint: PlaceHolderImages.find(p => p.id === 'sport-football')?.imageHint || ''
    }
  },
  {
    name: 'Basketball',
    slug: 'basketball',
    icon: Dribbble,
    description: 'Dribble, shoot, and score on the court.',
    longDescription: "Step onto the court and unleash your potential with YES ACADEMY's elite basketball program. Our coaching philosophy, shaped by former professional players and FIBA-certified experts, is built on a dual focus: mastering the fundamentals and developing superior basketball IQ. Players will undergo rigorous training in ball handling, shooting mechanics, defensive footwork, and offensive spacing. We move beyond simple drills to simulate real-game scenarios, teaching players how to execute pick-and-rolls, run fast breaks, and read complex defensive schemes. Our program is structured to build physically dominant and mentally tough athletes, with dedicated strength and conditioning sessions to improve agility, speed, and verticality. Whether you're a young player learning the basics or a serious athlete with collegiate or professional aspirations, our pathway provides the expert guidance and competitive environment needed to elevate your game to the next level.",
    image: {
      url: PlaceHolderImages.find(p => p.id === 'sport-basketball')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'sport-basketball')?.description || '',
      hint: PlaceHolderImages.find(p => p.id === 'sport-basketball')?.imageHint || ''
    }
  },
  {
    name: 'Volleyball',
    slug: 'volleyball',
    icon: Volleyball,
    description: 'Serve, set, and spike your way to victory.',
    longDescription: "Unleash your power at the net with the YES ACADEMY volleyball program. Guided by FIVB-certified coaches with international experience, our curriculum is designed to build complete players, proficient in both beach and indoor volleyball. We focus on mastering every key skill: from generating power and precision on your serve, to developing the soft hands and strategic mind of a setter, and cultivating the explosive vertical and timing of a dominant hitter. Training sessions incorporate advanced drills to improve agility, reaction time, and defensive positioning (digging, blocking). More than just individual skills, we emphasize the crucial on-court communication and team cohesion that turn a group of players into a winning unit. Whether you're stepping onto the court for the first time or aiming for a competitive team, our program will hone your technique and ignite your passion for the game.",
    image: {
      url: PlaceHolderImages.find(p => p.id === 'sport-volleyball')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'sport-volleyball')?.description || '',
      hint: PlaceHolderImages.find(p => p.id === 'sport-volleyball')?.imageHint || ''
    }
  },
  {
    name: 'Tennis',
    slug: 'tennis',
    icon: TennisIcon,
    description: 'Master your serve and backhand on our courts.',
    longDescription: "Our ATP & WTA experienced coaches provide world-class tennis instruction for all levels. The program focuses on perfecting groundstrokes, mastering the serve, and developing strategic singles and doubles play. With video analysis and personalized coaching, we help you build a powerful, all-court game.",
    image: {
      url: PlaceHolderImages.find(p => p.id === 'sport-tennis')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'sport-tennis')?.description || '',
      hint: PlaceHolderImages.find(p => p.id === 'sport-tennis')?.imageHint || ''
    }
  },
  {
    name: 'Golf',
    slug: 'golf',
    icon: GolfIcon,
    description: 'Perfect your swing on the green.',
    longDescription: "With access to premier golf courses, our PGA-certified professionals help you master every aspect of the game. We focus on swing mechanics, short game precision, and course management strategy. Using cutting-edge technology, we provide the data-driven feedback needed to lower your handicap and play with confidence.",
    image: {
      url: PlaceHolderImages.find(p => p.id === 'sport-golf')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'sport-golf')?.description || '',
      hint: PlaceHolderImages.find(p => p.id === 'sport-golf')?.imageHint || ''
    }
  },
  {
    name: 'Scuba Diving',
    slug: 'scuba-diving',
    icon: ScubaIcon,
    description: 'Explore the vibrant world beneath the waves.',
    longDescription: "Get PADI certified with our expert dive masters. Our courses cover everything from the fundamentals of underwater breathing and buoyancy control to advanced navigation and rescue skills. We offer a safe and thrilling pathway to explore the world's most beautiful underwater ecosystems.",
    image: {
      url: PlaceHolderImages.find(p => p.id === 'sport-scuba')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'sport-scuba')?.description || '',
      hint: PlaceHolderImages.find(p => p.id === 'sport-scuba')?.imageHint || ''
    }
  },
  {
    name: 'Climbing',
    slug: 'climbing',
    icon: ClimbingIcon,
    description: 'Conquer new heights on our climbing walls.',
    longDescription: "Push your limits in our state-of-the-art climbing and bouldering gym. Our program, designed by certified instructors, teaches crucial safety protocols, efficient movement techniques, and problem-solving on the wall. We help climbers of all levels build strength, endurance, and mental focus to conquer any route.",
    image: {
      url: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.description || '',
      hint: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.imageHint || ''
    }
  },
];
