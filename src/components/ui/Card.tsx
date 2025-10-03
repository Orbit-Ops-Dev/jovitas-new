import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  elevated?: boolean;
  noPadding?: boolean;
  hoverable?: boolean;
}

const StyledCard = styled.div<{
  $elevated: boolean;
  $noPadding: boolean;
  $hoverable: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ $noPadding, theme }) =>
    $noPadding ? '0' : theme.spacing.xl};
  box-shadow: ${({ $elevated, theme }) =>
    $elevated ? theme.shadows.lg : theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitions.normal};

  ${({ $hoverable, theme }) => $hoverable && `
    cursor: pointer;

    &:hover {
      box-shadow: ${theme.shadows.xl};
      transform: translateY(-4px);
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ $noPadding, theme }) =>
      $noPadding ? '0' : theme.spacing.lg};
  }
`;

const Card: React.FC<CardProps> = ({
  children,
  elevated = false,
  noPadding = false,
  hoverable = false,
}) => {
  return (
    <StyledCard
      $elevated={elevated}
      $noPadding={noPadding}
      $hoverable={hoverable}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
