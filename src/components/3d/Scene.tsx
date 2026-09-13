import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { IndiaTerrain } from './IndiaTerrain';
import { Rivers3D } from './Rivers3D';
import { Routes3D } from './Routes3D';
import { LocationMarker } from './LocationMarker';
import { CameraController } from './CameraController';
import { ART_LOCATIONS } from '../../data/artHistoryData';
import { ArtLocation, FilterState, RiverSystem, HistoricalRoute } from '../../types/artHistory';

interface SceneProps {
  filterState: FilterState;
  selectedLocation: ArtLocation | null;
  activePreset: string | null;
  onSelectLocation: (loc: ArtLocation) => void;
  onHoverLocation: (loc: ArtLocation | null) => void;
  onHoverRiver?: (river: RiverSystem | null) => void;
  onHoverRoute?: (route: HistoricalRoute | null) => void;
}

export const Scene: React.FC<SceneProps> = ({
  filterState,
  selectedLocation,
  activePreset,
  onSelectLocation,
  onHoverLocation,
  onHoverRiver,
  onHoverRoute
}) => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 18, 16], fov: 45, near: 0.1, far: 200 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
      >
        <color attach="background" args={['#090a0e']} />
        <fog attach="fog" args={['#090a0e', 22, 50]} />

        {/* Ambient & Directional Museum Illumination */}
        <ambientLight intensity={1.1} color="#1d2232" />
        <directionalLight
          position={[10, 22, 12]}
          intensity={2.2}
          color="#fff2db"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight
          position={[-12, 14, -8]}
          intensity={1.0}
          color="#e0864a"
        />
        <directionalLight
          position={[0, 8, -16]}
          intensity={0.7}
          color="#64b5f6"
        />

        {/* Celestial Constellation Stars Background */}
        <Stars
          radius={60}
          depth={40}
          count={1500}
          factor={3.5}
          saturation={0.5}
          fade
          speed={0.5}
        />

        <Suspense fallback={null}>
          {/* 3D Topographic Landmass */}
          <IndiaTerrain showTerrain={filterState.showTerrain} />

          {/* Sacred Rivers System */}
          <Rivers3D
            showRivers={filterState.showRivers}
            onHoverRiver={onHoverRiver}
          />

          {/* Historical Trade & Pilgrimage Routes */}
          <Routes3D
            showRoutes={filterState.showRoutes}
            onHoverRoute={onHoverRoute}
          />

          {/* 18 Monumental Art History Location Markers */}
          {ART_LOCATIONS.map((loc) => {
            // Check Filtering logic
            let isFilteredOut = false;

            // 1. Search filter
            if (filterState.searchQuery.trim()) {
              const q = filterState.searchQuery.toLowerCase();
              const matchName = loc.name.toLowerCase().includes(q);
              const matchSubtitle = loc.subtitle.toLowerCase().includes(q);
              const matchState = loc.state.toLowerCase().includes(q);
              const matchArtist = loc.notableArtists.some(a => a.toLowerCase().includes(q));
              const matchArtworks = loc.artworks.some(art => art.title.toLowerCase().includes(q));
              const matchTradition = loc.artisticTraditions.some(t => t.toLowerCase().includes(q));

              if (!matchName && !matchSubtitle && !matchState && !matchArtist && !matchArtworks && !matchTradition) {
                isFilteredOut = true;
              }
            }

            // 2. Category filter
            if (filterState.selectedCategory !== 'all' && loc.category !== filterState.selectedCategory) {
              isFilteredOut = true;
            }

            // 3. Era filter
            if (filterState.selectedEra !== 'all' && loc.era !== filterState.selectedEra) {
              isFilteredOut = true;
            }

            // 4. Region filter
            if (filterState.selectedRegion !== 'all' && loc.region !== filterState.selectedRegion) {
              isFilteredOut = true;
            }

            // 5. Timeline Scrubber filter
            // If activeYear is set, show if the location falls within its active chronological window
            if (filterState.activeYear) {
              const [start, end] = loc.activeYearsRange;
              // Allow some breathing room or highlight if activeYear is at or after site origin
              if (filterState.activeYear < start || filterState.activeYear > end) {
                isFilteredOut = true;
              }
            }

            return (
              <LocationMarker
                key={loc.id}
                location={loc}
                isSelected={selectedLocation?.id === loc.id}
                isFilteredOut={isFilteredOut}
                showLabels={filterState.showLabels}
                onSelect={onSelectLocation}
                onHover={onHoverLocation}
              />
            );
          })}

          {/* Smooth Cinematic Orbit / Camera Transition Controller */}
          <CameraController
            selectedLocation={selectedLocation}
            activePreset={activePreset}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
