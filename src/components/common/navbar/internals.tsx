import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  Logo,
  BrandMark,
  BrandText,
  BrandName,
  BrandDescriptor,
  HamburgerButton,
  NavMenu,
  NavItem,
  NavLink,
  DrawerBrand,
  DrawerBrandName,
  DrawerBrandMeta,
  SocialLinks,
  SocialLink,
} from './styled';
import logoMark from '../../../assets/logo-pink-output.png';
import { BRAND } from '../../../constants/brand';

// Below this scroll position the navbar always stays visible (roughly its own height).
const REVEAL_THRESHOLD = 80;
// Ignore tiny scroll jitters so the bar doesn't flicker.
const SCROLL_DELTA = 8;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // Hide on scroll-down, reveal on scroll-up (the CSS restricts the effect to mobile).
  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const diff = currentY - lastScrollY.current;

        if (currentY < REVEAL_THRESHOLD) {
          setIsHidden(false);
        } else if (Math.abs(diff) > SCROLL_DELTA) {
          setIsHidden(diff > 0);
        }

        lastScrollY.current = currentY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'About', path: '/#about' },
    { label: 'Contact', path: '/#contact' },
  ];

  return (
    <Nav $hidden={isHidden && !isMenuOpen}>
      <NavContainer>
        {/* The mark is decorative here — the adjacent wordmark carries the accessible name. */}
        <Logo to="/" aria-label={`${BRAND.legalName}, home`} onClick={() => setIsMenuOpen(false)}>
          <BrandMark src={logoMark} alt="" />
          <BrandText>
            <BrandName>{BRAND.shortName}</BrandName>
            <BrandDescriptor>
              {BRAND.descriptor} <span>{BRAND.suffix}</span>
            </BrandDescriptor>
          </BrandText>
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

          <DrawerBrand>
            <DrawerBrandName>{BRAND.legalName}</DrawerBrandName>
            <DrawerBrandMeta>Austin, TX &middot; Locally owned</DrawerBrandMeta>
          </DrawerBrand>
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
            href="https://api.whatsapp.com/send/?phone=%2B15126589899&text&type=phone_number&app_absent=0"
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
