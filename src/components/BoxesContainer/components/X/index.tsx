import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RootState } from "../../../../redux/store";
import { triggerSelectAudio } from "../../../../redux/slices/audioSlice";

export default function X({
  selected,
  index,
}: {
  selected: boolean;
  index: number;
}) {
  const xRef = useRef<THREE.Group>(null!);
  const { winner } = useSelector((state: RootState) => state.gameReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    if (!selected) {
      tl.to(xRef.current.position, { y: 3, duration: 0.4 });
    } else {
      tl.kill();
      gsap.to(xRef.current.position, {
        y: 0.4,
        duration: 0.4,
        onStart: () => {
          dispatch(triggerSelectAudio());
        },
      });
    }
  }, [selected]);

  useEffect(() => {
    console.log("im here");
    if (
      winner && winner.winPattern && winner.winPattern.includes(index)
        ? true
        : false
    ) {
      console.log("should animate");
      const tl2 = gsap.timeline();
      tl2.to(xRef.current.position, {
        y: 3,
        duration: 0.4,
      });
    }
  }, [winner.player]);

  useFrame(() => {
    if (
      winner && winner.winPattern && winner.winPattern.includes(index)
        ? true
        : false
    ) {
      xRef.current.rotation.z += 0.1;
      // console.log(xRef.current.rotation.z);
    }
  });
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
