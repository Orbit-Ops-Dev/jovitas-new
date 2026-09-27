import { useEffect } from 'react';
import LegalPage from '../../common/legal/internals';
import { setPageMeta } from '../../../utils/seo';
import { lastUpdated, intro, sections } from './data';

const PrivacyPage = () => {
  useEffect(() => {
    setPageMeta({
      title: "Privacy Policy - Jovita's Cleaning Service | Austin, TX",
      description:
        "Read the Privacy Policy for Jovita's Cleaning Service. Learn how we collect, use, and protect your information when you request cleaning services in Austin, TX.",
      path: '/privacy',
    });
  }, []);

  return <LegalPage title="Privacy Policy" lastUpdated={lastUpdated} intro={intro} sections={sections} />;
};

export default PrivacyPage;
