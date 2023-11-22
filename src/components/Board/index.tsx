import { useDispatch, useSelector } from "react-redux";
import { Face } from "./components/Face";
import { Html } from "@react-three/drei";
import { RootState } from "../../redux/store";
import { initialStart, toggleRestart } from "../../redux/slices/gameSlice";
export default function Board() {
  const { player2, player1, winner, draw } = useSelector(
    (state: RootState) => state.gameReducer
  );
  const dispatch = useDispatch();
  const handleRestart = () => {
    dispatch(toggleRestart());
    dispatch(
      initialStart({
        player1Name: "player1",
        player2Name: "player2",
      })
    );
  };
  return (
    <group>
      {(winner.player || draw) && (
        <group>
          <Html
            as="div"
            fullscreen
            style={{
              display: "flex",
              alignItems: "center", // Added to center vertically
              justifyContent: "center", // Added to center vertically
              flexDirection: "column", // Added to stack items vertically
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              style={{
                marginTop: "20px",
                color: "white",
              }}
            >
              <button
                style={{
                  backgroundColor: "#1296ee",
                  border: "2px solid #fff",
                  borderRadius: "10px",
                  color: "#fff",
                  padding: "15px 30px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  outline: "none",
                }}
                onClick={handleRestart}
              >
                Restart
              </button>
            </div>
          </Html>
        </group>
      )}
      <group>
        <group position={[-4, 0, 0]}>
          <Face
            rotation={[0, (55 * Math.PI) / 180, 0]}
            playerName={player1.name}
            color="#ec1652"
          />
        </group>
        <group position={[4, 0, 0]}>
          <Face
            rotation={[0, -(55 * Math.PI) / 180, 0]}
            playerName={player2.name}
            color="#1296ee"
          />
        </group>
      </group>
    </group>
  );
}
