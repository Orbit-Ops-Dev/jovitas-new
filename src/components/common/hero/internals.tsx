import React from 'react';
import Container from '../container/internals';
import { HeroSectionProps } from './types';
import {
  Hero,
  HeroVideo,
  HeroOverlay,
  HeroContent,
  HeroTextContainer,
  HeroTitle,
  HeroSubtitle,
} from './styled';

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  variant = 'default',
  videoSrc,
  children,
}) => {
  return (
    <Hero>
      {variant === 'video' && videoSrc && (
        <HeroVideo autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </HeroVideo>
      )}
      <HeroOverlay $hasVideo={variant === 'video'} />
      <HeroContent>
        <Container>
          <HeroTextContainer $centered={variant !== 'video'}>
            <HeroTitle>{title}</HeroTitle>
            {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
            {children}
          </HeroTextContainer>
        </Container>
      </HeroContent>
    </Hero>
  );
};

export default HeroSection;
