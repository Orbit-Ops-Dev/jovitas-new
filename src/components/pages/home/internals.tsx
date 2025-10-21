import { Link } from 'react-router-dom';
import Section from '../../common/section/Section.tsx';
import Container from '../../common/container/internals.tsx';
import Button from '../../common/button/internals.tsx';
import Carousel from './carousel/internals.tsx';
import ServicePreviewCard from './service-preview/internals.tsx';
import HeroSection from '../../common/hero/internals.tsx';
import SectionTitle from '../../common/section/SectionTitle.tsx';
import { services } from '../services/data.ts';
import {
  HeroButtons,
  SectionHeader,
  SectionDescription,
  CarouselWrapper,
  CTAContainer,
  AboutGrid,
  AboutContent,
  AboutTitle,
  AboutText,
  AboutFeatures,
  Feature,
  AboutImage,
} from './styled.ts';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Professional Cleaning Services in Suffolk County"
        subtitle="Reliable, trustworthy, and exceptional cleaning for your home or business"
        variant="video"
        videoSrc="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
      >
        <HeroButtons>
          <Link to="/contact">
            <Button variant="primary" size="large">
              Get Free Quote
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" size="large">
              Our Services
            </Button>
          </Link>
        </HeroButtons>
      </HeroSection>

      {/* Services Carousel */}
      <Section variant="secondary">
        <Container>
          <SectionHeader>
            <SectionTitle>The Liria's Experience</SectionTitle>
            <SectionDescription>
              From residential to commercial, we provide comprehensive cleaning solutions
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
            <Link to="/services">
              <Button variant="primary">View All Services</Button>
            </Link>
          </CTAContainer>
        </Container>
      </Section>

      {/* About Preview */}
      <Section variant="light">
        <Container>
          <AboutGrid>
            <AboutContent>
              <AboutTitle>Why Choose Liria's Cleaning Service?</AboutTitle>
              <AboutText>
                With years of experience serving Suffolk County, Liria's Cleaning Service has built a reputation for
                reliability, professionalism, and exceptional results. We understand that your time is valuable, which
                is why we offer flexible scheduling and deliver consistently excellent service.
              </AboutText>
              <AboutFeatures>
                <Feature>✓ Professional & Certified Team</Feature>
                <Feature>✓ Flexible Scheduling</Feature>
                <Feature>✓ Eco-Friendly Products</Feature>
                <Feature>✓ 100% Satisfaction Guaranteed</Feature>
              </AboutFeatures>
              <Link to="/about">
                <Button variant="primary">Learn More About Us</Button>
              </Link>
            </AboutContent>
            <AboutImage
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              alt="Professional cleaning team at work"
              loading="lazy"
            />
          </AboutGrid>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
