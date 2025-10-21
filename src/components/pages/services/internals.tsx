import Section from '../../common/section/Section.tsx';
import Container from '../../common/container/internals.tsx';
import HeroSection from '../../common/hero/internals.tsx';
import ServiceDetailCard from './card/internals.tsx';
import ServiceAreaMap from './map/internals.tsx';
import SectionTitle from '../../common/section/SectionTitle.tsx';
import { servicesDetailed } from './data.ts';
import {
  IntroText,
  ServicesGrid,
  AdditionalServicesGrid,
  AdditionalService,
  AdditionalServiceTitle,
  AdditionalServiceText,
  MapTitle,
} from './styled.ts';

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
            Whether you need regular maintenance or a one-time deep clean, Liria's Cleaning Service has the expertise
            and equipment to deliver exceptional results. All services are customizable to meet your specific needs.
          </IntroText>

          <ServicesGrid>
            {servicesDetailed.map(service => (
              <ServiceDetailCard key={service.id} service={service} />
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      {/* Additional Services */}
      <Section>
        <Container>
          <SectionTitle>Additional Services</SectionTitle>
          <AdditionalServicesGrid>
            <AdditionalService>
              <AdditionalServiceTitle>Condo Cleaning</AdditionalServiceTitle>
              <AdditionalServiceText>
                Specialized cleaning for condominium units with attention to detail.
              </AdditionalServiceText>
            </AdditionalService>
            <AdditionalService>
              <AdditionalServiceTitle>Summer Housekeeping</AdditionalServiceTitle>
              <AdditionalServiceText>
                Seasonal deep cleaning and maintenance for summer properties.
              </AdditionalServiceText>
            </AdditionalService>
            <AdditionalService>
              <AdditionalServiceTitle>Commercial Cleaning</AdditionalServiceTitle>
              <AdditionalServiceText>
                Comprehensive cleaning solutions for businesses of all sizes.
              </AdditionalServiceText>
            </AdditionalService>
            <AdditionalService>
              <AdditionalServiceTitle>Residential Cleaning</AdditionalServiceTitle>
              <AdditionalServiceText>
                Regular or one-time cleaning services for all residential properties.
              </AdditionalServiceText>
            </AdditionalService>
          </AdditionalServicesGrid>
        </Container>
      </Section>

      {/* Service Areas */}
      <Section variant="secondary">
        <Container>
          <MapTitle>Our Service Area</MapTitle>
          <ServiceAreaMap />
        </Container>
      </Section>
    </>
  );
};

export default ServicesPage;
