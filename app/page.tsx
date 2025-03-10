"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PcCase } from "lucide-react";
import React, { useEffect, useRef } from "react";
import HorseScene from "./_components/horse-scene";
import ExpGraph from "./_components/exp-graph";
import katex from 'katex';
import "katex/dist/katex.min.css";
import Link from "next/link";

export default function Home() {
  const formulaRef = useRef<HTMLDivElement | null>(null);
  const formulaRef1 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (formulaRef.current) {
      const formula = `m = \\begin{pmatrix} 
      a & b & c \\\\
      d & e & f \\\\
      g & h & i
      \\end{pmatrix}^{-1} `; // L'expression LaTeX à afficher
      katex.render(formula, formulaRef.current, {
        throwOnError: false, // Ne pas lancer d'erreur en cas de problème de rendu
      });
    }
    if (formulaRef1.current) {
      katex.render("% \\f is defined as #1f(#2) using the macro\n\\f\\relax{x} = \\int_{-\\infty}^\\infty\n    \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}\n    \\,d\\xi", formulaRef1.current, { "displayMode": true, "leqno": false, "fleqn": false, "throwOnError": true, "errorColor": "#cc0000", "strict": "warn", "output": "htmlAndMathml", "trust": false, "macros": { "\\f": "#1f(#2)" } })
    }
  }, []);
  const [value, setValue] = React.useState("")
  return (
    <main className="w-full h-full flex flex-col p-5  items-center justify-center">
      <div className="w-full flex flex-col items-center text-center justify-center gap-2">
        <h1 className="text-6xl font-bold bg-gradient-to-b dark:from-white dark:to-gray-400 bg-clip-text text-transparent from-black to-gray-700">Maîtrisez les Calculs Matriciels et les Fonctions Graphiques</h1>
        <p className="text-muted-foreground mt-5 max-w-5xl">une application web interactive permettant aux utilisateurs d'explorer et de calculer divers concepts mathématiques : opérations sur les matrices, analyse mathématique (dérivation, intégration, résolution d'équations) et visualisation de fonctions en 2D et 3D.</p>
        <div className="flex gap-2 mt-5">
          <Link href={"/operations"}>
            <Button><PcCase /> Commencer</Button>
          </Link>
        
          <Button variant={"outline"} disabled>En savoir plus</Button>
        </div>
      </div>
      <div className="w-[80%] grid grid-cols-4 mt-5 gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Sphere</CardTitle>
            <CardDescription>Graphe 3d</CardDescription>
          </CardHeader>
          <CardContent className="w-full h-full">
            <HorseScene />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expeneteielle</CardTitle>
            <CardDescription>Graphe 2d</CardDescription>
          </CardHeader>
          <CardContent className="w-full h-full">
            <ExpGraph />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>matrice</CardTitle>
            <CardDescription>calcul matriciel</CardDescription>
          </CardHeader>
          <CardContent className="w-full h-full my-11 mx-7" ref={formulaRef}/>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fonctions</CardTitle>
            <CardDescription>l'analyse de fonctions</CardDescription>
          </CardHeader>
          <CardContent className="w-full h-full my-11" ref={formulaRef1}>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
