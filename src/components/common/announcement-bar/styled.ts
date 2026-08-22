import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

/**
 * Sits directly above the sticky <Nav /> in the normal document flow, so it
 * scrolls away on its own and the navbar still pins to top: 0 without any
 * offset math.
 */
export const Bar = styled.aside`
  position: relative;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
`;

export const BarContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  /* Right padding leaves room for the absolutely positioned dismiss button. */
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const Message = styled.p`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 2px ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: rgba(255, 255, 255, 0.55);
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;

  svg {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }

  /* Collapses to just the gift icon on phones so the badge, headline and CTA
     fit in two rows instead of three. */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
    background-color: transparent;
  }
`;

export const BadgeText = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Headline = styled.strong`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

/** Secondary sentence — dropped on tablet and below so the bar stays one line. */
export const Detail = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const CTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  text-decoration: none;
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.textWhite};
    transform: translateY(-1px);
  }

  svg {
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover svg {
    transform: translateX(2px);
  }
`;

export const DismissButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing.md};
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  cursor: pointer;
  opacity: 0.7;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.45);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    right: ${({ theme }) => theme.spacing.xs};
  }
`;
