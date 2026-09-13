import React, { useState } from 'react';
import {
  Search,
  Compass,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Bookmark,
  BookOpen,
  Eye,
  X,
  Sparkles,
  Layers
} from 'lucide-react';
import { REGIONAL_PRESETS } from '../../utils/geoProjection';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activePreset: string | null;
  onSelectPreset: (preset: string) => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenTours: () => void;
  onOpenCitations: () => void;
  onOpenAccessibility: () => void;
  onToggleLayersMenu: () => void;
  isLayersMenuOpen: boolean;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  activePreset,
  onSelectPreset,
  isAudioPlaying,
  onToggleAudio,
  favoritesCount,
  onOpenFavorites,
  onOpenTours,
  onOpenCitations,
  onOpenAccessibility,
  onToggleLayersMenu,
  isLayersMenuOpen,
  isFullscreen,
  onToggleFullscreen
}) => {
  const [showRegionalMenu, setShowRegionalMenu] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-40 p-3 md:p-4 pointer-events-none flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
      {/* Title & Brand Badge */}
      <div className="pointer-events-auto flex items-center gap-3">
        <div className="museum-glass rounded-xl p-2.5 px-4 flex items-center gap-3.5 border border-[#d4af37]/30 shadow-2xl backdrop-blur-xl">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#c2593f] via-[#d4af37] to-[#1b2e4b] p-0.5 shadow-md flex items-center justify-center flex-shrink-0">
            <div className="w-full h-full bg-[#0d0e14] rounded-[7px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#d4af37] animate-pulse" />
            </div>
          </div>
          <div>
            <h1 className="font-cinzel text-lg md:text-xl font-bold tracking-wider gold-gradient-text uppercase leading-tight">
              India: A Living Canvas
            </h1>
            <p className="text-[11px] font-cormorant italic text-[#d5cebf] tracking-wider -mt-0.5">
              3D Interactive Art History Atlas & Digital Museum
            </p>
          </div>
        </div>
      </div>

      {/* Center Search Bar */}
      <div className="pointer-events-auto w-full md:w-auto md:min-w-[340px] max-w-md">
        <div className="relative museum-glass rounded-xl border border-[#d4af37]/25 shadow-xl transition-all duration-300 focus-within:border-[#d4af37] focus-within:shadow-[0_0_20px_rgba(212,175,55,0.25)]">
          <Search className="w-4 h-4 text-[#d4af37]/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search artists, Chola bronzes, frescoes, Mithila, movements..."
            className="w-full bg-transparent pl-10 pr-9 py-2 text-xs md:text-sm text-[#f4efe6] placeholder-gray-400 focus:outline-none font-outfit"
            aria-label="Search art locations, artists and movements"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Top Right Action Toolbars */}
      <div className="pointer-events-auto flex items-center gap-1.5 md:gap-2 flex-wrap">
        {/* Curated Guided Tours Button */}
        <button
          onClick={onOpenTours}
          className="museum-glass hover:bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fcedc5] px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all duration-200 shadow-lg active:scale-95"
          title="Explore Curated Thematic Tours"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="hidden sm:inline font-cinzel text-[11px] uppercase tracking-wider font-semibold">
            Curated Tours
          </span>
        </button>

        {/* Regional Views Preset Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowRegionalMenu(!showRegionalMenu)}
            className="museum-glass hover:bg-white/10 border border-[#d4af37]/30 text-[#f4efe6] px-3 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all duration-200 shadow-lg active:scale-95"
            title="Regional Camera Views"
          >
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="hidden lg:inline text-xs font-outfit capitalize">
              {activePreset ? REGIONAL_PRESETS[activePreset]?.title.split(' ')[0] : 'Regions'}
            </span>
          </button>

          {showRegionalMenu && (
            <div className="absolute right-0 mt-2 w-56 museum-glass border border-[#d4af37]/30 rounded-xl p-1.5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="text-[10px] uppercase font-semibold text-[#d4af37] px-2.5 py-1 tracking-wider border-b border-white/10 mb-1">
                Regional Perspectives
              </div>
              {Object.entries(REGIONAL_PRESETS).map(([key, preset]) => (
                <button
                  key={key}
                  onClick={() => {
                    onSelectPreset(key);
                    setShowRegionalMenu(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                    activePreset === key
                      ? 'bg-[#d4af37]/25 text-[#fcedc5] font-semibold'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{preset.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Layer Toggles Menu Button */}
        <button
          onClick={onToggleLayersMenu}
          className={`museum-glass p-2 rounded-xl border text-xs flex items-center transition-all duration-200 active:scale-95 ${
            isLayersMenuOpen
              ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37]'
              : 'border-[#d4af37]/30 text-gray-300 hover:text-white'
          }`}
          title="Toggle Layers (Rivers, Trade Routes, Terrain)"
        >
          <Layers className="w-4 h-4" />
        </button>

        {/* Ambient Soundscape Tanpura Drone */}
        <button
          onClick={onToggleAudio}
          className={`museum-glass p-2 rounded-xl border text-xs flex items-center transition-all duration-200 active:scale-95 ${
            isAudioPlaying
              ? 'bg-[#d4af37]/25 border-[#d4af37] text-[#fcedc5] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
              : 'border-[#d4af37]/30 text-gray-400 hover:text-white'
          }`}
          title={isAudioPlaying ? 'Mute Meditative Tanpura Drone' : 'Play Meditative Tanpura Drone'}
        >
          {isAudioPlaying ? (
            <Volume2 className="w-4 h-4 text-[#d4af37] animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-gray-400" />
          )}
        </button>

        {/* Bookmarks / Favorites */}
        <button
          onClick={onOpenFavorites}
          className="museum-glass hover:bg-white/10 p-2 rounded-xl border border-[#d4af37]/30 text-gray-300 hover:text-white transition-all duration-200 active:scale-95 relative"
          title="Saved Cultural Sites"
        >
          <Bookmark className="w-4 h-4 text-[#f9a26c]" />
          {favoritesCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#c2593f] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow">
              {favoritesCount}
            </span>
          )}
        </button>

        {/* Scholarly Citations & Bibliography */}
        <button
          onClick={onOpenCitations}
          className="museum-glass hover:bg-white/10 p-2 rounded-xl border border-[#d4af37]/30 text-gray-300 hover:text-white transition-all duration-200 active:scale-95"
          title="Scholarly Sources & Image Citations"
        >
          <BookOpen className="w-4 h-4 text-[#61a5c2]" />
        </button>

        {/* Accessibility & Guide */}
        <button
          onClick={onOpenAccessibility}
          className="museum-glass hover:bg-white/10 p-2 rounded-xl border border-[#d4af37]/30 text-gray-300 hover:text-white transition-all duration-200 active:scale-95"
          title="Accessibility & Keyboard Controls"
        >
          <Eye className="w-4 h-4 text-[#d4af37]" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="museum-glass hover:bg-white/10 p-2 rounded-xl border border-[#d4af37]/30 text-gray-300 hover:text-white transition-all duration-200 active:scale-95 hidden sm:flex"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
