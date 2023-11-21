import { Face } from "./components/Face";

export default function Board() {
  return (
    <group>
      <group>
        <Face position={[-4, 0, 0]} rotation={[0, (55 * Math.PI) / 180, 0]} />
        <Face position={[4, 0, 0]} rotation={[0, -(55 * Math.PI) / 180, 0]} />
      </group>
    </group>
  );
}
