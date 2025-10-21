import { styled } from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-4px);
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Star = styled.span<{ $filled: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ $filled }) => ($filled ? '#FFD700' : '#E0E0E0')};
`;

export const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-style: italic;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const TestimonialAuthor = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  text-align: right;
`;
