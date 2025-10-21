export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  variant?: 'default' | 'video';
  videoSrc?: string;
  children?: React.ReactNode;
}
