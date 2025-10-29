import styled from 'styled-components';

// Intro Section Styles
export const IntroText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing['3xl']};
`;

// Services Grid Styles
export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};

  /* For exactly 3 cards: 2 on top, 1 centered below */
  &:has(> *:nth-child(3):last-child) {
    grid-template-columns: repeat(2, minmax(350px, 1fr));
    grid-template-rows: auto auto;

    /* First two cards go in the top row */
    > *:nth-child(1),
    > *:nth-child(2) {
      grid-row: 1;
    }

    /* Third card goes in the second row, centered */
    > *:nth-child(3) {
      grid-row: 2;
      grid-column: 1 / -1;
      justify-self: center;
      max-width: minmax(350px, 1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;

    /* Reset special layout on mobile - all cards stack vertically */
    &:has(> *:nth-child(3):last-child) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;

      > *:nth-child(1),
      > *:nth-child(2),
      > *:nth-child(3) {
        grid-row: auto;
        grid-column: auto;
        justify-self: stretch;
        max-width: none;
      }
    }
  }
`;

// Additional Services Section Styles
export const AdditionalServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const AdditionalService = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const AdditionalServiceTitle = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const AdditionalServiceText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

// Map Section Styles
export const MapTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
