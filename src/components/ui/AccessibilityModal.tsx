import React from 'react';
import { X, Eye, Keyboard, Type, SunMoon } from 'lucide-react';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  isHighContrast: boolean;
  onToggleHighContrast: () => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  onChangeFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
  isOpen,
  onClose,
  isHighContrast,
  onToggleHighContrast,
  fontSize,
  onChangeFontSize
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg museum-glass rounded-2xl border border-[#d4af37]/40 shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#d4af37]/20 text-[#d4af37]">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-cinzel text-lg font-bold text-white">
                Accessibility & Controls
              </h2>
              <p className="text-xs text-gray-400">
                Visual comfort preferences & keyboard navigation
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

        <div className="space-y-4 text-xs text-gray-200">
          {/* High Contrast Toggle */}
          <div className="p-3.5 rounded-xl museum-glass-light border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <SunMoon className="w-4 h-4 text-[#d4af37]" />
              <div>
                <span className="font-semibold block text-white">High Contrast Mode</span>
                <span className="text-[11px] text-gray-400">Enhance border definition and contrast</span>
              </div>
            </div>
            <button
              onClick={onToggleHighContrast}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                isHighContrast
                  ? 'bg-[#d4af37] text-black shadow-md'
                  : 'bg-white/10 text-gray-300 hover:text-white'
              }`}
            >
              {isHighContrast ? 'Enabled' : 'Disabled'}
            </button>
          </div>

          {/* Font Size Scaling */}
          <div className="p-3.5 rounded-xl museum-glass-light border border-white/10 space-y-2">
            <div className="flex items-center gap-2.5">
              <Type className="w-4 h-4 text-[#d4af37]" />
              <div>
                <span className="font-semibold block text-white">Curatorial Typography Size</span>
                <span className="text-[11px] text-gray-400">Scale reading size for exhibition essays</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {(['normal', 'large', 'xlarge'] as const).map((sz) => (
                <button
                  key={sz}
                  onClick={() => onChangeFontSize(sz)}
                  className={`py-1.5 rounded-lg text-center font-medium capitalize border transition-all ${
                    fontSize === sz
                      ? 'bg-[#d4af37]/25 text-[#fcedc5] border-[#d4af37]'
                      : 'bg-white/5 border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  {sz === 'normal' ? 'Standard' : sz === 'large' ? 'Large' : 'Extra Large'}
                </button>
              ))}
            </div>
          </div>

          {/* Keyboard Shortcuts Reference */}
          <div className="p-3.5 rounded-xl museum-glass-light border border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 font-semibold text-white">
              <Keyboard className="w-4 h-4 text-[#d4af37]" />
              <span>Keyboard Shortcuts & 3D Navigation</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-300">
              <div className="flex items-center justify-between p-1.5 rounded bg-black/30">
                <span>Left Click + Drag</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#d4af37] font-mono">Orbit 3D</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-black/30">
                <span>Right Click + Drag</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#d4af37] font-mono">Pan Map</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-black/30">
                <span>Scroll Wheel</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#d4af37] font-mono">Zoom In/Out</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-black/30">
                <span>Spacebar</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#d4af37] font-mono">Audio Drone</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-black/30">
                <span>Escape</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#d4af37] font-mono">Close</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-black/30">
                <span>Click Marker</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#d4af37] font-mono">Fly & Inspect</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
