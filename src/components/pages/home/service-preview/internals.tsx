import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServicePreviewCardProps } from './types';
import {
  Card,
  ImageContainer,
  ServiceImage,
  CardContent,
  TextContent,
  Title,
  Description,
  LearnMoreButton,
} from './styled';

const ServicePreviewCard: React.FC<ServicePreviewCardProps> = ({ service }) => {
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

        <LearnMoreButton>Learn more</LearnMoreButton>
      </CardContent>
    </Card>
  );
};

export default ServicePreviewCard;
