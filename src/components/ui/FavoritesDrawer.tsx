import React from 'react';
import { X, Bookmark, Trash2, MapPin, ChevronRight, Share2 } from 'lucide-react';
import { ART_LOCATIONS_MAP } from '../../data/artHistoryData';
import { ArtLocation } from '../../types/artHistory';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteIds: string[];
  onRemoveFavorite: (id: string) => void;
  onSelectLocation: (loc: ArtLocation) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favoriteIds,
  onRemoveFavorite,
  onSelectLocation
}) => {
  if (!isOpen) return null;

  const favoriteLocations = favoriteIds
    .map(id => ART_LOCATIONS_MAP[id])
    .filter(Boolean) as ArtLocation[];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:w-[420px] h-full museum-glass border-l border-[#d4af37]/30 shadow-2xl flex flex-col p-5 overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#c2593f]/20 text-[#f9a26c]">
              <Bookmark className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="font-cinzel text-lg font-bold text-white">
                Saved Cultural Hubs
              </h2>
              <p className="text-xs text-gray-400">
                {favoriteLocations.length} bookmarked destinations
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {favoriteLocations.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center text-gray-400 p-6">
              <Bookmark className="w-12 h-12 stroke-[1.2] opacity-30 mb-3" />
              <p className="text-sm font-medium text-gray-300">No Saved Locations Yet</p>
              <p className="text-xs text-gray-400 mt-1">
                Explore the 3D map and click the bookmark icon on any monument or art hub to build your personal cultural trail.
              </p>
            </div>
          ) : (
            favoriteLocations.map((loc) => (
              <div
                key={loc.id}
                onClick={() => {
                  onSelectLocation(loc);
                  onClose();
                }}
                className="group cursor-pointer p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#d4af37] transition-all flex items-center justify-between gap-3 shadow-md"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <img
                    src={loc.thumbnailUrl}
                    alt={loc.name}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="overflow-hidden">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#fcedc5] truncate font-cinzel">
                      {loc.name}
                    </h3>
                    <div className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#d4af37]" />
                      <span>{loc.state} ? {loc.eraRange}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveFavorite(loc.id);
                    }}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    title="Remove from favorites"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
