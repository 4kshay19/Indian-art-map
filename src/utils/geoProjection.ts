// Standard projection constants mapping Subcontinent Geo coordinates to Three.js world space
export const MAP_CENTER_LNG = 80.5;
export const MAP_CENTER_LAT = 22.5;
export const SCALE_X = 0.72;
export const SCALE_Z = 0.82;

/**
 * Converts Latitude and Longitude to 3D World Space coordinates [x, y, z]
 * @param lat Latitude in degrees
 * @param lng Longitude in degrees
 * @param elevation Y-axis elevation above ground plane
 */
export function latLngToVector3(lat: number, lng: number, elevation: number = 0.15): [number, number, number] {
  const x = (lng - MAP_CENTER_LNG) * SCALE_X;
  const z = -(lat - MAP_CENTER_LAT) * SCALE_Z;
  return [x, elevation, z];
}

/**
 * Converts 3D World Space [x, z] back to Latitude and Longitude
 */
export function vector3ToLatLng(x: number, z: number): { lat: number; lng: number } {
  const lng = x / SCALE_X + MAP_CENTER_LNG;
  const lat = -z / SCALE_Z + MAP_CENTER_LAT;
  return { lat, lng };
}

/**
 * Regional camera presets for smooth navigation
 */
export const REGIONAL_PRESETS: Record<string, { position: [number, number, number]; target: [number, number, number]; title: string }> = {
  national: {
    title: 'All India Overview',
    position: [0, 18, 16],
    target: [0, 0, 0]
  },
  north: {
    title: 'Northern Himalayas & Gangetic Plain',
    position: [-0.5, 10, -5],
    target: [-0.5, 0.4, -6.5]
  },
  south: {
    title: 'Deccan & Southern Peninsular',
    position: [-0.5, 9, 13],
    target: [-0.5, 0.2, 8]
  },
  east: {
    title: 'Bengal & Odisha Delta',
    position: [6, 9, 3],
    target: [5, 0.2, -0.5]
  },
  west: {
    title: 'Gujarat & Maharashtra',
    position: [-6, 9, 2],
    target: [-5.5, 0.3, 0.5]
  },
  central: {
    title: 'Madhya Pradesh & Vindhyas',
    position: [0, 9, 2],
    target: [0, 0.3, -1]
  },
  northeast: {
    title: 'Brahmaputra Valley & Hills',
    position: [9.5, 9, -2],
    target: [9.5, 0.4, -3.5]
  }
};
