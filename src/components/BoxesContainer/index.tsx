import Box from "./components/Box";
import { useThree } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

export default function BoxesContainer() {
  useThree((state) => {
    state.camera.lookAt(new THREE.Vector3(0, -0, -2));
  });
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];
  const [players, setPlayers] = useState({
    player1: {
      playerName: "",
      moves: [],
    },
    player2: {
      playerName: "",
      moves: [],
    },
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
        <Box index={0} position={[2, 1, -3]} color="#b9b2d4" />
        <Box index={1} position={[2, 1, -3 + 3]} color="#fffef7" />
        <Box index={2} position={[2, 1, -3 + 3 * 2]} color="#b9b2d4" />
        {/*  row2 */}
        <Box index={3} position={[2 - 3, 1, -3]} color="#fffef7" />
        <Box index={4} position={[2 - 3, 1, -3 + 3]} color="#b9b2d4" />
        <Box index={5} position={[2 - 3, 1, -3 + 3 * 2]} color="#fffef7" />
        {/* row3 */}
        <Box index={6} position={[2 - 3 * 2, 1, -3]} color="#b9b2d4" />
        <Box index={7} position={[2 - 3 * 2, 1, -3 + 3]} color="#fffef7" />
        <Box index={8} position={[2 - 3 * 2, 1, -3 + 3 * 2]} color="#b9b2d4" />
      </group>
    </>
  );
}
