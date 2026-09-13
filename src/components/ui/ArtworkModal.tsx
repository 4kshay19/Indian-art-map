import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2, Sparkles, Building, Calendar, Palette } from 'lucide-react';
import { Artwork } from '../../types/artHistory';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] museum-glass rounded-2xl border border-[#d4af37]/40 shadow-2xl overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-xl bg-black/60 text-gray-300 hover:text-white border border-white/20 backdrop-blur-md transition-colors"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Artwork Visual View */}
        <div className="flex-1 relative bg-[#090a0f] flex items-center justify-center overflow-hidden min-h-[320px] md:min-h-[500px]">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className={`max-w-full max-h-[75vh] object-contain transition-transform duration-300 cursor-zoom-in ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Zoom Toggle Floating Button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute bottom-3 left-3 p-2 rounded-xl bg-black/60 text-gray-300 hover:text-white border border-white/20 backdrop-blur-md text-xs flex items-center gap-1.5 transition-colors"
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            <span>{isZoomed ? 'Reset View' : 'Zoom Details'}</span>
          </button>
        </div>

        {/* Right Side: Museum Plaque & Curatorial Metadata */}
        <div className="w-full md:w-[380px] p-5 md:p-6 flex flex-col justify-between overflow-y-auto border-t md:border-t-0 md:border-l border-white/10 space-y-4">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold flex items-center gap-1.5 mb-1.5">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              <span>National Art Catalog Archive</span>
            </div>

            <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white leading-tight">
              {artwork.title}
            </h3>

            {artwork.artist && (
              <p className="text-sm font-medium text-[#fcedc5] mt-1">
                Attributed: <span className="text-white">{artwork.artist}</span>
              </p>
            )}

            <div className="my-4 space-y-2 text-xs border-y border-white/10 py-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#f9a26c]" />
                <span className="font-semibold text-white">Date / Era:</span>
                <span>{artwork.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#61a5c2]" />
                <span className="font-semibold text-white">Medium:</span>
                <span className="truncate">{artwork.medium}</span>
              </div>
              <div className="flex items-start gap-2">
                <Building className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Repository:</span>
                  <div className="text-gray-300">{artwork.collection}</div>
                </div>
              </div>
              {artwork.dimensions && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Maximize2 className="w-4 h-4" />
                  <span>{artwork.dimensions}</span>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                Curatorial Analysis
              </h4>
              <p className="text-xs text-gray-200 leading-relaxed font-outfit">
                {artwork.description}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 text-[10px] text-gray-400 italic">
            Image reproduced for scholarly educational digital exhibition. Archaeological Survey of India & Partner Repositories.
          </div>
        </div>
      </div>
    </div>
  );
};
