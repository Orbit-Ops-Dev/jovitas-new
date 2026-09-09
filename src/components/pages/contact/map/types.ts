export interface ServiceAreaMapProps {
  height?: string;
}

export interface ServiceArea {
  name: string;
  position: [number, number];
  // True for Austin, the central hub of our service area.
  primary?: boolean;
}
