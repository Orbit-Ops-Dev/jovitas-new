import { useEffect } from 'react';
import LegalPage from '../../common/legal/internals';
import { setPageMeta } from '../../../utils/seo';
import { lastUpdated, intro, sections } from './data';

const TermsPage = () => {
  useEffect(() => {
    setPageMeta({
      title: "Terms of Service - Jovita's Cleaning Service | Austin, TX",
      description:
        "Read the Terms of Service for Jovita's Cleaning Service in Austin, TX, covering use of our website, quote requests, and promotions.",
      path: '/terms',
    });
  }, []);

  return <LegalPage title="Terms of Service" lastUpdated={lastUpdated} intro={intro} sections={sections} />;
};

export default TermsPage;
