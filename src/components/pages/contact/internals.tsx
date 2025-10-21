import React, { useState } from 'react';
import Section from '../../common/section/Section';
import Container from '../../common/container/internals';
import Button from '../../common/button/internals';
import {
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ContactGrid,
  ContactInfo,
  InfoTitle,
  InfoText,
  ContactDetails,
  ContactDetail,
  DetailContent,
  DetailTitle,
  DetailText,
  PhoneLink,
  SocialSection,
  SocialTitle,
  SocialLink,
  FormContainer,
  FormTitle,
  FormDescription,
  SuccessMessage,
  ErrorMessage,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Textarea,
} from './styled';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    // TODO: Replace with actual form submission logic (e.g., email service or backend API)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <Container>
            <HeroTitle>Contact Us</HeroTitle>
            <HeroSubtitle>Get your free consultation and custom quote today</HeroSubtitle>
          </Container>
        </HeroContent>
      </HeroSection>

      {/* Contact Info & Form */}
      <Section variant="secondary">
        <Container>
          <ContactGrid>
            {/* Contact Information */}
            <ContactInfo>
              <InfoTitle>Get In Touch</InfoTitle>
              <InfoText>
                Have questions or ready to book a cleaning? We're here to help! Reach out using any of the methods
                below, and we'll get back to you promptly.
              </InfoText>

              <ContactDetails>
                <ContactDetail>
                  <DetailContent>
                    <DetailTitle>Location</DetailTitle>
                    <DetailText>Suffolk County, Bellport NY</DetailText>
                  </DetailContent>
                </ContactDetail>

                <ContactDetail>
                  <DetailContent>
                    <DetailTitle>Phone</DetailTitle>
                    <DetailText>
                      <PhoneLink href="tel:+16316054192">(631) 605-4192</PhoneLink>
                      <br />
                      <PhoneLink href="tel:+16314648411">(631) 464-8411</PhoneLink>
                    </DetailText>
                  </DetailContent>
                </ContactDetail>

                <ContactDetail>
                  <DetailContent>
                    <DetailTitle>Business Hours</DetailTitle>
                    <DetailText>
                      Monday - Sunday
                      <br />
                      8:00 AM - 6:00 PM
                    </DetailText>
                  </DetailContent>
                </ContactDetail>

                <ContactDetail>
                  <DetailContent>
                    <DetailTitle>Pricing</DetailTitle>
                    <DetailText>
                      Custom quotes based on your needs
                      <br />
                      <strong>Free consultations available!</strong>
                    </DetailText>
                  </DetailContent>
                </ContactDetail>
              </ContactDetails>

              <SocialSection>
                <SocialTitle>Follow Us</SocialTitle>
                <SocialLink
                  href="https://www.facebook.com/profile.php?id=61579291254035"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit our Facebook Page
                </SocialLink>
              </SocialSection>
            </ContactInfo>

            {/* Contact Form */}
            <FormContainer>
              <FormTitle>Request a Quote</FormTitle>
              <FormDescription>Fill out the form below and we'll get back to you as soon as possible</FormDescription>

              {formStatus === 'success' && (
                <SuccessMessage>Thank you for contacting us! We'll get back to you soon.</SuccessMessage>
              )}

              {formStatus === 'error' && (
                <ErrorMessage>Something went wrong. Please try calling us instead.</ErrorMessage>
              )}

              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(631) 555-0123"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="service">Service Needed *</Label>
                  <Select id="service" name="service" value={formData.service} onChange={handleInputChange} required>
                    <option value="">Select a service</option>
                    <option value="house-cleaning">House Cleaning</option>
                    <option value="apartment-cleaning">Apartment Cleaning</option>
                    <option value="office-cleaning">Office Cleaning</option>
                    <option value="condo-cleaning">Condo Cleaning</option>
                    <option value="deep-cleaning">Deep Cleaning</option>
                    <option value="after-party">After Party Cleaning</option>
                    <option value="post-construction">Post Construction Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="summer-housekeeping">Summer Housekeeping</option>
                    <option value="other">Other</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us more about your cleaning needs, property size, preferred schedule, etc."
                  />
                </FormGroup>

                <Button type="submit" variant="primary" size="large" disabled={formStatus === 'submitting'} fullWidth>
                  {formStatus === 'submitting' ? 'Sending...' : 'Get Free Quote'}
                </Button>
              </Form>
            </FormContainer>
          </ContactGrid>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
