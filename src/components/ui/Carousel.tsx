import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps {
  children: React.ReactNode;
  itemsPerView?: number;
  gap?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  infinite?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsPerView = 3,
  gap = 24,
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  infinite = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: infinite,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const items = React.Children.toArray(children);

  // Initialize scroll snaps and selected index
  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || !autoPlay) return;

    const intervalId = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else if (infinite) {
        emblaApi.scrollTo(0);
      }
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [emblaApi, autoPlay, autoPlayInterval, infinite]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const canScrollPrev = emblaApi?.canScrollPrev() ?? false;
  const canScrollNext = emblaApi?.canScrollNext() ?? false;

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {showArrows && (
          <ArrowButton
            position="left"
            onClick={scrollPrev}
            disabled={!infinite && !canScrollPrev}
            aria-label="Previous card"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </ArrowButton>
        )}

        <EmblaViewport ref={emblaRef}>
          <EmblaContainer gap={gap}>
            {items.map((child, index) => (
              <EmblaSlide
                key={index}
                itemsPerView={itemsPerView}
                gap={gap}
              >
                {child}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaViewport>

        {showArrows && (
          <ArrowButton
            position="right"
            onClick={scrollNext}
            disabled={!infinite && !canScrollNext}
            aria-label="Next card"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </ArrowButton>
        )}
      </CarouselWrapper>

      {showDots && scrollSnaps.length > 1 && (
        <DotsContainer>
          {scrollSnaps.map((_, index) => (
            <Dot
              key={index}
              active={index === selectedIndex}
              onClick={() => scrollTo(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </DotsContainer>
      )}
    </CarouselContainer>
  );
};

// Styled Components
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  user-select: none;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 55px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 46px;
  }
`;

const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

const EmblaContainer = styled.div<{ gap: number }>`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: -${({ gap }) => gap}px;
`;

const EmblaSlide = styled.div<{ itemsPerView: number; gap: number }>`
  flex: 0 0 ${({ itemsPerView }) =>
    `calc(100% / ${itemsPerView})`
  };
  min-width: 0;
  padding-left: ${({ gap }) => gap}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 0 calc(100% / 2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 100%;
  }
`;

const ArrowButton = styled.button<{ position: 'left' | 'right'; disabled?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ position }) => position === 'left' ? 'left: 0' : 'right: 0'};
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333333;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.15);

  &:hover:not(:disabled) {
    background-color: #1a1a1a;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.2);
    transform: translateY(-50%) scale(1.08);
  }

  &:active:not(:disabled) {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 48px;
    height: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 44px;
    height: 44px;
    background-color: rgba(51, 51, 51, 0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.gray300};
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  padding: 0;

  &:hover {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.primaryDark : theme.colors.gray400};
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default Carousel;
