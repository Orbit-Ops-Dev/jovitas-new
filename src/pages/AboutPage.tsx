import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';

const AboutPage: React.FC = () => {
  return (
    <>
      <Section>
        <Container>
          <SectionTitle>About Us</SectionTitle>
          {/* TODO: Add company story, team members, mission/vision */}
          <p>Content Coming Soon</p>
        </Container>
      </Section>
    </>
  );
};

export default AboutPage;
