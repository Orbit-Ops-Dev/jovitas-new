export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  variant?: 'default' | 'video' | 'image';
  videoSrc?: string;
  imageSrc?: string;
  children?: React.ReactNode;
  centered?: boolean;
}
