import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

// Wrap the component in forwardRef to forward the ref to the primitive object
const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF("/portfolio/models/duck/scene.gltf");

  return <primitive {...props} ref={ref} object={scene} scale={0.5} />;
});

// Preload the model
useGLTF.preload("/portfolio/models/duck/scene.gltf");

export default Model;
