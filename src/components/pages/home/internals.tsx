import { useEffect } from 'react';
import Section from '../../common/section/Section.tsx';
import Container from '../../common/container/internals.tsx';
import Button from '../../common/button/internals.tsx';
import Carousel from './carousel/internals.tsx';
import HeroSection from '../../common/hero/internals.tsx';
import SectionTitle from '../../common/section/SectionTitle.tsx';
import ServiceDetailCard from '../services/card/internals.tsx';
import { servicesDetailed } from '../services/data.ts';
import { ServicesGrid } from '../services/styled.ts';
import { HeroButtons, StyledLink, SectionHeader, SectionDescription, CarouselWrapper } from './styled.ts';
import { testimonials } from './testimonials/data.ts';
import TestimonialCard from './testimonials/internals.tsx';
import { setPageMeta } from '../../../utils/seo';
import AboutSection from '../about/internals.tsx';
import ContactSection from '../contact/internals.tsx';

const HomePage = () => {
  useEffect(() => {
    // Business structured data (JSON-LD) is static in index.html so every crawler sees it.
    setPageMeta({
      title: "Jovita's Cleaning Service - Professional Cleaning in Austin, TX | Residential & Commercial",
      description:
        'Professional cleaning services in Austin, TX. Expert residential cleaning, move-in/out cleaning, and post-construction cleaning. Free quotes. Call (512) 658-9899.',
      path: '/',
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Professional Cleaning Services in Austin, TX"
        subtitle="Experience top-quality residential, move-in/out, and post-construction cleaning tailored to your needs."
        variant="image"
        imageSrc="/hero.jpg"
        centered={true}
      >
        <HeroButtons>
          <StyledLink to="/#contact">
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

      {/* Services */}
      <Section id="services" variant="secondary">
        <Container>
          <SectionHeader>
            <SectionTitle>Exceptional Cleaning Services in Austin, TX</SectionTitle>
            <SectionDescription>
              Top-tier residential cleaning, move-in/out cleaning, and post-construction cleaning for Austin homes and
              businesses, expertly handled by our professional team
            </SectionDescription>
          </SectionHeader>

          <ServicesGrid>
            {servicesDetailed.map(service => (
              <ServiceDetailCard key={service.id} service={service} />
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      {/* About: our approach, what sets us apart, FAQ */}
      <AboutSection />

      {/* Contact */}
      <ContactSection />
    </>
  );
};

export default HomePage;
