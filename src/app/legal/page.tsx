import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal & Privacy',
  description: 'Read the legal mentions, privacy policy, and terms of service for YES ACADEMY.',
};

export default function LegalPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-4xl py-16 md:py-24">
        <h1 className="font-headline text-4xl font-bold">Legal & Privacy</h1>
        <div className="prose prose-lg mt-8 dark:prose-invert">
          <p>Welcome to the legal section of YES ACADEMY. Here you will find information about our company, our website policies, and how we handle your data.</p>

          <h2 className="font-headline">Legal Mentions</h2>
          <p>
            <strong>Company Name:</strong> YES ACADEMY Global Ltd.
            <br />
            <strong>Registered Address:</strong> 345 Huangyang Road Pudong, Shanghai China 201206
            <br />
            <strong>Official Phone:</strong> +86 138 1738 9758
            <br />
            <strong>Official Email:</strong> contact@yesacademies.org
            <br />
            <strong>Director of Publication:</strong> [Director's Name]
            <br />
            <strong>Website Host:</strong> Hosted by Firebase
          </p>

          <h2 className="font-headline">Intellectual Property</h2>
          <p>All content on this website, including but not limited to text, images, logos, videos, and icons, is the exclusive property of YES ACADEMY Global Ltd. or its partners. Any reproduction, representation, modification, publication, or adaptation of all or part of the site's elements, regardless of the means or process used, is prohibited, except with prior written authorization from YES ACADEMY.</p>

          <h2 className="font-headline">Privacy Policy (GDPR Adapted)</h2>
          <p>YES ACADEMY is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our website or services.</p>
          
          <h3>Data Collection</h3>
          <p>We collect information when you register for a program, fill out a contact form, or subscribe to our newsletter. This may include your name, email address, phone number, and information about the athlete.</p>

          <h3>Use of Information</h3>
          <p>The information we collect is used to:</p>
          <ul>
              <li>Process your registration and manage your account.</li>
              <li>Communicate with you about programs, schedules, and events.</li>
              <li>Improve our services and website experience.</li>
              <li>Send periodic marketing emails, from which you can unsubscribe at any time.</li>
          </ul>
          
          <h3>Data Protection</h3>
          <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and is only accessible by a limited number of persons who have special access rights and are required to keep the information confidential.</p>

          <h3>Your Rights</h3>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at contact@yesacademies.org.</p>

          <h2 className="font-headline">Terms of Service</h2>
          <p>[Full terms of service content to be added here. This would include clauses on payment, cancellation, code of conduct, liability, etc.]</p>
        </div>
      </div>
    </div>
  );
}
