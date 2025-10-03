import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
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
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
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

  return (
    <FooterWrapper>
      <FooterContainer>
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
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/gallery">Gallery</FooterLink>
            <FooterLink to="/testimonials">Testimonials</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
          </FooterColumn>

          {/* Services */}
          <FooterColumn>
            <FooterTitle>Our Services</FooterTitle>
            <FooterText>Residential Cleaning</FooterText>
            <FooterText>Commercial Cleaning</FooterText>
            <FooterText>Deep Cleaning</FooterText>
            <FooterText>Move In/Out Cleaning</FooterText>
            <FooterText>Specialized Services</FooterText>
          </FooterColumn>

          {/* Social & Newsletter */}
          <FooterColumn>
            <FooterTitle>Connect With Us</FooterTitle>
            <SocialLinks>
              {/* TODO: Add actual social media links */}
              <SocialLink href="#" aria-label="Facebook">
                FB
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                IG
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                TW
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                LI
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
