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
                We deliver professional and reliable cleaning services tailored to meet your needs, ensuring spotless
                and welcoming spaces every time around Austin, TX!
              </AboutText>
              <AboutText>
                Serving a variety of locations, we specialize in move-in/move-out cleaning, post-construction cleaning,
                and residential cleaning (house cleaning). Whether you're settling into a new home, refreshing your
                living space, or tidying up after construction, our tailored cleaning solutions ensure a spotless,
                inviting environment. Our mission is to deliver exceptional service with attention to detail, creating
                spaces that truly shine. Thank you for trusting us to make your space clean, fresh, and welcoming!
              </AboutText>
              <AboutText>
                Our mission is to deliver exceptional service that creates inviting, spotless environments for our
                clients.
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
