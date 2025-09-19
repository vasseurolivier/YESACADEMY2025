import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & News',
  description: 'Stay updated with the latest news, success stories, and sports tips from YES ACADEMY.',
};

const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Nutrition for Young Athletes',
    date: 'October 26, 2023',
    excerpt: 'Discover the key dietary components that can boost performance, aid recovery, and promote overall health in young sports enthusiasts.',
    image: PlaceHolderImages.find(p => p.id === 'blog-2'),
  },
  {
    id: 2,
    title: 'YES ACADEMY Player Signs with Professional Club',
    date: 'October 20, 2023',
    excerpt: 'We are incredibly proud to announce that one of our own has taken the next step in their journey, signing a contract with a professional football club.',
    image: PlaceHolderImages.find(p => p.id === 'blog-1'),
  },
  {
    id: 3,
    title: 'Mastering the Mental Game: Tips from Our Coaches',
    date: 'October 15, 2023',
    excerpt: 'Success in sports is not just physical. Our expert coaches share their top tips for building mental resilience, focus, and confidence.',
    image: PlaceHolderImages.find(p => p.id === 'blog-3'),
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Blog & News</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            The latest updates, stories, and insights from the YES ACADEMY community.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(post => (
              <Card key={post.id} className="group flex flex-col overflow-hidden">
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.image.description}
                      data-ai-hint={post.image.imageHint}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="flex items-center font-semibold text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
