import React, { useState } from 'react';
import Lightbox from './light-box/internals';
import {
  Card,
  CardContent,
  CheckMark,
  FeatureItem,
  FeatureList,
  ServiceDescription,
  ServiceImage,
  ServiceTitle,
  ViewGalleryText,
} from './styled';
import { ServiceDetailCardProps } from './types';

const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ service }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleCardClick = () => {
    if (service.gallery && service.gallery.length > 0) {
      setIsLightboxOpen(true);
    }
  };

  return (
    <>
      <Card id={service.slug} onClick={handleCardClick} $hasGallery={!!service.gallery}>
        {service.image && <ServiceImage src={service.image} alt={service.title} />}
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
          {service.gallery && service.gallery.length > 0 && <ViewGalleryText>Click to view gallery</ViewGalleryText>}
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

export default ServiceDetailCard;
