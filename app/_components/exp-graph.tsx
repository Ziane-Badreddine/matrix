"use client";
import { Canvas } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

// Fonction qui génère les points de la courbe f(x) = e^x
const generateExpCurve = (): Vector3[] => {
  const points: Vector3[] = [];
  const step = 0.1; // Pas entre les points
  const range = 5; // Intervalle de -range à +range

  for (let x = -range; x <= range; x += step) {
    const y = Math.exp(x); // f(x) = e^x
    points.push(new Vector3(x, y, 0)); // z=0 car c'est du 2D
  }

  return points;
};

// Composant pour tracer la courbe exponentielle
export default function ExpGraph() {
  const expCurve = generateExpCurve();

  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1} />

      {/* Courbe exponentielle */}
      <Line points={expCurve} color="red" lineWidth={2} />

      {/* Axes X et Y */}
      <Line points={[new Vector3(-5, 0, 0), new Vector3(5, 0, 0)]} color="blue" lineWidth={2} />
      <Line points={[new Vector3(0, 0, 5), new Vector3(0, 150, 0)]} color="green" lineWidth={2} />

      <OrbitControls />
    </Canvas>
  );
}
