import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const hampi: ArtLocation = {
  id: 'hampi',
  name: 'Hampi',
  subtitle: 'Imperial Vijayanagara Granite Splendor & Musical Pillars',
  state: 'Karnataka',
  region: 'south',
  coordinates: { lat: 15.33, lng: 76.46 },
  position3D: latLngToVector3(15.33, 76.46, 0.30),
  category: 'medieval',
  era: 'medieval',
  eraRange: '1336 – 1565 CE',
  activeYearsRange: [1300, 1600],
  shortDescription: 'The magnificent capital of the Vijayanagara Empire sprawled across a surreal landscape of red granite boulders along the Tungabhadra River, renowned for the Stone Chariot and Vittala musical pillars.',
  historicalContext: 'Once one of the richest and largest cities in the medieval world, Hampi (Vijayanagara, \'City of Victory\') was founded in 1336 by the Sangama brothers Harihara and Bukka. The capital achieved its golden age under Emperor Krishnadevaraya in the early 16th century. Spanning over 4,000 hectares across a rugged riverine landscape strewn with colossal balancing granite boulders, the city featured sophisticated palace complexes, vast bazaars where diamonds and pearls were traded, and monumental temple complexes. In the Vittala Temple complex, artisans carved the iconic Stone Chariot (shrine to Garuda with rotating stone wheels) and fifty-six musical pillars that resonate with musical notes when tapped. The nearby colossal monolithic Narasimha (6.7 meters tall) and Virupaksha Temple tower stand as testaments to Dravidian granite mastery.',
  significance: 'UNESCO World Heritage site representing the grandest synthesis of Dravidian stone architecture, royal civic engineering, and imperial urban planning in South India.',
  localMovements: [
    {
      name: 'Vijayanagara Imperial Dravidian Style',
      period: '14th – 16th Century CE',
      description: 'Hard granite monolithic carving, monumental layered gopurams, pillared mandapas with rearing yali mythical beasts, and musical stone acoustics.',
      keyFigures: ['Emperor Krishnadevaraya', 'Harihara & Bukka', 'Imperial Guild Sthapatis']
    }
  ],
  notableArtists: ['Vijayanagara Imperial Guild Masons', 'Tenali Rama (Court Laureate)', 'Allasani Peddana'],
  artisticTraditions: [
    'Hard granite monolithic dressing and carving',
    'Yali (mythical lion-elephant-horse) rearing pillar columns',
    'Granite acoustic resonant pillar crafting',
    'Lepakshi-Vijayanagara ceiling mural painting'
  ],
  artworks: [
    {
      id: 'stone-chariot',
      title: 'The Stone Chariot of Vittala Temple',
      artist: 'Vijayanagara Imperial Masons',
      year: 'c. 1515 CE',
      medium: 'Carved granite blocks on stone chassis',
      collection: 'Vittala Temple Complex, Hampi, Karnataka',
      description: 'One of India’s most recognized architectural treasures (featured on the 50-rupee currency note). Dedicated to Garuda, designed as a royal procession chariot with concentric wheels and miniature stone elephants.',
      imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 4.8 meters'
    },
    {
      id: 'ugra-narasimha',
      title: 'Monolithic Ugra Narasimha',
      artist: 'Master Sculptor Krishnadevaraya Court',
      year: '1528 CE',
      medium: 'Monolithic granite boulder carving',
      collection: 'Hampi Sacred Center, Karnataka',
      description: 'Colossal 6.7-meter-tall statue of Lord Narasimha (the half-man half-lion avatar of Vishnu) seated in yogic cross-legged meditation under the canopy of seven-hooded Adishesha serpent.',
      imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 6.7 meters'
    }
  ],
  timeline: [
    { year: '1336 CE', title: 'Vijayanagara Capital Founded', description: 'Harihara and Bukka establish the city on the banks of the Tungabhadra.' },
    { year: '1509–1529 CE', title: 'Golden Age of Krishnadevaraya', description: 'Construction of the Stone Chariot, Vittala mandapa, and monumental gopurams.' },
    { year: '1565 CE', title: 'Battle of Talikota', description: 'Sacking of the city leads to the abandonment of the imperial capital.' },
    { year: '1986 CE', title: 'UNESCO Inscription', description: 'Recognized as a World Heritage Site.' }
  ],
  relatedLocationIds: ['thanjavur', 'chennai', 'hyderabad', 'khajuraho'],
  audioNarrationText: 'Across the boulder-strewn banks of the Tungabhadra river, Hampi stands as a legendary city carved from raw granite. In the sixteenth century under Emperor Krishnadevaraya, master masons chiseled the world-famous Stone Chariot and pillars that sound musical notes when struck, creating a city of timeless majesty.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'New Light on Hampi: Recent Research at Vijayanagara', institution: 'John M. Fritz & George Michell', year: '2001' },
    { title: 'Vijayanagara: City and Empire', institution: 'D. Devakunjari / Archaeological Survey of India', year: '1983' }
  ]
};
