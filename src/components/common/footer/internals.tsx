import React from 'react';
import { services } from '../../pages/services/data';
import {
  FooterWrapper,
  FooterContainer,
  FooterMain,
  FooterColumn,
  FooterTitle,
  FooterText,
  FooterLink,
  FooterBottom,
  Copyright,
} from './styled';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterMain>
          {/* Quick Links Section */}
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterColumn>

          {/* Services Column */}
          <FooterColumn>
            <FooterTitle>Our Services</FooterTitle>
            {services.map(service => (
              <FooterLink key={service.id} to={`/services#${service.slug}`}>
                {service.title}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Information Column */}
          <FooterColumn>
            <FooterTitle>Information</FooterTitle>
            <FooterText>Jovitascleaningatx@gmail.com</FooterText>
            <FooterText>Mon-Fri: 8:00am - 5:30pm</FooterText>
          </FooterColumn>
        </FooterMain>

        {/* Bottom - Copyright */}
        <FooterBottom>
          <Copyright>&copy; {currentYear} Jovita's Cleaning Services. All rights reserved.</Copyright>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
