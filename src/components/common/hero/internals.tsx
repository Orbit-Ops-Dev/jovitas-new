import React from 'react';
import Container from '../container/internals';
import { HeroSectionProps } from './types';
import { Hero, HeroVideo, HeroImage, HeroOverlay, HeroContent, HeroTextContainer, HeroTitle, HeroSubtitle } from './styled';

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  variant = 'default',
  videoSrc,
  imageSrc,
  children,
  centered,
}) => {
  return (
    <Hero>
      {variant === 'video' && videoSrc && (
        <HeroVideo autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </HeroVideo>
      )}
      {variant === 'image' && imageSrc && <HeroImage src={imageSrc} alt="" aria-hidden />}
      <HeroOverlay $hasVideo={variant === 'video' || variant === 'image'} />
      <HeroContent>
        <Container>
          <HeroTextContainer $centered={centered ?? variant !== 'video'}>
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
