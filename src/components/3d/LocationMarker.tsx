import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { ArtLocation, CATEGORY_CONFIG } from '../../types/artHistory';
import { soundscapeEngine } from '../../services/audioService';

interface LocationMarkerProps {
  location: ArtLocation;
  isSelected: boolean;
  isFilteredOut: boolean;
  showLabels: boolean;
  onSelect: (loc: ArtLocation) => void;
  onHover: (loc: ArtLocation | null) => void;
}

export const LocationMarker: React.FC<LocationMarkerProps> = ({
  location,
  isSelected,
  isFilteredOut,
  showLabels,
  onSelect,
  onHover
}) => {
  const [hovered, setHovered] = useState(false);
  const gemRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const categoryInfo = CATEGORY_CONFIG[location.category];
  const markerColor = categoryInfo.hex;
  const posY = location.position3D[1];

  // Lightweight frame update for floating gem and pulsing radar
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (gemRef.current) {
      gemRef.current.position.y = posY + 0.45 + Math.sin(t * 2 + location.coordinates.lat) * 0.07;
      gemRef.current.rotation.y = t * 1.1;
    }
    if (ringRef.current) {
      const scale = 1 + ((t * 0.75 + Math.abs(location.coordinates.lng * 0.1)) % 1) * 1.8;
      ringRef.current.scale.set(scale, scale, 1);
      const ringMat = ringRef.current.material as THREE.MeshBasicMaterial;
      if (ringMat) {
        ringMat.opacity = Math.max(0, 0.75 - (scale - 1) * 0.42);
      }
    }
  });

  if (isFilteredOut) {
    return null;
  }

  return (
    <group position={location.position3D} name={`marker-${location.id}`}>
      {/* Ground Disc */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, 0]}>
        <circleGeometry args={[0.2, 16]} />
        <meshBasicMaterial color={markerColor} opacity={isSelected ? 0.9 : 0.6} transparent />
      </mesh>

      {/* Pulsing Beacon Ring */}
      <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.045, 0]}>
        <ringGeometry args={[0.2, 0.3, 16]} />
        <meshBasicMaterial color={markerColor} transparent opacity={0.6} />
      </mesh>

      {/* Vertical Light Ray */}
      <mesh position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.44, 6]} />
        <meshBasicMaterial color={markerColor} transparent opacity={0.8} />
      </mesh>

      {/* Floating Animated Jewel Gem */}
      <mesh
        ref={gemRef}
        position={[0, 0.45, 0]}
        onClick={(e) => {
          e.stopPropagation();
          soundscapeEngine.playTempleBell();
          onSelect(location);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(location);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
          document.body.style.cursor = 'auto';
        }}
      >
        <octahedronGeometry args={[hovered || isSelected ? 0.22 : 0.16, 0]} />
        <meshStandardMaterial
          color={isSelected ? '#ffffff' : markerColor}
          emissive={markerColor}
          emissiveIntensity={isSelected ? 1.2 : hovered ? 0.9 : 0.5}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      {/* Floating UI Badge & Tooltip */}
      {(showLabels || hovered || isSelected) && (
        <Html
          position={[0, 0.82, 0]}
          center
          distanceFactor={18}
          zIndexRange={[100, 0]}
          style={{ pointerEvents: 'none', willChange: 'transform, opacity' }}
        >
          <div
            className={`transition-transform duration-200 select-none ${
              isSelected
                ? 'scale-110 -translate-y-1'
                : hovered
                ? 'scale-105 -translate-y-0.5'
                : 'scale-95'
            }`}
          >
            <div
              className={`px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-lg backdrop-blur-md border ${
                isSelected
                  ? 'bg-[#181a24]/95 text-[#f4efe6] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : hovered
                  ? 'bg-[#12141c]/90 text-white border-white/40'
                  : 'bg-[#0f1016]/80 text-[#eae5dc] border-[#d4af37]/30'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: markerColor }}
              />
              <span className="font-cinzel text-[11px] whitespace-nowrap">{location.name}</span>
            </div>

            {/* Micro Hover Plaque on Cursor Over */}
            {hovered && !isSelected && (
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 rounded-lg museum-glass text-left shadow-2xl border border-[#d4af37]/40 pointer-events-none">
                <div className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">
                  {categoryInfo.label}
                </div>
                <div className="text-xs font-medium text-white line-clamp-1">
                  {location.subtitle}
                </div>
                <div className="text-[10px] text-gray-300 mt-0.5">
                  {location.state} ? {location.eraRange}
                </div>
                <div className="text-[9px] text-[#f9a26c] mt-1 italic">
                  Click to inspect artifacts & audio
                </div>
              </div>
            )}
          </div>
        </Html>
      )}
    </group>
  );
};
