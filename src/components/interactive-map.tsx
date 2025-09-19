'use client';

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { Medal } from 'lucide-react';

const locations = [
  { key: 'beijing', lat: 39.9042, lng: 116.4074, name: 'YES ACADEMY - Beijing, China' },
  { key: 'hanoi', lat: 21.0285, lng: 105.8542, name: 'YES ACADEMY - Hanoi, Vietnam' },
];

export default function InteractiveMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
        <p>Google Maps API Key is missing.</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={{ lat: 30.5, lng: 110.0 }}
        defaultZoom={4}
        mapId="yes-academy-map"
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {locations.map(location => (
          <AdvancedMarker key={location.key} position={location}>
            <div className="group relative">
              <Medal className="h-10 w-10 text-primary drop-shadow-lg transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute bottom-full mb-2 hidden w-max rounded-md bg-card px-2 py-1 text-xs font-semibold text-card-foreground shadow-md group-hover:block">
                {location.name}
              </div>
            </div>
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
}
