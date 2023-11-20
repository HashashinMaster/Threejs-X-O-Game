export default function X() {
  return (
    <>
      <mesh rotation={[0, (55 * Math.PI) / 180, 0]}>
        <boxGeometry args={[1, 0.5, 3]} />
        <meshBasicMaterial color={"#f24b7a"} />
      </mesh>
      <mesh rotation={[0, -(55 * Math.PI) / 180, 0]}>
        <boxGeometry args={[1, 0.5, 3]} />
        <meshBasicMaterial color={"#f24b7a"} />
      </mesh>
    </>
  );
}
