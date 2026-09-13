import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const kolkata: ArtLocation = {
  id: 'kolkata',
  name: 'Kolkata',
  subtitle: 'The Bengal Renaissance & The Birth of Modern Indian Art',
  state: 'West Bengal',
  region: 'east',
  coordinates: { lat: 22.57, lng: 88.36 },
  position3D: latLngToVector3(22.57, 88.36, 0.22),
  category: 'modern',
  era: 'modern',
  eraRange: '1890 – 1960 CE',
  activeYearsRange: [1800, 2026],
  shortDescription: 'The intellectual crucible of the Bengal School of Art where Abanindranath Tagore, E.B. Havell, and Jamini Roy ignited the nationalist cultural revival and forged modern Indian visual identity.',
  historicalContext: 'At the turn of the 20th century, Kolkata became the birthplace of the Swadeshi art revolution. Dismayed by the Victorian academic drawing imposed by British colonial authorities, E.B. Havell (Principal of the Government School of Art) and artist Abanindranath Tagore looked inward to India’s classical traditions: Ajanta cave murals, Mughal and Pahari miniatures, and Japanese wash painting introduced by Okakura Kakuzo. This movement, known as the Bengal School of Art, created delicate, misty watercolors infused with spiritual emotion, exemplified by Tagore’s iconic \'Bharat Mata\' (1905). Soon after, Gaganendranath Tagore pioneered mystical cubist light experiments, while Jamini Roy boldly abandoned urban salon painting to embrace the bold, flat contours and vibrant earth pigments of rural Bengali Kalighat and patachitra folk art.',
  significance: 'The intellectual fountainhead of modern Indian art, where artistic creation became an instrument of anti-colonial resistance and indigenous aesthetic recovery.',
  localMovements: [
    {
      name: 'The Bengal School of Art',
      period: '1900 – 1930s',
      description: 'Revival of traditional Asian painting techniques, wash method, muted evocative palettes, and nationalist literary and spiritual themes.',
      keyFigures: ['Abanindranath Tagore', 'E.B. Havell', 'Sister Nivedita', 'Gaganendranath Tagore', 'Asit Kumar Haldar']
    },
    {
      name: 'Neo-Folk Modernism',
      period: '1920s – 1950s',
      description: 'Radical simplification of line, bold sweeping curves, and adoption of rural folk tempera mediums pioneered by Jamini Roy.',
      keyFigures: ['Jamini Roy', 'Sunayani Devi']
    }
  ],
  notableArtists: ['Abanindranath Tagore', 'Jamini Roy', 'Gaganendranath Tagore', 'Chittaprosad', 'Zainul Abedin', 'Bikash Bhattacharjee'],
  artisticTraditions: [
    'The Bengal Wash Technique (repeated watercolor immersion in water)',
    'Kalighat Patachitra (cloth mill paper with lampblack line work)',
    'Tempera on woven straw mats and coarse khadi',
    'Social realist woodcut and linocut printmaking'
  ],
  artworks: [
    {
      id: 'bharat-mata',
      title: 'Bharat Mata (Mother India)',
      artist: 'Abanindranath Tagore',
      year: '1905',
      medium: 'Watercolor on paper (Wash technique)',
      collection: 'Victoria Memorial Hall, Kolkata / Rabindra Bharati Society',
      description: 'Iconic nationalist painting created during the Swadeshi movement against the Partition of Bengal. Depicts Mother India as a four-armed saffron-clad ascetic woman holding the four boons of nationhood: food, clothing, learning, and spiritual purity.',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      dimensions: '27 x 18 cm'
    },
    {
      id: 'three-pujarinis',
      title: 'Three Pujarinis (Three Worshippers)',
      artist: 'Jamini Roy',
      year: 'c. 1935',
      medium: 'Tempera on paper board',
      collection: 'National Gallery of Modern Art, New Delhi (Kolkata legacy)',
      description: 'Jamini Roy’s celebrated neo-folk idiom: three Bengali women in ceremonial blue sarees with sweeping almond-shaped eyes, rendered in bold rhythmic black outlines and flat indigenous mineral tempera.',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
      dimensions: '60 x 45 cm'
    }
  ],
  timeline: [
    { year: '1814 CE', title: 'Indian Museum Founded', description: 'Oldest and largest museum in the Asia-Pacific region established in Kolkata.' },
    { year: '1854 CE', title: 'Government College of Art & Craft', description: 'Pioneering art school founded, later led by Havell and Abanindranath.' },
    { year: '1905 CE', title: 'Abanindranath Paints Bharat Mata', description: 'The catalyst for modern indigenous Indian art during the Swadeshi movement.' },
    { year: '1921 CE', title: 'Jamini Roy Rejects Oil Painting', description: 'Turns completely to rural Bengali folk patachitra and mineral tempera.' }
  ],
  relatedLocationIds: ['santiniketan', 'mumbai', 'varanasi', 'odisha'],
  audioNarrationText: 'In the early 1900s, Kolkata sparked a cultural revolution. Discarding British academic painting, Abanindranath Tagore created the ethereal wash technique of the Bengal School, while Jamini Roy sought the timeless soul of India in the sweeping eyes and clay pigments of rural village artisans.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'The Triumph of Modernism: India’s Artists and the Avant-Garde', institution: 'Partha Mitter / Oxford University Press', year: '2007' },
    { title: 'Indian Art in the Age of Nationalism', institution: 'Tapati Guha-Thakurta', year: '1992' }
  ]
};
