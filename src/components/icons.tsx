
import type { SVGProps } from 'react';
import { Medal } from 'lucide-react';
import Image from 'next/image';


export const Logo = (props: SVGProps<SVGSVGElement>) => (
    <div className="flex items-center" style={{ width: '120px', height: 'auto' }}>
    <svg 
    viewBox="0 0 512 512" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
        <circle cx="256" cy="256" r="230" fill="white" stroke="#D32F2F" strokeWidth="12"/>
        <circle cx="256" cy="256" r="212" fill="white" stroke="#002D62" strokeWidth="12"/>
        <path d="M120 362 L140 362 L140 150 L372 150 L372 362 L392 362 L392 150 A180 180 0 0 0 120 150 Z" fill="#002D62" />
        
        <path d="M140 256 L150 256" stroke="white" strokeWidth="1"/>
        <text fill="#002D62" fontSize="54" fontWeight="bold" letterSpacing="2">
            <path id="text-arc-top" d="M130 256 A 126 126 0 1 1 382 256" fill="none"/>
            <textPath href="#text-arc-top" startOffset="50%" textAnchor="middle">YES ACADEMY</textPath>
        </text>

        <text fill="#002D62" fontSize="40" fontWeight="bold" letterSpacing="1">
            <path id="text-arc-bottom" d="M150 256 A 106 106 0 0 0 362 256" fill="none"/>
            <textPath href="#text-arc-bottom" startOffset="50%" textAnchor="middle">MULTI-SPORTS</textPath>
        </text>
        
        <g transform="translate(165, 256)">
            <polygon points="0,0 10,-5 10,5" fill="white"/>
        </g>
        
        <g transform="translate(347, 256)">
            <polygon points="0,0 -10,-5 -10,5" fill="white"/>
        </g>

        <g transform="translate(256, 256) scale(0.9)">
            <path d="M0 -110 L45 -50 L45 110 L-45 110 L-45 -50 Z" fill="none" stroke="#002D62" strokeWidth="10"/>
            <g transform="translate(0, 15) scale(0.6)">
                <path d="M0 -150 L0 150" stroke="#002D62" strokeWidth="15"/>
                <path d="M-20 -150 L20 -150" stroke="#002D62" strokeWidth="15"/>
                <path d="M-40 0 L40 0" stroke="#002D62" strokeWidth="15"/>
                <path d="M-20 150 L20 150" stroke="#002D62" strokeWidth="15"/>
                <path d="M-40, -110 a40,40 0 0,1 80,0" fill="none" stroke="#002D62" strokeWidth="15"/>
                <path d="M-40, 40 a40,40 0 0,0 80,0" fill="none" stroke="#002D62" strokeWidth="15"/>
            </g>
            <g transform="translate(0, 30)">
                <path d="M0 -130 C 40 -90, 40 -30, 0 10" stroke="#D32F2F" strokeWidth="8" fill="none" />
                <path d="M0 -130 C -40 -90, -40 -30, 0 10" stroke="white" strokeWidth="8" fill="none" />
                <path d="M0 -130 C -40 -90, -40 -30, 0 10" stroke="#002D62" strokeWidth="8" fill="none" transform="translate(2,0)"/>
            </g>
        </g>

        <path d="M 184 256 l -8 -4 -1 8 9 0 z" fill="white" />
        <path d="M 328 256 l 8 -4 1 8 -9 0 z" fill="white" />
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

    

    