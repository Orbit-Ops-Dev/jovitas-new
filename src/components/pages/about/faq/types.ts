export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  faqs: FAQ[];
}
