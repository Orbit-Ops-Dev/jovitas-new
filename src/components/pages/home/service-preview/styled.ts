import { styled } from 'styled-components';

export const Card = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-4px);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gray100};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 200px;
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: ${({ theme }) => theme.spacing['2xl']};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

export const LearnMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.textPrimary};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
