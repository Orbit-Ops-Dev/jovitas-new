export interface CarouselProps {
  children: React.ReactNode;
  itemsPerView?: number;
  gap?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  infinite?: boolean;
}
