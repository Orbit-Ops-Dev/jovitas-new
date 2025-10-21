import Section from '../../common/section/Section';
import Container from '../../common/container/internals';
import HeroSection from '../../common/hero/internals';
import TestimonialCard from './testimonials/internals';
import FAQAccordion from './faq/internals';
import SectionTitle from '../../common/section/SectionTitle';
import { faqs } from './faq/data';
import { testimonials } from './testimonials/data';
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
  TestimonialsGrid,
} from './styled';

const AboutPage = () => {
  return (
    <>
      <HeroSection
        title="About Liria's Cleaning Service"
        subtitle="Professional, reliable, and trustworthy cleaning services"
      />

      <Section variant="secondary">
        <Container>
          {/* Our Story Section */}
          <ContentSection>
            <TextContent>
              <SectionTitle>Our Story</SectionTitle>
              <Text>
                Liria's Cleaning Service has been serving Suffolk County with dedication and professionalism. We
                understand that your home or business is important to you, and we treat every space with the care and
                attention it deserves.
              </Text>
              <Text>
                Our commitment to excellence and customer satisfaction has made us a trusted name in residential and
                commercial cleaning throughout the Bellport, NY area.
              </Text>
            </TextContent>
          </ContentSection>

          {/* Why Choose Us Section */}
          <ContentSection>
            <TextContent>
              <SectionTitle>Why Choose Us?</SectionTitle>
              <FeaturesList>
                <FeatureItem>
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>Professional & Trustworthy</FeatureTitle>
                    <FeatureText>
                      Our team is experienced, reliable, and dedicated to providing exceptional service.
                    </FeatureText>
                  </FeatureContent>
                </FeatureItem>

                <FeatureItem>
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>Flexible Scheduling</FeatureTitle>
                    <FeatureText>
                      We work around your schedule with availability Monday through Sunday, 8 AM to 6 PM.
                    </FeatureText>
                  </FeatureContent>
                </FeatureItem>

                <FeatureItem>
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>Satisfaction Guaranteed</FeatureTitle>
                    <FeatureText>We're not satisfied until you are. We stand behind our work 100%.</FeatureText>
                  </FeatureContent>
                </FeatureItem>

                <FeatureItem>
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>Responsive Communication</FeatureTitle>
                    <FeatureText>
                      We respond quickly to inquiries and keep you informed throughout the process.
                    </FeatureText>
                  </FeatureContent>
                </FeatureItem>
              </FeaturesList>
            </TextContent>
          </ContentSection>

          {/* Our Commitment Section */}
          <ContentSection>
            <TextContent>
              <SectionTitle>Our Commitment</SectionTitle>
              <Text>
                We are committed to providing top-quality cleaning services that exceed your expectations. Whether you
                need a one-time deep clean or regular maintenance, we bring professionalism, attention to detail, and a
                personal touch to every job.
              </Text>
            </TextContent>
          </ContentSection>
        </Container>
      </Section>

      {/* What Our Clients Say Section */}
      <Section id="testimonials">
        <Container>
          <SectionTitle align="center">What Our Clients Say About Us</SectionTitle>
          <TestimonialsGrid>
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </TestimonialsGrid>
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
