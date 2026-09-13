import React, { useState, useEffect } from 'react';
import {
  X,
  Bookmark,
  Volume2,
  VolumeX,
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  Palette,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Maximize2
} from 'lucide-react';
import { ArtLocation, Artwork, CATEGORY_CONFIG } from '../../types/artHistory';
import { speechEngine } from '../../services/speechService';
import { soundscapeEngine } from '../../services/audioService';

interface LocationDrawerProps {
  location: ArtLocation | null;
  onClose: () => void;
  onSelectRelatedLocation: (id: string) => void;
  onSelectArtwork: (artwork: Artwork) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const LocationDrawer: React.FC<LocationDrawerProps> = ({
  location,
  onClose,
  onSelectRelatedLocation,
  onSelectArtwork,
  isFavorite,
  onToggleFavorite
}) => {
  const [isNarrating, setIsNarrating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    speechEngine.setListener((speaking, paused) => {
      setIsNarrating(speaking);
      setIsPaused(paused);
    });

    return () => {
      speechEngine.stop();
    };
  }, []);

  // Stop speech when drawer closes or location changes
  useEffect(() => {
    speechEngine.stop();
  }, [location?.id]);

  if (!location) return null;

  const categoryConfig = CATEGORY_CONFIG[location.category];

  const handleToggleNarration = () => {
    if (isNarrating) {
      if (isPaused) {
        speechEngine.resume();
      } else {
        speechEngine.pause();
      }
    } else {
      soundscapeEngine.playTempleBell();
      speechEngine.speak(location.audioNarrationText);
    }
  };

