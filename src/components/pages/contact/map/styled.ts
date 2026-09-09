import { MapContainer } from 'react-leaflet';
import { styled } from 'styled-components';

export const MapWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const StyledMapContainer = styled(MapContainer)`
  z-index: 0;

  .leaflet-popup-content-wrapper {
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }

  .leaflet-popup-content {
    margin: ${({ theme }) => theme.spacing.md};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  }
`;

export const PopupContent = styled.div`
  text-align: center;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  small {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

export const MapCaption = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.white};
  margin: 0;
`;
