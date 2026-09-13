import React, { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import gsap from 'gsap';
import { ArtLocation } from '../../types/artHistory';
import { REGIONAL_PRESETS } from '../../utils/geoProjection';

interface CameraControllerProps {
  selectedLocation: ArtLocation | null;
  activePreset: string | null;
}

export const CameraController: React.FC<CameraControllerProps> = ({
  selectedLocation,
  activePreset
}) => {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl>(null);

  // Flight transition to selected location
  useEffect(() => {
    if (selectedLocation && controlsRef.current) {
      const [x, y, z] = selectedLocation.position3D;

      const targetCamPos = new THREE.Vector3(x + 0.5, y + 4.2, z + 5.5);
      const targetFocus = new THREE.Vector3(x, y + 0.3, z);

      gsap.to(camera.position, {
        x: targetCamPos.x,
        y: targetCamPos.y,
        z: targetCamPos.z,
        duration: 1.8,
        ease: 'power3.inOut'
      });

      gsap.to(controlsRef.current.target, {
        x: targetFocus.x,
        y: targetFocus.y,
        z: targetFocus.z,
        duration: 1.8,
        ease: 'power3.inOut',
        onUpdate: () => {
          controlsRef.current?.update();
        }
      });
    }
  }, [selectedLocation, camera]);

  // Transition to regional preset
  useEffect(() => {
    if (activePreset && REGIONAL_PRESETS[activePreset] && controlsRef.current) {
      const preset = REGIONAL_PRESETS[activePreset];
      const targetCamPos = new THREE.Vector3(...preset.position);
      const targetFocus = new THREE.Vector3(...preset.target);

      gsap.to(camera.position, {
        x: targetCamPos.x,
        y: targetCamPos.y,
        z: targetCamPos.z,
        duration: 2.0,
        ease: 'power3.inOut'
      });

      gsap.to(controlsRef.current.target, {
        x: targetFocus.x,
        y: targetFocus.y,
        z: targetFocus.z,
        duration: 2.0,
        ease: 'power3.inOut',
        onUpdate: () => {
          controlsRef.current?.update();
        }
      });
    }
  }, [activePreset, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.06}
      maxPolarAngle={Math.PI / 2.15}
      minDistance={3.5}
      maxDistance={34}
      rotateSpeed={0.8}
      zoomSpeed={1.0}
    />
  );
};
