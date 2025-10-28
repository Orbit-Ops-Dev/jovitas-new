import { styled } from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 60px;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.1;
    font-family: Georgia, serif;
    line-height: 1;
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px);
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

export const Star = styled.span<{ $filled: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ $filled }) => ($filled ? '#FFD700' : '#E0E0E0')};
  text-shadow: ${({ $filled }) => ($filled ? '0 0 2px rgba(255, 215, 0, 0.3)' : 'none')};
`;

export const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  font-style: italic;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  flex: 1;
  position: relative;
  z-index: 1;
`;

export const TestimonialAuthor = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  text-align: right;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, ${({ theme }) => theme.colors.primary}33, transparent);
  }
`;
