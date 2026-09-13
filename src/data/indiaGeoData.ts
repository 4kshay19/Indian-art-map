import { latLngToVector3 } from '../utils/geoProjection';

export interface GeoPoint {
  lat: number;
  lng: number;
}

// Faithful geographic boundary polygon for India
export const INDIA_BOUNDARY_COORDS: GeoPoint[] = [
  // North / Kashmir & Ladakh
  { lat: 35.8, lng: 76.5 },
  { lat: 35.0, lng: 78.0 },
  { lat: 34.0, lng: 79.2 },
  { lat: 33.0, lng: 79.1 },
  // Himachal & Uttarakhand
  { lat: 31.5, lng: 78.6 },
  { lat: 30.2, lng: 80.9 },
  // Nepal Northern Border alignment
  { lat: 28.8, lng: 80.5 },
  { lat: 28.2, lng: 82.0 },
  { lat: 27.5, lng: 85.0 },
  { lat: 26.8, lng: 88.0 },
  // Sikkim & Northern Bengal
  { lat: 27.8, lng: 88.6 },
  { lat: 27.0, lng: 89.0 },
  // Bhutan border & Arunachal Pradesh (Northeast Crest)
  { lat: 27.4, lng: 92.0 },
  { lat: 28.5, lng: 94.5 },
  { lat: 28.2, lng: 96.8 },
  { lat: 27.3, lng: 97.4 },
  // Nagaland & Manipur
  { lat: 26.0, lng: 95.2 },
  { lat: 24.5, lng: 94.3 },
  // Mizoram & Tripura
  { lat: 22.5, lng: 93.2 },
  { lat: 22.0, lng: 92.5 },
  { lat: 24.0, lng: 91.8 },
  { lat: 25.2, lng: 90.0 },
  // Bengal Delta / Sundarbans Coast
  { lat: 25.0, lng: 88.8 },
  { lat: 22.5, lng: 89.0 },
  { lat: 21.6, lng: 87.5 },
  // Odisha Coast
  { lat: 20.6, lng: 86.8 },
  { lat: 19.8, lng: 85.8 },
  { lat: 18.8, lng: 84.4 },
  // Andhra Coast
  { lat: 17.6, lng: 83.2 },
  { lat: 16.5, lng: 81.6 },
  { lat: 15.8, lng: 80.5 },
  { lat: 14.0, lng: 80.1 },
  // Tamil Nadu / Coromandel Coast
  { lat: 13.1, lng: 80.3 },
  { lat: 11.5, lng: 79.9 },
  { lat: 10.3, lng: 79.3 },
  { lat: 9.2, lng: 79.2 },
  { lat: 8.5, lng: 78.1 },
  // Kanyakumari (Southernmost apex)
  { lat: 8.08, lng: 77.55 },
  // Kerala Coast
  { lat: 8.8, lng: 76.6 },
  { lat: 9.96, lng: 76.2 },
  { lat: 11.8, lng: 75.3 },
  // Karnataka & Goa
  { lat: 14.8, lng: 74.1 },
  { lat: 15.6, lng: 73.8 },
  // Maharashtra Coast
  { lat: 17.5, lng: 73.2 },
  { lat: 18.9, lng: 72.8 },
  { lat: 20.0, lng: 72.7 },
  // Gujarat / Kathiawar Peninsula & Kutch
  { lat: 20.8, lng: 72.1 },
  { lat: 20.7, lng: 70.9 },
  { lat: 21.6, lng: 69.3 },
  { lat: 22.4, lng: 69.0 },
  { lat: 22.8, lng: 70.2 },
  { lat: 23.3, lng: 68.6 },
  { lat: 24.2, lng: 69.3 },
  { lat: 24.6, lng: 71.0 },
  // Rajasthan Western Border
  { lat: 25.8, lng: 70.4 },
  { lat: 27.2, lng: 70.1 },
  { lat: 28.5, lng: 71.8 },
  { lat: 29.8, lng: 73.2 },
  // Punjab & Western Himalayas back to Kashmir
  { lat: 31.6, lng: 74.6 },
  { lat: 32.7, lng: 74.8 },
  { lat: 34.2, lng: 74.2 },
  { lat: 35.2, lng: 74.9 },
  { lat: 35.8, lng: 76.5 }
];

// Major island groups (Andaman & Nicobar, Lakshadweep)
export const ISLANDS_DATA = [
  {
    name: 'Lakshadweep Islands',
    points: [
      { lat: 10.5, lng: 72.6 },
      { lat: 11.1, lng: 72.7 }
    ]
  },
  {
    name: 'Andaman & Nicobar Islands',
    points: [
      { lat: 12.0, lng: 92.8 },
      { lat: 11.6, lng: 92.7 },
      { lat: 9.1, lng: 92.8 },
      { lat: 7.0, lng: 93.8 }
    ]
  }
];

// Elevation relief generator calculation
export function getTerrainHeight(lat: number, lng: number): number {
  // Northern Himalayan Range
  if (lat > 29.5) {
    const latFactor = (lat - 29.5) / 6.0;
    return 0.5 + latFactor * 1.6;
  }
  // Eastern Himalayas & Northeast Hills
  if (lat > 25.0 && lng > 90.0) {
    return 0.45 + ((lng - 90.0) / 7.0) * 0.8;
  }
  // Western Ghats ridge
  if (lat >= 8.5 && lat <= 21.0 && lng >= 73.0 && lng <= 77.0) {
    const distFromSpine = Math.abs(lng - (73.5 + (21.0 - lat) * 0.2));
    if (distFromSpine < 1.8) {
      return 0.55 - distFromSpine * 0.2;
    }
  }
  // Eastern Ghats
  if (lat >= 12.0 && lat <= 20.0 && lng >= 78.5 && lng <= 84.5) {
    return 0.35;
  }
  // Central Indian Highlands (Vindhyas, Satpura, Chota Nagpur)
  if (lat >= 21.5 && lat <= 25.5 && lng >= 74.0 && lng <= 86.0) {
    return 0.42;
  }
  // Deccan Plateau interior
  if (lat >= 13.0 && lat <= 20.0 && lng >= 75.0 && lng <= 79.5) {
    return 0.32;
  }
  // Indo-Gangetic Alluvial Plain
  if (lat >= 24.0 && lat <= 29.0 && lng >= 76.0 && lng <= 88.0) {
    return 0.16;
  }
  // Coastal plains and base level
  return 0.12;
}
