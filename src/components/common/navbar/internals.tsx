import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Nav, NavContainer, Logo, LogoText, HamburgerButton, NavMenu, NavItem, NavLink, SocialLinks, SocialLink } from './styled';

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
          <LogoText>JCS</LogoText>
        </Logo>

        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)} $isOpen={isMenuOpen}>
          <span />
          <span />
          <span />
        </HamburgerButton>

        <NavMenu $isOpen={isMenuOpen}>
          {navItems.map(item => (
            <NavItem key={item.path}>
              <NavLink to={item.path} $isActive={location.pathname === item.path} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>

        <SocialLinks>
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
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
