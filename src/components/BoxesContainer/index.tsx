import Box from "./components/Box";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initialStart } from "../../redux/slices/gameSlice";

export default function BoxesContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      initialStart({
        player1Name: "player1",
        player2Name: "player2",
      })
    );
  });
  return (
    <>
      <group
        position={[0, -1, -7.3]}
        rotation={[0, Math.PI / 2, (55 * Math.PI) / 180]}
      >
        {/* row 1 */}
        <Box index={0} position={[2, 1, -3]} color="#b9b2d4" />
        <Box index={1} position={[2, 1, -3 + 3]} color="#fffef7" />
        <Box index={2} position={[2, 1, -3 + 3 * 2]} color="#b9b2d4" />
        {/*  row2 */}
        <Box index={3} position={[2 - 3, 1, -3]} color="#fffef7" />
        <Box index={4} position={[2 - 3, 1, -3 + 3]} color="#b9b2d4" />
        <Box index={5} position={[2 - 3, 1, -3 + 3 * 2]} color="#fffef7" />
        {/* row3 */}
        <Box index={6} position={[2 - 3 * 2, 1, -3]} color="#b9b2d4" />
        <Box index={7} position={[2 - 3 * 2, 1, -3 + 3]} color="#fffef7" />
        <Box index={8} position={[2 - 3 * 2, 1, -3 + 3 * 2]} color="#b9b2d4" />
      </group>
    </>
  );
}
