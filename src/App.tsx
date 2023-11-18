import BoxesContainer from "./components/BoxesContainer";
import { Canvas } from "@react-three/fiber";
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
          <axesHelper scale={[5, 5, 5]} />
          <color attach="background" args={["#423c68"]} />
          <BoxesContainer />
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 5]} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
