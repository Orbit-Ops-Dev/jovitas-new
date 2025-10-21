import React from 'react';
import styled from 'styled-components';

interface SectionTitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  subtitle?: string;
  variant?: 'h1' | 'h2' | 'h3';
}

const TitleWrapper = styled.div<{ $align: string }>`
  text-align: ${({ $align }) => $align};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Title = styled.h2<{ $variant: string }>`
  font-size: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'h1':
        return theme.typography.fontSize['5xl'];
      case 'h3':
        return theme.typography.fontSize['3xl'];
      default:
        return theme.typography.fontSize['4xl'];
    }
  }};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: inherit;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme, $variant }) => {
      switch ($variant) {
        case 'h1':
          return theme.typography.fontSize['4xl'];
        case 'h3':
          return theme.typography.fontSize['2xl'];
        default:
          return theme.typography.fontSize['3xl'];
      }
    }};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme, $variant }) => {
      switch ($variant) {
        case 'h1':
          return theme.typography.fontSize['3xl'];
        case 'h3':
          return theme.typography.fontSize.xl;
        default:
          return theme.typography.fontSize['2xl'];
      }
    }};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  align = 'center',
  subtitle,
  variant = 'h2',
}) => {
  return (
    <TitleWrapper $align={align}>
      <Title as={variant} $variant={variant}>
        {children}
      </Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleWrapper>
  );
};

export default SectionTitle;
