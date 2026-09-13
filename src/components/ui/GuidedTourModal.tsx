import React from 'react';
import { X, Sparkles, Clock, Compass, ArrowRight, Play } from 'lucide-react';
import { CURATED_TOURS } from '../../data/toursData';
import { CuratedTour } from '../../types/artHistory';

interface GuidedTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTour: (tour: CuratedTour) => void;
}

export const GuidedTourModal: React.FC<GuidedTourModalProps> = ({
  isOpen,
  onClose,
  onStartTour
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[88vh] museum-glass rounded-2xl border border-[#d4af37]/40 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Curated Thematic Journeys</span>
            </div>
            <h2 className="font-cinzel text-xl md:text-2xl font-bold text-white mt-0.5">
              Step Into Indian Art History
            </h2>
            <p className="text-xs text-gray-300 font-cormorant italic mt-0.5">
              Guided cinematic trajectories through ancient frescoes, royal court ateliers, and revolutionary modernism.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tour List Cards */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3.5">
          {CURATED_TOURS.map((tour) => (
            <div
              key={tour.id}
              onClick={() => {
                onStartTour(tour);
                onClose();
              }}
              className="group cursor-pointer rounded-xl overflow-hidden border border-white/10 hover:border-[#d4af37] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 flex flex-col sm:flex-row shadow-lg hover:shadow-2xl"
            >
              <div className="relative w-full sm:w-48 h-36 flex-shrink-0 overflow-hidden">
                <img
                  src={tour.coverImage}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-black/70 text-[#fcedc5] border border-[#d4af37]/40">
                  {tour.badge}
                </span>
              </div>

              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#f9a26c]" />
                    <span>{tour.duration}</span>
                    <span>?</span>
                    <Compass className="w-3.5 h-3.5 text-[#61a5c2]" />
                    <span>{tour.locationIds.length} Monumental Stops</span>
                  </div>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-[#fcedc5] transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-2 leading-relaxed font-outfit">
                    {tour.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-[#d4af37] font-semibold">
                  <span>Embark on Guided Tour</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
