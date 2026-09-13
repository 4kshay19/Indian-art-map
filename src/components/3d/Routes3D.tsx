import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { HISTORICAL_ROUTES } from '../../data/routesData';
import { HistoricalRoute } from '../../types/artHistory';

interface Routes3DProps {
  showRoutes: boolean;
  onHoverRoute?: (route: HistoricalRoute | null) => void;
}

export const Routes3D: React.FC<Routes3DProps> = ({ showRoutes, onHoverRoute }) => {
  const particlesRef = useRef<THREE.Group>(null);

  // Pre-sample points along each route curve once for ultra-fast GPU indexing
  const routeData = useMemo(() => {
    return HISTORICAL_ROUTES.map((route) => {
      const points = route.points.map(p => new THREE.Vector3(p[0], p[1] + 0.08, p[2]));
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeometry = new THREE.TubeGeometry(curve, 32, 0.035, 5, false);

      // Pre-sample 120 positions along curve so getPointAt is never called per-frame
      const sampledPoints: THREE.Vector3[] = [];
      const SAMPLES = 120;
      for (let i = 0; i < SAMPLES; i++) {
        sampledPoints.push(curve.getPointAt(i / SAMPLES));
      }

      const material = new THREE.MeshStandardMaterial({
        color: route.color,
        emissive: route.color,
        emissiveIntensity: 0.65,
        roughness: 0.35,
        metalness: 0.2,
        transparent: true,
        opacity: 0.85
      });

      return {
        route,
        sampledPoints,
        geometry: tubeGeometry,
        material
      };
    });
  }, []);

  // Extremely fast lookup (O(1) index, 0 spline math per frame)
  useFrame(({ clock }) => {
    if (!particlesRef.current) return;
    const t = clock.getElapsedTime() * 15; // sample rate

    particlesRef.current.children.forEach((child, idx) => {
      const samples = routeData[idx]?.sampledPoints;
      if (samples && samples.length > 0) {
        const sampleIdx = Math.floor((t + idx * 24) % samples.length);
        const pt = samples[sampleIdx];
        child.position.set(pt.x, pt.y, pt.z);
      }
    });
  });

  if (!showRoutes) return null;

  return (
    <group name="historical-routes-3d">
      {routeData.map(({ route, geometry, material }) => (
        <mesh
          key={route.id}
          geometry={geometry}
          material={material}
          onPointerOver={(e) => {
            e.stopPropagation();
            if (onHoverRoute) onHoverRoute(route);
          }}
          onPointerOut={() => {
            if (onHoverRoute) onHoverRoute(null);
          }}
        />
      ))}

      {/* Moving Light Spheres along each Route */}
      <group ref={particlesRef}>
        {routeData.map(({ route }) => (
          <mesh key={`flow-${route.id}`}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color={route.color} />
          </mesh>
        ))}
      </group>
    </group>
  );
};
