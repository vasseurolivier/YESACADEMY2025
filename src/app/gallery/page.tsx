import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View high-quality photos and videos from our training sessions, competitions, and facilities at YES ACADEMY.',
};

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <div>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Gallery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            A glimpse into the action, dedication, and community at YES ACADEMY.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
            {galleryImages.map((image, index) => (
              <div key={image.id} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={600}
                  height={400}
                  className="h-auto w-full transform transition-transform duration-300 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="absolute bottom-0 left-0 p-4 text-sm text-white">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
