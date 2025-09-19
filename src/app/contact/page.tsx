import InteractiveMap from '@/components/interactive-map';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { SloganGeneratorForm } from '@/components/slogan-generator-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with YES ACADEMY. Find our contact details for China and Vietnam, and use our form for inquiries.',
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Get In Touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            We're here to answer your questions. Reach out to us, and let's start your journey to victory.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
            <p className="mt-4 text-muted-foreground">
              Find our academy locations and contact details below. We have teams ready to assist you in both China and Vietnam.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold">YES ACADEMY - China</h3>
                <div className="mt-2 space-y-2 text-muted-foreground">
                  <p className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> 123 Sports Avenue, Beijing, China</p>
                  <p className="flex items-center"><Phone className="mr-2 h-4 w-4" /> +86 10 1234 5678</p>
                  <p className="flex items-center"><Mail className="mr-2 h-4 w-4" /> china@yesacademy.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold">YES ACADEMY - Vietnam</h3>
                <div className="mt-2 space-y-2 text-muted-foreground">
                  <p className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> 456 Athlete Road, Hanoi, Vietnam</p>
                  <p className="flex items-center"><Phone className="mr-2 h-4 w-4" /> +84 24 8765 4321</p>
                  <p className="flex items-center"><Mail className="mr-2 h-4 w-4" /> vietnam@yesacademy.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
             <h2 className="font-headline text-3xl font-bold">Send Us a Message</h2>
              <p className="mt-4 text-muted-foreground mb-8">
               For inquiries about programs, enrollment, or anything else, please fill out the form below.
              </p>
              <SloganGeneratorForm formType='contact' />
          </div>
        </div>
      </section>

      <section className="h-[500px] w-full">
        <InteractiveMap />
      </section>
    </div>
  );
}
