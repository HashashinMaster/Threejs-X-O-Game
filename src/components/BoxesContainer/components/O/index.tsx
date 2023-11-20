import { Euler } from "three";

export default function O() {
  return (
    <mesh rotation={new Euler(0, Math.PI / 2, Math.PI / 2, "ZXY")}>
      <torusGeometry args={[1, 0.3]} />
      <meshBasicMaterial color={"#4fa0cc"} />
    </mesh>
  );
}
