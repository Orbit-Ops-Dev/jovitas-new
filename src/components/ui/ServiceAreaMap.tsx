import { useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface ServiceAreaMapProps {
  height?: string;
}

// Component to fit bounds to the circle
function FitBounds() {
  const map = useMap();

  useEffect(() => {
    // Center on Bellport, NY with appropriate zoom
    map.setView([40.7573, -72.9395], 10);
  }, [map]);

  return null;
}

const ServiceAreaMap = ({ height = '450px' }: ServiceAreaMapProps) => {
  // Bellport, NY coordinates
  const center: [number, number] = [40.7573, -72.9395];
  // Service radius in meters (approximately 25 miles / 40km)
  const serviceRadius = 40000;

  return (
    <MapWrapper>
      <StyledMapContainer
        center={center}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height, width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Service Area Circle */}
        <Circle
          center={center}
          radius={serviceRadius}
          pathOptions={{
            color: '#4A90E2',
            fillColor: '#4A90E2',
            fillOpacity: 0.15,
            weight: 2,
          }}
        >
          <Popup>
            <PopupContent>
              <strong>Our Service Area</strong>
              <br />
              Suffolk County & Bellport, NY
              <br />
              <small>Approximately 25-mile radius</small>
            </PopupContent>
          </Popup>
        </Circle>

        <FitBounds />
      </StyledMapContainer>

      <MapCaption>
        Interactive map showing our service coverage in Suffolk County and Bellport, NY
      </MapCaption>
    </MapWrapper>
  );
};

// Styled Components

const MapWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const StyledMapContainer = styled(MapContainer)`
  z-index: 0;

  .leaflet-popup-content-wrapper {
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }

  .leaflet-popup-content {
    margin: ${({ theme }) => theme.spacing.md};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  }
`;

const PopupContent = styled.div`
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

const MapCaption = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

export default ServiceAreaMap;
