import type { SVGProps } from 'react';
import { Medal } from 'lucide-react';
import Image from 'next/image';

export const Logo = () => (
  <div className="flex items-center gap-2" style={{ height: 'auto' }}>
    <Image
      src="/logo.png"
      alt="YES ACADEMY Logo"
      width={40}
      height={40}
      className="object-contain"
      unoptimized // Using a static image, but keeping unoptimized just in case to avoid Next.js image processing conflicts
    />
    <span className="font-bold text-lg text-foreground">YES ACADEMY</span>
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
