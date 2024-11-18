import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import Model from "./Model";
import { useDarkTheme } from "../../context/DarkThemeContext";
import LightUpdater from "./LightUpdater";

const PcCanvas = () => {
  const { isDarkTheme } = useDarkTheme();
  const modelRef = useRef();

  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Canvas
      onClick={handleClick}
      style={{ height: "300px", width: "100%", cursor: "grab" }}
      camera={{
        position: [0, 100, 100],
        near: 0.1,
        far: 500,
      }}
    >
      <ambientLight intensity={isDarkTheme ? 0.5 : 0.1} />
      <LightUpdater />
      <hemisphereLight
        skyColor={0xffffff}
        groundColor={0x000000}
        intensity={0.5}
      />
      <Model
        ref={modelRef}
        position={[0, -50, 0]}
        rotation={[0, Math.PI * 1.2, 0]}
      />
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
        enablePan={false}
      />
    </Canvas>
  );
};

export default PcCanvas;
