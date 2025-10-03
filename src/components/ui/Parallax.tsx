import React from 'react';
import styled from 'styled-components';

interface ParallaxProps {
  backgroundImage: string;
  children?: React.ReactNode;
  height?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const ParallaxWrapper = styled.div<{
  $height: string;
}>`
  position: relative;
  height: ${({ $height }) => $height};
  overflow: hidden;
`;

const ParallaxBackground = styled.div<{
  $backgroundImage: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transform: translateZ(0);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-attachment: scroll;
  }
`;

const Overlay = styled.div<{ $opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${({ $opacity }) => $opacity});
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
`;

const Parallax: React.FC<ParallaxProps> = ({
  backgroundImage,
  children,
  height = '400px',
  overlay = true,
  overlayOpacity = 0.5,
}) => {
  return (
    <ParallaxWrapper $height={height}>
      <ParallaxBackground $backgroundImage={backgroundImage} />
      {overlay && <Overlay $opacity={overlayOpacity} />}
      {children && <Content>{children}</Content>}
    </ParallaxWrapper>
  );
};

export default Parallax;
