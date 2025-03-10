"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import { Vector3 } from "three";

// Fonction pour générer une courbe représentant une approximation du cheval
const generateHorseCurve = (): Vector3[] => {
  const points: Vector3[] = [];

  for (let t = 0; t <= Math.PI * 2; t += 0.05) {
    const x = Math.sin(t) * Math.cos(t) * 2;
    const y = Math.sin(t) * Math.sin(t) * 1.5;
    const z = Math.cos(t) * 2;

    points.push(new Vector3(x, y, z));
  }

  return points;
};

// Composant pour afficher les axes
const Axes = () => {
  const axisLength = 5;
  return (
    <>
      {/* Axe X (Rouge) */}
      <Line points={[new Vector3(-axisLength, 0, 0), new Vector3(axisLength, 0, 0)]} color="red" lineWidth={2} />
      {/* Axe Y (Vert) */}
      <Line points={[new Vector3(0, -axisLength, 0), new Vector3(0, axisLength, 0)]} color="green" lineWidth={2} />
      {/* Axe Z (Bleu) */}
      <Line points={[new Vector3(0, 0, -axisLength), new Vector3(0, 0, axisLength)]} color="blue" lineWidth={2} />
    </>
  );
};

export default function HorseCurve() {
  const horseCurve = generateHorseCurve();

  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1} />

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color="gray" />
      </mesh>




      {/* Axes */}
      <Axes />

      {/* Contrôles interactifs */}
      <OrbitControls />
    </Canvas>
  );
}
