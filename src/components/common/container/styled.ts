import { styled } from 'styled-components';

export const StyledContainer = styled.div<{
  $maxWidth: string;
  $noPadding: boolean;
}>`
  max-width: ${({ $maxWidth }) => $maxWidth};
  margin: 0 auto;
  padding: ${({ $noPadding, theme }) =>
    $noPadding ? '0' : `0 ${theme.spacing.xl}`};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ $noPadding, theme }) =>
      $noPadding ? '0' : `0 ${theme.spacing.lg}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ $noPadding, theme }) =>
      $noPadding ? '0' : `0 ${theme.spacing.md}`};
  }
`;
