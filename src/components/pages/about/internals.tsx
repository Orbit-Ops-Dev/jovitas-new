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
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { AboutGrid, AboutContent, AboutTitle, AboutText, AboutFeatures, Feature, AboutImage } from '../home/styled';

const AboutPage = () => {
  return (
    <>
      <HeroSection
        title="About Liria's Cleaning Service"
        subtitle="Professional, reliable, and trustworthy cleaning services"
      />

      {/* About Preview */}
      <Section variant="light">
        <Container>
          <AboutGrid>
            <AboutContent>
              <AboutTitle>A Short Story About Us</AboutTitle>
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

      <Section variant="secondary">
        <Container>
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
