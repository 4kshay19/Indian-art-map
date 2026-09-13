import React from 'react';
import { RiverSystem, HistoricalRoute } from '../../types/artHistory';
import { Waves, Navigation } from 'lucide-react';

interface HoverTooltipProps {
  hoveredRiver: RiverSystem | null;
  hoveredRoute: HistoricalRoute | null;
}

export const HoverTooltip: React.FC<HoverTooltipProps> = ({
  hoveredRiver,
  hoveredRoute
}) => {
  if (!hoveredRiver && !hoveredRoute) return null;

  return (
    <div className="absolute top-20 right-6 z-40 pointer-events-none max-w-sm animate-in fade-in slide-in-from-top-2 duration-200">
      {hoveredRiver && (
        <div className="museum-glass rounded-2xl p-4 border border-[#4FC3F7]/50 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#4FC3F7] uppercase tracking-wider mb-1">
            <Waves className="w-4 h-4" />
            <span>Sacred River System</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="font-cinzel text-lg font-bold text-white">
              {hoveredRiver.name}
            </h3>
            <span className="text-sm font-cormorant text-[#fcedc5]">
              {hoveredRiver.sanskritName}
            </span>
          </div>
          <p className="text-xs text-gray-300 mt-1 leading-relaxed font-outfit">
            {hoveredRiver.significance}
          </p>
        </div>
      )}

      {hoveredRoute && (
        <div className="museum-glass rounded-2xl p-4 border border-[#d4af37]/50 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-1">
            <Navigation className="w-4 h-4" />
            <span>Historical Trade & Pilgrimage Arteries</span>
          </div>
          <h3 className="font-cinzel text-base font-bold text-white">
            {hoveredRoute.name}
          </h3>
          <div className="text-[11px] text-[#f9a26c] font-medium mt-0.5">
            {hoveredRoute.era}
          </div>
          <p className="text-xs text-gray-300 mt-1 leading-relaxed font-outfit">
            {hoveredRoute.description}
          </p>
          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] text-gray-400 uppercase font-semibold">Key Hubs:</span>
            {hoveredRoute.stops.map((stop, sIdx) => (
              <span
                key={sIdx}
                className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-[#fcedc5]"
              >
                {stop}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
