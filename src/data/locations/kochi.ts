import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const kochi: ArtLocation = {
  id: 'kochi',
  name: 'Kochi',
  subtitle: 'Kochi-Muziris Biennale & Dutch Palace Murals',
  state: 'Kerala',
  region: 'south',
  coordinates: { lat: 9.96, lng: 76.24 },
  position3D: latLngToVector3(9.96, 76.24, 0.16),
  category: 'contemporary',
  era: 'contemporary',
  eraRange: '16th c. CE – Present',
  activeYearsRange: [1500, 2026],
  shortDescription: 'Vibrant Malabar port where 16th-century Mattancherry palace mythological frescoes converse with the Kochi-Muziris Biennale—South Asia’s premier contemporary art festival.',
  historicalContext: 'For two thousand years, the spice-scented coast of Kochi and ancient Muziris welcomed Arab dhows, Roman galleys, Chinese junks, and European armadas. In the 16th century, the Rajas of Kochi adorned the royal bedchambers of Mattancherry Palace (Dutch Palace) with over 300 square feet of tempera murals depicting the Ramayana and Bhagavata Purana. Created with five pure natural colors (Panchavarna), these murals are renowned for rhythmic complexity and expressive sensuality. In 2012, artists Bose Krishnamachari and Riyas Komu established the Kochi-Muziris Biennale in heritage waterfront warehouses at Fort Kochi, turning the city into Asia’s contemporary art destination.',
  significance: 'Historic spice crossroad uniting monumental classical Kerala tempera frescoes with the international cutting edge of contemporary art installations.',
  localMovements: [
    {
      name: 'Kerala Classical Mural Tradition',
      period: '15th – 18th Century CE',
      description: 'Vibrant tempera murals based on Dhyana Shlokas using five sacred natural pigments (Panchavarna).',
      keyFigures: ['Raja of Kochi Royal Painters', 'Temple Chitrakara Guilds']
    },
    {
      name: 'Kochi-Muziris Biennale Movement',
      period: '2012 – Present',
      description: 'International site-specific contemporary art dialogue engaging colonial heritage warehouses and global themes.',
      keyFigures: ['Bose Krishnamachari', 'Riyas Komu', 'Anita Dube']
    }
  ],
  notableArtists: ['Bose Krishnamachari', 'Riyas Komu', 'K.P. Reji', 'Traditional Mural Master Mammiyur Krishnankutty'],
  artisticTraditions: [
    'Panchavarna five-color natural mineral mural painting',
    'Kathakali facial makeup (Chutti) and wood-carved kireedam headgear',
    'Bell-metal bronze casting of Aranmula metal mirrors',
    'Site-specific multimedia installation and biennial art curation'
  ],
  artworks: [
    {
      id: 'mattancherry-krishna',
      title: 'Krishna Lifting Mount Govardhan',
      artist: 'Royal Court Master Muralist of Kochi',
      year: 'c. 1568 CE',
      medium: 'Natural pigments and vegetable gum on lime plaster wall',
      collection: 'Mattancherry Dutch Palace, Fort Kochi, Kerala',
      description: 'Celebrated mural from the royal bedchamber. Lord Krishna serenely balances the golden mountain on his little finger, surrounded by gopis and cattle with intricate botanical ornamentation.',
      imageUrl: 'https://images.unsplash.com/photo-1600100397608-f010f4441022?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Wall mural, 3.2 x 2.4 meters'
    },
    {
      id: 'biennale-installation',
      title: 'Sea of Memories: Aspinwall Installation',
      artist: 'Riyas Komu & International Collaborators',
      year: '2018',
      medium: 'Repurposed wood from fishing boats, iron, sound installation',
      collection: 'Aspinwall House, Fort Kochi (Kochi-Muziris Biennale)',
      description: 'Site-specific installation addressing Indian Ocean maritime migrations, forgotten indentured voyages, and ancient trade routes.',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Spatial installation, 20 x 15 meters'
    }
  ],
  timeline: [
    { year: '1555 CE', title: 'Mattancherry Palace Built', description: 'Constructed by the Portuguese and renovated with royal murals by Kerala kings.' },
    { year: '1600s CE', title: 'Ramayana Mural Suite Completed', description: 'Master painters execute the exquisite bedroom wall murals.' },
    { year: '2012 CE', title: 'First Kochi-Muziris Biennale', description: 'India\'s first contemporary art biennale opens to international acclaim.' }
  ],
  relatedLocationIds: ['thanjavur', 'chennai', 'mumbai', 'ajanta-ellora'],
  audioNarrationText: 'Where the backwaters meet the Arabian Sea, Fort Kochi breathes five centuries of maritime art. Inside the Dutch Palace, walls glow with sixteenth-century natural vegetable frescoes of Krishna and the Ramayana, while in ancient warehouses, the Kochi-Muziris Biennale draws visionary artists from around the planet to debate our collective future.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1600100397608-f010f4441022?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'The Painted Palaces of Kerala', institution: 'Ronald M. Bernier', year: '1982' },
    { title: 'Kochi-Muziris Biennale Catalogues', institution: 'Kochi Biennale Foundation', year: '2022' }
  ]
};
