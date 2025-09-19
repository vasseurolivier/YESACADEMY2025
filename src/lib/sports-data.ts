import { Futbol, Basketball, Volleyball, type LucideIcon } from 'lucide-react';
import { TennisIcon, GolfIcon, ScubaIcon, ClimbingIcon } from '@/components/icons';
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
    icon: Futbol,
    description: 'Team play, strategy, and skill on the pitch.',
    longDescription: 'Our football program focuses on developing technical skills, tactical awareness, and teamwork. Led by UEFA-certified coaches, we offer training for all ages, from grassroots beginners to elite youth players preparing for professional careers. Join us to live the beautiful game.',
    image: {
      url: PlaceHolderImages.find(p => p.id === 'sport-football')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'sport-football')?.description || '',
      hint: PlaceHolderImages.find(p => p.id === 'sport-football')?.imageHint || ''
    }
  },
  {
    name: 'Basketball',
    slug: 'basketball',
    icon: Basketball,
    description: 'Dribble, shoot, and score on the court.',
    longDescription: 'Experience the high-energy world of basketball at YES ACADEMY. Our programs, designed by former professional players, emphasize fundamental skills, physical conditioning, and game intelligence. Whether you\'re learning to dribble or aiming for the big leagues, our courts are where you belong.',
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
    longDescription: 'From beach to hardcourt, our volleyball training covers all aspects of the game. We focus on technique, agility, and communication. Join our squads for competitive league play or learn the basics in a fun and supportive environment.',
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
    longDescription: 'Our ATP & WTA experienced coaches provide world-class tennis instruction for all levels. We offer private lessons, group clinics, and competitive junior programs on our pristine courts. Perfect your technique and develop a lifelong passion for the game.',
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
    longDescription: 'With access to premier golf courses and cutting-edge swing analysis technology, our golf academy is the perfect place to hone your game. Our PGA-certified professionals offer personalized instruction to lower your handicap and improve your course management.',
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
    longDescription: 'Get PADI certified with our expert dive masters. We offer courses from Open Water to Divemaster, as well as guided fun dives in some of the most beautiful locations in Vietnam and China. Discover the thrill of breathing underwater and the beauty of marine life.',
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
    longDescription: 'Push your limits in our state-of-the-art climbing and bouldering gym. We provide courses on safety, technique, and lead climbing for all abilities. Join our community and reach new peaks, both on the wall and in yourself.',
    image: {
      url: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.description || '',
      hint: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.imageHint || ''
    }
  },
];
