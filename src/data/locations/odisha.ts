import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const odisha: ArtLocation = {
  id: 'odisha',
  name: 'Odisha',
  subtitle: 'Konark Sun Temple & Raghurajpur Pattachitra Scrolls',
  state: 'Odisha',
  region: 'east',
  coordinates: { lat: 19.88, lng: 86.09 },
  position3D: latLngToVector3(19.88, 86.09, 0.22),
  category: 'classical',
  era: 'medieval',
  eraRange: '11th – 18th Century CE',
  activeYearsRange: [1000, 2026],
  shortDescription: 'The temple heartland of the Kalinga architectural order, immortalized by the monumental Konark Sun Temple chariot and Raghurajpur heritage village’s sacred Pattachitra scroll paintings.',
  historicalContext: 'Hugging the Bay of Bengal, the ancient realm of Kalinga developed a distinctive, uninterrupted school of sacred art and architecture. The Kalinga architectural style achieved its colossal climax in the 13th century under Eastern Ganga King Narasimhadeva I at the Sun Temple of Konark (the Black Pagoda). Built on the sea beach, the entire temple was conceived as a monumental stone chariot for the sun god Surya, hauled by seven galloping horses and resting on twenty-four masterfully carved stone wheels that function as accurate sundials. Just inland, the heritage crafts village of Raghurajpur preserves an unbroken lineage of Chitrakaras who paint sacred Pattachitra on treated tussar silk cloth and incised palm-leaf scrolls using conch shell powder, lamp soot, and natural stones.',
  significance: 'UNESCO World Heritage monument of cosmic architecture at Konark, paired with India’s most celebrated living artisan village at Raghurajpur.',
  localMovements: [
    {
      name: 'Kalinga Architectural Order',
      period: '8th – 13th Century CE',
      description: 'Deula temple style featuring curvilinear Rekha Deula towers, stepped Pidha Jagamohana porches, and master chlorite stone friezes.',
      keyFigures: ['King Narasimhadeva I', 'Bisu Maharana (Master Architect)']
    },
    {
      name: 'Raghurajpur Pattachitra Lineage',
      period: '12th Century – Present',
      description: 'Sacred scroll paintings on cloth treated with tamarind-seed gum and chalk, delineated with pure conch-shell white and vegetal dyes.',
      keyFigures: ['Chitrakara Artisan Guilds of Raghurajpur']
    }
  ],
  notableArtists: ['Bisu Maharana', 'Dharmapada (Legendary Youth Architect)', 'Jagannath Mohapatra (Master Pattachitra Painter)'],
  artisticTraditions: [
    'Pattachitra scroll painting on cloth and palm leaf',
    'Chlorite and khondalite stone architectural carving',
    'Cuttack Tarakasi silver filigree metalcraft',
    'Dokra lost-wax bell metal tribal casting'
  ],
  artworks: [
    {
      id: 'konark-wheel',
      title: 'The Great Sun Chariot Wheel of Konark',
      artist: 'Bisu Maharana & Kalinga Guild Masons',
      year: 'c. 1250 CE',
      medium: 'Carved Khondalite and chlorite stone',
      collection: 'Konark Sun Temple, Odisha (UNESCO World Heritage)',
      description: 'One of the twenty-four colossal carved wheels measuring 3 meters in diameter. Each spoke features intricate carvings of dancers, musicians, and hunting scenes, serving as an astrological sundial that tells time to the minute.',
      imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Diameter: 3.0 meters'
    },
    {
      id: 'raghurajpur-pattachitra',
      title: 'Gita Govinda Krishna-Lila Scroll',
      artist: 'Master Chitrakara of Raghurajpur',
      year: 'c. 19th Century / Contemporary Traditional',
      medium: 'Natural mineral and conch-shell pigments on treated cotton canvas',
      collection: 'Odisha State Museum, Bhubaneswar / Raghurajpur Archive',
      description: 'Magnificent narrative scroll detailing Jayadeva’s Gita Govinda. Features sharp, expressive black outlines, vibrant cinnabar red background, and rhythmic floral borders depicting Krishna and the gopis.',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
      dimensions: '180 x 60 cm'
    }
  ],
  timeline: [
    { year: '1250 CE', title: 'Konark Sun Temple Consecrated', description: 'King Narasimhadeva I completes the colossal ocean-side chariot.' },
    { year: '1984 CE', title: 'UNESCO Inscription of Konark', description: 'Inscribed for its extraordinary architectural conception and sculptural beauty.' },
    { year: '2000 CE', title: 'Raghurajpur Heritage Village', description: 'Declared India\'s premier Heritage Crafts Village by INTACH.' }
  ],
  relatedLocationIds: ['thanjavur', 'kolkata', 'bihar', 'khajuraho'],
  audioNarrationText: 'Along the golden beaches of Odisha, the thirteenth-century Sun Temple of Konark was conceived as a cosmic chariot for the sun god Surya, riding on twenty-four intricately carved stone wheels. Inland in the living village of Raghurajpur, every home is an atelier where artisans paint vibrant Pattachitra scrolls using conch-shell white and crushed stones.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'The Sun Temple of Konark', institution: 'Archaeological Survey of India / K.S. Behera', year: '1996' },
    { title: 'Pata-Paintings of Orissa', institution: 'B.C. Mohanty', year: '1980' }
  ]
};
