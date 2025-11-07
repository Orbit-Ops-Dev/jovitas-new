import { useEffect } from 'react';
import Section from '../../common/section/Section.tsx';
import Container from '../../common/container/internals.tsx';
import HeroSection from '../../common/hero/internals.tsx';
import ServiceDetailCard from './card/internals.tsx';
import { servicesDetailed } from './data.ts';
import { IntroText, ServicesGrid } from './styled.ts';

const ServicesPage = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = "Cleaning Services - Jovita's Cleaning Service Austin, TX | Residential, Move-In/Out, Construction";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete cleaning services in Austin, TX: Residential house cleaning, move-in/move-out cleaning, and post-construction cleaning. Professional, reliable service. Get a free quote today.');
    }

    // Add Service schema structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "Residential Cleaning Services Austin TX",
          "description": "Professional house cleaning services for Austin homes. Regular cleaning, deep cleaning, and maintenance.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Jovita's Cleaning Service",
            "telephone": "(512) 658-9899",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX"
            }
          },
          "areaServed": "Austin, TX",
          "serviceType": "Residential Cleaning"
        },
        {
          "@type": "Service",
          "position": 2,
          "name": "Move-In/Move-Out Cleaning Austin TX",
          "description": "Thorough move-in and move-out cleaning services for homes and apartments in Austin. Deep cleaning for transitions.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Jovita's Cleaning Service",
            "telephone": "(512) 658-9899",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX"
            }
          },
          "areaServed": "Austin, TX",
          "serviceType": "Move-In/Move-Out Cleaning"
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "Post-Construction Cleaning Austin TX",
          "description": "Professional post-construction and post-renovation cleaning services. Remove dust, debris, and construction materials.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Jovita's Cleaning Service",
            "telephone": "(512) 658-9899",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX"
            }
          },
          "areaServed": "Austin, TX",
          "serviceType": "Post-Construction Cleaning"
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Professional Cleaning Services in Austin, TX"
        subtitle="Comprehensive cleaning solutions for residential, move-in/out, and post-construction needs"
      />

      {/* Services List */}
      <Section variant="secondary">
        <Container>
          <IntroText>
            At Jovita's Cleaning Service in Austin, TX, we understand that every cleaning situation is unique. From maintaining your
            Austin home's comfort with regular residential house cleaning to preparing spaces for new beginnings with
            professional move-in/move-out cleaning services, or ensuring your newly constructed property is move-in ready with
            thorough post-construction cleaning - we deliver exceptional, professional cleaning results tailored to your specific needs throughout the Greater Austin area.
          </IntroText>

          <ServicesGrid>
            {servicesDetailed.map(service => (
              <ServiceDetailCard key={service.id} service={service} />
            ))}
          </ServicesGrid>
        </Container>
      </Section>
    </>
  );
};

export default ServicesPage;
