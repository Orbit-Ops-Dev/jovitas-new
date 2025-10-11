import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const Lightbox: React.FC<LightboxProps> = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <ImageContainer>
          {images.length > 1 && (
            <NavButton onClick={goToPrevious} position="left">
              &#8249;
            </NavButton>
          )}

          <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />

          {images.length > 1 && (
            <NavButton onClick={goToNext} position="right">
              &#8250;
            </NavButton>
          )}
        </ImageContainer>

        {images.length > 1 && (
          <Counter>
            {currentIndex + 1} / {images.length}
          </Counter>
        )}

        {images.length > 1 && (
          <ThumbnailContainer>
            {images.map((image, index) => (
              <Thumbnail
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                isActive={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </ThumbnailContainer>
        )}
      </Modal>
    </Overlay>
  );
};

// Styled Components

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  max-width: 80vw;
  max-height: 70vh;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const NavButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  ${({ position }) => position}: 10px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background 0.2s;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`;

const Counter = styled.div`
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow-x: auto;
  max-width: 80vw;
  padding: ${({ theme }) => theme.spacing.sm};

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
`;

const Thumbnail = styled.img<{ isActive: boolean }>`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  border: 2px solid ${({ isActive, theme }) => (isActive ? theme.colors.primary : 'transparent')};
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export default Lightbox;
