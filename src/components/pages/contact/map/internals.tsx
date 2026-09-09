import { useEffect } from 'react';
import { TileLayer, Circle, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { theme } from '../../../../styles/theme';
import { ServiceAreaMapProps } from './types';
import { MAP_CENTER, SERVICE_RADIUS, serviceAreas } from './data';
import { MapWrapper, StyledMapContainer, PopupContent, MapCaption } from './styled';

// Brand-pink map pin (theme.colors.accent) drawn as an SVG so it needs no image
// asset and stays in sync with the theme. Classic teardrop shape with a white dot.
const pinkPin = L.divIcon({
  className: '',
  html: `
    <svg width="26" height="40" viewBox="0 0 26 40" xmlns="http://www.w3.org/2000/svg"
         style="filter: drop-shadow(0 2px 2px rgba(0,0,0,0.3));">
      <path d="M13 0C5.82 0 0 5.82 0 13c0 9.75 13 27 13 27s13-17.25 13-27C26 5.82 20.18 0 13 0Z"
            fill="${theme.colors.accent}"/>
      <circle cx="13" cy="13" r="5" fill="#fff"/>
    </svg>
  `,
  iconSize: [26, 40],
  iconAnchor: [13, 40],
  popupAnchor: [0, -36],
});

// Keeps the whole service circle framed as the map mounts.
function FitBounds() {
  const map = useMap();

  useEffect(() => {
    map.setView(MAP_CENTER, 9);
  }, [map]);

  return null;
}

const ServiceAreaMap = ({ height = '450px' }: ServiceAreaMapProps) => {
  return (
    <MapWrapper>
      <StyledMapContainer center={MAP_CENTER} zoom={9} scrollWheelZoom={false} style={{ height, width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Overall coverage circle */}
        <Circle
          center={MAP_CENTER}
          radius={SERVICE_RADIUS}
          pathOptions={{
            color: '#6CB4A8',
            fillColor: '#6CB4A8',
            fillOpacity: 0.15,
            weight: 2,
          }}
        />

        {/* A pin for each community we service */}
        {serviceAreas.map(area => (
          <Marker key={area.name} position={area.position} icon={pinkPin}>
            <Popup>
              <PopupContent>
                <strong>{area.name}</strong>
                <br />
                <small>{area.primary ? 'Greater Austin hub' : 'Service area'}</small>
              </PopupContent>
            </Popup>
          </Marker>
        ))}

        <FitBounds />
      </StyledMapContainer>

      <MapCaption>
        We proudly serve the Greater Austin area, including Round Rock, Cedar Park, Pflugerville, Georgetown, Lakeway,
        Manor, Elgin, Bastrop, and Taylor. Not sure if you're in range? Just ask!
      </MapCaption>
    </MapWrapper>
  );
};

export default ServiceAreaMap;
