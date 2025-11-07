import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Nav, NavContainer, Logo, HamburgerButton, NavMenu, NavItem, NavLink, SocialLinks, SocialLink } from './styled';
import whiteLogo from '../../../assets/logo-white.png';

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
        <Logo>
          <img src={whiteLogo} alt="Jovita's Cleaning Service" style={{ height: '120px', width: 'auto' }} />
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
            href="https://www.facebook.com/jovita.s.cleaning.2025"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/jovitascleaningatx/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialLink>
          <SocialLink
            href="https://api.whatsapp.com/send/?phone=%2B15126618096&text&type=phone_number&app_absent=0"
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
