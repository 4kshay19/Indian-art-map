import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const varanasi: ArtLocation = {
  id: 'varanasi',
  name: 'Varanasi',
  subtitle: 'Sacred River Ghats, Classical Gupta Sculpture & Golden Brocades',
  state: 'Uttar Pradesh',
  region: 'north',
  coordinates: { lat: 25.31, lng: 82.97 },
  position3D: latLngToVector3(25.31, 82.97, 0.24),
  category: 'classical',
  era: 'ancient',
  eraRange: '8th c. BCE – Present',
  activeYearsRange: [-800, 2026],
  shortDescription: 'One of the world’s oldest continuously inhabited cultural capitals, birthplace of the classical Gupta Sarnath sculptural school and master handloom Banarasi silk brocades.',
  historicalContext: 'Varanasi (Kashi), perched on the crescent curve of the sacred Ganga, has been the philosophical and artistic heartbeat of India for three millennia. At nearby Sarnath, the Buddha preached his First Sermon in the 5th century BCE; a millennium later, the Sarnath School of Classical Gupta Sculpture achieved the absolute summit of Indian plastic art—stripping away drapery and ornamentation to present the human form as an ethereal vessel of spiritual tranquility in warm Chunar sandstone. Along the river, eighty-four stone ghats form a kinetic amphitheater of ritual, funeral fire, and architecture. Varanasi is equally renowned for its master weavers, where Muslim Ansaris have hand-loomed Banarasi Zari brocades with real gold and silver threads on jacquard pit looms since Mughal times.',
  significance: 'Spiritual epicenter of Indian civilization, pinnacle of Gupta Buddhist classical sculpture, and premier center for sacred textile weaving and classical music.',
  localMovements: [
    {
      name: 'Sarnath Classical Gupta School',
      period: '4th – 6th Century CE',
      description: 'Sublime meditative refinement, clinging diaphanous drapery, halo decorated with lotus arabesques, and tranquil spiritual introspection.',
      keyFigures: ['Gupta Guild Master Sculptors of Chunar Sandstone']
    },
    {
      name: 'Banaras Zari Handloom Tradition',
      period: '16th Century – Present',
      description: 'Intricate floral brocades (Kinkhab, Tanchoi, Shikargah) hand-woven on pit looms using pure gold and silver wire over mulberry silk.',
      keyFigures: ['Ansari Master Weaver Guilds (Ustad-Shagird)']
    }
  ],
  notableArtists: ['Ancient Sarnath Guild Masters', 'Bismillah Khan (Shehnai)', 'Pandit Ravi Shankar (Sitar)', 'Master Weaver Haji Munna Lal'],
  artisticTraditions: [
    'Chunar fine-grained buff sandstone carving',
    'Banarasi silk brocade with Kadwa and Fekwa weaving',
    'Ganga Ghat tiered stone step architecture',
    'Brass and copper ritual repoussé metalware'
  ],
  artworks: [
    {
      id: 'sarnath-buddha',
      title: 'Dharmachakra Pravartana Buddha',
      artist: 'Gupta Master Sculptor of Sarnath Guild',
      year: '5th Century CE',
      medium: 'Carved Chunar buff sandstone',
      collection: 'Sarnath Archaeological Museum, Varanasi',
      description: 'The definitive icon of world Buddhist sculpture. The Buddha is depicted seated in padmasana turning the Wheel of the Law, dressed in seamless monastic robes with an elaborately carved lotus halo behind his head.',
      imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 1.6 meters'
    },
    {
      id: 'ashoka-lion-capital',
      title: 'Lion Capital of Ashoka',
      artist: 'Mauryan Imperial Guild Sculptors',
      year: 'c. 250 BCE',
      medium: 'Polished Chunar sandstone with mirror-like finish',
      collection: 'Sarnath Archaeological Museum (National Emblem of India)',
      description: 'Four magnificent Asiatic lions standing back to back atop an abacus adorned with the Ashoka Chakra, elephant, horse, bull, and lion, resting on an inverted bell lotus.',
      imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 2.15 meters'
    }
  ],
  timeline: [
    { year: '528 BCE', title: 'Buddha\'s First Sermon at Sarnath', description: 'Sets the Wheel of the Law in motion, establishing the region as a sacred art center.' },
    { year: 'c. 250 BCE', title: 'Ashoka Erects Pillar Capital', description: 'Mauryan mirror-polished sandstone lion capital created.' },
    { year: '5th c. CE', title: 'Gupta Sarnath Golden Age', description: 'Creation of the transcendent seated preaching Buddha icon.' },
    { year: '1780 CE', title: 'Reconstruction of Ghats', description: 'Ahilyabai Holkar and Maratha rulers build the magnificent stone ghat riverfront.' }
  ],
  relatedLocationIds: ['bihar', 'delhi', 'khajuraho', 'kolkata'],
  audioNarrationText: 'Along the sacred curve of the river Ganges, Varanasi has stood as a citadel of Indian philosophy and artistry for three thousand years. Here at Sarnath, fifth-century sculptors transformed buff Chunar sandstone into the world-famous preaching Buddha, while generations of Muslim and Hindu master weavers twined golden silk brocades in ancient neighborhood alleyways.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'The Classical Age: Gupta Sculpture at Sarnath', institution: 'Archaeological Survey of India', year: '1972' },
    { title: 'Benares: City of Light', institution: 'Diana L. Eck / Columbia University Press', year: '1982' }
  ]
};
