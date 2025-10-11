import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Service } from '../../types';

interface ServiceCarouselCardProps {
  service: Service;
}

const ServiceCarouselCard: React.FC<ServiceCarouselCardProps> = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (service.slug) {
      navigate(`/services#${service.slug}`);
    } else {
      navigate('/services');
    }
  };

  return (
    <Card onClick={handleClick} role="button" tabIndex={0} aria-label={`Learn more about ${service.title}`}>
      {service.image && (
        <ImageContainer>
          <ServiceImage src={service.image} alt={service.title} />
        </ImageContainer>
      )}
      <CardContent>
        <TextContent>
          <Title>{service.title}</Title>
          <Description>{service.description}</Description>
        </TextContent>

        <LearnMoreButton>
          Learn more
        </LearnMoreButton>
      </CardContent>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-4px);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gray100};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 200px;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: ${({ theme }) => theme.spacing['2xl']};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const LearnMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.textPrimary};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default ServiceCarouselCard;
