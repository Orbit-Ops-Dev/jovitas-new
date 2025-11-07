import { useEffect } from 'react';
import Section from '../../common/section/Section';
import Container from '../../common/container/internals';
import HeroSection from '../../common/hero/internals';
import FAQAccordion from './faq/internals';
import SectionTitle from '../../common/section/SectionTitle';
import { faqs } from './faq/data';
import {
  ContentWrapper,
  ContentSection,
  TextContent,
  Text,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureContent,
  FeatureTitle,
  FeatureText,
} from './styled';
import { AboutGrid, AboutContent, AboutTitle, AboutText, AboutImage } from '../home/styled';

const AboutPage = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = "About Us - Jovita's Cleaning Service | Austin TX Professional Cleaners";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Jovita\'s Cleaning Service - Austin\'s trusted professional cleaning company. Residential, move-in/out, and post-construction cleaning services.');
    }

    // Add structured data for local business
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Jovita's Cleaning Service",
      "image": "https://jovitascleaningservice.com/logo-pink-output.png",
      "@id": "https://jovitascleaningservice.com",
      "url": "https://jovitascleaningservice.com",
      "telephone": "(512) 658-9899",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.2672,
        "longitude": -97.7431
      },
      "areaServed": {
        "@type": "City",
        "name": "Austin",
        "sameAs": "https://en.wikipedia.org/wiki/Austin,_Texas"
      },
      "description": "Professional cleaning services in Austin, TX. Specializing in residential cleaning, move-in/move-out cleaning, and post-construction cleaning.",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:30"
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
      <HeroSection
        title="About Jovita's Cleaning Service"
        subtitle="Professional, reliable, and trustworthy cleaning services in Austin, TX"
      />

      {/* About Preview */}
      <Section variant="light">
        <Container>
          <AboutGrid>
            <AboutContent>
              <AboutTitle>Professional Cleaning Services in Austin, TX</AboutTitle>
              <AboutText>
                Jovita's Cleaning Service delivers professional and reliable cleaning services tailored to meet your needs, ensuring spotless
                and welcoming spaces every time around Austin, TX!
              </AboutText>
              <AboutText>
                Serving the Greater Austin area, we specialize in move-in/move-out cleaning, post-construction cleaning,
                and residential house cleaning. Whether you're settling into a new home in South Austin, refreshing your
                living space, or need deep cleaning after construction, our tailored cleaning solutions ensure a spotless,
                inviting environment. Our mission is to deliver exceptional service with attention to detail, creating
                spaces that truly shine. Thank you for trusting us to make your Austin home or business clean, fresh, and welcoming!
              </AboutText>
              <AboutText>
                Our mission is to deliver exceptional cleaning service that creates inviting, spotless environments for our
                Austin clients through professional residential cleaning, move-in/out cleaning, and post-construction cleaning services.
              </AboutText>
            </AboutContent>
            <AboutImage
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              alt="Professional cleaning team at work"
              loading="lazy"
            />
          </AboutGrid>
        </Container>
      </Section>

      <Section variant="secondary">
        <Container>
          {/* What Sets Us Apart Section */}
          <ContentSection>
            <TextContent>
              <SectionTitle>What Sets Us Apart</SectionTitle>
              <FeaturesList>
                <FeatureItem>
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>Local Austin Expertise</FeatureTitle>
                    <FeatureText>
                      We know Austin inside and out, understanding the unique needs of homes and businesses throughout
                      the area.
                    </FeatureText>
                  </FeatureContent>
                </FeatureItem>

                <FeatureItem>
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>Work Around Your Life</FeatureTitle>
                    <FeatureText>
                      Life in Austin is busy! We fit our cleaning around your schedule, not the other way around.
                    </FeatureText>
                  </FeatureContent>
                </FeatureItem>

                <FeatureItem>
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>We Care About Results</FeatureTitle>
                    <FeatureText>
                      If you're not completely happy with our work, we'll make it right. It's that simple.
                    </FeatureText>
                  </FeatureContent>
                </FeatureItem>

                <FeatureItem>
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>Real People, Real Communication</FeatureTitle>
                    <FeatureText>
                      No automated responses or runarounds. When you call or text, you'll talk to someone who actually
                      cares about your space.
                    </FeatureText>
                  </FeatureContent>
                </FeatureItem>
              </FeaturesList>
            </TextContent>
          </ContentSection>

          {/* Our Approach Section */}
          <ContentSection>
            <TextContent>
              <SectionTitle>Our Approach</SectionTitle>
              <Text>
                Every cleaning job is different, and we treat it that way. Whether you're moving into your dream home in
                South Austin, need post-construction cleanup after a renovation, or just want your regular house
                cleaning done right, we bring the same level of care and attention to detail. We're not just cleaning
                your space – we're helping you create the home or office environment you deserve.
              </Text>
            </TextContent>
          </ContentSection>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="secondary" id="faq">
        <Container>
          <ContentWrapper>
            <SectionTitle align="center">Frequently Asked Questions</SectionTitle>
            <FAQAccordion faqs={faqs} />
          </ContentWrapper>
        </Container>
      </Section>
    </>
  );
};

export default AboutPage;
