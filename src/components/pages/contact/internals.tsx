import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Section from '../../common/section/Section';
import Container from '../../common/container/internals';
import Button from '../../common/button/internals';
import HeroSection from '../../common/hero/internals';
import contactImage from '../../../assets/home/contact.jpg';
import {
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
  PhotoSection,
  ContactPhoto,
  FormContainer,
  FormTitle,
  FormDescription,
  SuccessMessage,
  ErrorMessage,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  CheckboxGroup,
  CheckboxItem,
  Checkbox,
  CheckboxLabel,
  RadioGroup,
  RadioItem,
  Radio,
  RadioLabel,
  OtherServiceInput,
} from './styled';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    otherService: '',
    cleaningFrequency: '',
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

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter(s => s !== service),
    }));
  };

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      cleaningFrequency: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    // TODO: Replace with actual form submission logic (e.g., email service or backend API)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        services: [],
        otherService: '',
        cleaningFrequency: '',
        message: '',
      });
    }, 1500);
  };

  // Prefill message if provided via query params
  useEffect(() => {
    const prefillMessage = searchParams.get('prefillMessage');
    if (prefillMessage) {
      setFormData(prev => ({ ...prev, message: prefillMessage }));
    }
  }, [searchParams]);

  return (
    <>
      {/* Hero Section */}
      <HeroSection title="Contact Us" subtitle="Get your free consultation and custom quote today" />

      {/* Contact Info & Form */}
      <Section variant="secondary">
        <Container>
          <ContactGrid>
            {/* Contact Information */}
            <ContactInfo>
              <InfoTitle>Get In Touch</InfoTitle>
              <InfoText>
                Questions about our services or ready to schedule your cleaning? We'd love to hear from you! Contact us
                using any of the methods below, and we'll respond quickly.
              </InfoText>

              <ContactDetails>
                <ContactDetail>
                  <DetailContent>
                    <DetailTitle>Location</DetailTitle>
                    <DetailText>Servicing the Greater Austin, Texas Region!</DetailText>
                  </DetailContent>
                </ContactDetail>

                <ContactDetail>
                  <DetailContent>
                    <DetailTitle>Phone</DetailTitle>
                    <DetailText>
                      <PhoneLink href="tel:+5126589899">(512) 658-9899</PhoneLink>
                    </DetailText>
                  </DetailContent>
                </ContactDetail>

                <ContactDetail>
                  <DetailContent>
                    <DetailTitle>Business Hours</DetailTitle>
                    <DetailText>
                      Monday - Friday
                      <br />
                      8:00 AM - 5:30 PM CST
                    </DetailText>
                  </DetailContent>
                </ContactDetail>

                <ContactDetail>
                  <DetailContent>
                    <DetailTitle>Pricing</DetailTitle>
                    <DetailText>Custom quotes based on your needs</DetailText>
                  </DetailContent>
                </ContactDetail>
              </ContactDetails>

              <PhotoSection>
                <ContactPhoto src={contactImage} alt="Contact us for professional cleaning services" />
              </PhotoSection>
            </ContactInfo>

            {/* Contact Form */}
            <FormContainer>
              <FormTitle>Contact Us</FormTitle>
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
                  <Label>Service Needed *</Label>
                  <CheckboxGroup>
                    <CheckboxItem>
                      <Checkbox
                        type="checkbox"
                        id="residential"
                        checked={formData.services.includes('residential')}
                        onChange={e => handleServiceChange('residential', e.target.checked)}
                      />
                      <CheckboxLabel htmlFor="residential">Residential</CheckboxLabel>
                    </CheckboxItem>
                    <CheckboxItem>
                      <Checkbox
                        type="checkbox"
                        id="move-in-out"
                        checked={formData.services.includes('move-in-out')}
                        onChange={e => handleServiceChange('move-in-out', e.target.checked)}
                      />
                      <CheckboxLabel htmlFor="move-in-out">Move In/Out</CheckboxLabel>
                    </CheckboxItem>
                    <CheckboxItem>
                      <Checkbox
                        type="checkbox"
                        id="post-construction"
                        checked={formData.services.includes('post-construction')}
                        onChange={e => handleServiceChange('post-construction', e.target.checked)}
                      />
                      <CheckboxLabel htmlFor="post-construction">Post Construction</CheckboxLabel>
                    </CheckboxItem>
                    <CheckboxItem>
                      <Checkbox
                        type="checkbox"
                        id="other"
                        checked={formData.services.includes('other')}
                        onChange={e => handleServiceChange('other', e.target.checked)}
                      />
                      <CheckboxLabel htmlFor="other">Other</CheckboxLabel>
                    </CheckboxItem>
                  </CheckboxGroup>
                  {formData.services.includes('other') && (
                    <OtherServiceInput
                      type="text"
                      name="otherService"
                      value={formData.otherService}
                      onChange={handleInputChange}
                      placeholder="Please specify your service"
                    />
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>Cleaning Frequency *</Label>
                  <RadioGroup>
                    <RadioItem>
                      <Radio
                        type="radio"
                        id="recurring"
                        name="cleaningFrequency"
                        value="recurring"
                        checked={formData.cleaningFrequency === 'recurring'}
                        onChange={handleFrequencyChange}
                      />
                      <RadioLabel htmlFor="recurring">Recurring</RadioLabel>
                    </RadioItem>
                    <RadioItem>
                      <Radio
                        type="radio"
                        id="one-time"
                        name="cleaningFrequency"
                        value="one-time"
                        checked={formData.cleaningFrequency === 'one-time'}
                        onChange={handleFrequencyChange}
                      />
                      <RadioLabel htmlFor="one-time">One-Time</RadioLabel>
                    </RadioItem>
                  </RadioGroup>
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
                  {formStatus === 'submitting' ? 'Sending...' : 'Submit Request'}
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
