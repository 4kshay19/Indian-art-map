import { ArtLocation } from '../../types/artHistory';
import { latLngToVector3 } from '../../utils/geoProjection';

export const gujarat: ArtLocation = {
  id: 'gujarat',
  name: 'Gujarat',
  subtitle: 'Rani ki Vav Stepwell, Patola Silks & Kutch Rogan Art',
  state: 'Gujarat',
  region: 'west',
  coordinates: { lat: 23.83, lng: 72.12 },
  position3D: latLngToVector3(23.83, 72.12, 0.24),
  category: 'folk',
  era: 'medieval',
  eraRange: '11th c. CE – Present',
  activeYearsRange: [1000, 2026],
  shortDescription: 'Cradle of the subterranean Maru-Gurjara stepwell wonder Rani ki Vav at Patan, peerless mathematical double-ikat Patola silk weaving, and Kutch\'s rare Rogan castor oil painting.',
  historicalContext: 'Gujarat’s artistic legacy is defined by technical perfection, architectural brilliance, and vibrant desert craft cultures. At Patan, Queen Udayamati commissioned the 11th-century Rani ki Vav on the banks of the Saraswati river. Designed as an inverted subterranean temple descending through seven terraced pavilions, it houses over 500 principal sculptures and 1,000 minor carvings of Vishnu Dashavatara in the Maru-Gurjara style. In the same city, the Salvi family has preserved Patan Patola—the world’s most complex double-ikat weaving, where silk warp and weft threads are tied and resist-dyed separately with astronomical mathematical accuracy so the design aligns perfectly during weaving. In Kutch, the Khatri family of Nirona preserves Rogan art—painting on fabric using heated castor oil mixed with natural earth pigments, applied with a metal stylus.',
  significance: 'UNESCO World Heritage subterranean stepwell engineering combined with some of the world’s most technically demanding textile and castor-oil painting traditions.',
  localMovements: [
    {
      name: 'Maru-Gurjara Subterranean Architecture',
      period: '10th – 13th Century CE',
      description: 'Multi-tiered subterranean stepwell pavilions (Vavs) adorned with high-relief Hindu pantheon sculptures and geometric water management.',
      keyFigures: ['Queen Udayamati', 'Solanki (Chaulukya) Guild Sthapatis']
    },
    {
      name: 'Patan Double-Ikat Patola Guild',
      period: '12th Century – Present',
      description: 'Pure mulberry silk double-ikat where both warp and weft are individually tie-dyed, identical on both sides, lasting centuries.',
      keyFigures: ['Salvi Family Master Weavers of Patan']
    },
    {
      name: 'Nirona Rogan Painting Heritage',
      period: '17th Century – Present',
      description: 'Painting textiles using boiled castor-oil paste spun into elastic threads and manipulated with a six-inch brass stylus.',
      keyFigures: ['Khatri Abdul Gafur & Family']
    }
  ],
  notableArtists: ['Salvi Artisan Lineage (Patan)', 'Khatri Abdul Gafur (Padma Shri, Rogan Master)', 'Ismail Mohammad Khatri (Ajrakh Master)'],
  artisticTraditions: [
    'Double-Ikat Patola silk resist-dye weaving',
    'Rogan castor-oil freehand thread painting',
    'Ajrakh 16-stage natural block printing',
    'Subterranean stepped well sandstone carving'
  ],
  artworks: [
    {
      id: 'rani-ki-vav',
      title: 'Sheshashayi Vishnu at Rani ki Vav',
      artist: 'Solanki Royal Guild Sculptors',
      year: 'c. 1063 CE',
      medium: 'Carved sandstone subterranean wall panel',
      collection: 'Rani ki Vav, Patan, Gujarat (UNESCO World Heritage)',
      description: 'Breathtaking high-relief carving of Lord Vishnu reclining on the coils of thousand-headed serpent Sheshanaga, deep in the fourth terrace of the 30-meter-deep subterranean stepwell.',
      imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      dimensions: 'Terrace panel, 2.1 x 1.4 meters'
    },
    {
      id: 'patan-patola-shikarbhat',
      title: 'Shikarbhat (Hunting Motif) Patan Patola',
      artist: 'Salvi Master Weavers of Patan',
      year: 'c. 19th Century',
      medium: 'Double-ikat mulberry silk with natural madder, indigo, and turmeric dyes',
      collection: 'Calico Museum of Textiles, Ahmedabad / Patan Patola Museum',
      description: 'The pinnacle of global textile mathematics. Parrots, elephants, and dancing maidens woven with double-ikat accuracy, showing identical jewel-bright saturation on both sides.',
      imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
      dimensions: '5.2 meters length'
    }
  ],
  timeline: [
    { year: '1063 CE', title: 'Rani ki Vav Commissioned', description: 'Queen Udayamati builds the inverted temple memorial for King Bhima I.' },
    { year: '12th c. CE', title: 'Salvi Weavers Migrate to Patan', description: 'King Kumarapala patrons 700 families of Patola double-ikat master weavers.' },
    { year: '1949 CE', title: 'Calico Museum of Textiles Founded', description: 'Gautam & Gira Sarabhai establish India\'s finest textile museum in Ahmedabad.' },
    { year: '2014 CE', title: 'UNESCO Inscription of Rani ki Vav', description: 'Recognized for technological stepwell mastery and subterranean sculptural artistry.' }
  ],
  relatedLocationIds: ['jaipur', 'mumbai', 'ajanta-ellora', 'delhi'],
  audioNarrationText: 'In the arid landscapes of Gujarat, artistry plunged thirty meters underground at Rani ki Vav, where eleventh-century queens built an inverted subterranean stepwell adorned with five hundred statues of Vishnu. Above ground in Patan, master weavers spend six months aligning microscopic silk threads to craft double-ikat Patola silks that remain vibrant for centuries.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
  sourceCitations: [
    { title: 'The Stepwells of Gujarat', institution: 'Jutta Jain-Neubauer', year: '1981' },
    { title: 'Patolas of Gujarat: Double Ikat in India', institution: 'Alfred Bühler & Eberhard Fischer', year: '1979' }
  ]
};
