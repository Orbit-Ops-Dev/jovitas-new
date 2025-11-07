import React, { useState, useEffect } from 'react';
import { LightboxProps } from './types';
import {
  Overlay,
  Modal,
  CloseButton,
  ImageContainer,
  Image,
  NavButton,
  Counter,
  ThumbnailContainer,
  Thumbnail,
} from './styled';

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
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <ImageContainer>
          {images.length > 1 && (
            <NavButton onClick={goToPrevious} $position="left">
              &#8249;
            </NavButton>
          )}

          <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />

          {images.length > 1 && (
            <NavButton onClick={goToNext} $position="right">
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
                $isActive={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </ThumbnailContainer>
        )}
      </Modal>
    </Overlay>
  );
};

export default Lightbox;
