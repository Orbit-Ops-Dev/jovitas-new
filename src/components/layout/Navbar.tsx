import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <LogoText>Liria's Cleaning Service</LogoText>
        </Logo>

        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)} $isOpen={isMenuOpen}>
          <span />
          <span />
          <span />
        </HamburgerButton>

        <NavMenu $isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <NavItem key={item.path}>
              <NavLink
                to={item.path}
                $isActive={location.pathname === item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </NavItem>
          ))}
          <NavItem>
            <CallButton href="tel:+16316054192">
              Call Us: (631) 605-4192
            </CallButton>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
`;

const LogoText = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  position: relative;
  width: 35px;
  height: 30px;

  span {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.dark};
    transition: all 0.3s ease-in-out;
    position: absolute;
    left: 5px;
    transform-origin: center;

    &:nth-child(1) {
      top: ${({ $isOpen }) => ($isOpen ? '13px' : '6px')};
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      top: 13px;
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
    }

    &:nth-child(3) {
      top: ${({ $isOpen }) => ($isOpen ? '13px' : '20px')};
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const NavMenu = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ $isOpen }) => ($isOpen ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
    padding: ${({ $isOpen, theme }) => ($isOpen ? theme.spacing.lg : '0')};
    gap: ${({ theme }) => theme.spacing.md};
    max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
    overflow: hidden;
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, padding 0.3s ease-in-out;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.dark};
  font-weight: ${({ $isActive, theme }) =>
    $isActive ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.regular};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CallButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
  }
`;

export default Navbar;
