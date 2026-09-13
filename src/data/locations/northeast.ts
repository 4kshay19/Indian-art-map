import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const northeastIndia: ArtLocation = {
  id: 'northeast-india',
  name: 'Northeast India',
  subtitle: 'Majuli Vaishnavite Masks, Muga Silk & Naga Woodcraft',
  state: 'Assam / Nagaland / Manipur',
  region: 'northeast',
  coordinates: { lat: 26.95, lng: 94.21 },
  position3D: latLngToVector3(26.95, 94.21, 0.32),
  category: 'folk',
  era: 'medieval',
  eraRange: '15th c. CE – Present',
  activeYearsRange: [1400, 2026],
  shortDescription: 'The riverine and hill sanctuaries of Assam, Nagaland, and Manipur, famed for Majuli island’s Vaishnavite bamboo theater masks, shimmering golden Muga silk, and heroic Naga tribal woodcarvings.',
  historicalContext: 'Encircled by the mighty Brahmaputra river and Eastern Himalayan ridges, Northeast India is home to a rich mosaic of living indigenous art traditions. On Majuli—the world’s largest river island—the 15th-century saint-reformer Srimanta Sankardeva established neo-Vaishnavite monasteries (Satras) that integrated spirituality with dramatic performance (Bhaona). At the Samaguri Satra, monks and master artisans craft elaborate, lightweight masks (Mukha) representing demons, gods, and mythological beasts using split bamboo frames, cane, cow dung, clay, and plant pigments. Across Assam’s valleys, weavers cultivate the wild endemic silkworm Antheraea assamensis to weave golden Muga silk, a lustrous textile that naturally glows with an amber-gold hue. In the surrounding hills of Nagaland, artisan warriors sculpt totemic wooden village gateways, ceremonial hornbill headdresses, and geometric textiles woven on backstrap loin looms.',
  significance: 'Living spiritual theater and craft sanctuaries, home to the UNESCO-recognized Majuli mask-making heritage and Assam\'s golden Muga silk handloom legacy.',
  localMovements: [
    {
      name: 'Sankari Satra Art Tradition of Majuli',
      period: '15th Century – Present',
      description: 'Vaishnavite monastic craft creating dynamic bamboo-and-clay masks (Bor Mukha, Lotokoi Mukha) with movable jaws and eyes for theatrical performance.',
      keyFigures: ['Srimanta Sankardeva', 'Koshakanta Deva Goswami', 'Prabin Goswami']
    },
    {
      name: 'Assam Royal Muga Handloom Weaving',
      period: 'Ahom Dynasty (13th c.) – Present',
      description: 'Weaving naturally golden, non-dyed wild Muga silk into regal Mekhela Chador adorned with red and black geometric motifs.',
      keyFigures: ['Weavers Guilds of Sualkuchi']
    }
  ],
  notableArtists: ['Hem Chandra Goswami (Padma Shri, Majuli Mask Master)', 'Srimanta Sankardeva (Founding Saint)', 'Traditional Sualkuchi Master Weavers'],
  artisticTraditions: [
    'Majuli bamboo, cane, and clay theatrical mask-making',
    'Wild golden Muga silk handloom weaving (Sualkuchi)',
    'Backstrap loin-loom geometric tribal textile weaving',
    'Monolithic ceremonial wood carving with mithun motifs'
  ],
  artworks: [
    {
      id: 'majuli-ravana-mask',
      title: 'Ten-Headed Ravana Mask (Bor Mukha)',
      artist: 'Hem Chandra Goswami / Samaguri Satra Guild',
      year: 'c. 2018',
      medium: 'Split bamboo, cane, clay, cow dung, cotton cloth, vegetable dyes',
      collection: 'Samaguri Satra Archive, Majuli, Assam / National Crafts Museum',
      description: 'Monumental theatrical mask spanning 2 meters with movable eyes and working jaw, constructed entirely without modern wire or plastic, allowing the actor to speak and dance effortlessly during Bhaona theater.',
      imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Height: 2.2 meters'
    },
    {
      id: 'golden-muga-chador',
      title: 'Royal Ahom Golden Muga Mekhela Chador',
      artist: 'Sualkuchi Master Silk Weavers',
      year: 'c. 19th Century',
      medium: 'Endemic wild Muga silk with natural lac and indigo supplementary weft',
      collection: 'Assam State Museum, Guwahati',
      description: 'A shimmering royal bridal ensemble woven from natural un-dyed golden silk filaments. The border features the traditional Kingkhap motif of facing peacocks and sacred temple spires.',
      imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Chador length: 2.8 meters'
    }
  ],
  timeline: [
    { year: '1449–1568 CE', title: 'Srimanta Sankardeva\'s Cultural Reformation', description: 'Establishes the Satras, Ankiya Nat drama, and Majuli mask crafts.' },
    { year: '1681–1696 CE', title: 'Ahom Royal Silk Patronage', description: 'King Rudra Singha decrees golden Muga silk the exclusive royal attire of Assam.' },
    { year: '2023 CE', title: 'Majuli Mask Making Awarded GI Tag', description: 'Recognized globally for its unique living theatrical craftsmanship.' }
  ],
  relatedLocationIds: ['kolkata', 'santiniketan', 'bihar', 'odisha'],
  audioNarrationText: 'Cradled by the waters of the Brahmaputra in Assam, the monks of Majuli island have sculpted bamboo and clay theater masks for five hundred years. In nearby valleys, master weavers spin shimmering wild Muga silk that glows with a natural golden sheen, celebrating the unbroken indigenous genius of Northeast India.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'The Satra Institution of Assam', institution: 'S.N. Sarma / Gauhati University', year: '1966' },
    { title: 'Naga Art and Culture', institution: 'Verrier Elwin', year: '1959' }
  ]
};
