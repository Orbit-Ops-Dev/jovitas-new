import React, { useState } from 'react';
import { FAQAccordionProps } from './types';
import { FaqAnswer, FaqAnswerContent, FaqAnswerList, FaqAnswerListItem, FaqIcon, FaqItem, FaqList, FaqQuestion } from './styled';

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <FaqList>
      {faqs.map(faq => (
        <FaqItem key={faq.id}>
          <FaqQuestion onClick={() => toggleFaq(faq.id)} $isOpen={openFaqId === faq.id}>
            <span>{faq.question}</span>
            <FaqIcon $isOpen={openFaqId === faq.id}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </FaqIcon>
          </FaqQuestion>
          <FaqAnswer $isOpen={openFaqId === faq.id}>
            <FaqAnswerContent>
              {faq.answer && <p>{faq.answer}</p>}
              {faq.answerList && (
                <FaqAnswerList>
                  {faq.answerList.map(item => (
                    <FaqAnswerListItem key={item}>{item}</FaqAnswerListItem>
                  ))}
                </FaqAnswerList>
              )}
            </FaqAnswerContent>
          </FaqAnswer>
        </FaqItem>
      ))}
    </FaqList>
  );
};

export default FAQAccordion;