  return (
    <aside
      className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] lg:w-[520px] museum-glass border-l border-[#d4af37]/35 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col pointer-events-auto animate-in slide-in-from-right duration-300 backdrop-blur-2xl"
      aria-label={`${location.name} Exhibition Details`}
    >
      {/* Hero Image & Top Bar */}
      <div className="relative h-56 sm:h-64 flex-shrink-0 overflow-hidden">
        <img
          src={location.heroImageUrl}
          alt={location.name}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/40 to-transparent" />

        {/* Top Control Buttons */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {/* Category Chip */}
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md border shadow-lg"
            style={{
              backgroundColor: `${categoryConfig.hex}30`,
              borderColor: categoryConfig.hex,
              color: '#fcedc5'
            }}
          >
            {categoryConfig.label}
          </span>

          <div className="flex items-center gap-2">
            {/* Bookmark Button */}
            <button
              onClick={() => onToggleFavorite(location.id)}
              className={`p-2 rounded-xl backdrop-blur-md transition-all shadow-md ${
                isFavorite
                  ? 'bg-[#c2593f] text-white border border-[#f9a26c]'
                  : 'bg-black/50 text-gray-300 hover:text-white border border-white/20'
              }`}
              title={isFavorite ? 'Remove from Saved Sites' : 'Save to Favorites'}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            {/* Close Drawer Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-black/50 text-gray-300 hover:text-white border border-white/20 backdrop-blur-md transition-all hover:bg-black/70 shadow-md"
              title="Close exhibition drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Hero Title */}
        <div className="absolute bottom-3 left-4 right-4">
          <div className="flex items-center gap-2 text-xs text-gray-300 font-medium mb-1">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{location.state} ? {location.region.toUpperCase()} INDIA</span>
            <span>?</span>
            <Calendar className="w-3.5 h-3.5 text-[#f9a26c]" />
            <span>{location.eraRange}</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide leading-tight">
            {location.name}
          </h2>
          <p className="text-xs sm:text-sm font-cormorant italic text-[#fcedc5] mt-0.5 line-clamp-1">
            {location.subtitle}
          </p>
        </div>
      </div>

      {/* Scrollable Curatorial Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-[#f4efe6]">
        {/* Audio Curatorial Voice Narration Card */}
        <div className="p-3.5 rounded-xl museum-glass border border-[#d4af37]/40 bg-gradient-to-r from-[#181a24] to-[#12141c] flex items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleNarration}
              className="w-10 h-10 rounded-xl bg-[#d4af37] text-[#0b0c10] flex items-center justify-center font-bold hover:bg-[#e5c358] transition-all shadow-md flex-shrink-0 active:scale-95"
              title={isNarrating && !isPaused ? 'Pause Narration' : 'Listen to Curatorial Audio'}
            >
              {isNarrating && !isPaused ? (
                <Volume2 className="w-5 h-5 animate-pulse" />
              ) : (
                <VolumeX className="w-5 h-5 opacity-70" />
              )}
            </button>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#d4af37] font-bold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                <span>Curatorial Audio Narration</span>
              </div>
              <div className="text-xs text-gray-200 mt-0.5">
                {isNarrating
                  ? isPaused
                    ? 'Narration paused. Click to resume.'
                    : 'Playing curatorial voiceover...'
                  : 'Listen to scholarly voice narration.'}
              </div>
            </div>
          </div>

          {isNarrating && (
            <button
              onClick={() => speechEngine.stop()}
              className="text-xs text-gray-400 hover:text-white px-2 py-1 rounded border border-white/10"
            >
              Stop
            </button>
          )}
        </div>

        {/* Short Summary & Historical Context */}
        <section className="space-y-3">
          <h3 className="font-cinzel text-xs font-bold text-[#d4af37] uppercase tracking-widest flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curatorial Essay & Historical Context</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-outfit">
            {location.shortDescription}
          </p>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-gray-300 leading-relaxed space-y-2">
            <p>{location.historicalContext}</p>
          </div>
          <div className="p-3 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/25 text-xs text-[#fcedc5] leading-relaxed">
            <strong className="text-[#d4af37] block mb-1 uppercase text-[10px] tracking-wider">
              Art-Historical Significance:
            </strong>
            {location.significance}
          </div>
        </section>

        {/* Masterpieces & Artworks Gallery */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-cinzel text-xs font-bold text-[#d4af37] uppercase tracking-widest flex items-center gap-2">
              <Palette className="w-3.5 h-3.5" />
              <span>Masterpieces & Artworks ({location.artworks.length})</span>
            </h3>
            <span className="text-[10px] text-gray-400">Click to inspect</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {location.artworks.map((artwork) => (
              <div
                key={artwork.id}
                onClick={() => onSelectArtwork(artwork)}
                className="group cursor-pointer rounded-xl overflow-hidden border border-white/10 hover:border-[#d4af37] bg-[#12141c] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="text-[10px] text-[#d4af37] font-medium">{artwork.year}</div>
                    <div className="text-xs font-semibold text-white truncate">{artwork.title}</div>
                  </div>
                </div>
                <div className="p-2.5">
                  <div className="text-[10px] text-gray-400 truncate">{artwork.medium}</div>
                  <div className="text-[9px] text-gray-500 truncate mt-0.5">{artwork.collection}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Art Movements */}
        {location.localMovements.length > 0 && (
          <section className="space-y-3">
            <h3 className="font-cinzel text-xs font-bold text-[#d4af37] uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Art Movements & Schools of Thought</span>
            </h3>
            <div className="space-y-2.5">
              {location.localMovements.map((movement, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-xs font-bold text-white">{movement.name}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-medium">
                      {movement.period}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-outfit mb-2">
                    {movement.description}
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] uppercase text-gray-400 font-semibold">Key Figures:</span>
                    {movement.keyFigures.map((fig, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#d4af37]/15 text-[#fcedc5] border border-[#d4af37]/20"
                      >
                        {fig}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Notable Artists & Guild Lineages */}
        <section className="space-y-2.5">
          <h3 className="font-cinzel text-xs font-bold text-[#d4af37] uppercase tracking-widest">
            Notable Artists & Master Guilds
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {location.notableArtists.map((artist, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs bg-white/10 text-[#f4efe6] border border-white/15 hover:border-[#d4af37] transition-colors"
              >
                {artist}
              </span>
            ))}
          </div>
        </section>

        {/* Artistic Traditions, Mediums & Pigments */}
        <section className="space-y-2.5">
          <h3 className="font-cinzel text-xs font-bold text-[#d4af37] uppercase tracking-widest">
            Artistic Traditions & Mediums
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {location.artisticTraditions.map((tradition, idx) => (
              <div
                key={idx}
                className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-gray-300 flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>{tradition}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Chronological Timeline */}
        <section className="space-y-3">
          <h3 className="font-cinzel text-xs font-bold text-[#d4af37] uppercase tracking-widest">
            Chronological Milestones
          </h3>
          <div className="relative pl-4 border-l border-white/15 space-y-3.5 my-2">
            {location.timeline.map((event, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#d4af37] border-2 border-[#0b0c10]" />
                <div className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider">
                  {event.year}
                </div>
                <div className="text-xs font-semibold text-white">{event.title}</div>
                <div className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                  {event.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Cultural Hubs */}
        {location.relatedLocationIds.length > 0 && (
          <section className="space-y-2.5">
            <h3 className="font-cinzel text-xs font-bold text-[#d4af37] uppercase tracking-widest">
              Connected Cultural Hubs
            </h3>
            <div className="flex flex-wrap gap-2">
              {location.relatedLocationIds.map((relId) => (
                <button
                  key={relId}
                  onClick={() => onSelectRelatedLocation(relId)}
                  className="px-3 py-1.5 rounded-xl museum-glass hover:bg-white/15 text-xs text-gray-200 hover:text-white flex items-center gap-1.5 border border-[#d4af37]/30 transition-all active:scale-95 capitalize"
                >
                  <span>{relId.replace(/-/g, ' ')}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#d4af37]" />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Source Citations & References */}
        <section className="pt-4 border-t border-white/10 space-y-2">
          <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
            Scholarly Citations & Archival Sources
          </div>
          <div className="space-y-1.5">
            {location.sourceCitations.map((cite, idx) => (
              <div key={idx} className="text-[11px] text-gray-400 italic">
                <span>{cite.title}</span> ? <span className="text-gray-300 not-italic">{cite.institution}</span> {cite.year ? `(${cite.year})` : ''}
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
};
