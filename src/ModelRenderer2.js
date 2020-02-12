import React, { Suspense } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree, extend, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

extend({ OrbitControls });

function Model() {
  const gltf = useLoader(GLTFLoader, 'models/gltf/microphone/scene.gltf');
  return <primitive object={gltf.scene} position={[0, 0, 0]} />
}

function Controls(props) {
  const {
    camera,
    gl: { domElement }
  } = useThree();

  return <orbitControls args={[camera, domElement]} {...props} />
}

export function ModelRenderer2({ setCameraPosition, ...props }) {
  return <Canvas camera={{ fov: 60, near: 1, position: [-2, 0, -3] }}
    gl={{ outputEncoding: THREE.sRGBEncoding }}
    onCreated={({ gl, scene, camera }) => {
      gl.outputEncoding = THREE.sRGBEncoding;
      scene.background = new THREE.Color(0xfafafa);
      camera.lookAt(0, 0, 0);

      setCameraPosition(position => {
        camera.position.set(...position);
        camera.lookAt(0, 0, 0);
      });
    }}
    {...props}>
    <Controls minDistance={1} maxDistance={500} />
    <pointLight position={[10, 10, 10]} />
    <pointLight position={[-10, -10, -10]} />
    <Suspense fallback={null}>
      <Model />
    </Suspense>
  </Canvas>;
}