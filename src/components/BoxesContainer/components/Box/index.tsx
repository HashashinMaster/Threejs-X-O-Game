import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import O from "../O";
import X from "../X";
import { RootState } from "../../../../redux/store";
import {
  addPlayerMove,
  toggleCurrentPlayer,
} from "../../../../redux/slices/gameSlice";
type Props = {
  position: [x: number, y: number, z: number];
  color: string;
  index: number;
};
export default function Box({ position, color, index }: Props) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(false);
  const [mark, setMark] = useState<JSX.Element | undefined>();
  const { player1, currentPlayer } = useSelector(
    (state: RootState) => state.gameReducer
  );
  const dispatch = useDispatch();
  //   useEffect(() => {

  //   },[])
  return (
    <group position={position}>
      <mesh
        onClick={() => {
          if (!selected) {
            dispatch(
              addPlayerMove({
                player: currentPlayer.name as "player1" | "player2",
                move: index,
              })
            );
            console.log(currentPlayer, player1);
            setMark(
              currentPlayer === player1 ? (
                <X selected={true} />
              ) : (
                <O selected={true} />
              )
            );
            setSelected(true);

            dispatch(toggleCurrentPlayer());
          } else alert("pick another spot");
        }}
        onPointerEnter={() => {
          if (!selected) {
            setShow(true);
            document.body.style.cursor = "pointer";
          } else {
            document.body.style.cursor = "not-allowed";
          }
        }}
        onPointerLeave={() => {
          setShow(false);
          document.body.style.cursor = "auto";
        }}
      >
        <boxGeometry attach="geometry" args={[3, 0.1, 3]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {show &&
        !selected &&
        (currentPlayer === player1 ? (
          <X selected={selected} />
        ) : (
          <O selected={selected} />
        ))}
      {selected && mark}

      <meshStandardMaterial color={color} />
    </group>
  );
}
