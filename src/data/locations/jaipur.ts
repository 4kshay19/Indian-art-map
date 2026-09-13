import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const jaipur: ArtLocation = {
  id: 'jaipur',
  name: 'Jaipur',
  subtitle: 'Rajput Miniature Schools & Master Crafts of the Pink City',
  state: 'Rajasthan',
  region: 'west',
  coordinates: { lat: 26.91, lng: 75.78 },
  position3D: latLngToVector3(26.91, 75.78, 0.26),
  category: 'medieval',
  era: 'late_medieval',
  eraRange: '16th – 19th Century CE',
  activeYearsRange: [1550, 2026],
  shortDescription: 'The planned pink sandstone capital renowned for Kachwaha court miniature paintings, City Palace murals, Jantar Mantar architectural astronomy, turquoise blue pottery, and royal Kundan jewellery.',
  historicalContext: 'Founded in 1727 by Maharaja Sawai Jai Singh II and designed according to Shilpa Shastra grid planning by architect Vidyadhar Bhattacharya, Jaipur represents the apex of Rajput cultural patronship. In royal painting ateliers (the Suratkhana), painters merged folk Rajasthani flat color planes, large expressive lotus eyes, and rhythmic decorative contours with sophisticated Mughal atmospheric depth. The school produced lyrical Ragamala musical personifications, dynamic Polo scenes, and portraits of courtly dignity. Beyond painting, Jaipur became India\'s artisanal capital for Egyptian paste-derived Blue Pottery glazed with copper oxide, Sanganer hand-block floral printing, and Kundan-Meena gem enameling.',
  significance: 'Center of Rajput miniature aesthetics and UNESCO World Heritage urban craft city, where centuries-old guild craft traditions remain vibrant in living bazaars.',
  localMovements: [
    {
      name: 'Jaipur-Dhundhar Miniature School',
      period: '17th – 19th Century',
      description: 'Vibrant palettes of saffron, vermilion, and gold, characterized by elaborate architectural backgrounds and lyrical Vaishnavite themes.',
      keyFigures: ['Sahibram', 'Mohammad Shah', 'Ramji Das']
    },
    {
      name: 'Kachwaha Mural Tradition',
      period: '18th – 19th Century',
      description: 'Fresco buono and fresco secco murals inside Amber Fort and City Palace depicting mythological processions and heavenly garden pavilions.',
      keyFigures: ['Royal Chiteras (Artisans)']
    }
  ],
  notableArtists: ['Sahibram', 'Ustad Kripal Singh Shekhawat (Reviver of Blue Pottery)', 'Manaku (Pahari connection)', 'Goyal Craft Guilds'],
  artisticTraditions: [
    'Jaipur Blue Pottery (quartz powder, glass, natural gum)',
    'Sanganeri and Bagru wooden block printing with vegetable dyes',
    'Kundan-Jadau 24k gold foil gemstone setting',
    'Arayish (Chuna polishing to marble mirror finish)'
  ],
  artworks: [
    {
      id: 'radha-krishna-jaipur',
      title: 'Krishna and Radha in a Bower of Blossoms',
      artist: 'Sahibram or Master of the Jaipur Atelier',
      year: 'c. 1770 CE',
      medium: 'Gouache and gold leaf on wasli paper',
      collection: 'Maharaja Sawai Man Singh II Museum, City Palace, Jaipur',
      description: 'Classic Jaipur Ragamala composition. Divine lovers Radha and Krishna sheltered under flowering kadamba branches against a golden twilight sky, framed by intricately gilded floral borders.',
      imageUrl: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80',
      dimensions: '32 x 24 cm'
    },
    {
      id: 'jantar-mantar',
      title: 'Samrat Yantra (Giant Equinoctial Sundial)',
      artist: 'Sawai Jai Singh II & Pandit Jagannatha Samrat',
      year: '1734 CE',
      medium: 'Local stone, marble and brass astronomical instruments',
      collection: 'Jantar Mantar, Jaipur (UNESCO World Heritage)',
      description: 'The world’s largest stone sundial standing 27 meters high, measuring time to an accuracy of two seconds. An astonishing convergence of avant-garde abstract geometric sculpture and astronomical science.',
      imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 27 meters'
    }
  ],
  timeline: [
    { year: '1727 CE', title: 'Founding of Jaipur', description: 'Sawai Jai Singh II plans the city around specialized artisan mohallas and guilds.' },
    { year: '1734 CE', title: 'Jantar Mantar Astronomical Observatory', description: 'Monumental geometric stone instruments completed.' },
    { year: '1799 CE', title: 'Hawa Mahal (Palace of Winds)', description: 'Architect Lal Chand Ustad constructs 953 honeycombed jharokhas.' },
    { year: '2019 CE', title: 'UNESCO World Heritage City', description: 'Recognized for urban planning and exceptional living craft traditions.' }
  ],
  relatedLocationIds: ['delhi', 'gujarat', 'hyderabad', 'varanasi'],
  audioNarrationText: 'Planned according to Vedic geometric grids in 1727, Jaipur became a sanctuary for royal painters, stone carvers, and master potters. In the royal ateliers, artists perfected the Jaipur miniature style with luminous emerald and gold pigments, while street guilds turned raw quartz into iconic turquoise blue pottery.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'Rajput Painting: A Study of the Dhundhar School', institution: 'Ananda K. Coomaraswamy', year: '1916' },
    { title: 'City Palace Collection of Jaipur', institution: 'Maharaja Sawai Man Singh II Museum Trust', year: '2008' }
  ]
};
