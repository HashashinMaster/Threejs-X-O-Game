import Board from "./components/Board";
import BoxesContainer from "./components/BoxesContainer";
import { Canvas } from "@react-three/fiber";
import Sound from "./components/Sound";
function App() {
  return (
    <>
      <div
        id="canvas-container"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Canvas>
          <color attach="background" args={["#423c68"]} />
          <Board />
          <BoxesContainer />
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 5]} />
        </Canvas>
      </div>
      <Sound />
    </>
  );
}

export default App;
