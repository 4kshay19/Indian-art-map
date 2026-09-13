import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const santiniketan: ArtLocation = {
  id: 'santiniketan',
  name: 'Santiniketan',
  subtitle: 'Kala Bhavana & Rabindranath Tagore’s Open-Air Art Sanctuary',
  state: 'West Bengal',
  region: 'east',
  coordinates: { lat: 23.68, lng: 87.68 },
  position3D: latLngToVector3(23.68, 87.68, 0.23),
  category: 'modern',
  era: 'modern',
  eraRange: '1919 – Present',
  activeYearsRange: [1901, 2026],
  shortDescription: 'Nobel Laureate Rabindranath Tagore’s rural university where Kala Bhavana pioneered open-air environmental art, modernist public sculpture, and global pan-Asian modernist pedagogy.',
  historicalContext: 'Nestled in the laterite red-soil landscape of Birbhum, Santiniketan was envisioned by Rabindranath Tagore as an ashram where humanity lived in harmonic communion with nature and world cultures. In 1919, Tagore founded Kala Bhavana (Institute of Fine Arts), inviting the visionary master artist Nandalal Bose to direct it. Under Nandalal, Santiniketan rejected enclosed classrooms, taking students into open meadows to observe seasonal rhythms, Santhal tribal neighbors, and vernacular flora. Nandalal, alongside muralist Benode Behari Mukherjee and the revolutionary sculptor Ramkinkar Baij, created monumental outdoor art using local laterite pebbles, cement, and lime. In 1922, Santiniketan hosted the historic Bauhaus exhibition, fostering a dialogue between Paul Klee, Wassily Kandinsky, and Indian modernists.',
  significance: 'UNESCO World Heritage site recognized as the premier cradle of contextual modernism in Asia, seamlessly uniting vernacular craft with international modernist experimentation.',
  localMovements: [
    {
      name: 'Santiniketan Contextual Modernism',
      period: '1919 – 1950s',
      description: 'Ecological, open-air art integrated into rural life and architecture, utilizing earth pigments, laterite, and Santhal cultural motifs.',
      keyFigures: ['Rabindranath Tagore', 'Nandalal Bose', 'Benode Behari Mukherjee', 'Ramkinkar Baij', 'K.G. Subramanyan']
    },
    {
      name: 'The Constitution Illumination Guild',
      period: '1947 – 1950',
      description: 'National artistic commission led by Nandalal Bose to hand-illuminate all 22 parts of the original Constitution of India with Vedic, Mauryan, Gupta, and Freedom history.',
      keyFigures: ['Nandalal Bose', 'Beohar Rammanohar Sinha', 'Kripal Singh Shekhawat']
    }
  ],
  notableArtists: ['Rabindranath Tagore', 'Nandalal Bose', 'Ramkinkar Baij', 'Benode Behari Mukherjee', 'K.G. Subramanyan', 'Sankho Chaudhuri'],
  artisticTraditions: [
    'Alpona floor art created with rice paste',
    'Laterite pebble and cement environmental sculpture',
    'Jaipur wet fresco (Arayish) adapted to rural pavilions',
    'Batik and leather embossing craft innovations'
  ],
  artworks: [
    {
      id: 'santhal-family',
      title: 'Santhal Family',
      artist: 'Ramkinkar Baij',
      year: '1938',
      medium: 'Cement and laterite pebbles outdoor sculpture',
      collection: 'Kala Bhavana Grounds, Visva-Bharati, Santiniketan',
      description: 'The first modern public sculpture in India. An indigenous Santhal peasant family migrating with their belongings, child, and dog, cast in rough cement and unrefined laterite gravel directly in the open air.',
      imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 3.5 meters'
    },
    {
      id: 'dandi-march-nandalal',
      title: 'Bapu (Mahatma Gandhi on the Dandi March)',
      artist: 'Nandalal Bose',
      year: '1930',
      medium: 'Black and white linocut print on paper',
      collection: 'National Gallery of Modern Art, New Delhi',
      description: 'The defining visual emblem of India’s freedom struggle. Minimalist, determined lines capture Gandhi striding forward with his walking staff against white space.',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      dimensions: '29 x 19 cm'
    }
  ],
  timeline: [
    { year: '1901 CE', title: 'Ashram Founded', description: 'Rabindranath Tagore establishes an experimental school under mango groves.' },
    { year: '1919 CE', title: 'Kala Bhavana Established', description: 'Tagore invites Nandalal Bose to head India\'s most influential art department.' },
    { year: '1938 CE', title: 'Ramkinkar\'s Santhal Family', description: 'Pioneering modern open-air sculpture unveiled on campus.' },
    { year: '2023 CE', title: 'UNESCO World Heritage Inscription', description: 'Recognized for its pioneering contribution to international contextual modernism.' }
  ],
  relatedLocationIds: ['kolkata', 'mumbai', 'bihar', 'delhi'],
  audioNarrationText: 'Under the shade of chhatim trees at Santiniketan, Rabindranath Tagore and Nandalal Bose created an open-air universe where nature was the supreme studio. Here, Ramkinkar Baij cast revolutionary monumental sculptures of tribal families from raw cement and gravel, forever liberating modern Indian art from stuffy salon walls.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'Santiniketan: The Making of a Contextual Modernism', institution: 'R. Siva Kumar / National Gallery of Modern Art', year: '1997' },
    { title: 'Vision & Creation: An Nandalal Bose Centenary Volume', institution: 'Visva-Bharati Publishing', year: '1983' }
  ]
};
