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

    <circle cx="256" cy="256" r="230" fill="#002d62" />

    <circle cx="256" cy="256" r="215" fill="none" stroke="#e0e0e0" strokeWidth="2" />
    <circle cx="256" cy="256" r="205" fill="none" stroke="red" strokeWidth="6" />
    <circle cx="256" cy="256" r="198" fill="#002d62" />

    <rect x="75" y="236" width="362" height="40" fill="#002d62" />
    <path d="M 75 236 L 95 236 L 95 216 L 417 216 L 417 236 L 437 236 L 437 276 L 417 276 L 417 296 L 95 296 L 95 276 L 75 276 Z" fill="#002d62" />

    <path d="M 95, 216 h 322 v 80 h -322 z" fill="#e0e0e0" />
    <path d="M 100, 221 h 312 v 70 h -312 z" fill="#002d62" />

    <polygon points="120,246 130,266 110,266" fill="white">
        <path d="M115,256l-7.5-5h15z" fill="white" />
        <polygon points="120,246 125,256 115,256" fill="white" />
        <polygon points="120,266 125,256 115,256" fill="white" />
        <path d="M120,256 l-2.5,5 h5z" fill="white" />
    </polygon>

    <path d="M115 251 l-5 -3 l10 0 l-5 3" fill="white"/>
    <polygon points="112.5,251 117.5,251 115,254" fill="white"/>
    <path d="M110 256 l5 -3 l-10 0 l5 3" fill="white"/>
    <polygon points="107.5,256 112.5,256 110,259" fill="white"/>
    <path d="M115 261 l-5 -3 l10 0 l-5 3" fill="white"/>
    <polygon points="112.5,261 117.5,261 115,264" fill="white"/>

    <g transform="translate(112, 256) scale(0.1)">
      <polygon points="5,0 10,10 0,10" fill="white" />
    </g>

    <g transform="translate(112, 256) scale(0.1)">
        <polygon points="2.5,5 7.5,5 5,8" fill="white" />
    </g>

    <g transform="translate(100, 256) scale(0.1)">
        <polygon points="5,0 10,10 0,10" fill="white" />
    </g>
    <g transform="translate(100, 256) scale(0.1)">
        <polygon points="2.5,5 7.5,5 5,8" fill="white" />
    </g>

    <path d="m 402,246 0,20 -10,-10 z" fill="white" transform="translate(-1,0)" />
    <path d="m 392,246 0,20 -10,-10 z" fill="white" transform="translate(2,0)" />

    <text fill="white" fontSize="42" fontWeight="bold" letterSpacing="2">
        <textPath href="#text-arc-top" startOffset="50%" textAnchor="middle">YES ACADEMY</textPath>
    </text>

    <text fill="white" fontSize="28" fontWeight="bold" letterSpacing="1.5">
        <textPath href="#text-arc-bottom" startOffset="50%" textAnchor="middle">MULTI-SPORTS</textPath>
    </text>

    <path d="M 256,180 v 150" stroke="#002d62" strokeWidth="14" />
    <path d="m 249,180 14,0 -7,-15 z" fill="#002d62" />
    <path d="M 242,220 h 28 M 244,250 h 24 M 246,280 h 20 M 248,310 h 16" stroke="#002d62" strokeWidth="4" />

    <path d="m 256,180 c 20,40 20,80 0,120 c -20,40 -20,80 0,120" fill="none" stroke="red" strokeWidth="5" strokeLinecap="round" transform="translate(2, -15) scale(0.9)" />
    <path d="m 256,180 c -20,40 -20,80 0,120 c 20,40 20,80 0,120" fill="none" stroke="#e0e0e0" strokeWidth="5" strokeLinecap="round" transform="translate(-2, -15) scale(0.9)" />
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
