import type { SVGProps } from 'react';
import { Medal } from 'lucide-react';
import Image from 'next/image';


export const Logo = (props: SVGProps<SVGSVGElement>) => (
    <div className="flex items-center gap-2" style={{ width: '150px', height: 'auto' }}>
    <svg 
    viewBox="0 0 512 512" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <defs>
        <path id="text-arc-top" d="M 120,256 A 136,136 0 1,1 392,256" />
        <path id="text-arc-bottom" d="M 140,256 A 116,116 0 0,0 372,256" />
    </defs>

    <circle cx="256" cy="256" r="230" fill="white" />
    <circle cx="256" cy="256" r="230" fill="none" stroke="#dc2626" strokeWidth="12" />
    <circle cx="256" cy="256" r="218" fill="none" stroke="#002d62" strokeWidth="12" />
    <circle cx="256" cy="256" r="206" fill="white" />
    
    <path d="M 140,150 a 180,180 0 0,1 232,0 L 392,362 A 180,180 0 0,1 120,362 Z" fill="#002d62" />

    <g transform="translate(140, 256)">
        <path d="M 0,-106 L 0,106" stroke="white" strokeWidth="12" />
    </g>
    <g transform="translate(372, 256)">
        <path d="M 0,-106 L 0,106" stroke="white" strokeWidth="12" />
    </g>

    <path d="M 140,150 L 120,150" stroke="#002d62" strokeWidth="12" />
    <path d="M 372,150 L 392,150" stroke="#002d62" strokeWidth="12" />
    <path d="M 140,362 L 120,362" stroke="#002d62" strokeWidth="12" />
    <path d="M 372,362 L 392,362" stroke="#002d62" strokeWidth="12" />

    <text fill="#002d62" fontSize="58" fontWeight="bold" letterSpacing="4">
        <textPath href="#text-arc-top" startOffset="50%" textAnchor="middle">YES ACADEMY</textPath>
    </text>

    <text fill="#002d62" fontSize="42" fontWeight="bold" letterSpacing="3">
        <textPath href="#text-arc-bottom" startOffset="50%" textAnchor="middle">MULTI-SPORTS</textPath>
    </text>

    <path d="M 190, 256 a 66,66 0 1,0 132,0 a 66,66 0 1,0 -132,0" fill="none" stroke="#002d62" strokeWidth="10" />

    <g transform="translate(256, 350) scale(1.5)">
        <path d="M 0,-60 L 15,-40 L -15,-40 Z" fill="#002d62"/>
        <path d="M 0,-42 L 0,30" stroke="#002d62" strokeWidth="10" />
        <path d="M -15,-10 L 15,-10" stroke="#002d62" strokeWidth="8" />
        <path d="M -10,10 L 10,10" stroke="#002d62" strokeWidth="6" />
        <path d="M -20,30 L 20,30" stroke="#002d62" strokeWidth="10" />
        
        <g transform="translate(0, -10)">
            <path d="M 0,-40 c 25,20 25,50 0,70" fill="none" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
            <path d="M 0,-40 c -25,20 -25,50 0,70" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" />
            <path d="M 0,-40 c 25,20 25,50 0,70" fill="none" stroke="#002d62" strokeWidth="6" strokeLinecap="round" transform="translate(-1.5,0)" />
        </g>
    </g>

    <g fill="white">
        <path d="M165 248 L 175 256 L 165 264 Z" />
        <path d="M170 250 L 180 256 L 170 262 Z" fill="#002d62" />
    </g>
    <g fill="white">
        <path d="M347 248 L 337 256 L 347 264 Z" />
        <path d="M342 250 L 332 256 L 342 262 Z" fill="#002d62" />
    </g>

    <path d="M 195, 256 l -25,-15 0,30 z" fill="#002d62" transform="translate(5,0)" />
    <path d="M 317, 256 l 25,-15 0,30 z" fill="#002d62" transform="translate(-5,0)" />

    <polygon points="175,256 185,250 185,262" fill="white" />
    <polygon points="337,256 327,250 327,262" fill="white" />

    <g transform="translate(170, 256) scale(0.2)">
        <polygon points="25,0 50,15 -0,15" fill="white"/>
        <polygon points="37.5,3 42.5,12 32.5,12" fill="#002d62"/>
    </g>
    <g transform="translate(320, 256) scale(0.2)">
        <polygon points="25,0 50,15 -0,15" fill="white" transform="rotate(180, 25, 7.5)" />
        <polygon points="37.5,3 42.5,12 32.5,12" fill="#002d62" transform="rotate(180, 37.5, 7.5)" />
    </g>
</svg>
  </div>
);

export const TennisIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 18a6 6 0 0 0 6-6" />
    <path d="M6 12a6 6 0 0 0 6-6" />
  </svg>
);

export const GolfIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18.5 13.4a9.1 9.1 0 0 0-9.9-9.9" />
    <path d="M14 18h.01" />
    <path d="M18 14h.01" />
    <path d="M22 18h.01" />
    <path d="M12 12v6" />
    <path d="M12 2a4.5 4.5 0 0 1 4.5 4.5c0 1.2-.4 2.3-1.2 3.1L12 13" />
  </svg>
);

export const ScubaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 12c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4 4-1.8 4-4Z" />
    <path d="M8 12c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4 4-1.8 4-4Z" />
    <path d="M12 13a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" />
    <path d="M20 13a2 2 0 0 0-2-2h-2" />
    <path d="M10 20.5c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5v0c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v0Z" />
  </svg>
);

export const ClimbingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 3.1c1 .5 1.9 1.4 2.5 2.4" />
    <path d="M12.5 7.9c.7 1 1 2.3 1 3.6" />
    <path d="m11.1 12.3-1.4 1.4" />
    <path d="m2.1 12.9 7.4 7.4c1.2 1.2 3.1 1.2 4.2 0l4.2-4.2c1.2-1.2 1.2-3.1 0-4.2l-7.4-7.4c-1.2-1.2-3.1-1.2-4.2 0L2.1 8.7c-1.2 1.2-1.2 3.1 0 4.2Z" />
    <path d="m16.6 7.6 1.4-1.4" />
    <path d="m18 6.2 2.1-2.1" />
    <path d="m15.2 9-.4.4" />
    <path d="m13.8 10.4-.4.4" />
  </svg>
);

export const FutbolIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" />
    <path d="m15.6 7.4-2.2 4.5 2.2 4.5" />
    <path d="m8.4 7.4 2.2 4.5-2.2 4.5" />
    <path d="m7.5 12 4.5 0" />
  </svg>
);
