import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// TODO: Update contact information with actual business details
// TODO: Update social media links
// TODO: Add actual business address and phone number

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textInverse};
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  margin-top: auto;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const MobileFooterNav = styled.nav`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
    flex-wrap: nowrap;
  }
`;

const MobileFooterLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.primary : theme.colors.gray300};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ $isActive }) => $isActive ? '600' : '400'};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xs};
  border-bottom: 3px solid ${({ theme, $isActive }) => $isActive ? theme.colors.primary : 'transparent'};
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.white};
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray300};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  transition: all ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray700};
  padding-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin: 0;
`;

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
          {pageLinks.map((link) => (
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
            <FooterLink to="/services#house-cleaning">House Cleaning</FooterLink>
            <FooterLink to="/services#apartment-cleaning">Apartment Cleaning</FooterLink>
            <FooterLink to="/services#office-cleaning">Office Cleaning</FooterLink>
            <FooterLink to="/services#deep-cleaning">Deep Cleaning</FooterLink>
            <FooterLink to="/services#post-construction-cleaning">Post Construction</FooterLink>
            <FooterLink to="/services#after-party-cleaning">After Party Cleaning</FooterLink>
          </FooterColumn>

          {/* Social & Newsletter */}
          <FooterColumn>
            <FooterTitle>Connect With Us</FooterTitle>
            <SocialLinks>
              {/* TODO: Add actual social media links */}
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
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
            &copy; {currentYear} Liria Housekeeping Services. All rights reserved.
          </Copyright>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
