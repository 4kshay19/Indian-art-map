import { HistoricalRoute } from '../types/artHistory';
import { latLngToVector3 } from '../utils/geoProjection';

export const HISTORICAL_ROUTES: HistoricalRoute[] = [
  {
    id: 'uttarapatha',
    name: 'Uttarapatha (The Grand Northern Trunk)',
    subtitle: 'The 2,500-Year-Old Northern Imperial Highway of Art & Commerce',
    era: '3rd c. BCE – Present',
    color: '#D4AF37',
    description: 'The ancient trans-Asian corridor that linked Taxila, Kashmir, and Gandharan Buddhist sculptors with the imperial Mauryan capital at Pataliputra (Patna), Varanasi ghats, and the maritime port of Tamralipti in Bengal.',
    stops: ['Kashmir', 'Delhi', 'Varanasi', 'Bihar', 'Kolkata'],
    points: [
      latLngToVector3(34.08, 74.80, 0.28), // Kashmir
      latLngToVector3(31.63, 74.87, 0.22), // Amritsar
      latLngToVector3(28.61, 77.20, 0.20), // Delhi
      latLngToVector3(27.49, 77.67, 0.19), // Mathura
      latLngToVector3(27.17, 78.00, 0.19), // Agra
      latLngToVector3(26.45, 80.33, 0.18), // Kanpur
      latLngToVector3(25.31, 82.97, 0.18), // Varanasi
      latLngToVector3(25.59, 85.13, 0.17), // Patna / Bihar
      latLngToVector3(23.68, 87.68, 0.16), // Santiniketan bypass
      latLngToVector3(22.57, 88.36, 0.15)  // Kolkata
    ]
  },
  {
    id: 'dakshinapatha',
    name: 'Dakshinapatha (The Southern Imperial Axis)',
    subtitle: 'Great Trans-Peninsular Route of Sculptors, Guilds & Dynasties',
    era: '2nd c. BCE – 17th c. CE',
    color: '#D97736',
    description: 'The legendary route described in the Arthashastra that carried sculptors, bronzeworkers, and architectural canons from the Gangetic heartland across the Vindhya mountains through Ajanta, Ellora, Hyderabad, Hampi, and the Chola kingdoms of Tamil Nadu.',
    stops: ['Varanasi', 'Khajuraho', 'Ajanta and Ellora', 'Hyderabad', 'Hampi', 'Chennai', 'Thanjavur'],
    points: [
      latLngToVector3(25.31, 82.97, 0.18), // Varanasi
      latLngToVector3(24.83, 79.91, 0.20), // Khajuraho
      latLngToVector3(23.18, 79.98, 0.21), // Jabalpur
      latLngToVector3(20.55, 75.70, 0.23), // Ajanta & Ellora
      latLngToVector3(17.38, 78.48, 0.22), // Hyderabad
      latLngToVector3(15.33, 76.46, 0.23), // Hampi
      latLngToVector3(13.08, 80.27, 0.17), // Chennai
      latLngToVector3(10.78, 79.13, 0.16)  // Thanjavur
    ]
  },
  {
    id: 'maritime_spice_silk',
    name: 'Maritime Monsoon & Spice Route',
    subtitle: 'Coastal Sea Highways of Chola Bronzes, Roman Coins & Kerala Murals',
    era: '1st c. CE – 18th c. CE',
    color: '#2E8B57',
    description: 'The legendary seafaring route connecting the ancient port of Bharuch and Lothal in Gujarat with Mumbai, the pepper emporium of Muziris (Kochi), the imperial Chola naval ports at Nagapattinam/Thanjavur, and the maritime Kalinga traders of Odisha.',
    stops: ['Gujarat', 'Mumbai', 'Kochi', 'Thanjavur', 'Chennai', 'Odisha', 'Kolkata'],
    points: [
      latLngToVector3(23.83, 72.12, 0.17), // Gujarat (Patan / Lothal)
      latLngToVector3(21.70, 72.99, 0.15), // Bharuch
      latLngToVector3(18.92, 72.83, 0.15), // Mumbai
      latLngToVector3(15.50, 73.80, 0.15), // Goa
      latLngToVector3(11.80, 75.30, 0.15), // Malabar
      latLngToVector3(9.96, 76.24, 0.15),  // Kochi
      latLngToVector3(8.08, 77.55, 0.15),  // Kanyakumari
      latLngToVector3(10.78, 79.13, 0.15), // Thanjavur
      latLngToVector3(13.08, 80.27, 0.15), // Chennai
      latLngToVector3(19.88, 86.09, 0.15), // Odisha
      latLngToVector3(22.57, 88.36, 0.15)  // Kolkata
    ]
  },
  {
    id: 'miniature_migration',
    name: 'The Miniature Painting Trail',
    subtitle: 'From Mughal Imperial Workshops to Rajput & Pahari Courts',
    era: '1550 – 1850 CE',
    color: '#E06D28',
    description: 'The dynamic movement of master miniature painters (Ustad Mansur, Basawan, Bishandas, Nainsukh, and Manaku) as imperial ateliers in Delhi inspired vibrant regional idioms in Rajasthan (Jaipur, Mewar), the Deccan (Hyderabad, Golconda), and the Himalayan Pahari valleys of Kashmir and Kangra.',
    stops: ['Delhi', 'Jaipur', 'Hyderabad', 'Kashmir'],
    points: [
      latLngToVector3(28.61, 77.20, 0.21), // Delhi
      latLngToVector3(26.91, 75.78, 0.20), // Jaipur
      latLngToVector3(23.83, 72.12, 0.18), // Gujarat
      latLngToVector3(17.38, 78.48, 0.20), // Hyderabad
      latLngToVector3(28.61, 77.20, 0.21), // back via Delhi
      latLngToVector3(32.10, 76.27, 0.25), // Kangra
      latLngToVector3(34.08, 74.80, 0.28)  // Kashmir
    ]
  },
  {
    id: 'modern_awakening',
    name: 'Modern Art Awakening & Diaspora',
    subtitle: 'Bengal Renaissance, Bombay Progressives & Indigenous Modernism',
    era: '1900 – Present',
    color: '#9B3888',
    description: 'The revolutionary geographic axis that redefined Indian art in the 20th and 21st centuries: from Abanindranath Tagore in Kolkata and Rabindranath Tagore at Santiniketan, to Souza, Husain, and Raza in Bombay, KCS Paniker in Chennai, and Bose Krishnamachari at Kochi.',
    stops: ['Kolkata', 'Santiniketan', 'Delhi', 'Mumbai', 'Chennai', 'Kochi'],
    points: [
      latLngToVector3(22.57, 88.36, 0.18), // Kolkata
      latLngToVector3(23.68, 87.68, 0.19), // Santiniketan
      latLngToVector3(28.61, 77.20, 0.21), // Delhi
      latLngToVector3(18.92, 72.83, 0.19), // Mumbai
      latLngToVector3(13.08, 80.27, 0.18), // Chennai
      latLngToVector3(9.96, 76.24, 0.18)   // Kochi
    ]
  }
];
