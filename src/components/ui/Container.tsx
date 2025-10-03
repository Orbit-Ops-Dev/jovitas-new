import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
  noPadding?: boolean;
}

const StyledContainer = styled.div<{
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

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '1200px',
  noPadding = false,
}) => {
  return (
    <StyledContainer $maxWidth={maxWidth} $noPadding={noPadding}>
      {children}
    </StyledContainer>
  );
};

export default Container;
