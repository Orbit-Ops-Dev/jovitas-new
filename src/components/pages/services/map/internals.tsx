import { useEffect } from 'react';
import { TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { ServiceAreaMapProps } from './types';
import { MapWrapper, StyledMapContainer, PopupContent, MapCaption } from './styled';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

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
      <StyledMapContainer center={center} zoom={10} scrollWheelZoom={false} style={{ height, width: '100%' }}>
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

      <MapCaption>Interactive map showing our service coverage in Suffolk County and Bellport, NY</MapCaption>
    </MapWrapper>
  );
};

export default ServiceAreaMap;
