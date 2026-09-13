import React from 'react';
import { FilterState } from '../../types/artHistory';
import { Waves, Navigation, Mountain, Tag, X } from 'lucide-react';

interface LayersModalProps {
  isOpen: boolean;
  onClose: () => void;
  filterState: FilterState;
  onToggleLayer: (layer: keyof Pick<FilterState, 'showRivers' | 'showRoutes' | 'showTerrain' | 'showLabels'>) => void;
}

export const LayersModal: React.FC<LayersModalProps> = ({
  isOpen,
  onClose,
  filterState,
  onToggleLayer
}) => {
  if (!isOpen) return null;

  const layers = [
    {
      key: 'showRivers' as const,
      label: 'Sacred River Systems',
      description: 'Luminous 3D courses of Ganga, Yamuna, Brahmaputra, Narmada, Godavari, Krishna & Kaveri.',
      icon: Waves,
      color: '#4FC3F7',
      active: filterState.showRivers
    },
    {
      key: 'showRoutes' as const,
      label: 'Historical Trade & Pilgrimage Routes',
      description: 'Animated glowing arteries: Uttarapatha, Dakshinapatha, Monsoon Spice, and Miniature trails.',
      icon: Navigation,
      color: '#D4AF37',
      active: filterState.showRoutes
    },
    {
      key: 'showTerrain' as const,
      label: '3D Topographic Relief',
      description: 'Raised elevation mapping of the Himalayas, Western Ghats, Vindhyas, and Deccan Plateau.',
      icon: Mountain,
      color: '#C2593F',
      active: filterState.showTerrain
    },
    {
      key: 'showLabels' as const,
      label: 'Floating 3D Site Labels',
      description: 'Display persistent place name badges and category indicators above 3D map markers.',
      icon: Tag,
      color: '#52B788',
      active: filterState.showLabels
    }
  ];

  return (
    <div className="absolute top-16 md:top-20 right-4 md:right-6 z-50 pointer-events-auto w-80 museum-glass rounded-2xl p-4 border border-[#d4af37]/40 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
        <h3 className="font-cinzel text-sm font-bold text-[#fcedc5] uppercase tracking-wider flex items-center gap-2">
          <span>Map Visual Layers</span>
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col gap-2.5">
        {layers.map((layer) => {
          const Icon = layer.icon;
          return (
            <button
              key={layer.key}
              onClick={() => onToggleLayer(layer.key)}
              className={`p-2.5 rounded-xl text-left border transition-all duration-200 flex items-start gap-3 ${
                layer.active
                  ? 'bg-white/10 border-[#d4af37]/60 shadow-md'
                  : 'bg-black/20 border-white/5 opacity-60 hover:opacity-100 hover:border-white/20'
              }`}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${layer.color}25`, color: layer.color }}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-white flex items-center justify-between">
                  <span>{layer.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full uppercase font-bold tracking-wider ${
                      layer.active ? 'bg-[#d4af37]/30 text-[#fcedc5]' : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {layer.active ? 'On' : 'Off'}
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 mt-0.5 leading-relaxed font-outfit">
                  {layer.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
