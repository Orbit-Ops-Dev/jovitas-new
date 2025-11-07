import { styled } from 'styled-components';

export const Hero = styled.section`
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.dark} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 500px;
  }
`;

export const HeroVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
`;

export const HeroOverlay = styled.div<{ $hasVideo?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, ${({ $hasVideo }) => ($hasVideo ? '0.5' : '0.2')});
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

export const HeroTextContainer = styled.div<{ $centered?: boolean }>`
  max-width: 700px;
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ $centered }) => ($centered ? 'center' : 'left')};
  margin: ${({ $centered }) => ($centered ? '0 auto' : '0')};
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  opacity: 0.95;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;
