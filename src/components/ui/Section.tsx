import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'primary' | 'secondary';
  id?: string;
  noPadding?: boolean;
}

const StyledSection = styled.section<{
  $variant: SectionProps['variant'];
  $noPadding: boolean;
}>`
  width: 100%;
  padding: ${({ $noPadding, theme }) =>
    $noPadding ? '0' : `${theme.spacing['4xl']} ${theme.spacing.xl}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ $noPadding, theme }) =>
      $noPadding ? '0' : `${theme.spacing['3xl']} ${theme.spacing.lg}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ $noPadding, theme }) =>
      $noPadding ? '0' : `${theme.spacing['2xl']} ${theme.spacing.md}`};
  }

  /* Variant styles */
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'dark':
        return `
          background-color: ${theme.colors.bgDark};
          color: ${theme.colors.textInverse};
        `;
      case 'primary':
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.bgSecondary};
          color: ${theme.colors.textPrimary};
        `;
      default: // light
        return `
          background-color: ${theme.colors.bgPrimary};
          color: ${theme.colors.textPrimary};
        `;
    }
  }}
`;

const Section: React.FC<SectionProps> = ({
  children,
  variant = 'light',
  id,
  noPadding = false,
}) => {
  return (
    <StyledSection $variant={variant} $noPadding={noPadding} id={id}>
      {children}
    </StyledSection>
  );
};

export default Section;
