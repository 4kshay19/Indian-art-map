import React from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles, Volume2 } from 'lucide-react';
import { CuratedTour, ArtLocation } from '../../types/artHistory';
import { speechEngine } from '../../services/speechService';

interface ActiveTourBarProps {
  tour: CuratedTour;
  currentStopIndex: number;
  currentLocation: ArtLocation;
  onNextStop: () => void;
  onPrevStop: () => void;
  onExitTour: () => void;
}

export const ActiveTourBar: React.FC<ActiveTourBarProps> = ({
  tour,
  currentStopIndex,
  currentLocation,
  onNextStop,
  onPrevStop,
  onExitTour
}) => {
  const isFirst = currentStopIndex === 0;
  const isLast = currentStopIndex === tour.locationIds.length - 1;

  const handlePlayVoice = () => {
    speechEngine.speak(currentLocation.audioNarrationText);
  };

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 pointer-events-auto w-[92%] max-w-xl">
      <div className="museum-glass rounded-2xl p-3 px-4 border border-[#d4af37]/60 shadow-[0_0_30px_rgba(212,175,55,0.3)] backdrop-blur-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
          </div>
          <div className="overflow-hidden">
            <div className="text-[10px] uppercase font-bold text-[#d4af37] tracking-wider truncate">
              {tour.title} (Stop {currentStopIndex + 1} of {tour.locationIds.length})
            </div>
            <div className="text-sm font-bold text-white truncate font-cinzel">
              {currentLocation.name}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={handlePlayVoice}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#fcedc5] transition-colors"
            title="Play Audio Narration for this Stop"
          >
            <Volume2 className="w-4 h-4" />
          </button>

          <button
            onClick={onPrevStop}
            disabled={isFirst}
            className={`p-2 rounded-xl border transition-colors ${
              isFirst
                ? 'opacity-30 cursor-not-allowed border-transparent'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/10'
            }`}
            title="Previous Stop"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onNextStop}
            disabled={isLast}
            className={`p-2 rounded-xl border transition-colors ${
              isLast
                ? 'opacity-30 cursor-not-allowed border-transparent'
                : 'bg-[#d4af37] hover:bg-[#e5c358] text-[#0b0c10] font-bold border-[#d4af37]'
            }`}
            title="Next Stop"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExitTour}
            className="p-2 rounded-xl bg-white/10 hover:bg-red-500/30 text-gray-300 hover:text-white transition-colors ml-1"
            title="Exit Tour Mode"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
