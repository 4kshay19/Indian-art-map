export type ArtCategory = 'ancient' | 'medieval' | 'modern' | 'folk' | 'classical' | 'contemporary';

export type ArtPeriod = 'ancient' | 'medieval' | 'late_medieval' | 'modern' | 'contemporary';

export type Region = 'north' | 'south' | 'east' | 'west' | 'central' | 'northeast';

export interface Artwork {
  id: string;
  title: string;
  artist?: string;
  year: string;
  medium: string;
  imageUrl: string;
  collection: string;
  description: string;
  dimensions?: string;
}

export interface ArtMovement {
  name: string;
  period: string;
  description: string;
  keyFigures: string[];
}

export interface LocationTimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface SourceCitation {
  title: string;
  institution: string;
  year?: string;
  url?: string;
}

export interface ArtLocation {
  id: string;
  name: string;
  subtitle: string;
  state: string;
  region: Region;
  coordinates: {
    lat: number;
    lng: number;
  };
  position3D: [number, number, number];
  category: ArtCategory;
  era: ArtPeriod;
  eraRange: string;
  activeYearsRange: [number, number]; // [startYear, endYear] for timeline scrubber
  shortDescription: string;
  historicalContext: string;
  significance: string;
  localMovements: ArtMovement[];
  notableArtists: string[];
  artisticTraditions: string[];
  artworks: Artwork[];
  timeline: LocationTimelineEvent[];
  relatedLocationIds: string[];
  audioNarrationText: string;
  thumbnailUrl: string;
  heroImageUrl: string;
  sourceCitations: SourceCitation[];
}

export interface HistoricalRoute {
  id: string;
  name: string;
  subtitle: string;
  era: string;
  color: string;
  description: string;
  points: [number, number, number][];
  stops: string[];
}

export interface RiverSystem {
  id: string;
  name: string;
  sanskritName: string;
  significance: string;
  color: string;
  points: [number, number, number][];
}

export interface CuratedTour {
  id: string;
  title: string;
  theme: string;
  duration: string;
  badge: string;
  coverImage: string;
  description: string;
  locationIds: string[];
  narrationSummary: string;
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: ArtCategory | 'all';
  selectedEra: ArtPeriod | 'all';
  selectedRegion: Region | 'all';
  activeYear: number;
  showRivers: boolean;
  showRoutes: boolean;
  showTerrain: boolean;
  showLabels: boolean;
}

export const CATEGORY_CONFIG: Record<ArtCategory, { label: string; color: string; bgClass: string; textClass: string; hex: string; description: string }> = {
  ancient: {
    label: 'Ancient Art',
    color: '#D97736',
    bgClass: 'bg-[#D97736]/20 border-[#D97736]/40',
    textClass: 'text-[#F9A26C]',
    hex: '#D97736',
    description: 'Prehistoric rock shelters, Indus civilization craft, Mauryan polished stone, and early Buddhist cave frescoes.'
  },
  medieval: {
    label: 'Medieval Art',
    color: '#D4AF37',
    bgClass: 'bg-[#D4AF37]/20 border-[#D4AF37]/40',
    textClass: 'text-[#E5C358]',
    hex: '#D4AF37',
    description: 'Monumental rock temples, Nagara and Dravidian architecture, celestial carvings, and imperial court arts.'
  },
  modern: {
    label: 'Modern Art',
    color: '#E06D28',
    bgClass: 'bg-[#E06D28]/20 border-[#E06D28]/40',
    textClass: 'text-[#FF8D4D]',
    hex: '#E06D28',
    description: 'The Bengal School revival, Santiniketan open-air modernism, and the revolutionary Bombay Progressive Artists.'
  },
  folk: {
    label: 'Folk & Craft',
    color: '#2E8B57',
    bgClass: 'bg-[#2E8B57]/20 border-[#2E8B57]/40',
    textClass: 'text-[#52B788]',
    hex: '#2E8B57',
    description: 'Living indigenous traditions, ritual scroll painting, tribal murals, ikat textiles, and master crafts.'
  },
  classical: {
    label: 'Classical',
    color: '#2A6F97',
    bgClass: 'bg-[#2A6F97]/20 border-[#2A6F97]/40',
    textClass: 'text-[#61A5C2]',
    hex: '#2A6F97',
    description: 'Sacred iconography, lost-wax bronze casting, Tanjore gold foil, and temple sculptural canons.'
  },
  contemporary: {
    label: 'Contemporary',
    color: '#9B3888',
    bgClass: 'bg-[#9B3888]/20 border-[#9B3888]/40',
    textClass: 'text-[#D070BC]',
    hex: '#9B3888',
    description: 'International biennales, avant-garde installations, site-specific public art, and new media dialogues.'
  }
};

export const ERA_CONFIG: Record<ArtPeriod, { label: string; periodRange: string; startYear: number; endYear: number }> = {
  ancient: { label: 'Ancient & Classical Era', periodRange: '2500 BCE – 600 CE', startYear: -2500, endYear: 600 },
  medieval: { label: 'Early & High Medieval', periodRange: '600 – 1500 CE', startYear: 600, endYear: 1500 },
  late_medieval: { label: 'Late Medieval & Early Modern', periodRange: '1500 – 1800 CE', startYear: 1500, endYear: 1800 },
  modern: { label: 'Modern & Independence Era', periodRange: '1800 – 1980 CE', startYear: 1800, endYear: 1980 },
  contemporary: { label: 'Contemporary Era', periodRange: '1980 CE – Present', startYear: 1980, endYear: 2026 }
};
