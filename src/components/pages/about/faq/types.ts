export interface FAQ {
  id: string;
  question: string;
  answer?: string;
  answerList?: string[]; // Optional list version of the answer
}

export interface FAQAccordionProps {
  faqs: FAQ[];
}
