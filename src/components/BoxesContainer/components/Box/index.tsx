import { useState } from "react";
import { Euler } from "three";

type Props = {
  position: [x: number, y: number, z: number];
  color: string;
  index: number;
};
export default function Box({ position, color, index }: Props) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <group position={position}>
      <mesh
        onClick={() => {
          if (!selected) setSelected(true);
          else alert("pick another spot");
        }}
        onPointerEnter={() => {
          setShow(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          setShow(false);
          document.body.style.cursor = "auto";
        }}
      >
        <boxGeometry attach="geometry" args={[3, 0.1, 3]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {(show || selected) && (
        <mesh rotation={new Euler(0, Math.PI / 2, Math.PI / 2, "ZXY")}>
          <torusGeometry args={[1, 0.3]} />
          <meshStandardMaterial color={color} />
        </mesh>
      )}
    </group>
  );
}
