import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const khajuraho: ArtLocation = {
  id: 'khajuraho',
  name: 'Khajuraho',
  subtitle: 'Chandela Sandstone Temples & Celestial Surasundaris',
  state: 'Madhya Pradesh',
  region: 'central',
  coordinates: { lat: 24.83, lng: 79.91 },
  position3D: latLngToVector3(24.83, 79.91, 0.32),
  category: 'medieval',
  era: 'medieval',
  eraRange: '950 – 1050 CE',
  activeYearsRange: [900, 1200],
  shortDescription: 'Celebrated UNESCO complex of Nagara-style sandstone temples built by the Chandela dynasty, famed for architectural balance, soaring shikhara spires, and sensuous celestial carvings.',
  historicalContext: 'Rising out of the Vindhya scrubland, the temples of Khajuraho represent the zenith of medieval Northern Indian Nagara temple architecture. Built by the Rajput Chandela kings between 950 and 1050 CE, of the original 85 temples, 22 survive. Constructed entirely from interlocking golden-brown sandstone without mortar, temples like Kandariya Mahadeva, Lakshmana, and Vishvanatha ascend in clustered sub-spires resembling mountain ranges that culminate in the lofty sacred spire (Shikhara)—a physical metaphor for Mount Meru, the cosmic mountain. The outer bands of relief sculpture celebrate all aspects of cosmos and mortal life: marching armies, musicians, ascetics, celestial dancers (Surasundaris or Apsaras) applying collyrium to their eyes or extracting thorns from their feet, and the famous Mithuna couples representing sacred union, fertility, and the non-dual union of soul and divinity.',
  significance: 'Masterpiece of Nagara temple architecture and classical stone carving, recognized by UNESCO for its sculptural harmony, anatomical grace, and spiritual symbolism.',
  localMovements: [
    {
      name: 'Chandela Nagara Architectural School',
      period: '10th – 11th Century CE',
      description: 'Compact sandhara plans, soaring multi-tiered shikhara spires, rich narrative plinths, and high relief celestial figuration.',
      keyFigures: ['King Yashovarman', 'King Dhanga', 'King Vidyadhara']
    }
  ],
  notableArtists: ['Anonymous Master Sthapatis and Rupakaras (Sculptors) of the Chandela Guilds'],
  artisticTraditions: [
    'Dry masonry interlocking sandstone engineering',
    'High-relief anthropomorphic celestial carving',
    'Shikhara fractal mountain cosmology',
    'Mithuna auspicious architectural iconography'
  ],
  artworks: [
    {
      id: 'kandariya-mahadeva',
      title: 'Kandariya Mahadeva Temple',
      artist: 'Chandela Royal Architects Guild',
      year: 'c. 1025–1035 CE',
      medium: 'Carved golden sandstone',
      collection: 'Western Group of Temples, Khajuraho, Madhya Pradesh',
      description: 'The grandest temple at Khajuraho, soaring 31 meters high. Over 800 statues encircle its exterior walls across three sculpted bands, portraying the entire cosmos with supreme architectural harmony.',
      imageUrl: 'https://images.unsplash.com/photo-1600100397608-f010f4441022?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 31 meters'
    },
    {
      id: 'surasundari-thorn',
      title: 'Surasundari Removing a Thorn from Her Foot',
      artist: 'Chandela Master Sculptor',
      year: 'c. 1000 CE',
      medium: 'Sandstone relief sculpture',
      collection: 'Western Enclosure Wall, Khajuraho',
      description: 'One of the most famous sculptures in Indian art. A celestial beauty balances gracefully on one leg as she bends back to extract a thorn from her heel, her body curved in dynamic anatomical counterpoise.',
      imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 85 cm'
    }
  ],
  timeline: [
    { year: '954 CE', title: 'Lakshmana Temple Consecrated', description: 'King Yashovarman completes the first great sandstone temple at Khajuraho.' },
    { year: '1002 CE', title: 'Vishvanatha Temple Dedicated', description: 'King Dhanga completes the temple with the famous emerald lingam.' },
    { year: '1030 CE', title: 'Kandariya Mahadeva Zenith', description: 'King Vidyadhara constructs the grandest shikhara complex.' },
    { year: '1986 CE', title: 'UNESCO Inscription', description: 'Designated World Heritage Site for outstanding universal value.' }
  ],
  relatedLocationIds: ['ajanta-ellora', 'thanjavur', 'hampi', 'varanasi'],
  audioNarrationText: 'Rising from the plains of Central India like sandstone mountain peaks, Khajuraho’s temples represent the crowning achievement of medieval Nagara architecture. Without a speck of cement or mortar, Chandela masons locked thousands of golden stones together, creating sweeping bands of celestial dancers, heroic armies, and divine unions.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1600100397608-f010f4441022?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'Khajuraho', institution: 'Devangana Desai / Oxford University Press', year: '2000' },
    { title: 'The Hindu Temple (Vol. I & II)', institution: 'Stella Kramrisch', year: '1946' }
  ]
};
