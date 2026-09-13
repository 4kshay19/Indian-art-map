import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const kashmir: ArtLocation = {
  id: 'kashmir',
  name: 'Kashmir',
  subtitle: 'Papier-Mâché Lacquer, Kani Shawls & Walnut Woodcraft',
  state: 'Jammu & Kashmir',
  region: 'north',
  coordinates: { lat: 34.08, lng: 74.80 },
  position3D: latLngToVector3(34.08, 74.80, 0.40),
  category: 'folk',
  era: 'medieval',
  eraRange: '8th – 19th Century CE',
  activeYearsRange: [700, 2026],
  shortDescription: 'The crown valley of northern India, world-famed for intricate Kari-kalamdani papier-mâché painted lacquer, master-woven Pashmina Kani shawls, and deeply undercut walnut woodcarving.',
  historicalContext: 'Cradled between the Pir Panjal and Great Himalayan ranges, the Kashmir Valley has fostered a continuous tradition of supreme craftsmanship for well over a millennium. In the 8th century CE under King Lalitaditya Muktapida, Kashmiri stone masons built the breathtaking Martand Sun Temple—a synthesis of classical Greco-Roman columnar grandeur with Gandharan and Gupta aesthetics. In the 15th century, Sultan Zain-ul-Abidin (\'Budshah\') invited master artisans and calligraphers from Samarkand and Persia, revolutionizing Kashmiri craft guilds. Papier-mâché transformed mashed waste paper, rice starch, and gesso into exquisite pen-cases and boxes illuminated with floral sprays using ground lapis lazuli and gold leaf. Concurrently, Kani shawl weavers coded mathematical weaving instructions (talim) to interlock gossamer-fine Pashmina wool into timeless paisley shawls cherished by world royalty.',
  significance: 'Synthesized Central Asian Persian refinement with Kashmiri Himalayan motifs, creating the world standard for luxury hand-painted lacquer and woven textiles.',
  localMovements: [
    {
      name: 'Kari-kalamdani (Papier-Mâché Guild)',
      period: '15th Century – Present',
      description: 'Molding paper pulp onto wooden forms, coating with gesso, and meticulously hand-painting intricate patterns in gold and mineral dyes.',
      keyFigures: ['Sultan Zain-ul-Abidin (Patron)', 'Ustad Ghulam Mohammad Guild Masters']
    },
    {
      name: 'Kani Jamawar Handloom Weaving',
      period: '16th – 19th Century',
      description: 'Weaving ultra-fine Changthangi Pashmina wool using small wooden bobbins guided by coded chant scripts (talim).',
      keyFigures: ['Kashmiri Master Weavers (Rafugars & Vangars)']
    }
  ],
  notableArtists: ['Mir Sayyid Ali Hamadani', 'Lalitaditya Muktapida', 'Ustad Ghulam Mohiuddin'],
  artisticTraditions: [
    'Sakhtsazi (mold paper shaping) and Naqqashi (miniature painting)',
    'Kani Pashmina weaving with coded Talim scripts',
    'Pinjrakari (latticed cedar wood joinery without nails)',
    'Walnut wood three-dimensional undercut carving'
  ],
  artworks: [
    {
      id: 'papiermache-kalamdan',
      title: 'Royal Painted Lacquer Pen-Case (Kalamdan)',
      artist: 'Kashmir Naqqash Master Artisan',
      year: 'c. 1850 CE',
      medium: 'Paper-pulp, gesso, natural mineral pigments and pure gold leaf',
      collection: 'Sri Pratap Singh Museum, Srinagar, Kashmir',
      description: 'A masterpiece of Kari-kalamdani. Features the thousand-flower motif with nightingales singing amidst wild iris, almond blossoms, and golden scrolling arabesques sealed under protective copal varnish.',
      imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80',
      dimensions: '30 x 6 x 5 cm'
    },
    {
      id: 'kani-pashmina-shawl',
      title: 'Antique Kani Pashmina Jamawar Shawl',
      artist: 'Master Kani Weavers Guild of Srinagar',
      year: 'c. 1820 CE',
      medium: 'Handspun Changthangi Pashmina cashmere wool',
      collection: 'National Museum, New Delhi (Kashmir Collection)',
      description: 'Woven with over 300 individual wooden bobbins over three years. Depicts the graceful swirling paisley in saturated crimson, lapis, turquoise, and saffron.',
      imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
      dimensions: '220 x 110 cm'
    }
  ],
  timeline: [
    { year: '750 CE', title: 'Martand Sun Temple Erected', description: 'Lalitaditya Muktapida builds the architectural wonder of early Kashmir.' },
    { year: '1420–1470 CE', title: 'Zain-ul-Abidin Golden Era', description: 'Central Asian masters establish carpet, papier-mâché, and silk guilds.' },
    { year: '1898 CE', title: 'SPS Museum Srinagar Opened', description: 'Houses greatest treasures of Kashmiri Buddhist sculpture, shawls, and bronzes.' }
  ],
  relatedLocationIds: ['delhi', 'jaipur', 'varanasi', 'bihar'],
  audioNarrationText: 'Ringed by snowcapped Himalayan peaks, Kashmir became a legendary sanctuary of fine craftsmanship. Here, Sultan Zain-ul-Abidin invited Central Asian masters to establish guilds where artisans ground gold dust to paint lacquer papier-mâché boxes, and weavers decoded mathematical scripts to hand-interlock gossamer Pashmina Kani shawls.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'The Cashmere Shawl', institution: 'Monique Lévi-Strauss / Thames and Hudson', year: '1987' },
    { title: 'Arts and Crafts of Kashmir', institution: 'D.N. Saraf', year: '1987' }
  ]
};
