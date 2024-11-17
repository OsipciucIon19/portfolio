import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { scene } = useGLTF("/portfolio/models/scene.gltf");
  return <primitive object={scene} scale={0.5} />;
}

useGLTF.preload("/portfolio/models/scene.gltf");
