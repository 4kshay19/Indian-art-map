import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const thanjavur: ArtLocation = {
  id: 'thanjavur',
  name: 'Thanjavur',
  subtitle: 'Imperial Chola Bronzes & Gold-Foil Tanjore Paintings',
  state: 'Tamil Nadu',
  region: 'south',
  coordinates: { lat: 10.78, lng: 79.13 },
  position3D: latLngToVector3(10.78, 79.13, 0.18),
  category: 'classical',
  era: 'medieval',
  eraRange: '9th – 18th Century CE',
  activeYearsRange: [850, 1900],
  shortDescription: 'Imperial capital of the Great Living Cholas, home to the monumental Brihadisvara granite temple, matchless lost-wax bronze Natarajas, and 22-karat gold-foil Tanjore glass paintings.',
  historicalContext: 'Located in the fertile Kaveri delta, Thanjavur is the eternal jewel of South Indian classical civilization. Under Rajaraja Chola I and his son Rajendra Chola I (10th–11th c. CE), the imperial Chola dynasty established a maritime empire that stretched to Southeast Asia. In 1010 CE, Rajaraja consecrated the Brihadisvara Temple (Peruvudaiyar Kovil), whose 216-foot granite vimana tower is crowned by a monolithic 80-tonne granite capstone, built without mortar. Simultaneously, Chola sthapatis perfected the lost-wax (cire-perdue) technique in solid bronze to create the iconic icon of Shiva Nataraja (the cosmic dancer) hailed as the supreme embodiment of rhythmic cosmic creation and destruction. Centuries later under Maratha patronage, the city developed Thanjavur painting—sacred icons executed on teak boards with gesso relief, 22k pure gold foil, and embedded gems.',
  significance: 'Peak of Dravidian stone architecture, zenith of world bronze sculpture, and home to the sacred gold-gilded Thanjavur painting tradition.',
  localMovements: [
    {
      name: 'Imperial Chola Bronze Sculpture',
      period: '9th – 13th Century CE',
      description: 'Lost-wax solid cast bronzes (Panchaloha) characterized by anatomical grace, aerodynamic tension, and spiritual serenity.',
      keyFigures: ['Rajaraja Chola I', 'Queen Sembiyan Mahadevi', 'Chola Sthapati Lineages']
    },
    {
      name: 'Classical Thanjavur Painting',
      period: '17th – 19th Century CE',
      description: 'Gesso relief modeling, real gold foil gilding, glass and semi-precious gem inlay on teakwood backing.',
      keyFigures: ['Raja Serfoji II', 'Telugu Raju & Naidu Artisan Guilds']
    }
  ],
  notableArtists: ['Ancient Chola Master Bronzesmiths (Swamimalai Lineage)', 'Sthapati Vaidyanatha', 'Raja Serfoji II (Patron)'],
  artisticTraditions: [
    'Lost-wax (Cire-perdue) solid Panchaloha bronze casting',
    'Monolithic granite interlocking dry-stone masonry',
    'Tanjore gold-foil relief painting with Jaipur stones',
    'Chola classical fresco painting on temple circumambulatory walls'
  ],
  artworks: [
    {
      id: 'chola-nataraja',
      title: 'Shiva as Nataraja (Lord of the Dance)',
      artist: 'Imperial Chola Master Bronzesmith',
      year: 'c. 10th–11th Century CE',
      medium: 'Solid cast bronze (Panchaloha)',
      collection: 'Thanjavur Art Gallery, Royal Palace / National Museum',
      description: 'The supreme icon of Indian art. Shiva dances inside an aureole of cosmic fire, holding the drum of creation and flame of destruction, his right foot subduing the dwarf of cosmic ignorance.',
      imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 115 cm'
    },
    {
      id: 'brihadisvara-vimana',
      title: 'Brihadisvara Temple (The Big Temple)',
      artist: 'Sthapati Kunjara Mallan Rajaraja Perunthachan',
      year: 'Consecrated 1010 CE',
      medium: 'Granite dry-stone masonry',
      collection: 'Great Living Chola Temples, Thanjavur (UNESCO)',
      description: 'A 66-meter-tall granite sanctuary tower whose shadow was engineered never to touch the ground at noon. The octagonal dome capstone weighing 80 tonnes was elevated via a four-mile inclined ramp.',
      imageUrl: 'https://images.unsplash.com/photo-1600100397608-f010f4441022?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Vimana height: 66 meters'
    }
  ],
  timeline: [
    { year: '1010 CE', title: 'Brihadisvara Temple Consecrated', description: 'Rajaraja Chola I completes the monumental granite architectural marvel.' },
    { year: 'c. 1050 CE', title: 'Chola Bronze Golden Age', description: 'Swamimalai guilds cast the supreme Nataraja and Somaskanda bronzes.' },
    { year: '1798–1832 CE', title: 'Reign of Serfoji II', description: 'Enlightened Maratha ruler amasses the Saraswathi Mahal collection and promotes Tanjore painting.' },
    { year: '1987 CE', title: 'UNESCO World Heritage Status', description: 'Inscribed as the Great Living Chola Temples.' }
  ],
  relatedLocationIds: ['chennai', 'hampi', 'kochi', 'odisha'],
  audioNarrationText: 'In the delta of the river Kaveri, Thanjavur represents the absolute pinnacle of classical Dravidian culture. Here, King Rajaraja Chola built the Brihadisvara Temple with an eighty-tonne monolithic granite crown, while royal sculptors poured molten bronze into wax molds to give the world the cosmic dance of Shiva Nataraja.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'Chola: Sacred Bronzes of Southern India', institution: 'Royal Academy of Arts, London / Vidya Dehejia', year: '2006' },
    { title: 'The Great Chola Temples', institution: 'Archaeological Survey of India', year: '2004' }
  ]
};
