import { Mail, Phone, MapPin, Trophy, ClipboardCheck, MessageSquareHeart } from 'lucide-react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { useTranslations } from 'next-intl';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = (await import(`@/messages/${locale}.json`)).default;
  const contactPage = t.ContactPage;
  return {
    title: contactPage.metadata.title,
    description: contactPage.metadata.description,
  };
}

const enrollmentSteps = [
    {
        icon: ClipboardCheck,
        title: 'step1_title',
        description: 'step1_desc'
    },
    {
        icon: MessageSquareHeart,
        title: 'step2_title',
        description: 'step2_desc'
    },
    {
        icon: Trophy,
        title: 'step3_title',
        description: 'step3_desc'
    }
]

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  return (
    <div>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">{t('hero_title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            {t('hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-5">

          <div className="lg:col-span-3">
             <h2 className="font-headline text-3xl font-bold">{t('form_title')}</h2>
              <p className="mt-4 text-muted-foreground mb-8">
               {t('form_subtitle')}
              </p>
              <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl font-bold">{t('steps_title')}</h2>
            <p className="mt-4 text-muted-foreground mb-8">
              {t('steps_subtitle')}
            </p>
            <div className="space-y-6">
                {enrollmentSteps.map(step => (
                    <div key={step.title} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <step.icon className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold">{t(`steps.${step.title}`)}</h3>
                            <p className="text-sm text-muted-foreground">{t(`steps.${step.description}`)}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold">{t('locations_title')}</h2>
          <p className="text-center mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t('locations_subtitle')}
          </p>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-semibold">{t('locations.beijing.name')}</h3>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center"><MapPin className="mr-2 h-4 w-4" /> {t('locations.beijing.address')}</p>
                  <p className="flex items-center justify-center"><Phone className="mr-2 h-4 w-4" /> {t('locations.beijing.phone')}</p>
                  <p className="flex items-center justify-center"><Mail className="mr-2 h-4 w-4" /> {t('locations.beijing.email')}</p>
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-semibold">{t('locations.vietnam.name')}</h3>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center"><MapPin className="mr-2 h-4 w-4" /> {t('locations.vietnam.address')}</p>
                  <p className="flex items-center justify-center"><Phone className="mr-2 h-4 w-4" /> {t('locations.vietnam.phone')}</p>
                  <p className="flex items-center justify-center"><Mail className="mr-2 h-4 w-4" /> {t('locations.vietnam.email')}</p>
                </div>
              </div>
              
              <div className="rounded-lg border p-6 md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-semibold">{t('locations.yiwu.name')}</h3>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center"><MapPin className="mr-2 h-4 w-4" /> {t('locations.yiwu.address')}</p>
                  <p className="flex items-center justify-center"><Phone className="mr-2 h-4 w-4" /> {t('locations.yiwu.phone')}</p>
                  <p className="flex items-center justify-center"><Mail className="mr-2 h-4 w-4" /> {t('locations.yiwu.email')}</p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
