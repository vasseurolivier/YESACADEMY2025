import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = (await import(`@/messages/${locale}.json`)).default;
  const legalPage = t.LegalPage;
  return {
    title: legalPage.metadata.title,
    description: legalPage.metadata.description,
  };
}

export default function LegalPage() {
  const t = useTranslations('LegalPage');

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-4xl py-16 md:py-24">
        <h1 className="font-headline text-4xl font-bold">{t('title')}</h1>
        <div className="prose prose-lg mt-8 dark:prose-invert">
          <p>{t('intro')}</p>

          <h2 className="font-headline">{t('mentions_title')}</h2>
          <p>
            <strong>{t('mentions.company_name_label')}</strong> {t('mentions.company_name')}
            <br />
            <strong>{t('mentions.address_label')}</strong> {t('mentions.address')}
            <br />
            <strong>{t('mentions.phone_label')}</strong> {t('mentions.phone')}
            <br />
            <strong>{t('mentions.email_label')}</strong> {t('mentions.email')}
            <br />
            <strong>{t('mentions.director_label')}</strong> {t('mentions.director')}
            <br />
            <strong>{t('mentions.host_label')}</strong> {t('mentions.host')}
          </p>

          <h2 className="font-headline">{t('ip_title')}</h2>
          <p>{t('ip_text')}</p>

          <h2 className="font-headline">{t('privacy_title')}</h2>
          <p>{t('privacy_intro')}</p>
          
          <h3>{t('privacy.collection_title')}</h3>
          <p>{t('privacy.collection_text')}</p>

          <h3>{t('privacy.use_title')}</h3>
          <p>{t('privacy.use_intro')}</p>
          <ul>
              <li>{t('privacy.use_item1')}</li>
              <li>{t('privacy.use_item2')}</li>
              <li>{t('privacy.use_item3')}</li>
              <li>{t('privacy.use_item4')}</li>
          </ul>
          
          <h3>{t('privacy.protection_title')}</h3>
          <p>{t('privacy.protection_text')}</p>

          <h3>{t('privacy.rights_title')}</h3>
          <p>{t('privacy.rights_text')}</p>

          <h2 className="font-headline">{t('tos_title')}</h2>
          <p>{t('tos_text')}</p>
        </div>
      </div>
    </div>
  );
}
