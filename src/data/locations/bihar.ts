import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const bihar: ArtLocation = {
  id: 'bihar',
  name: 'Bihar',
  subtitle: 'Madhubani Painting, Ancient Nalanda Bronzes & Mauryan Polish',
  state: 'Bihar',
  region: 'east',
  coordinates: { lat: 25.13, lng: 85.44 },
  position3D: latLngToVector3(25.13, 85.44, 0.24),
  category: 'folk',
  era: 'ancient',
  eraRange: '3rd c. BCE – Present',
  activeYearsRange: [-300, 2026],
  shortDescription: 'Cradle of ancient Indian empire and philosophy, celebrated for the monumental Mauryan mirror-polished Didarganj Yakshi, Nalanda Mahavihara bronze casting, and vibrant women-led Mithila (Madhubani) folk painting.',
  historicalContext: 'Bihar was the epicenter of India’s earliest empires (Magadha and Mauryan) and the intellectual dawn of Buddhism and Jainism. At Pataliputra (modern Patna), 3rd-century BCE Mauryan sculptors achieved the miraculous \'Mauryan polish\'—giving buff Chunar sandstone a glassy, mirror-like finish seen on the iconic Didarganj Yakshi. In the 5th to 12th centuries, the ancient international university of Nalanda Mahavihara flourished as an intellectual citadel, developing a distinctive school of Pala Buddhist bronze casting. In the rural Mithila region, women have passed down the ancient ritual art of Madhubani painting for generations. Practiced on freshly plastered mud walls (Kohbar) and paper using bamboo twigs, cotton rags, and natural dyes, artists like Ganga Devi, Sita Devi, and Mahasundari Devi elevated this sacred domestic tradition to international museum acclaim.',
  significance: 'Birthplace of the Mauryan empire and Buddhist scholastic bronze casting, home to the internationally celebrated Madhubani painting tradition.',
  localMovements: [
    {
      name: 'Mithila / Madhubani Painting Traditions',
      period: 'Ancient – Present (Contemporary Renaissance 1960s)',
      description: 'Line drawing (Kachni) and flat color filling (Bharni) depicting Tantric deities, wedding Kohbar fertility motifs, and epics with bamboo sticks.',
      keyFigures: ['Ganga Devi', 'Sita Devi', 'Mahasundari Devi', 'Bauwa Devi']
    },
    {
      name: 'Pala-Nalanda Bronze Foundry School',
      period: '8th – 12th Century CE',
      description: 'Exquisite lost-wax Buddhist and Hindu bronzes with inlaid silver eyes, elegant proportions, and flame halos.',
      keyFigures: ['Dhiman & Bitpalo (Pala Master Sculptors)']
    }
  ],
  notableArtists: ['Ganga Devi (Padma Shri)', 'Sita Devi', 'Bauwa Devi', 'Mahasundari Devi', 'Dhiman & Bitpalo'],
  artisticTraditions: [
    'Kachni (monochrome fine line) and Bharni (color wash) painting',
    'Mauryan lustrous mirror-polish on sandstone',
    'Pala lost-wax bronze casting with silver/gold inlay',
    'Sujani embroidered narrative quilts'
  ],
  artworks: [
    {
      id: 'didarganj-yakshi',
      title: 'The Didarganj Yakshi (Chauri Bearer)',
      artist: 'Mauryan Imperial Guild Sculptor',
      year: 'c. 3rd Century BCE',
      medium: 'Mirror-polished Chunar buff sandstone',
      collection: 'Bihar Museum, Patna',
      description: 'One of the greatest sculptural treasures of antiquity. A voluptuous, life-sized female attendant holding a fly-whisk (chauri), sculpted with sublime anatomical grace and the famed luminous Mauryan mirror glaze.',
      imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 162 cm'
    },
    {
      id: 'kohbar-gangadevi',
      title: 'Kohbar: The Mithila Nuptial Chamber Mural',
      artist: 'Ganga Devi',
      year: 'c. 1975',
      medium: 'Natural vegetable and mineral dyes on handmade paper',
      collection: 'National Handicrafts and Handlooms Museum, New Delhi',
      description: 'The masterwork of Mithila art. Sacred lotus flowers pierced by bamboo stalks symbolizing fertility, encircled by Shiva-Parvati, fish, turtles, and parrots in intricate cross-hatched Kachni lines.',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
      dimensions: '150 x 120 cm'
    }
  ],
  timeline: [
    { year: 'c. 250 BCE', title: 'Mauryan Polished Stone Sculptures', description: 'Didarganj Yakshi and Ashokan pillars sculpted in Pataliputra.' },
    { year: '5th c. CE', title: 'Nalanda Mahavihara Founded', description: 'World’s first residential international university rises as a center of Buddhist art.' },
    { year: '1934 CE', title: 'Madhubani Discovered Post-Earthquake', description: 'British officer W.G. Archer documents revealed wedding wall murals.' },
    { year: '1970s CE', title: 'Global Acclaim for Ganga Devi', description: 'Mithila artists tour international museums from Tokyo to Paris.' }
  ],
  relatedLocationIds: ['varanasi', 'kolkata', 'santiniketan', 'odisha'],
  audioNarrationText: 'In Bihar, art stretches from the glass-polished sandstone of the ancient Mauryan Didarganj Yakshi to the sacred domestic wall paintings of Mithila. Passed down for centuries by women using bamboo sticks and natural dyes, Madhubani artists like Ganga Devi turned ritual wedding motifs into internationally celebrated modern masterworks.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'The Painted World of Mithila', institution: 'Yves Véquaud', year: '1977' },
    { title: 'Nalanda: Excavations and Art', institution: 'Archaeological Survey of India', year: '1986' }
  ]
};
