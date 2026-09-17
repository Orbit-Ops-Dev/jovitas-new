import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Nav = styled.nav<{ $hidden: boolean }>`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: ${({ theme }) => theme.zIndex.sticky};
  transition: transform ${({ theme }) => theme.transitions.normal};

  /* Auto-hide on scroll-down / reveal on scroll-up — mobile only. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    transform: ${({ $hidden }) => ($hidden ? 'translateY(-100%)' : 'translateY(0)')};
  }
`;

export const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* The three flex:1 regions would otherwise butt together once the wordmark fills
     the logo's third. */
  gap: ${({ theme }) => theme.spacing.md};
  height: ${({ theme }) => theme.layout.navHeight};
`;

export const Logo = styled(Link)`
  text-decoration: none;
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;
`;

export const BrandMark = styled.img`
  /* The source PNG is cropped to its artwork, so this height is the mark's real
     height. Kept under theme.layout.navHeight so it never crowds the bar. */
  height: 44px;
  width: auto;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 36px;
  }
`;

export const BrandText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.05;
  padding-left: ${({ theme }) => theme.spacing.sm};
  border-left: 1px solid rgba(${({ theme }) => theme.colors.accentRgb}, 0.35);

  /* Below this there is no room for a wordmark beside the hamburger. */
  @media (max-width: 360px) {
    display: none;
  }
`;

export const BrandName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.01em;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

export const BrandDescriptor = styled.span`
  margin-top: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize['2xs']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  white-space: nowrap;

  span {
    color: rgba(${({ theme }) => theme.colors.accentRgb}, 0.6);
  }

  /* "LLC" only fits alongside the full nav on wide screens; it still appears in the
     mobile drawer and the footer. */
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xs']};

    span {
      display: none;
    }
  }
`;

export const HamburgerButton = styled.button<{ $isOpen: boolean }>`
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
    background-color: ${({ theme }) => theme.colors.accent};
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

export const NavMenu = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;

  /* The wordmark lockup and the social icons squeeze this row before the hamburger
     takes over at 768px. */
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ $isOpen }) => ($isOpen ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
    padding: ${({ $isOpen, theme }) => ($isOpen ? theme.spacing.lg : '0')};
    gap: ${({ theme }) => theme.spacing.md};
    max-height: ${({ $isOpen }) => ($isOpen ? '600px' : '0')};
    overflow: hidden;
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out,
      padding 0.3s ease-in-out;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ $isActive, theme }) =>
    $isActive ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.regular};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: ${({ theme }) => theme.transitions.fast};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ $isActive }) => ($isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent')};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
  }
`;

/* Carries the full legal name on mobile, where the bar itself has no room for it.
   A <li> because NavMenu is a <ul>. */
export const DrawerBrand = styled.li`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing.sm};
    padding-top: ${({ theme }) => theme.spacing.md};
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const DrawerBrandName = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: rgba(255, 255, 255, 0.62);
  letter-spacing: 0.03em;
`;

export const DrawerBrandMeta = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize['3xs']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;
