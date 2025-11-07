import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselProps } from './types.ts';
import { CarouselWrapper } from '../styled.ts';
import {
  CarouselContainer,
  ArrowButton,
  EmblaViewport,
  EmblaContainer,
  EmblaSlide,
  DotsContainer,
  Dot,
} from './styled.ts';

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
            $position="left"
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
          <EmblaContainer $gap={gap}>
            {items.map((child, index) => (
              <EmblaSlide key={index} $itemsPerView={itemsPerView} $gap={gap}>
                {child}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaViewport>

        {showArrows && (
          <ArrowButton
            $position="right"
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
              $active={index === selectedIndex}
              onClick={() => scrollTo(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </DotsContainer>
      )}
    </CarouselContainer>
  );
};

export default Carousel;
