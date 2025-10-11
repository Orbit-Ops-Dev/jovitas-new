import React from 'react';
import styled from 'styled-components';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

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

// Styled Components

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-4px);
  }
`;

const StarsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Star = styled.span<{ $filled: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ $filled }) => ($filled ? '#FFD700' : '#E0E0E0')};
`;

const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-style: italic;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const TestimonialAuthor = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  text-align: right;
`;

export default TestimonialCard;
