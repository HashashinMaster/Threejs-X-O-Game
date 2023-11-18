import Box from "./components/Box";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function BoxesContainer() {
  useThree((state) => {
    state.camera.lookAt(new THREE.Vector3(0, -0, -2));
  });

  return (
    <>
      <group
        position={[0, -0, -5]}
        rotation={[0, Math.PI / 2, (55 * Math.PI) / 180]}
      >
        <mesh>
          <boxGeometry attach="geometry" args={[9, 0.5, 9]} />
          <meshBasicMaterial color={"#43a5d2"} />
        </mesh>
        {/* row 1 */}
        <Box position={[2, 1, -3]} color="#b9b2d4" />
        <Box position={[2, 1, -3 + 3]} color="#fffef7" />
        <Box position={[2, 1, -3 + 3 * 2]} color="#b9b2d4" />
        {/* row2 */}
        <Box position={[2 - 3, 1, -3]} color="#fffef7" />
        <Box position={[2 - 3, 1, -3 + 3]} color="#b9b2d4" />
        <Box position={[2 - 3, 1, -3 + 3 * 2]} color="#fffef7" />
        {/* row3 */}
        <Box position={[2 - 3 * 2, 1, -3]} color="#b9b2d4" />
        <Box position={[2 - 3 * 2, 1, -3 + 3]} color="#fffef7" />
        <Box position={[2 - 3 * 2, 1, -3 + 3 * 2]} color="#b9b2d4" />
      </group>
    </>
  );
}
