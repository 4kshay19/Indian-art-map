import { CuratedTour } from '../types/artHistory';

export const CURATED_TOURS: CuratedTour[] = [
  {
    id: 'sacred-frescoes',
    title: 'The Sacred Frescoes & Cave Sanctuaries',
    theme: 'Ancient Rock-cut Murals & Monastic Splendor',
    duration: '15 min curated journey',
    badge: 'Ancient Heritage',
    coverImage: 'https://images.unsplash.com/photo-1600100397608-f010f4441022?auto=format&fit=crop&w=1200&q=80',
    description: 'Descend into volcanic gorges and rock-hewn sanctuaries where monks and royal master painters captured transcendent Buddhist compassion, cosmic Hindu deities, and vibrant ancient life with ground lapis, cinnabar, and clay.',
    locationIds: ['ajanta-ellora', 'kochi', 'bihar', 'kashmir'],
    narrationSummary: 'Welcome to the Sacred Frescoes tour. Over two millennia ago, master guilds began excavating basalt cliffs at Ajanta and Ellora, developing an aesthetic canon that would influence mural traditions from Kerala to Central Asia.'
  },
  {
    id: 'monumental-temples',
    title: 'Imperial Bronzes & Monumental Temples',
    theme: 'Chola Lost-Wax Casting & Sandstone Wonders',
    duration: '20 min curated journey',
    badge: 'Medieval Classical',
    coverImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    description: 'A grand pilgrimage across medieval India: from the monumental 216-foot granite vimana of Brihadisvara in Thanjavur and Chola Nataraja bronzes, to the lyrical celestial nymphs of Khajuraho and the boulder-cradled ruins of Hampi.',
    locationIds: ['thanjavur', 'khajuraho', 'hampi', 'odisha'],
    narrationSummary: 'This journey celebrates the zenith of medieval Indian architecture and metallurgy. Here, geometry, cosmology, and sculptural mastery coalesced into timeless monuments built without mortar, aligned with astronomical precision.'
  },
  {
    id: 'courtly-miniatures',
    title: 'Courtly Splendor: The Miniature Painting Trail',
    theme: 'Mughal, Rajput & Deccani Illustrated Manuscripts',
    duration: '18 min curated journey',
    badge: 'Imperial Ateliers',
    coverImage: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80',
    description: 'Step into the royal ateliers where court masters ground lapis lazuli, malachite, cinnabar, and 24-karat gold to illuminate the Akbarnama, Ragamala musical modes, and intimate Krishna poetry with single-hair squirrel brushes.',
    locationIds: ['delhi', 'jaipur', 'hyderabad', 'kashmir'],
    narrationSummary: 'The Indian miniature is a universe distilled onto handmade wasli paper. From the Persian-influenced realism of the Mughal court to the passionate devotional rhythms of Rajput and Deccani schools, discover the masters behind these jewel-like creations.'
  },
  {
    id: 'modernist-awakening',
    title: 'The Modernist Awakening & Freedom’s Canvas',
    theme: 'Bengal Renaissance, Bombay Progressives & Beyond',
    duration: '22 min curated journey',
    badge: 'Modernism',
    coverImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    description: 'Follow the dramatic 20th-century revolution as Indian artists rejected colonial European academic realism to forge an authentic indigenous modernism: from Tagore’s rural academy at Santiniketan to the post-Partition fury of the Bombay Progressive Artists.',
    locationIds: ['kolkata', 'santiniketan', 'mumbai', 'chennai', 'kochi'],
    narrationSummary: 'In the dawn of independence, artists sought a visual vocabulary that was at once profoundly Indian and radically modern. This tour traces that explosive aesthetic quest across Bengal, Bombay, Madras, and the contemporary Biennale in Kochi.'
  },
  {
    id: 'living-indigenous-crafts',
    title: 'Living Indigenous Crafts & Tribal Visions',
    theme: 'Unbroken Millennia of Folk, Ritual & Master Crafts',
    duration: '16 min curated journey',
    badge: 'Living Heritage',
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    description: 'Celebrate the living heart of Indian artistic genius: ritual Mithila wall murals painted by women with bamboo twigs, sacred palm-leaf etchings in Odisha, mathematical double-ikat Patola silks in Gujarat, and riverside mask-making in Majuli.',
    locationIds: ['bihar', 'odisha', 'gujarat', 'northeast-india'],
    narrationSummary: 'Indian art lives not merely in stone and museums, but in everyday sacred rituals, courtyard floors, and master artisan villages where techniques have been handed down from mother to daughter and father to son for countless generations.'
  }
];
