import { LegalSection } from '../../common/legal/types';

export const lastUpdated = 'September 8, 2026';

export const intro =
  'This Privacy Policy explains how Jovita\'s Cleaning Service ("we," "us," or "our") collects, uses, and ' +
  'shares information when you visit our website or contact us about our cleaning services. By using our website, you ' +
  'agree to the practices described in this policy.';

export const sections: LegalSection[] = [
  {
    heading: '1. Information We Collect',
    blocks: [
      {
        type: 'paragraph',
        text: 'We collect information in two ways: information you provide directly, and information collected automatically when you use our website.',
      },
      {
        type: 'paragraph',
        text: 'Information you provide: When you submit our contact form or request a quote, we collect the details you enter, which may include your name, email address, phone number, the type of cleaning service you are interested in, your preferred cleaning frequency, and any additional message you share with us.',
      },
      {
        type: 'paragraph',
        text: 'Information collected automatically: We use privacy-friendly analytics to understand how visitors use our site (such as which pages are viewed). This data is aggregated and is not used to personally identify you.',
      },
    ],
  },
  {
    heading: '2. How We Use Your Information',
    blocks: [
      { type: 'paragraph', text: 'We use the information we collect to:' },
      {
        type: 'list',
        items: [
          'Respond to your inquiries and provide cleaning service quotes.',
          'Schedule and coordinate cleaning services you request.',
          'Communicate with you about your request, including follow-ups.',
          'Improve our website and the services we offer.',
        ],
      },
      {
        type: 'paragraph',
        text: 'We do not sell your personal information, and we do not use it for third-party advertising.',
      },
    ],
  },
  {
    heading: '3. How We Share Your Information',
    blocks: [
      {
        type: 'paragraph',
        text: 'We share information only with the service providers that help us operate our website and communicate with you:',
      },
      {
        type: 'list',
        items: [
          'EmailJS — delivers the messages you submit through our contact form so we can receive and respond to them.',
          'Vercel — hosts our website and provides privacy-friendly, aggregated visitor analytics.',
        ],
      },
      {
        type: 'paragraph',
        text: 'These providers process information on our behalf and are expected to protect it. We may also disclose information if required by law or to protect our legal rights.',
      },
    ],
  },
  {
    heading: '4. Cookies and Tracking',
    blocks: [
      {
        type: 'paragraph',
        text: 'Our website uses minimal, privacy-friendly analytics that do not rely on advertising cookies to track you across other websites. We do not use your browsing activity to build advertising profiles.',
      },
    ],
  },
  {
    heading: '5. Data Retention',
    blocks: [
      {
        type: 'paragraph',
        text: 'We keep the information you submit for as long as needed to respond to your inquiry, provide our services, and maintain our business records. You may ask us to delete your information at any time using the contact details below.',
      },
    ],
  },
  {
    heading: '6. Your Privacy Rights',
    blocks: [
      {
        type: 'paragraph',
        text: 'Depending on where you live, you may have the right to access, correct, or request deletion of the personal information we hold about you, and to ask how it is used. To exercise any of these rights, contact us using the information below and we will respond as required by applicable law.',
      },
      {
        type: 'paragraph',
        text: 'California residents: We do not sell personal information. You may request access to or deletion of your information as described above.',
      },
    ],
  },
  {
    heading: '7. Data Security',
    blocks: [
      {
        type: 'paragraph',
        text: 'We take reasonable measures to protect the information you share with us. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.',
      },
    ],
  },
  {
    heading: "8. Children's Privacy",
    blocks: [
      {
        type: 'paragraph',
        text: 'Our website and services are intended for adults. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it.',
      },
    ],
  },
  {
    heading: '9. Third-Party Links',
    blocks: [
      {
        type: 'paragraph',
        text: 'Our website may contain links to or content from third parties, such as map data from OpenStreetMap. We are not responsible for the privacy practices of those third parties, and we encourage you to review their policies.',
      },
    ],
  },
  {
    heading: '10. Changes to This Policy',
    blocks: [
      {
        type: 'paragraph',
        text: 'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically.',
      },
    ],
  },
  {
    heading: '11. Contact Us',
    blocks: [
      {
        type: 'paragraph',
        text: "If you have questions about this Privacy Policy or how we handle your information, please contact Jovita's Cleaning Service by email at Jovitascleaningatx@gmail.com or by phone at (512) 658-9899.",
      },
    ],
  },
];
