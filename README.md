# India: A Living Canvas
### 3D Interactive Art History Atlas & Digital Museum

**"India: A Living Canvas"** is an interactive 3D digital museum and historical atlas celebrating over 3,000 years of Indian art history. Built with React 18, Three.js, React Three Fiber, GSAP, Tailwind CSS, and Web Audio/Speech APIs.

---

## Features

- **3D Interactive Subcontinent Map**: Smooth 3D orbiting, panning, zooming, and cinematic fly-to transitions across the Indian subcontinent.
- **Topographic Relief & Terrain**: Raised elevation modeling for the Himalayas, Western & Eastern Ghats, Vindhyas, and Deccan Plateau.
- **Sacred River Systems**: Luminous 3D glowing courses for Ganga, Yamuna, Brahmaputra, Narmada, Godavari, Krishna, and Kaveri with contextual historical tooltips.
- **Historical Arteries & Trade Corridors**: Animated light flows along Uttarapatha, Dakshinapatha, Monsoon Spice, Miniature Painting, and Modernist art migration trails.
- **18 Monumental Art History Hubs**:
  - Ajanta & Ellora
  - Mumbai (Progressive Artists' Group)
  - Delhi (Mughal Ateliers & National Gallery)
  - Jaipur (Rajput Miniatures & Blue Pottery)
  - Varanasi (Gupta Sarnath Sculptures & Banarasi Brocades)
  - Kolkata (Bengal School & Jamini Roy)
  - Santiniketan (Tagore's Kala Bhavana & Modernist Sculpture)
  - Khajuraho (Chandela Nagara Temples & Surasundaris)
  - Hampi (Vijayanagara Granite & Musical Pillars)
  - Chennai (Cholamandal Artists' Village)
  - Thanjavur (Chola Bronzes & Tanjore Gold Foil)
  - Kochi (Kochi-Muziris Biennale & Dutch Palace Murals)
  - Hyderabad (Deccani Miniatures & Bidriware)
  - Kashmir (Papier-Mâché & Kani Pashmina)
  - Odisha (Konark Sun Temple & Raghurajpur Pattachitra)
  - Gujarat (Rani ki Vav Stepwell & Patan Patola)
  - Bihar (Didarganj Yakshi & Mithila Madhubani)
  - Northeast India (Majuli Masks & Assam Golden Muga Silk)
- **Curatorial Exhibition Drawer**: Historical essays, local art movements, artist lists, artistic traditions, chronological milestones, and connected hubs.
- **Artwork Lightbox Inspector**: Zoomable high-resolution artwork viewer with museum provenance.
- **Curated Thematic Tours**: 5 automated guided journeys with step-by-step camera navigation and spoken narration.
- **Audio Experience**: Procedural ambient Indian classical Tanpura drone (Web Audio API) and curatorial voice synthesis (Web Speech API).
- **Chronological Timeline Scrubber**: Interactive slider from 2500 BCE to 2026 CE with live marker illumination and auto-play journey mode.
- **Favorites & Accessibility**: Personal bookmarks saved to `localStorage`, high-contrast mode, typography sizing, layer toggles, and keyboard controls.

---

## Quickstart

### Prerequisites
- Node.js 18+ or 20+
- npm 9+ or 10+

### Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Open in your browser
# http://localhost:5173/
```

### Production Build & Preview

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Technology Stack

- **Framework**: React 18 + Vite + TypeScript
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animation**: GSAP
- **Styling**: Tailwind CSS, Lucide React icons
- **Audio**: Web Audio API (Procedural Tanpura Synthesizer) & Web Speech API (Voice Narration)
- **Typography**: Cinzel, Cormorant Garamond, Outfit

