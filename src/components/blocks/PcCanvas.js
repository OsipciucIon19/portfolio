import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { useDarkTheme } from "../../context/DarkThemeContext";

const PcCanvas = () => {
  const { isDarkTheme } = useDarkTheme();
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Canvas
      onClick={handleClick}
      style={{ height: "300px", width: "100%" }}
      camera={{
        position: [0, 100, 100],
        near: 0.1,
        far: 500,
      }}
    >
      <ambientLight intensity={isDarkTheme ? 0.5 : 1.5} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={4}
        castShadow
      />
      <pointLight position={[-10, 50, -10]} intensity={isDarkTheme ? 0.1 : 1} />
      <pointLight position={[10, 50, -10]} intensity={isDarkTheme ? 0.1 : 1} />
      <pointLight position={[-10, 50, 10]} intensity={isDarkTheme ? 0.1 : 1} />
      <hemisphereLight
        skyColor={0xffffff}
        groundColor={0x000000}
        intensity={isDarkTheme ? 0.8 : 1.8}
      />
      <Model position={[0, -50, 0]} rotation={[0, Math.PI * 1.2, 0]} />
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
