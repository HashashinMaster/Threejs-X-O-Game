import { Euler } from "three";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useFrame } from "@react-three/fiber";
import { triggerSelectAudio } from "../../../../redux/slices/audioSlice";

export default function O({
  selected,
  index,
}: {
  selected: boolean;
  index: number;
}) {
  const oRef = useRef<THREE.Mesh>(null!);
  const { winner } = useSelector((state: RootState) => state.gameReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    if (!selected) {
      tl.to(oRef.current.position, { y: 3, duration: 0.4 });
    } else {
      tl.kill();
      gsap.to(oRef.current.position, {
        y: 0.4,
        duration: 0.4,
        onStart: () => {
          dispatch(triggerSelectAudio());
        },
      });
    }
  }, [selected]);

  useEffect(() => {
    if (
      winner && winner.winPattern && winner.winPattern.includes(index)
        ? true
        : false
    ) {
      const tl2 = gsap.timeline({ yoyo: true });
      tl2.to(oRef.current.position, {
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
      oRef.current.rotation.z += 0.1;
      // console.log(xRef.current.rotation.z);
    }
  });
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
