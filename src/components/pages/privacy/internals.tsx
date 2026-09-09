import { useEffect } from 'react';
import LegalPage from '../../common/legal/internals';
import { lastUpdated, intro, sections } from './data';

const PrivacyPage = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = "Privacy Policy - Jovita's Cleaning Service | Austin, TX";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Read the Privacy Policy for Jovita's Cleaning Service. Learn how we collect, use, and protect your information when you request cleaning services in Austin, TX."
      );
    }
  }, []);

  return <LegalPage title="Privacy Policy" lastUpdated={lastUpdated} intro={intro} sections={sections} />;
};

export default PrivacyPage;
