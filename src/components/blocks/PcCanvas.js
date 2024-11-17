import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

const PcCanvas = () => {
  const handleClick = (event) => {
    event.stopPropagation();
  };
  
  return (
    <Canvas
      onClick={handleClick}
      style={{ height: "300px", width: "100%" }}
      camera={{ position: [2.5, 2.5, 2.5] }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default PcCanvas;
