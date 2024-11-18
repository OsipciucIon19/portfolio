import { Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useDarkTheme } from "../../context/DarkThemeContext";
import { useRef } from "react";

const LightUpdater = () => {
  const { camera } = useThree(); // Access the camera
  const directionalLightRef = useRef();
  const { isDarkTheme } = useDarkTheme();
  useFrame(() => {
    if (directionalLightRef.current) {
      // Get the camera's direction in world space
      const cameraDirection = new Vector3();
      camera.getWorldDirection(cameraDirection);

      // Adjust light position based on the camera's direction
      const radius = 10; // Distance of the light from the model
      const lightX = -cameraDirection.x * radius; // Inverse direction for front lighting
      const lightZ = -cameraDirection.z * radius;

      // Update the light's position
      directionalLightRef.current.position.set(lightX, 3, lightZ);
    }
  });

  return (
    <directionalLight
      ref={directionalLightRef}
      intensity={isDarkTheme ? 3 : 5}
      castShadow
    />
  );
};

export default LightUpdater;
