import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// TODO: Update navigation items with actual business pages
// TODO: Replace logo placeholder with actual logo

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
];

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: ${({ theme }) => theme.zIndex.sticky};
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const NavLinks = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.xl};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-200%)'};
    opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
    transition: all ${({ theme }) => theme.transitions.normal};
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CTAButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.textPrimary};
    transition: all ${({ theme }) => theme.transitions.fast};
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Liria</Logo>

        <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </HamburgerButton>

        <NavLinks $isOpen={isOpen}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
