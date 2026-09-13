import React, { useMemo } from 'react';
import * as THREE from 'three';
import { SACRED_RIVERS } from '../../data/riversData';
import { RiverSystem } from '../../types/artHistory';

interface Rivers3DProps {
  showRivers: boolean;
  onHoverRiver?: (river: RiverSystem | null) => void;
}

export const Rivers3D: React.FC<Rivers3DProps> = ({ showRivers, onHoverRiver }) => {
  const riverMeshes = useMemo(() => {
    return SACRED_RIVERS.map((river) => {
      const points = river.points.map(p => new THREE.Vector3(p[0], p[1] + 0.04, p[2]));
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeometry = new THREE.TubeGeometry(curve, 48, 0.045, 6, false);

      const material = new THREE.MeshStandardMaterial({
        color: river.color,
        emissive: river.color,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.1,
        transparent: true,
        opacity: 0.9
      });

      return {
        river,
        geometry: tubeGeometry,
        material
      };
    });
  }, []);

  if (!showRivers) return null;

  return (
    <group name="sacred-rivers-3d">
      {riverMeshes.map(({ river, geometry, material }) => (
        <mesh
          key={river.id}
          geometry={geometry}
          material={material}
          onPointerOver={(e) => {
            e.stopPropagation();
            if (onHoverRiver) onHoverRiver(river);
          }}
          onPointerOut={() => {
            if (onHoverRiver) onHoverRiver(null);
          }}
        />
      ))}
    </group>
  );
};
