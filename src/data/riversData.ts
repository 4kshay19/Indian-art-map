import { RiverSystem } from '../types/artHistory';
import { latLngToVector3 } from '../utils/geoProjection';

export const SACRED_RIVERS: RiverSystem[] = [
  {
    id: 'ganga',
    name: 'Ganga',
    sanskritName: 'गंगा',
    significance: 'Cradle of ancient Indian civilization, classical Gupta sculpture, Varanasi ghat architecture, and sacred Buddhist art.',
    color: '#64B5F6',
    points: [
      latLngToVector3(30.98, 78.93, 0.28), // Gangotri
      latLngToVector3(30.15, 78.30, 0.24), // Devprayag
      latLngToVector3(29.94, 78.16, 0.20), // Haridwar
      latLngToVector3(27.85, 79.40, 0.18),
      latLngToVector3(27.05, 79.91, 0.17), // Kannauj
      latLngToVector3(25.43, 81.84, 0.16), // Prayagraj
      latLngToVector3(25.31, 82.97, 0.16), // Varanasi
      latLngToVector3(25.59, 85.13, 0.15), // Patna
      latLngToVector3(25.25, 87.00, 0.14), // Bhagalpur
      latLngToVector3(24.08, 88.20, 0.13), // Murshidabad
      latLngToVector3(22.57, 88.36, 0.12), // Kolkata
      latLngToVector3(21.60, 88.00, 0.11)  // Gangasagar / Bay of Bengal
    ]
  },
  {
    id: 'yamuna',
    name: 'Yamuna',
    sanskritName: 'यमुना',
    significance: 'River of Krishna bhakti iconography, Mathura classical red sandstone sculpture, and imperial Mughal riverside monuments.',
    color: '#4FC3F7',
    points: [
      latLngToVector3(31.01, 78.45, 0.27), // Yamunotri
      latLngToVector3(30.30, 77.60, 0.22),
      latLngToVector3(28.61, 77.20, 0.18), // Delhi
      latLngToVector3(27.49, 77.67, 0.17), // Mathura
      latLngToVector3(27.17, 78.00, 0.17), // Agra
      latLngToVector3(26.45, 79.20, 0.16),
      latLngToVector3(25.43, 81.84, 0.16)  // Prayagraj Sangam
    ]
  },
  {
    id: 'brahmaputra',
    name: 'Brahmaputra',
    sanskritName: 'ब्रह्मपुत्र / लुइत',
    significance: 'Artery of Northeast Vaishnavite Neo-classical monastic art, Majuli riverine mask-making, and golden Muga silk traditions.',
    color: '#81D4FA',
    points: [
      latLngToVector3(28.20, 95.80, 0.32), // Siang entry
      latLngToVector3(27.50, 95.00, 0.25), // Dibrugarh
      latLngToVector3(26.95, 94.21, 0.22), // Majuli Island
      latLngToVector3(26.75, 93.00, 0.20), // Tezpur
      latLngToVector3(26.18, 91.73, 0.18), // Guwahati
      latLngToVector3(26.05, 90.50, 0.16), // Goalpara
      latLngToVector3(25.20, 89.80, 0.14)  // Down to Delta
    ]
  },
  {
    id: 'narmada',
    name: 'Narmada',
    sanskritName: 'नर्मदा / रेवा',
    significance: 'Sacred river bisecting North and South India; line of prehistoric Bhimbetka rock art and Maheshwar handloom textile traditions.',
    color: '#4DD0E1',
    points: [
      latLngToVector3(22.67, 81.75, 0.30), // Amarkantak
      latLngToVector3(23.18, 79.98, 0.24), // Jabalpur
      latLngToVector3(22.75, 77.70, 0.22), // Hoshangabad
      latLngToVector3(22.18, 75.58, 0.20), // Maheshwar
      latLngToVector3(21.85, 74.00, 0.18),
      latLngToVector3(21.70, 72.99, 0.13)  // Bharuch / Arabian Sea
    ]
  },
  {
    id: 'godavari',
    name: 'Godavari',
    sanskritName: 'गोदावरी (दक्षिण गंगा)',
    significance: 'Lifeline of ancient Satavahana rock caves, Paithan silk tapestry art, and Deccani artistic cross-pollination.',
    color: '#26C6DA',
    points: [
      latLngToVector3(19.93, 73.53, 0.28), // Trimbakeshwar
      latLngToVector3(19.99, 73.78, 0.25), // Nashik
      latLngToVector3(19.47, 75.38, 0.22), // Paithan
      latLngToVector3(19.15, 77.30, 0.20), // Nanded
      latLngToVector3(18.90, 79.50, 0.18),
      latLngToVector3(17.00, 81.80, 0.14), // Rajahmundry
      latLngToVector3(16.50, 82.20, 0.12)  // Bay of Bengal
    ]
  },
  {
    id: 'krishna',
    name: 'Krishna',
    sanskritName: 'कृष्णा',
    significance: 'River feeding the Vijayanagara imperial capital at Hampi, Amaravati Buddhist relief marbles, and Kalamkari textile centers.',
    color: '#00BCD4',
    points: [
      latLngToVector3(17.92, 73.65, 0.28), // Mahabaleshwar
      latLngToVector3(16.50, 74.50, 0.24),
      latLngToVector3(16.20, 76.50, 0.22),
      latLngToVector3(16.52, 79.31, 0.18), // Nagarjunakonda
      latLngToVector3(16.51, 80.64, 0.15), // Vijayawada
      latLngToVector3(15.80, 80.90, 0.12)  // Delta
    ]
  },
  {
    id: 'kaveri',
    name: 'Kaveri',
    sanskritName: 'कावेरी',
    significance: 'The golden cradle of the Chola Empire, Great Living Chola granite temples, lost-wax bronze casting, and Tanjore paintings.',
    color: '#00ACC1',
    points: [
      latLngToVector3(12.38, 75.49, 0.28), // Talakaveri (Coorg)
      latLngToVector3(12.42, 76.69, 0.24), // Srirangapatna
      latLngToVector3(10.86, 78.69, 0.20), // Srirangam / Tiruchirappalli
      latLngToVector3(10.78, 79.13, 0.18), // Thanjavur
      latLngToVector3(11.14, 79.85, 0.12)  // Poompuhar / Bay of Bengal
    ]
  },
  {
    id: 'indus',
    name: 'Sindhu / Indus',
    sanskritName: 'सिन्धु',
    significance: 'Artery of the 5,000-year-old Indus Valley Civilization, bronze Dancing Girl, terracotta figurines, and Kashmiri Buddhist art.',
    color: '#4DD0E1',
    points: [
      latLngToVector3(34.80, 77.20, 0.35), // Ladakh Leh
      latLngToVector3(34.20, 75.50, 0.32),
      latLngToVector3(34.08, 74.80, 0.28), // Kashmir Valley link
      latLngToVector3(33.50, 73.00, 0.22),
      latLngToVector3(31.00, 71.00, 0.18),
      latLngToVector3(25.00, 68.00, 0.12)  // Arabian Sea
    ]
  }
];
