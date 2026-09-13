import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Scene } from './components/3d/Scene';
import { Header } from './components/ui/Header';
import { FilterBar } from './components/ui/FilterBar';
import { TimelineSlider } from './components/ui/TimelineSlider';
import { LocationDrawer } from './components/ui/LocationDrawer';
import { ArtworkModal } from './components/ui/ArtworkModal';
import { GuidedTourModal } from './components/ui/GuidedTourModal';
import { ActiveTourBar } from './components/ui/ActiveTourBar';
import { FavoritesDrawer } from './components/ui/FavoritesDrawer';
import { CitationModal } from './components/ui/CitationModal';
import { AccessibilityModal } from './components/ui/AccessibilityModal';
import { LayersModal } from './components/ui/LayersModal';
import { HoverTooltip } from './components/ui/HoverTooltip';
import { ART_LOCATIONS, ART_LOCATIONS_MAP } from './data/artHistoryData';
import {
  ArtLocation,
  Artwork,
  CuratedTour,
  FilterState,
  RiverSystem,
  HistoricalRoute
} from './types/artHistory';
import { soundscapeEngine } from './services/audioService';
import { speechEngine } from './services/speechService';

export const App: React.FC = () => {
  // 1. Core Selection & Hover State
  const [selectedLocation, setSelectedLocation] = useState<ArtLocation | null>(null);
  const [, setHoveredLocation] = useState<ArtLocation | null>(null);
  const [hoveredRiver, setHoveredRiver] = useState<RiverSystem | null>(null);
  const [hoveredRoute, setHoveredRoute] = useState<HistoricalRoute | null>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  // 2. Camera & Regional Preset State
  const [activePreset, setActivePreset] = useState<string | null>('national');

  // 3. Guided Tour State
  const [activeTour, setActiveTour] = useState<CuratedTour | null>(null);
  const [currentTourStopIndex, setCurrentTourStopIndex] = useState<number>(0);

  // 4. Modal Visibility
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isToursOpen, setIsToursOpen] = useState(false);
  const [isCitationsOpen, setIsCitationsOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [isLayersMenuOpen, setIsLayersMenuOpen] = useState(false);

  // 5. Audio State
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // 6. Accessibility & Visual Preferences
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 7. Filter State
  const [filterState, setFilterState] = useState<FilterState>({
    searchQuery: '',
    selectedCategory: 'all',
    selectedEra: 'all',
    selectedRegion: 'all',
    activeYear: 2026,
    showRivers: true,
    showRoutes: true,
    showTerrain: true,
    showLabels: true
  });
  const [isTimelineActive, setIsTimelineActive] = useState(false);

  // 8. Bookmarks / Favorites saved to LocalStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('living_canvas_favorites');
      return saved ? JSON.parse(saved) : ['ajanta-ellora', 'thanjavur', 'mumbai'];
    } catch {
      return ['ajanta-ellora', 'thanjavur'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('living_canvas_favorites', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  // 9. Soundscape Audio Engine Toggle
  const handleToggleAudio = useCallback(() => {
    const playing = soundscapeEngine.toggle();
    setIsAudioPlaying(playing);
  }, []);

  // 10. Fullscreen Toggle
  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  // 11. Location Selection Handler
  const handleSelectLocation = useCallback((loc: ArtLocation) => {
    setSelectedLocation(loc);
    setActivePreset(null);
  }, []);

  const handleSelectRelatedLocation = useCallback((id: string) => {
    const target = ART_LOCATIONS_MAP[id];
    if (target) {
      soundscapeEngine.playTempleBell();
      setSelectedLocation(target);
      setActivePreset(null);
    }
  }, []);

  // 12. Guided Tour Handlers
  const handleStartTour = useCallback((tour: CuratedTour) => {
    setActiveTour(tour);
    setCurrentTourStopIndex(0);
    const firstLocId = tour.locationIds[0];
    const firstLoc = ART_LOCATIONS_MAP[firstLocId];
    if (firstLoc) {
      setSelectedLocation(firstLoc);
      soundscapeEngine.playTempleBell();
      speechEngine.speak(firstLoc.audioNarrationText);
    }
  }, []);

  const handleNextTourStop = useCallback(() => {
    if (!activeTour) return;
    if (currentTourStopIndex < activeTour.locationIds.length - 1) {
      const nextIdx = currentTourStopIndex + 1;
      setCurrentTourStopIndex(nextIdx);
      const nextLocId = activeTour.locationIds[nextIdx];
      const nextLoc = ART_LOCATIONS_MAP[nextLocId];
      if (nextLoc) {
        setSelectedLocation(nextLoc);
        soundscapeEngine.playTempleBell();
        speechEngine.speak(nextLoc.audioNarrationText);
      }
    }
  }, [activeTour, currentTourStopIndex]);

  const handlePrevTourStop = useCallback(() => {
    if (!activeTour) return;
    if (currentTourStopIndex > 0) {
      const prevIdx = currentTourStopIndex - 1;
      setCurrentTourStopIndex(prevIdx);
      const prevLocId = activeTour.locationIds[prevIdx];
      const prevLoc = ART_LOCATIONS_MAP[prevLocId];
      if (prevLoc) {
        setSelectedLocation(prevLoc);
        soundscapeEngine.playTempleBell();
        speechEngine.speak(prevLoc.audioNarrationText);
      }
    }
  }, [activeTour, currentTourStopIndex]);

  const handleExitTour = useCallback(() => {
    setActiveTour(null);
    speechEngine.stop();
  }, []);

  // 13. Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedLocation(null);
        setSelectedArtwork(null);
        setIsFavoritesOpen(false);
        setIsToursOpen(false);
        setIsCitationsOpen(false);
        setIsAccessibilityOpen(false);
        setIsLayersMenuOpen(false);
        if (activeTour) handleExitTour();
      } else if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        handleToggleAudio();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleToggleAudio, activeTour, handleExitTour]);

  // 14. Filter Handlers
  const handleCategoryChange = (cat: FilterState['selectedCategory']) => {
    setFilterState(prev => ({ ...prev, selectedCategory: cat }));
  };

  const handleEraChange = (era: FilterState['selectedEra']) => {
    setFilterState(prev => ({ ...prev, selectedEra: era }));
  };

  const handleToggleLayer = (
    layer: keyof Pick<FilterState, 'showRivers' | 'showRoutes' | 'showTerrain' | 'showLabels'>
  ) => {
    setFilterState(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  const handleResetFilters = () => {
    setFilterState({
      searchQuery: '',
      selectedCategory: 'all',
      selectedEra: 'all',
      selectedRegion: 'all',
      activeYear: 2026,
      showRivers: true,
      showRoutes: true,
      showTerrain: true,
      showLabels: true
    });
    setIsTimelineActive(false);
  };

  const handleTimelineYearChange = (year: number) => {
    setIsTimelineActive(true);
    setFilterState(prev => ({ ...prev, activeYear: year }));
  };

  const handleResetTimeline = () => {
    setIsTimelineActive(false);
    setFilterState(prev => ({ ...prev, activeYear: 2026 }));
  };

  // Calculate active matching locations count
  const activeLocationCount = useMemo(() => {
    return ART_LOCATIONS.filter(loc => {
      if (filterState.searchQuery.trim()) {
        const q = filterState.searchQuery.toLowerCase();
        const m1 = loc.name.toLowerCase().includes(q);
        const m2 = loc.subtitle.toLowerCase().includes(q);
        const m3 = loc.state.toLowerCase().includes(q);
        const m4 = loc.notableArtists.some(a => a.toLowerCase().includes(q));
        const m5 = loc.artworks.some(art => art.title.toLowerCase().includes(q));
        if (!m1 && !m2 && !m3 && !m4 && !m5) return false;
      }
      if (filterState.selectedCategory !== 'all' && loc.category !== filterState.selectedCategory) return false;
      if (filterState.selectedEra !== 'all' && loc.era !== filterState.selectedEra) return false;
      if (filterState.selectedRegion !== 'all' && loc.region !== filterState.selectedRegion) return false;
      if (isTimelineActive) {
        const [start, end] = loc.activeYearsRange;
        if (filterState.activeYear < start || filterState.activeYear > end) return false;
      }
      return true;
    }).length;
  }, [filterState, isTimelineActive]);

  // Current active location in tour
  const currentTourLocation = activeTour
    ? ART_LOCATIONS_MAP[activeTour.locationIds[currentTourStopIndex]]
    : null;

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden bg-[#090a0f] select-none ${
        isHighContrast ? 'high-contrast' : ''
      } ${
        fontSize === 'large' ? 'text-base' : fontSize === 'xlarge' ? 'text-lg' : 'text-sm'
      }`}
    >
      {/* Three.js 3D Subcontinent Scene */}
      <Scene
        filterState={filterState}
        selectedLocation={selectedLocation}
        activePreset={activePreset}
        onSelectLocation={handleSelectLocation}
        onHoverLocation={setHoveredLocation}
        onHoverRiver={setHoveredRiver}
        onHoverRoute={setHoveredRoute}
      />

      {/* Museum Header Bar */}
      <Header
        searchQuery={filterState.searchQuery}
        onSearchChange={(q) => setFilterState(prev => ({ ...prev, searchQuery: q }))}
        activePreset={activePreset}
        onSelectPreset={(preset) => {
          setActivePreset(preset);
          setSelectedLocation(null);
        }}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenTours={() => setIsToursOpen(true)}
        onOpenCitations={() => setIsCitationsOpen(true)}
        onOpenAccessibility={() => setIsAccessibilityOpen(true)}
        onToggleLayersMenu={() => setIsLayersMenuOpen(!isLayersMenuOpen)}
        isLayersMenuOpen={isLayersMenuOpen}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Category & Era Filtering Controls */}
      <FilterBar
        filterState={filterState}
        onCategoryChange={handleCategoryChange}
        onEraChange={handleEraChange}
        onToggleLayer={handleToggleLayer}
        onResetFilters={handleResetFilters}
        activeLocationCount={activeLocationCount}
        totalLocationCount={ART_LOCATIONS.length}
      />

      {/* Layers Floating Modal */}
      <LayersModal
        isOpen={isLayersMenuOpen}
        onClose={() => setIsLayersMenuOpen(false)}
        filterState={filterState}
        onToggleLayer={handleToggleLayer}
      />

      {/* Hover Tooltip for Rivers & Trade Routes */}
      <HoverTooltip
        hoveredRiver={hoveredRiver}
        hoveredRoute={hoveredRoute}
      />

      {/* Active Guided Tour Floating HUD */}
      {activeTour && currentTourLocation && (
        <ActiveTourBar
          tour={activeTour}
          currentStopIndex={currentTourStopIndex}
          currentLocation={currentTourLocation}
          onNextStop={handleNextTourStop}
          onPrevStop={handlePrevTourStop}
          onExitTour={handleExitTour}
        />
      )}

      {/* Chronological Timeline Scrubber */}
      <TimelineSlider
        activeYear={filterState.activeYear}
        onYearChange={handleTimelineYearChange}
        onResetTimeline={handleResetTimeline}
        isTimelineActive={isTimelineActive}
      />

      {/* Exhibition Slide-Out Drawer */}
      <LocationDrawer
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
        onSelectRelatedLocation={handleSelectRelatedLocation}
        onSelectArtwork={setSelectedArtwork}
        isFavorite={selectedLocation ? favorites.includes(selectedLocation.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* Artwork High-Res Modal / Lightbox */}
      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />

      {/* Guided Tours Modal */}
      <GuidedTourModal
        isOpen={isToursOpen}
        onClose={() => setIsToursOpen(false)}
        onStartTour={handleStartTour}
      />

      {/* Bookmarked / Saved Sites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favoriteIds={favorites}
        onRemoveFavorite={toggleFavorite}
        onSelectLocation={handleSelectLocation}
      />

      {/* Scholarly Citations & Bibliography */}
      <CitationModal
        isOpen={isCitationsOpen}
        onClose={() => setIsCitationsOpen(false)}
      />

      {/* Accessibility & Shortcuts Preferences */}
      <AccessibilityModal
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
        isHighContrast={isHighContrast}
        onToggleHighContrast={() => setIsHighContrast(!isHighContrast)}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
      />
    </div>
  );
};

export default App;
