import { ServiceArea } from './types';

// Austin, TX — map center and the hub of our service area.
export const MAP_CENTER: [number, number] = [30.2672, -97.7431];

// Service radius in meters (~30 miles / 48km) — the shaded coverage circle.
export const SERVICE_RADIUS = 48000;

// Communities we service across the Greater Austin metro. Each gets a map pin.
// `primary` marks Austin as the central hub.
export const serviceAreas: ServiceArea[] = [
  { name: 'Austin', position: [30.2672, -97.7431], primary: true },
  { name: 'Round Rock', position: [30.5083, -97.6789] },
  { name: 'Cedar Park', position: [30.5052, -97.8203] },
  { name: 'Pflugerville', position: [30.4394, -97.62] },
  { name: 'Georgetown', position: [30.6333, -97.6778] },
  { name: 'Lakeway', position: [30.3644, -97.9789] },
  { name: 'Manor', position: [30.3407, -97.5567] },
  { name: 'Elgin', position: [30.3494, -97.3703] },
  { name: 'Bastrop', position: [30.1105, -97.3153] },
  { name: 'Taylor', position: [30.5707, -97.4092] },
];
