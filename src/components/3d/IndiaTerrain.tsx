import React, { useMemo } from 'react';
import * as THREE from 'three';
import { INDIA_BOUNDARY_COORDS, getTerrainHeight } from '../../data/indiaGeoData';
import { latLngToVector3 } from '../../utils/geoProjection';

interface IndiaTerrainProps {
  showTerrain: boolean;
}

export const IndiaTerrain: React.FC<IndiaTerrainProps> = ({ showTerrain }) => {
  const { shape, borderPoints3D } = useMemo(() => {
    const s = new THREE.Shape();
    const borderPts: THREE.Vector3[] = [];

    INDIA_BOUNDARY_COORDS.forEach((coord, i) => {
      const [x, , z] = latLngToVector3(coord.lat, coord.lng, 0);
      borderPts.push(new THREE.Vector3(x, 0.22, z));
      if (i === 0) {
        s.moveTo(x, z);
      } else {
        s.lineTo(x, z);
      }
    });
    s.closePath();
    return { shape: s, borderPoints3D: borderPts };
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 0.22,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.08,
    bevelThickness: 0.08
  }), []);

  const borderGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(borderPoints3D);
  }, [borderPoints3D]);

  const { reliefGeometry, reliefMaterial } = useMemo(() => {
    const rows = 40;
    const cols = 40;
    const geom = new THREE.PlaneGeometry(24, 24, cols - 1, rows - 1);
    geom.rotateX(-Math.PI / 2);

    const pos = geom.attributes.position;
    const colors = new Float32Array(pos.count * 3);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      const lng = x / 0.72 + 80.5;
      const lat = -z / 0.82 + 22.5;

      if (lat >= 8 && lat <= 36 && lng >= 68 && lng <= 97) {
        const h = getTerrainHeight(lat, lng);
        pos.setY(i, h * 0.45);

        if (h > 1.2) {
          colors[i * 3] = 0.95;
          colors[i * 3 + 1] = 0.90;
          colors[i * 3 + 2] = 0.80;
        } else if (h > 0.45) {
          colors[i * 3] = 0.75;
          colors[i * 3 + 1] = 0.58;
          colors[i * 3 + 2] = 0.32;
        } else {
          colors[i * 3] = 0.16;
          colors[i * 3 + 1] = 0.18;
          colors[i * 3 + 2] = 0.24;
        }
      } else {
        pos.setY(i, 0.02);
        colors[i * 3] = 0.08;
        colors[i * 3 + 1] = 0.09;
        colors[i * 3 + 2] = 0.13;
      }
    }

    geom.computeVertexNormals();
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.65,
      metalness: 0.25,
      wireframe: false,
      transparent: true,
      opacity: 0.85
    });

    return { reliefGeometry: geom, reliefMaterial: mat };
  }, []);

  return (
    <group name="india-subcontinent-terrain">
      {/* Base Extruded Landmass */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        castShadow
      >
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshStandardMaterial
          color="#151821"
          roughness={0.7}
          metalness={0.2}
        />
      </mesh>

      {/* Topographic 3D Relief Layer */}
      {showTerrain && (
        <mesh
          geometry={reliefGeometry}
          material={reliefMaterial}
          position={[0, 0.12, 0]}
        />
      )}

      {/* Glowing Antique Gold Border Line */}
      <primitive object={new THREE.Line(borderGeometry, new THREE.LineBasicMaterial({ color: '#d4af37', linewidth: 2, transparent: true, opacity: 0.85 }))} />

      {/* Ocean Plinth / Deep Cosmic Void Base */}
      <mesh position={[0, -0.15, 0]} receiveShadow>
        <cylinderGeometry args={[18, 19, 0.25, 64]} />
        <meshStandardMaterial
          color="#0a0b0f"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Concentric Decorative Astrological Rings on Plinth */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <ringGeometry args={[16.5, 16.55, 64]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <ringGeometry args={[17.8, 17.85, 64]} />
        <meshBasicMaterial color="#c2593f" transparent opacity={0.25} />
      </mesh>
    </group>
  );
};
