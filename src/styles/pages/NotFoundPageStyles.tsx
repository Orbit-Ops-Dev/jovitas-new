import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['5xl']} 0;
`;

export const ErrorCode = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

export const ErrorMessage = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ErrorDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;
