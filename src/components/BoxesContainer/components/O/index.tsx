import { Euler } from "three";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function O({ selected }: { selected: boolean }) {
  const oRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    console.log(selected);
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    if (!selected) {
      tl.to(oRef.current.position, { y: 3, duration: 0.4 });
      // tl.to(oRef.current.position, { y: 2, duration: 0.4 });
    } else {
      tl.kill();
      gsap.to(oRef.current.position, { y: 0.4, duration: 0.4 });
    }
  }, [selected]);
  return (
    <mesh
      ref={oRef}
      position={[0, 2, 0]}
      rotation={new Euler(0, Math.PI / 2, Math.PI / 2, "ZXY")}
    >
      <torusGeometry args={[1, 0.3]} />
      <meshBasicMaterial color={"#1296ee"} />
    </mesh>
  );
}
