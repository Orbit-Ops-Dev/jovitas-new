import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Nav,
  NavContainer,
  Logo,
  LogoText,
  HamburgerButton,
  NavMenu,
  NavItem,
  NavLink,
  CallButton,
} from './styled';

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

        <HamburgerButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          $isOpen={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </HamburgerButton>

        <NavMenu $isOpen={isMenuOpen}>
          {navItems.map(item => (
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

export default Navbar;
