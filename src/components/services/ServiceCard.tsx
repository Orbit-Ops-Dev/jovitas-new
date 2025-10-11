import React, { useState } from 'react';
import styled from 'styled-components';
import { Service } from '../../types';
import Lightbox from '../ui/Lightbox';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleCardClick = () => {
    if (service.gallery && service.gallery.length > 0) {
      setIsLightboxOpen(true);
    }
  };

  return (
    <>
      <Card id={service.slug} onClick={handleCardClick} hasGallery={!!service.gallery}>
        {service.image && (
          <ServiceImage src={service.image} alt={service.title} />
        )}
        <CardContent>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
          {service.features && service.features.length > 0 && (
            <FeatureList>
              {service.features.map((feature, index) => (
                <FeatureItem key={index}>
                  <CheckMark>✓</CheckMark>
                  {feature}
                </FeatureItem>
              ))}
            </FeatureList>
          )}
          {service.gallery && service.gallery.length > 0 && (
            <ViewGalleryText>Click to view gallery</ViewGalleryText>
          )}
        </CardContent>
      </Card>

      {service.gallery && (
        <Lightbox
          images={service.gallery}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          initialIndex={0}
        />
      )}
    </>
  );
};

// Styled Components

const Card = styled.div<{ hasGallery: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: ${({ theme }) => theme.transitions.normal};
  overflow: hidden;
  cursor: ${({ hasGallery }) => (hasGallery ? 'pointer' : 'default')};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-4px);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing['2xl']};
`;

const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CheckMark = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const ViewGalleryText = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export default ServiceCard;
