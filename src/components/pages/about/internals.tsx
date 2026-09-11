import Section from '../../common/section/Section';
import Container from '../../common/container/internals';
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

const AboutSection = () => {
  return (
    <>
      {/* About: our approach + what sets us apart */}
      <Section id="about">
        <Container>
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

export default AboutSection;
