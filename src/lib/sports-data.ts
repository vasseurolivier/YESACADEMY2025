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
    longDescription: "",
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
    longDescription: "",
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
    longDescription: "",
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
    longDescription: "",
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
    longDescription: "",
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
    longDescription: "A global reference in rock climbing, France was able to count on numerous pioneers in the 20th century to promote the discipline such as Pierre Allain (1904-2000), Georges Livanos (1923-2004), Patrick Edlinger (1960-2012) and Catherine Destivelle (1960). As the sports’ world leader, it has the most structured network in the world with 250 climbing gyms for 2 million practitioners. Due to its safety relatively to outdoor climbing, indoor climbing is today a very popular sport in France which affects young and old alike. The benefits of rock climbing told by our coach:         “The practice of climbing has many virtues, both physical and psychological. First of all, it gently develops the muscles of children's arms, thighs, shoulders and back. This activity is essential for allowing them to develop their balance, flexibility and agility. Above all, this sport allows children to develop their autonomy but also their confidence in themselves and in their abilities!”",
    image: {
      url: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.description || '',
      hint: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.imageHint || ''
    }
  },
];
