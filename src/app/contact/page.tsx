import { Mail, Phone, MapPin, Trophy, ClipboardCheck, MessageSquareHeart } from 'lucide-react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Enroll Now',
  description: 'Join YES ACADEMY today. Fill out our enrollment form to start your journey to sporting excellence in China or Vietnam.',
};

const enrollmentSteps = [
    {
        icon: ClipboardCheck,
        title: 'Step 1: Fill the Form',
        description: 'Provide us with your details and program interests. It only takes a few minutes.'
    },
    {
        icon: MessageSquareHeart,
        title: 'Step 2: We Connect',
        description: 'An academy advisor will contact you to discuss your goals and answer your questions.'
    },
    {
        icon: Trophy,
        title: 'Step 3: Start Your Journey',
        description: 'Finalize your enrollment and join the champions on the field, court, or in the water!'
    }
]

export default function ContactPage() {
  return (
    <div>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Join the Academy</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Your journey to victory starts here. Fill out the form below to begin the enrollment process.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="font-headline text-3xl font-bold">Start Your Enrollment</h2>
                <p className="mt-4 text-muted-foreground mb-8">
                Tell us about yourself or your child, and which program you're interested in. Our team will get back to you shortly to finalize the details.
                </p>
                <ContactForm />
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-headline text-3xl font-bold">A Simple Process</h2>
              <p className="mt-4 text-muted-foreground mb-8">
                Joining our community is straightforward. Here’s how it works.
              </p>
              <div className="space-y-6">
                  {enrollmentSteps.map(step => (
                      <div key={step.title} className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <step.icon className="h-6 w-6" />
                          </div>
                          <div>
                              <h3 className="font-semibold">{step.title}</h3>
                              <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-center font-headline text-3xl font-bold">Our Locations</h2>
          <p className="text-center mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our teams are ready to welcome you at our state-of-the-art facilities in both China and Vietnam.
          </p>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-semibold">YES ACADEMY - Beijing</h3>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center"><MapPin className="mr-2 h-4 w-4" /> 123 Sports Avenue, Beijing, China</p>
                  <p className="flex items-center justify-center"><Phone className="mr-2 h-4 w-4" /> +86 10 1234 5678</p>
                  <p className="flex items-center justify-center"><Mail className="mr-2 h-4 w-4" /> beijing@yesacademy.com</p>
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-semibold">YES ACADEMY - Vietnam</h3>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center"><MapPin className="mr-2 h-4 w-4" /> 456 Athlete Road, Hanoi, Vietnam</p>
                  <p className="flex items-center justify-center"><Phone className="mr-2 h-4 w-4" /> +84 24 8765 4321</p>
                  <p className="flex items-center justify-center"><Mail className="mr-2 h-4 w-4" /> vietnam@yesacademy.com</p>
                </div>
              </div>
              
              <div className="rounded-lg border p-6 md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-semibold">YES ACADEMY - Yiwu</h3>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center"><MapPin className="mr-2 h-4 w-4" /> 789 Champion Plaza, Yiwu, China</p>
                  <p className="flex items-center justify-center"><Phone className="mr-2 h-4 w-4" /> +86 579 8888 9999</p>
                  <p className="flex items-center justify-center"><Mail className="mr-2 h-4 w-4" /> yiwu@yesacademy.com</p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
