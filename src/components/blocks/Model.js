import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props) {
  const { scene } = useGLTF("/portfolio/models/duck/scene.gltf");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    console.log("Bounding Box:", box);
  }, [scene]);

  return <primitive {...props} object={scene} scale={0.5} />;
}

useGLTF.preload("/portfolio/models/duck/scene.gltf");
