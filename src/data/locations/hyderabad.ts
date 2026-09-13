import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const hyderabad: ArtLocation = {
  id: 'hyderabad',
  name: 'Hyderabad',
  subtitle: 'Deccani Miniature Ateliers & Bidriware Silver Inlay',
  state: 'Telangana',
  region: 'south',
  coordinates: { lat: 17.38, lng: 78.48 },
  position3D: latLngToVector3(17.38, 78.48, 0.28),
  category: 'medieval',
  era: 'late_medieval',
  eraRange: '16th – 19th Century CE',
  activeYearsRange: [1500, 2026],
  shortDescription: 'Capital of the Golconda Qutb Shahis and Asaf Jahi Nizams, celebrated for sensual Deccani court miniatures washed with lapis and gold, Bidriware metalwork, and monumental granite archways.',
  historicalContext: 'Perched on the Deccan plateau, Hyderabad and its predecessor fortress at Golconda generated a uniquely lyrical and opulent artistic style. The Deccani Sultanates (Golconda, Bijapur, and later Hyderabad under the Nizams) developed a courtly painting aesthetic distinct for its emotional intensity, elongated figures, and lavish use of precious crushed lapis lazuli and gold washes. Night scenes glow with eerie moonlit garden fountains, and royal patrons listen to mystic Sufi music. Beyond painting, Hyderabad fostered Bidriware—a remarkable metallurgy wherein pure silver wire and sheets are inlaid into an alloy of zinc and copper, which is then permanently blackened using nitrate-rich soil taken exclusively from the ruins of Bidar Fort.',
  significance: 'Historic capital of Deccani aesthetics, noted for its poetic miniature paintings, Bidriware metal craft, and the Salar Jung Museum art treasury.',
  localMovements: [
    {
      name: 'Deccani Miniature Painting School',
      period: 'Late 16th – 18th Century CE',
      description: 'Sensuous poetic atmosphere, deep blues and glowing gold leaf, tall elegant proportions, and cross-cultural Persian-Ottoman-Indian influences.',
      keyFigures: ['Farrukh Beg', 'Ali Adil Shah I', 'Muhammad Quli Qutb Shah']
    },
    {
      name: 'Bidriware Damascene Metal Craft',
      period: '14th Century – Present',
      description: 'Inlaying pure silver into darkened zinc alloy, creating high-contrast black-and-silver huqqa bases, trays, and jewellery boxes.',
      keyFigures: ['Bidar and Hyderabad Metal Guild Artisans']
    }
  ],
  notableArtists: ['Farrukh Beg (Deccani Master)', 'Mir Kalan Khan', 'Master Artisans of Bidar Guild'],
  artisticTraditions: [
    'Deccani miniature wash with lapis lazuli and gold dust',
    'Tarkashi (silver wire) and Taihnishan (sheet) Bidriware inlay',
    'Qutb Shahi stucco floral and geometric arch ornament',
    'Pearls stringing and gemstone polishing (City of Pearls)'
  ],
  artworks: [
    {
      id: 'sultan-garden',
      title: 'Prince in a Flowering Garden at Night',
      artist: 'Deccani Master of Golconda',
      year: 'c. 1670 CE',
      medium: 'Opaque watercolor and gold on paper',
      collection: 'Salar Jung Museum, Hyderabad / National Museum',
      description: 'Quintessential Deccani miniature. A royal youth holding a jewel-encrusted wine cup sits on a golden throne under blossoming champa trees against an intense starry midnight sky washed in precious lapis lazuli.',
      imageUrl: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80',
      dimensions: '31 x 21 cm'
    },
    {
      id: 'charminar-architecture',
      title: 'Charminar (The Four Minarets)',
      artist: 'Mir Momin Astarabadi (Chief Architect)',
      year: '1591 CE',
      medium: 'Granite, mortar, and finely sculpted stucco',
      collection: 'Old City, Hyderabad',
      description: 'Iconic gateway monument constructed to celebrate the founding of Hyderabad. Featuring four grand arches, forty-eight-meter-tall fluted minarets, and delicate stucco petal carvings.',
      imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 48.7 meters'
    }
  ],
  timeline: [
    { year: '1591 CE', title: 'Muhammad Quli Qutb Shah Founds Hyderabad', description: 'Charminar built as the centerpiece of the new planned metropolis.' },
    { year: '1680s CE', title: 'Height of Deccani Miniatures', description: 'Golconda court painters produce legendary illuminated manuscripts.' },
    { year: '1951 CE', title: 'Salar Jung Museum Inaugurated', description: 'One of the world’s greatest single-collector art treasuries opened to the public.' }
  ],
  relatedLocationIds: ['hampi', 'delhi', 'jaipur', 'thanjavur'],
  audioNarrationText: 'In Hyderabad and ancient Golconda, royal ateliers developed a painting style unlike any in India. Washed in intense lapis lazuli blues and burnished gold leaf, Deccani miniatures captured mystic nocturnal gardens, while master craftsmen hammered pure silver wire into darkened zinc alloy to create legendary Bidriware.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'Sultans of Deccan India, 1500–1700', institution: 'Metropolitan Museum of Art, New York', year: '2015' },
    { title: 'Deccani Painting', institution: 'Mark Zebrowski', year: '1983' }
  ]
};
