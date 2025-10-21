import { styled } from 'styled-components';

// Styled Components
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  user-select: none;
`;

export const CarouselWrapper = styled.div`
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

export const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const EmblaContainer = styled.div<{ $gap: number }>`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: -${({ $gap }) => $gap}px;
`;

export const EmblaSlide = styled.div<{ $itemsPerView: number; $gap: number }>`
  flex: 0 0 ${({ $itemsPerView }) => `calc(100% / ${$itemsPerView})`};
  min-width: 0;
  padding-left: ${({ $gap }) => $gap}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 0 calc(100% / 2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 100%;
  }
`;

export const ArrowButton = styled.button<{ $position: 'left' | 'right'; disabled?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ $position }) => ($position === 'left' ? 'left: 0' : 'right: 0')};
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
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.15);

  &:hover:not(:disabled) {
    background-color: #1a1a1a;
    box-shadow:
      0 6px 10px rgba(0, 0, 0, 0.25),
      0 3px 6px rgba(0, 0, 0, 0.2);
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

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.gray300)};
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  padding: 0;

  &:hover {
    background-color: ${({ theme, active }) => (active ? theme.colors.primaryDark : theme.colors.gray400)};
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;
