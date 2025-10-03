import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';

const GalleryPage: React.FC = () => {
  return (
    <>
      <Section>
        <Container>
          <SectionTitle>Gallery</SectionTitle>
          {/* TODO: Add before/after image gallery */}
          <p>Content Coming Soon</p>
        </Container>
      </Section>
    </>
  );
};

export default GalleryPage;
