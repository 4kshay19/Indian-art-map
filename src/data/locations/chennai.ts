import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const chennai: ArtLocation = {
  id: 'chennai',
  name: 'Chennai',
  subtitle: 'Cholamandal Artists\' Village & The Madras Art Movement',
  state: 'Tamil Nadu',
  region: 'south',
  coordinates: { lat: 13.08, lng: 80.27 },
  position3D: latLngToVector3(13.08, 80.27, 0.20),
  category: 'modern',
  era: 'modern',
  eraRange: '1850 – Present',
  activeYearsRange: [1850, 2026],
  shortDescription: 'Cradle of the Madras Art Movement and Cholamandal Artists\' Village—India’s largest self-supporting artists’ commune, where modernism engaged with traditional Tantric geometry and Dravidian linear craft.',
  historicalContext: 'Chennai boasts the Government College of Fine Arts (established in 1850 as the Madras School of Art), the oldest art institution in India. Under the legendary artist and educator K.C.S. Paniker in the 1950s and 60s, the college became the epicenter of the Madras Art Movement. Seeking a modernism that grew organically out of Indian soil rather than Western imitation, Paniker integrated Indian script, astrological charts, Tantric diagrams, and folk motifs into rhythmic line-paintings (his famous \'Words and Symbols\' series). In 1966, Paniker and forty fellow artists pooled their resources to purchase ten acres of coastal land south of the city to establish Cholamandal Artists\' Village—the world’s most successful self-sustaining artist cooperative.',
  significance: 'Pioneered an indigenous South Indian modernism rooted in linear rhythm, calligraphic abstraction, and artisanal self-sufficiency at Cholamandal.',
  localMovements: [
    {
      name: 'The Madras Art Movement',
      period: '1955 – 1980s',
      description: 'Emphasis on indigenous linear rhythm, calligraphic mark-making, Tantric sacred geometry, and metaphysical visual philosophy.',
      keyFigures: ['K.C.S. Paniker', 'S. Dhanapal', 'L. Munuswamy', 'K. Ramanujam', 'S.G. Vasudev']
    },
    {
      name: 'Cholamandal Commune Movement',
      period: '1966 – Present',
      description: 'Self-sufficient cooperative commune where modern artists live, work, and sustain their practices through craft design and collective galleries.',
      keyFigures: ['K.C.S. Paniker', 'M. Senathipathi', 'P. Gopinath']
    }
  ],
  notableArtists: ['K.C.S. Paniker', 'S. Dhanapal', 'K. Ramanujam', 'S.G. Vasudev', 'C. Douglas'],
  artisticTraditions: [
    'Words and Symbols line-painting on canvas',
    'Sheet metal repoussé and modern bronze casting',
    'Artisanal batik textile design',
    'South Indian terracotta sculptural modeling'
  ],
  artworks: [
    {
      id: 'words-and-symbols',
      title: 'Words and Symbols (Series)',
      artist: 'K.C.S. Paniker',
      year: '1965',
      medium: 'Oil on canvas with calligraphy and mathematical charts',
      collection: 'National Gallery of Modern Art / Cholamandal Museum of Contemporary Art',
      description: 'Masterpiece of the Madras Movement. Paniker covers the canvas with flowing mathematical equations, Malayalam and Devanagari script, horoscopes, and birds, treating written symbols as pure two-dimensional painterly design.',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      dimensions: '145 x 175 cm'
    },
    {
      id: 'vasudev-vriksha',
      title: 'Vriksha (Tree of Life in Copper)',
      artist: 'S.G. Vasudev',
      year: '1978',
      medium: 'Repoussé relief on beaten copper sheet',
      collection: 'Private Collection & Cholamandal Open Air Gallery',
      description: 'Intricate copper relief exploring the eternal theme of the sacred tree (Kalpavriksha), intertwining roots, human forms, and celestial creatures in fluid tactile metalwork.',
      imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80',
      dimensions: '120 x 90 cm'
    }
  ],
  timeline: [
    { year: '1850 CE', title: 'Madras School of Art Founded', description: 'Alexander Hunter establishes India\'s first formal art academy.' },
    { year: '1957 CE', title: 'Paniker Becomes Principal', description: 'Begins transforming the academy into a center of indigenous modernism.' },
    { year: '1966 CE', title: 'Cholamandal Artists\' Village Founded', description: 'Forty artists establish an artist commune on the East Coast Road.' }
  ],
  relatedLocationIds: ['thanjavur', 'kochi', 'mumbai', 'kolkata'],
  audioNarrationText: 'South of Chennai along the Coromandel coast lies Cholamandal, India’s first self-supporting artists’ village. Founded in 1966 by K.C.S. Paniker, the Madras Art Movement revolutionized modern painting by weaving ancient astrological symbols, Sanskrit scripts, and rhythmic Dravidian lines into an authentically Indian visual language.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'The Madras Movement of Art: A Heritage of Indigenous Modernism', institution: 'Ashrafi S. Bhagat', year: '2012' },
    { title: 'Cholamandal: An Artists\' Village', institution: 'Josef James / Oxford University Press', year: '2004' }
  ]
};
