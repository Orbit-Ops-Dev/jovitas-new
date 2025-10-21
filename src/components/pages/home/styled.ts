import styled from 'styled-components';

// Hero Section Styles
export const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

// Section Header Styles
export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

export const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

// Carousel Section Styles
export const CarouselWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

export const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

// About Section Styles
export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const AboutContent = styled.div``;

export const AboutTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const AboutText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const AboutFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Feature = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 400px;
  max-height: 600px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 300px;
    max-height: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 250px;
    max-height: 400px;
  }
`;
