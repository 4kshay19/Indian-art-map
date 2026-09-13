import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const ajantaEllora: ArtLocation = {
  id: 'ajanta-ellora',
  name: 'Ajanta & Ellora',
  subtitle: 'Monumental Basalt Caves & Transcendent Buddhist Frescoes',
  state: 'Maharashtra',
  region: 'west',
  coordinates: { lat: 20.55, lng: 75.70 },
  position3D: latLngToVector3(20.55, 75.70, 0.35),
  category: 'ancient',
  era: 'ancient',
  eraRange: '2nd c. BCE – 10th c. CE',
  activeYearsRange: [-200, 950],
  shortDescription: 'Thirty rock-cut Buddhist cave monuments at Ajanta celebrated for expressive mineral frescoes, paired with Ellora’s 34 multi-faith cave temples anchored by the monolithic rock-hewn Kailasa Temple.',
  historicalContext: 'Carved into the volcanic basalt cliffs of the Sahyadri mountains over the Waghora river, Ajanta represents the pinnacle of ancient Indian mural painting. Under the Satavahanas and Vakataka Emperor Harishena (5th c. CE), guild painters developed a sophisticated tempera technique using mud, cow dung, straw, and ground minerals—including lapis lazuli imported from Badakhshan. Nearby at Ellora, master masons under Rashtrakuta King Krishna I excavated Cave 16 (Kailasa Temple) top-down from a single volcanic cliff face, removing over 200,000 tonnes of rock without mortar to create a monolithic mountain palace celebrating Lord Shiva.',
  significance: 'Regarded as the master standard for classical Indian painting and monolithic Dravidian architecture. The frescoes defined the facial proportions, mudras, and three-dimensional shading adopted across Central and East Asia.',
  localMovements: [
    {
      name: 'Vakataka Classical Fresco Style',
      period: '5th – 6th Century CE',
      description: 'Lyrical tribhanga poses, continuous narrative wall paintings, and luminous mineral pigments.',
      keyFigures: ['Emperor Harishena', 'Guild of Guild Masters (Sthapatis)']
    },
    {
      name: 'Rashtrakuta Monolithic Sculpture',
      period: '8th – 10th Century CE',
      description: 'Excavation of living rock from summit to base, combining monumental architectural grandeur with fluid kinetic relief carvings.',
      keyFigures: ['King Krishna I', 'Rashtrakuta Guild Architects']
    }
  ],
  notableArtists: ['Anonymous Buddhist Master Painters (Vakataka Court)', 'Sthapati Architects of Rashtrakuta Guilds'],
  artisticTraditions: [
    'Tempera mural on mud-cowdung-lime ground',
    'Top-down monolithic rock excavation',
    'Vartana (shading for volumetric illusion)',
    'Natural mineral pigments (Lapis, Terra Verde, Red Ochre)'
  ],
  artworks: [
    {
      id: 'padmapani',
      title: 'Bodhisattva Padmapani (The Lotus Bearer)',
      artist: 'Unknown Vakataka Master Painter',
      year: 'Late 5th Century CE',
      medium: 'Mineral pigments on clay-lime plaster on rock wall',
      collection: 'Cave 1, Ajanta Caves, Maharashtra',
      description: 'One of the most revered masterpieces in world art history. The Bodhisattva stands in graceful tribhanga holding a blue lotus, radiating serene compassion with downcast eyes, jeweled crown, and subtle anatomical modeling.',
      imageUrl: 'https://images.unsplash.com/photo-1600100397608-f010f4441022?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Wall Mural, approximately 2.1 x 1.3 meters'
    },
    {
      id: 'kailasa-temple',
      title: 'Kailasa Temple (Cave 16 Monolith)',
      artist: 'Rashtrakuta Royal Sculptors Guild',
      year: 'c. 756–773 CE',
      medium: 'Carved monolithic basalt rock',
      collection: 'Ellora Caves, Maharashtra',
      description: 'A structural wonder carved vertically downwards out of a single mountain ridge. Features multi-storeyed halls, life-sized carved stone elephants, intricate Ramayana and Mahabharata friezes, and Ravana shaking Mount Kailasa.',
      imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 32 meters, Length: 84 meters, Width: 47 meters'
    }
  ],
  timeline: [
    { year: '2nd c. BCE', title: 'First Satavahana Phase', description: 'Early Hinayana Buddhist chaityas and viharas carved (Caves 9, 10, 12, 13).' },
    { year: '460–477 CE', title: 'Vakataka Golden Age', description: 'Emperor Harishena patrons the magnificent second phase of Mahayana cave fresco paintings.' },
    { year: 'c. 756 CE', title: 'Excavation of Kailasa', description: 'Krishna I orders the miraculous top-down monolithic cutting of Ellora Cave 16.' },
    { year: '1983 CE', title: 'UNESCO Inscription', description: 'Inscribed as one of India’s earliest UNESCO World Heritage Sites.' }
  ],
  relatedLocationIds: ['varanasi', 'khajuraho', 'hampi', 'kochi'],
  audioNarrationText: 'In the volcanic basalt crescent of Ajanta, master painters of the fifth century brought Buddhist parables to life with crushed lapis lazuli and earth ochres. Nearby at Ellora, sculptors carved downwards from the peak of a cliff face to reveal the Kailasa Temple—an entire stone palace fashioned without a single joint or seam.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1600100397608-f010f4441022?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'Ajanta: History and Development', institution: 'Archaeological Survey of India / Walter M. Spink', year: '2005' },
    { title: 'UNESCO World Heritage Dossier 242 & 243', institution: 'UNESCO', year: '1983' }
  ]
};
