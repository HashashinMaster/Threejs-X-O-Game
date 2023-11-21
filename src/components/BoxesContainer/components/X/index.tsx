import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function X({ selected }: { selected: boolean }) {
  const xRef = useRef<THREE.Group>(null!);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    if (!selected) {
      tl.to(xRef.current.position, { y: 3, duration: 0.4 });
      // tl.to(xRef.current.position, { y: 2, duration: 0.4 });
    } else {
      tl.kill();
      gsap.to(xRef.current.position, { y: 0.4, duration: 0.4 });
    }
  }, [selected]);
  return (
    <group ref={xRef} position={[0, 2, 0]}>
      <mesh rotation={[0, (55 * Math.PI) / 180, 0]}>
        <boxGeometry args={[1, 0.5, 3]} />
        <meshBasicMaterial color={"#ec1652"} />
      </mesh>
      <mesh rotation={[0, -(55 * Math.PI) / 180, 0]}>
        <boxGeometry args={[1, 0.5, 3]} />
        <meshBasicMaterial color={"#ec1652"} />
      </mesh>
    </group>
  );
}
