import { useEffect } from 'react';
import Section from '../../common/section/Section.tsx';
import Container from '../../common/container/internals.tsx';
import Button from '../../common/button/internals.tsx';
import Carousel from './carousel/internals.tsx';
import ServicePreviewCard from './service-preview/internals.tsx';
import HeroSection from '../../common/hero/internals.tsx';
import heroImage from '../../../assets/home/hero.jpg';
import SectionTitle from '../../common/section/SectionTitle.tsx';
import { services } from '../services/data.ts';
import { HeroButtons, StyledLink, SectionHeader, SectionDescription, CarouselWrapper, CTAContainer } from './styled.ts';
import { testimonials } from './testimonials/data.ts';
import TestimonialCard from './testimonials/internals.tsx';

const HomePage = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = "Jovita's Cleaning Service - Professional Cleaning in Austin, TX | Residential & Commercial";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional cleaning services in Austin, TX. Expert residential cleaning, move-in/out cleaning, and post-construction cleaning. Free quotes. Call (512) 658-9899.');
    }

    // Add comprehensive structured data for home page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://jovitascleaningservice.com",
      "name": "Jovita's Cleaning Service",
      "image": "https://jovitascleaningservice.com/logo-pink-output.png",
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
      "areaServed": [
        {
          "@type": "City",
          "name": "Austin",
          "sameAs": "https://en.wikipedia.org/wiki/Austin,_Texas"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Cleaning",
              "description": "Professional house cleaning services for Austin homes"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Move-In/Move-Out Cleaning",
              "description": "Thorough cleaning for moving transitions in Austin, TX"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Post-Construction Cleaning",
              "description": "Deep cleaning after construction or renovation projects"
            }
          }
        ]
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:30"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "50"
      },
      "description": "Jovita's Cleaning Service provides professional residential cleaning, move-in/out cleaning, and post-construction cleaning services throughout Austin, TX. Trusted, reliable, and thorough cleaning solutions."
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
        subtitle="Experience top-quality residential, move-in/out, and post-construction cleaning tailored to your needs."
        variant="image"
        imageSrc={heroImage}
        centered={true}
      >
        <HeroButtons>
          <StyledLink to="/contact">
            <Button variant="primary" size="large">
              Contact
            </Button>
          </StyledLink>
        </HeroButtons>
      </HeroSection>

      {/* What Our Clients Say Section */}
      <Section id="testimonials">
        <Container>
          <SectionTitle align="center">What Our Clients Say About Us</SectionTitle>
          <CarouselWrapper>
            <Carousel
              itemsPerView={3}
              gap={24}
              autoPlay={true}
              autoPlayInterval={5000}
              showDots={true}
              showArrows={true}
              infinite={true}
            >
              {testimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </Carousel>
          </CarouselWrapper>
        </Container>
      </Section>

      {/* Services Carousel */}
      <Section variant="secondary">
        <Container>
          <SectionHeader>
            <SectionTitle>Exceptional Cleaning Services in Austin, TX</SectionTitle>
            <SectionDescription>
              Top-tier residential cleaning, move-in/out cleaning, and post-construction cleaning for Austin homes and businesses, expertly handled by our professional team
            </SectionDescription>
          </SectionHeader>

          <CarouselWrapper>
            <Carousel itemsPerView={2} gap={24} autoPlay={false} showDots={false} showArrows={true} infinite={true}>
              {services.map(service => (
                <ServicePreviewCard key={service.id} service={service} />
              ))}
            </Carousel>
          </CarouselWrapper>

          <CTAContainer>
            <StyledLink to="/services">
              <Button variant="primary">View All Services</Button>
            </StyledLink>
          </CTAContainer>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
