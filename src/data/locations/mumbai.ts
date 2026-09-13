import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const mumbai: ArtLocation = {
  id: 'mumbai',
  name: 'Mumbai',
  subtitle: 'The Progressive Artists\' Group & Urban Modernism',
  state: 'Maharashtra',
  region: 'west',
  coordinates: { lat: 18.92, lng: 72.83 },
  position3D: latLngToVector3(18.92, 72.83, 0.25),
  category: 'modern',
  era: 'modern',
  eraRange: '1947 – Present',
  activeYearsRange: [1850, 2026],
  shortDescription: 'Epicenter of modern Indian art where the revolutionary Progressive Artists\' Group broke away from colonial academicism in 1947, fusing European avant-garde with Indian soul.',
  historicalContext: 'In December 1947, months after India gained independence and suffered Partition, six radical young painters met in Bombay to sign the manifesto of the Progressive Artists\' Group (PAG): Francis Newton Souza, Maqbool Fida Husain, Sayed Haider Raza, Krishnaji Howlaji Ara, Hari Ambadas Gade, and Sadanand Bakre. Rejecting both the nostalgic revivalism of the Bengal School and the rigid academic realism taught by the British at the Sir JJ School of Art, they embraced expressionism, cubism, and post-impressionism to voice the triumphs, anguish, and raw vitality of a free nation. Alongside Tyeb Mehta, Akbar Padamsee, and Ram Kumar, Mumbai established itself as the commercial and conceptual capital of modern Indian art, centered around the Jehangir Art Gallery and Kala Ghoda art precinct.',
  significance: 'Birthplace of post-colonial Indian modernism. The PAG redefined Indian painting as fearless, secular, globally competitive, and deeply personal, laying the foundation for modern and contemporary South Asian art markets.',
  localMovements: [
    {
      name: 'Progressive Artists\' Group (PAG)',
      period: '1947 – 1956',
      description: 'Radical modernist collective fusing international avant-garde techniques with indigenous Indian subjects and metaphysical iconography.',
      keyFigures: ['F.N. Souza', 'M.F. Husain', 'S.H. Raza', 'K.H. Ara', 'Tyeb Mehta', 'Akbar Padamsee']
    },
    {
      name: 'Bombay Neo-Tantric Movement',
      period: '1970s – 1980s',
      description: 'Spiritual modernism focusing on primordial geometric forms, the Bindu, and cosmic energy fields.',
      keyFigures: ['S.H. Raza', 'Biren De', 'G.R. Santosh']
    }
  ],
  notableArtists: ['M.F. Husain', 'F.N. Souza', 'S.H. Raza', 'Tyeb Mehta', 'Akbar Padamsee', 'Atul Dodiya', 'Jitish Kallat'],
  artisticTraditions: [
    'Oil and impasto on canvas with gestural energy',
    'The Bindu and sacred geometric abstraction',
    'Modernist secular figurative painting',
    'Pavement and street-side salon exhibitions (Kala Ghoda)'
  ],
  artworks: [
    {
      id: 'bindu-raza',
      title: 'Saurashtra / The Bindu',
      artist: 'S.H. Raza',
      year: '1983',
      medium: 'Acrylic on canvas',
      collection: 'Private Collection (Exhibited at NGMA Mumbai)',
      description: 'A monument of Indian abstraction. Centered around the black Bindu—the seed of all creation, cosmic concentration, and sound—surrounded by glowing fields of ochre, Indian red, and deep forest green.',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      dimensions: '200 x 200 cm'
    },
    {
      id: 'diagonal-tyeb',
      title: 'Diagonal Series / Mahishasura',
      artist: 'Tyeb Mehta',
      year: '1997',
      medium: 'Oil on canvas',
      collection: 'National Gallery of Modern Art, Mumbai',
      description: 'Tyeb Mehta divides the pictorial plane with a sharp diagonal slash, isolating figures of the goddess Durga and the buffalo demon in a poignant tension of mythic conflict and modern existential trauma.',
      imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80',
      dimensions: '175 x 150 cm'
    },
    {
      id: 'zamin-husain',
      title: 'Zamin (The Land)',
      artist: 'M.F. Husain',
      year: '1955',
      medium: 'Oil on canvas',
      collection: 'National Gallery of Modern Art, New Delhi / Mumbai',
      description: 'Award-winning epic canvas synthesizing rural Indian agrarian life, bullocks, wheel motifs, and folk terracotta forms into bold, expressive modern planes of ochre, burnt umber, and cobalt.',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
      dimensions: '120 x 360 cm'
    }
  ],
  timeline: [
    { year: '1857 CE', title: 'Sir J.J. School of Art Founded', description: 'Pioneering art institution established in South Mumbai.' },
    { year: '1947 CE', title: 'Formation of PAG', description: 'Souza, Husain, Raza, Ara, Gade, and Bakre establish the Progressive Artists\' Group.' },
    { year: '1952 CE', title: 'Jehangir Art Gallery Inauguration', description: 'Becomes the premier public venue for showcasing modern Indian painting.' },
    { year: '1996 CE', title: 'NGMA Mumbai Opens', description: 'Sir Cowasji Jehangir Public Hall converted into premier public modern art museum.' }
  ],
  relatedLocationIds: ['kolkata', 'santiniketan', 'delhi', 'chennai'],
  audioNarrationText: 'In December 1947, in the shadow of Partition, six young artists gathered in Bombay to break free from colonial painting. Led by Souza, Husain, and Raza, the Progressive Artists Group injected raw emotional power, vibrant Indian earth colors, and bold modernist abstraction into the canvas of a newly born nation.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'The Progressive Artists\' Group: A Critical Reader', institution: 'National Gallery of Modern Art, Mumbai', year: '2018' },
    { title: 'Contemporary Art in India: A Perspective', institution: 'Pran Nath Mago / National Book Trust', year: '2001' }
  ]
};
