import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {
  FooterWrapper,
  FooterContainer,
  MobileFooterNav,
  MobileFooterLink,
  FooterGrid,
  FooterColumn,
  FooterTitle,
  FooterText,
  FooterLink,
  SocialLinks,
  SocialLink,
  FooterBottom,
  Copyright,
} from './styled';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const pageLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Mobile-only navigation */}
        <MobileFooterNav>
          {pageLinks.map(link => (
            <MobileFooterLink
              key={link.path}
              to={link.path}
              $isActive={location.pathname === link.path}
            >
              {link.label}
            </MobileFooterLink>
          ))}
        </MobileFooterNav>

        {/* Desktop footer grid */}
        <FooterGrid>
          {/* Company Info */}
          <FooterColumn>
            <FooterTitle>Liria Housekeeping</FooterTitle>
            <FooterText>
              Professional cleaning services for your home and business.
            </FooterText>
            {/* TODO: Add actual phone and email */}
            <FooterText>Phone: (555) 123-4567</FooterText>
            <FooterText>Email: info@liria.com</FooterText>
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/about#testimonials">Testimonials</FooterLink>
            <FooterLink to="/about#faq">FAQ</FooterLink>
          </FooterColumn>

          {/* Services */}
          <FooterColumn>
            <FooterTitle>Our Services</FooterTitle>
            <FooterLink to="/services#house-cleaning">
              House Cleaning
            </FooterLink>
            <FooterLink to="/services#apartment-cleaning">
              Apartment Cleaning
            </FooterLink>
            <FooterLink to="/services#office-cleaning">
              Office Cleaning
            </FooterLink>
            <FooterLink to="/services#deep-cleaning">Deep Cleaning</FooterLink>
            <FooterLink to="/services#post-construction-cleaning">
              Post Construction
            </FooterLink>
            <FooterLink to="/services#after-party-cleaning">
              After Party Cleaning
            </FooterLink>
          </FooterColumn>

          {/* Social & Newsletter */}
          <FooterColumn>
            <FooterTitle>Connect With Us</FooterTitle>
            <SocialLinks>
              {/* TODO: Add actual social media links */}
              <SocialLink
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </SocialLink>
              <SocialLink
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialLink>
              <SocialLink
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </SocialLink>
            </SocialLinks>
            <FooterText>
              Follow us on social media for tips and updates!
            </FooterText>
          </FooterColumn>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            &copy; {currentYear} Liria Housekeeping Services. All rights
            reserved.
          </Copyright>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
