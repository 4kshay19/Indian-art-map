import React from 'react';
import { ArtCategory, ArtPeriod, CATEGORY_CONFIG, ERA_CONFIG, FilterState } from '../../types/artHistory';
import { RotateCcw, Activity } from 'lucide-react';

interface FilterBarProps {
  filterState: FilterState;
  onCategoryChange: (cat: ArtCategory | 'all') => void;
  onEraChange: (era: ArtPeriod | 'all') => void;
  onToggleLayer: (layer: keyof Pick<FilterState, 'showRivers' | 'showRoutes' | 'showTerrain' | 'showLabels'>) => void;
  onResetFilters: () => void;
  activeLocationCount: number;
  totalLocationCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filterState,
  onCategoryChange,
  onEraChange,
  onResetFilters,
  activeLocationCount,
  totalLocationCount
}) => {
  const isFiltered =
    filterState.selectedCategory !== 'all' ||
    filterState.selectedEra !== 'all' ||
    filterState.selectedRegion !== 'all' ||
    filterState.searchQuery !== '';

  return (
    <div className="absolute top-20 md:top-24 left-3 md:left-6 z-30 pointer-events-auto max-w-[calc(100vw-24px)] md:max-w-2xl flex flex-col gap-2">
      {/* Category Pills Bar */}
      <div className="museum-glass p-1.5 rounded-2xl flex items-center gap-1.5 overflow-x-auto scrollbar-none shadow-xl border border-[#d4af37]/20">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-3 py-1 rounded-xl text-xs font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
            filterState.selectedCategory === 'all'
              ? 'bg-[#d4af37] text-[#0f1016] font-bold shadow-[0_0_12px_rgba(212,175,55,0.4)]'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <span>All Traditions</span>
        </button>

        {(Object.keys(CATEGORY_CONFIG) as ArtCategory[]).map((catKey) => {
          const config = CATEGORY_CONFIG[catKey];
          const isSelected = filterState.selectedCategory === catKey;

          return (
            <button
              key={catKey}
              onClick={() => onCategoryChange(catKey)}
              className={`px-2.5 py-1 rounded-xl text-xs font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-white/20 text-[#fcedc5] border border-[#d4af37] shadow-md font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: config.hex }}
              />
              <span>{config.label}</span>
            </button>
          );
        })}
      </div>

      {/* Secondary Bar: Era Selectors & Active Count Indicator */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* Era Selector Pills */}
        <div className="museum-glass p-1 rounded-xl flex items-center gap-1 overflow-x-auto text-xs border border-white/10 shadow-lg">
          <button
            onClick={() => onEraChange('all')}
            className={`px-2.5 py-0.5 rounded-lg text-[11px] transition-colors whitespace-nowrap ${
              filterState.selectedEra === 'all'
                ? 'bg-[#c2593f] text-white font-semibold'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            All Eras
          </button>
          {(Object.keys(ERA_CONFIG) as ArtPeriod[]).map((eraKey) => {
            const era = ERA_CONFIG[eraKey];
            const isSelected = filterState.selectedEra === eraKey;
            return (
              <button
                key={eraKey}
                onClick={() => onEraChange(eraKey)}
                className={`px-2 py-0.5 rounded-lg text-[11px] transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#c2593f] text-white font-semibold'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                title={era.periodRange}
              >
                {era.label.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* Counter Badge */}
        <div className="museum-glass px-2.5 py-1 rounded-xl text-[11px] flex items-center gap-1.5 border border-[#d4af37]/25 text-gray-300 shadow">
          <Activity className="w-3 h-3 text-[#d4af37]" />
          <span>
            <strong className="text-[#fcedc5]">{activeLocationCount}</strong> of {totalLocationCount} art hubs
          </span>
        </div>

        {/* Reset Filter Button if active */}
        {isFiltered && (
          <button
            onClick={onResetFilters}
            className="museum-glass px-2.5 py-1 rounded-xl text-[11px] text-[#f9a26c] hover:text-white hover:bg-white/10 flex items-center gap-1 transition-colors border border-[#f9a26c]/30 shadow"
            title="Reset active filters"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>
    </div>
  );
};
