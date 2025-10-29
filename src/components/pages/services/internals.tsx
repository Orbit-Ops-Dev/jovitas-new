import Section from '../../common/section/Section.tsx';
import Container from '../../common/container/internals.tsx';
import HeroSection from '../../common/hero/internals.tsx';
import ServiceDetailCard from './card/internals.tsx';
import { servicesDetailed } from './data.ts';
import { IntroText, ServicesGrid } from './styled.ts';

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Cleaning Services"
        subtitle="Professional cleaning solutions for every space and situation"
      />

      {/* Services List */}
      <Section variant="secondary">
        <Container>
          <IntroText>
            At Jovitas Cleaning Service, we understand that every cleaning situation is unique. From maintaining your
            home's comfort with regular residential cleaning to preparing spaces for new beginnings with
            move-in/move-out services, or ensuring your newly constructed property is move-in ready with
            post-construction cleaning - we deliver thorough, professional results tailored to your specific needs.
          </IntroText>

          <ServicesGrid>
            {servicesDetailed.map(service => (
              <ServiceDetailCard key={service.id} service={service} />
            ))}
          </ServicesGrid>
        </Container>
      </Section>
    </>
  );
};

export default ServicesPage;
