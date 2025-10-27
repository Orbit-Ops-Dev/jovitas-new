import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 1000;
`;

export const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  flex: 1;
`;

export const LogoText = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
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

export const NavMenu = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;

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
    max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
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
  color: ${({ theme }) => theme.colors.white};
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
