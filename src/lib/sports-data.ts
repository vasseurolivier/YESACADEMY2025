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
    longDescription: "France is ranked 3rd in the FIVB as of September 12, 2022. The results of the women's and men's national teams on the European, World or Olympic scene show the extent to which the French training methodology makes it possible to train the best players in the world (NGAPETH Earvin, GREBENNIKOV Jenia or TONIUTTI Benjamin) Gold medal, Olympic Games (2020) Bronze medal, world (2002) Gold medal, Europe (2015) Silver medal, Europe (1948, 1987, 2003, 2009) Bronze medal, Europe (1951, 1985) The benefits of Volleyball told by our coach: “Volleyball is a particularly complete sport: On a physical level, it will develop cardiovascular and cardio-respiratory capacities, improve speed, tone and harmoniously sculpt the body by working both the leg muscles, glutes, arms and abs. At the psychomotor level, it will significantly improve the child's coordination, skills and reflexes. And on a mental level, it will work enormously on concentration and the sense of anticipation.”",
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
    longDescription: "Perfect your game on our premier courts with instruction from ATP & WTA experienced coaches. Our tennis program is a comprehensive experience that builds a powerful, all-court game. We focus on developing technically sound groundstrokes, a reliable and powerful serve, and a strategic net game. Through a combination of live-ball drills, match-play simulations, and personalized video analysis, players learn to construct points, exploit opponent weaknesses, and compete with mental toughness. Our curriculum covers singles and doubles strategy, advanced footwork patterns, and physical conditioning tailored to the demands of modern tennis. From the first forehand to the final match point, we guide players on a path to excellence.",
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
    longDescription: "Lower your handicap and elevate your game at the YES ACADEMY golf program. With access to premier courses and cutting-edge swing analysis technology, our PGA-certified professionals help you master every facet of golf. Our instruction is built around a holistic approach, focusing on perfecting swing mechanics for consistency and power, developing a masterful short game (chipping, pitching, bunker play, and putting), and instilling intelligent course management strategies. We use launch monitors and video feedback to provide data-driven insights, allowing players to understand their swing and make precise adjustments. Whether you're learning the fundamentals or refining your skills for competitive play, our program provides the expert guidance to play with confidence and precision.",
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
    longDescription: "Dive into a new world with our PADI-certified scuba diving program. YES ACADEMY offers a comprehensive range of courses, from the introductory 'Discover Scuba Diving' experience to advanced certifications like 'Advanced Open Water', 'Rescue Diver', and professional-level 'Divemaster' training. Our expert instructors prioritize safety above all, teaching you crucial skills such as buoyancy control, underwater navigation, and emergency procedures in a controlled and supportive environment. We organize expeditions to some of the most breathtaking underwater ecosystems in Asia, where you'll encounter vibrant coral reefs and diverse marine life. Join us to gain the confidence and certification to explore the 70% of our planet that lies beneath the waves.",
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
    longDescription: "Ascend to new heights with the YES ACADEMY climbing program. Our state-of-the-art indoor facility features a wide variety of bouldering problems and roped climbing routes for all skill levels, from absolute beginners to advanced climbers. Led by certified instructors, our curriculum is built on a foundation of safety, technique, and strength. You will learn essential skills such as proper belaying, knot tying, and climbing movement (footwork, body positioning). Our courses cover everything from introductory bouldering to advanced lead climbing and anchor building. We focus on developing not just physical strength and endurance, but also the problem-solving skills and mental focus required to read a route and execute it successfully. Join our vibrant climbing community and push your physical and mental limits.",
    image: {
      url: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.description || '',
      hint: PlaceHolderImages.find(p => p.id === 'sport-climbing')?.imageHint || ''
    }
  },
];
