import { useState, useEffect } from "react";
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
  const { player1, currentPlayer, winner, restart } = useSelector(
    (state: RootState) => state.gameReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (selected) setSelected(false);
  }, [restart]);

  return (
    <group position={position}>
      <mesh
        onClick={() => {
          if (!selected && !winner.player) {
            dispatch(
              addPlayerMove({
                player: currentPlayer.name as "player1" | "player2",
                move: index,
              })
            );
            setMark(
              currentPlayer === player1 ? (
                <X selected={true} index={index} />
              ) : (
                <O selected={true} index={index} />
              )
            );
            setSelected(true);
            dispatch(toggleCurrentPlayer());
          }
        }}
        onPointerEnter={() => {
          if (!selected && !winner.player) {
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
          <X index={index} selected={selected} />
        ) : (
          <O index={index} selected={selected} />
        ))}
      {selected && mark}

      <meshStandardMaterial color={color} />
    </group>
  );
}
