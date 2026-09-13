import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock } from 'lucide-react';

interface TimelineSliderProps {
  activeYear: number;
  onYearChange: (year: number) => void;
  onResetTimeline: () => void;
  isTimelineActive: boolean;
}

export const TimelineSlider: React.FC<TimelineSliderProps> = ({
  activeYear,
  onYearChange,
  onResetTimeline,
  isTimelineActive
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const MIN_YEAR = -2500;
  const MAX_YEAR = 2026;

  // Auto-play through time
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        if (activeYear >= MAX_YEAR) {
          setIsPlaying(false);
        } else {
          const step = activeYear < 500 ? 50 : 25;
          onYearChange(Math.min(MAX_YEAR, activeYear + step));
        }
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeYear, onYearChange]);

  const formatYear = (year: number): string => {
    if (year < 0) {
      return `${Math.abs(year)} BCE`;
    }
    return `${year} CE`;
  };

  const EPOCHS = [
    { year: -2500, label: 'Indus' },
    { year: -300, label: 'Mauryan' },
    { year: 500, label: 'Gupta-Ajanta' },
    { year: 1010, label: 'Chola-Chandela' },
    { year: 1550, label: 'Vijayanagara-Mughal' },
    { year: 1750, label: 'Rajput-Deccan' },
    { year: 1919, label: 'Santiniketan' },
    { year: 1947, label: 'Modern PAG' },
    { year: 2026, label: 'Contemporary' }
  ];

  return (
    <div className="absolute bottom-3 md:bottom-5 left-3 md:left-6 right-3 md:right-6 z-30 pointer-events-auto max-w-4xl mx-auto">
      <div className="museum-glass rounded-2xl p-3 md:px-5 md:py-3.5 border border-[#d4af37]/35 shadow-2xl backdrop-blur-xl">
        {/* Top Info Bar */}
        <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#d4af37]/20 text-[#d4af37]">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                Chronological Era Explorer
              </div>
              <div className="font-cinzel text-sm md:text-base font-bold text-[#fcedc5] flex items-center gap-2">
                <span>{isTimelineActive ? formatYear(activeYear) : 'All Millennia (2500 BCE ? Present)'}</span>
                {isTimelineActive && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#c2593f]/30 border border-[#c2593f]/50 text-[#fba888] font-normal font-outfit">
                    Active Temporal Lens
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Controls: Play/Pause, Reset */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (!isTimelineActive) onYearChange(-500);
                setIsPlaying(!isPlaying);
              }}
              className="px-3 py-1.5 rounded-xl bg-[#d4af37] text-[#0b0c10] font-bold text-xs flex items-center gap-1.5 hover:bg-[#e5c358] transition-all shadow-md active:scale-95"
              title={isPlaying ? 'Pause timeline animation' : 'Play chronological journey through Indian art'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span className="hidden sm:inline font-outfit">{isPlaying ? 'Pause Journey' : 'Play Journey'}</span>
            </button>

            {isTimelineActive && (
              <button
                onClick={() => {
                  setIsPlaying(false);
                  onResetTimeline();
                }}
                className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white text-xs flex items-center gap-1 transition-all"
                title="Reset to view all epochs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Show All</span>
              </button>
            )}
          </div>
        </div>

        {/* Scrubbing Slider Input */}
        <div className="relative py-1">
          <input
            type="range"
            min={MIN_YEAR}
            max={MAX_YEAR}
            value={isTimelineActive ? activeYear : MAX_YEAR}
            onChange={(e) => {
              setIsPlaying(false);
              onYearChange(Number(e.target.value));
            }}
            className="w-full h-1.5 bg-gray-700/80 rounded-lg appearance-none cursor-pointer accent-[#d4af37] focus:outline-none"
            aria-label="Timeline scrubber from 2500 BCE to 2026 CE"
          />

          {/* Key Epoch Milestone Ticks */}
          <div className="flex justify-between items-center mt-1.5 px-0.5 overflow-x-auto scrollbar-none">
            {EPOCHS.map((epoch) => {
              const isActive = isTimelineActive && Math.abs(activeYear - epoch.year) < 250;
              return (
                <button
                  key={epoch.label}
                  onClick={() => {
                    setIsPlaying(false);
                    onYearChange(epoch.year);
                  }}
                  className={`text-[9px] md:text-[10px] transition-colors whitespace-nowrap px-1 py-0.5 rounded ${
                    isActive
                      ? 'text-[#fcedc5] font-bold border-b border-[#d4af37]'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <span className="block font-medium">{epoch.label}</span>
                  <span className="text-[8px] opacity-70 hidden md:block">{formatYear(epoch.year)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
