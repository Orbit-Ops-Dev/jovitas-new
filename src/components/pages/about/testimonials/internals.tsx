import React from 'react';
import { TestimonialCardProps } from './types';
import { Card, TestimonialText, TestimonialAuthor, StarsContainer, Star } from './styled';

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card>
      <Stars rating={testimonial.rating} />
      <TestimonialText>"{testimonial.text}"</TestimonialText>
      <TestimonialAuthor>- {testimonial.name}</TestimonialAuthor>
    </Card>
  );
};

// Stars Component
const Stars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <StarsContainer>
      {[...Array(5)].map((_, index) => (
        <Star key={index} $filled={index < rating}>
          ★
        </Star>
      ))}
    </StarsContainer>
  );
};

export default TestimonialCard;
