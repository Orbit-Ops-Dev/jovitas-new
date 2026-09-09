import { useEffect } from 'react';
import LegalPage from '../../common/legal/internals';
import { lastUpdated, intro, sections } from './data';

const TermsPage = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = "Terms of Service - Jovita's Cleaning Service | Austin, TX";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Read the Terms of Service for Jovita's Cleaning Service in Austin, TX, covering use of our website, quote requests, and promotions."
      );
    }
  }, []);

  return <LegalPage title="Terms of Service" lastUpdated={lastUpdated} intro={intro} sections={sections} />;
};

export default TermsPage;
