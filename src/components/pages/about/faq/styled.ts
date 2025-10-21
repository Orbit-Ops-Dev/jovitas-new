import { styled } from 'styled-components';

export const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

export const FaqItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;

export const FaqQuestion = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme, $isOpen }) => ($isOpen ? theme.colors.lightGray : theme.colors.white)};
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
`;

export const FaqIcon = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  transition: transform ${({ theme }) => theme.transitions.fast};
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  flex-shrink: 0;
  margin-left: ${({ theme }) => theme.spacing.md};
`;

export const FaqAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height ${({ theme }) => theme.transitions.normal};
`;

export const FaqAnswerContent = styled.p`
  padding: 0 ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;
