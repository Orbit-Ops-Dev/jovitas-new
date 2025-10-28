import Section from '../../common/section/Section.tsx';
import Container from '../../common/container/internals.tsx';
import Button from '../../common/button/internals.tsx';
import Carousel from './carousel/internals.tsx';
import ServicePreviewCard from './service-preview/internals.tsx';
import HeroSection from '../../common/hero/internals.tsx';
import SectionTitle from '../../common/section/SectionTitle.tsx';
import { services } from '../services/data.ts';
import { HeroButtons, StyledLink, SectionHeader, SectionDescription, CarouselWrapper, CTAContainer } from './styled.ts';
import { testimonials } from './testimonials/data.ts';
import TestimonialCard from './testimonials/internals.tsx';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Exceptional Cleaning Services for Every Need"
        subtitle="Experience top-quality residential and commercial cleaning tailored to your requirements."
        variant="video"
        videoSrc="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
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
            <SectionTitle>Exceptional Care In Every Service</SectionTitle>
            <SectionDescription>
              Top-tier cleaning for homes, offices, and post-construction areas, expertly handled by our team
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
