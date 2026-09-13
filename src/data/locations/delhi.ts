import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const delhi: ArtLocation = {
  id: 'delhi',
  name: 'Delhi',
  subtitle: 'Imperial Mughal Miniatures & Contemporary Art Capital',
  state: 'Delhi NCR',
  region: 'north',
  coordinates: { lat: 28.61, lng: 77.20 },
  position3D: latLngToVector3(28.61, 77.20, 0.28),
  category: 'medieval',
  era: 'late_medieval',
  eraRange: '12th c. CE – Present',
  activeYearsRange: [-300, 2026],
  shortDescription: 'The historic seat of seven imperial cities where Persian master miniaturists synthesized with indigenous Indian painters in royal Mughal ateliers, today serving as India’s modern institutional art capital.',
  historicalContext: 'From the ancient Iron Pillar of Mehrauli (a 4th c. Gupta metallurgical wonder) to the red sandstone splendor of Humayun’s Tomb and the Red Fort, Delhi has been a crucible of artistic synthesis for a millennium. Under Emperor Akbar, royal ateliers combined the delicate line-work of Persian masters Mir Sayyid Ali and Abd al-Samad with the dynamic energy and naturalism of Indian painters like Basawan and Daswanth to illustrate grand codices like the Hamzanama, Baburnama, and Akbarnama. Later under Jahangir and Shah Jahan, Ustad Mansur revolutionized botanical and zoological portraiture with unparalleled scientific accuracy. In modern times, Delhi hosts the National Museum, the National Gallery of Modern Art (NGMA) at Jaipur House, Lalit Kala Akademi, and the annual India Art Fair.',
  significance: 'Historic capital of Indo-Islamic architecture, courtly miniature illumination, and India’s contemporary institutional center for national art collections and global biennale representation.',
  localMovements: [
    {
      name: 'Mughal Imperial Miniature Atelier',
      period: '1556 – 1707 CE',
      description: 'Harmonious synthesis of Persian compositional framing, European three-dimensional perspective, and Indian warmth of palette and natural observation.',
      keyFigures: ['Basawan', 'Ustad Mansur', 'Bishandas', 'Abu\'l Hasan', 'Govardhan']
    },
    {
      name: 'Company School (Kampani Kalam)',
      period: 'Late 18th – 19th Century',
      description: 'Indian artists adapting traditional miniature wash to watercolor documentation of flora, fauna, and monuments for European patrons.',
      keyFigures: ['Ghulam Ali Khan', 'Mazhar Ali Khan']
    }
  ],
  notableArtists: ['Basawan', 'Ustad Mansur (Nadir-ul-Asr)', 'Amrita Sher-Gil', 'Sailoz Mookherjea', 'Vivan Sundaram', 'Anish Kapoor'],
  artisticTraditions: [
    'Wasli paper burnishing with agate stone',
    'Single-hair squirrel tail brush miniature painting',
    'Pietra dura (Parchin kari) marble gemstone inlay',
    'Gupta rustless forge-welded iron metallurgy'
  ],
  artworks: [
    {
      id: 'akbar-elephant',
      title: 'Akbar Taming the Wild Elephant Hawai',
      artist: 'Basawan (composition) & Chetar (coloring)',
      year: 'c. 1590 CE',
      medium: 'Opaque watercolor and gold on wasli paper',
      collection: 'Victoria and Albert Museum / National Museum Delhi reference',
      description: 'Dynamic tour de force from the Akbarnama. The young Emperor Akbar fearlessly rides the raging elephant Hawai across a swaying bridge of boats over the Yamuna River.',
      imageUrl: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80',
      dimensions: '37 x 23 cm'
    },
    {
      id: 'zebra-mansur',
      title: 'Study of a Zebra / Falcon on a Bird-Rest',
      artist: 'Ustad Mansur (Wunderkind of the Age)',
      year: '1621 CE',
      medium: 'Opaque watercolor, ink and gold on paper',
      collection: 'Metropolitan Museum of Art / National Museum Delhi',
      description: 'Scientific precision blended with regal poetic beauty. Commissioned by Emperor Jahangir to record exotic fauna with microscopic observation of hair, feather sheen, and life force.',
      imageUrl: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1200&q=80',
      dimensions: '28.5 x 19.3 cm'
    },
    {
      id: 'three-girls-shergil',
      title: 'Group of Three Girls',
      artist: 'Amrita Sher-Gil',
      year: '1935',
      medium: 'Oil on canvas',
      collection: 'National Gallery of Modern Art, New Delhi',
      description: 'Pioneering masterpiece by India’s greatest female modernist painter, depicting three young Punjabi women in somber contemplative silence, rendered with warm terracotta and saffron tones influenced by Ajanta frescoes and Gauguin.',
      imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      dimensions: '107.5 x 86.4 cm'
    }
  ],
  timeline: [
    { year: '402 CE', title: 'Iron Pillar of Delhi Cast', description: 'Corrosion-resistant Gupta iron column erected, a marvel of ancient Indian metallurgy.' },
    { year: '1556 CE', title: 'Akbar Establishes Imperial Tasvirkhana', description: 'Over one hundred master painters gather to produce illuminated epics.' },
    { year: '1648 CE', title: 'Shahjahanabad & Red Fort Completed', description: 'Pinnacle of Mughal architectural geometry, marble jali work, and pietra dura inlay.' },
    { year: '1954 CE', title: 'NGMA Inaugurated at Jaipur House', description: 'Premier national repository for modern Indian paintings, sculptures, and installations.' }
  ],
  relatedLocationIds: ['jaipur', 'varanasi', 'hyderabad', 'kashmir'],
  audioNarrationText: 'Delhi’s artistic heritage spans from the mysterious rust-free fourth-century iron pillar at Mehrauli to the magnificent royal ateliers of the Mughal court. Here, artists like Basawan and Ustad Mansur wielded squirrel-hair brushes to document royal adventures and exquisite natural wonders on burnished wasli paper.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'The Imperial Image: Paintings for the Mughal Court', institution: 'Milo Cleveland Beach / Freer Gallery of Art', year: '1981' },
    { title: 'Indian Painting: The Mughal and Deccani Schools', institution: 'National Museum New Delhi', year: '2012' }
  ]
};
