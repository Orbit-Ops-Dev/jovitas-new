export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  slug?: string;
  features?: string[];
  icon?: string;
  gallery?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
