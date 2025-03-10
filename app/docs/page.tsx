"use client"


import { ScrollArea } from "@/components/ui/scroll-area"
import katex from 'katex';
import "katex/dist/katex.min.css";
import React, { useEffect, useRef } from "react";
import MatrixDocumentation from "../_components/matrix-documentation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FonctionDocumentation from "../_components/fonction-documentation";




const page = () => {

    const formulaRef0 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (formulaRef0.current) {
            const formula = `\\underline{Les\\text{ } matrices}`; // L'expression LaTeX à afficher
            katex.render(formula, formulaRef0.current, {
                throwOnError: false, // Ne pas lancer d'erreur en cas de problème de rendu
            });
        }
    }, []);
    return (
        <ScrollArea className="h-full w-full   p-4">
            <Tabs defaultValue="matrices" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger value="matrices">matrices</TabsTrigger>
                    <TabsTrigger value="fonctions">fonctions</TabsTrigger>
                    <TabsTrigger value="graphe2d">graphe2d</TabsTrigger>
                    <TabsTrigger value="graphe3d">graphe3d</TabsTrigger>
                </TabsList>
                <TabsContent value="matrices">
                    <MatrixDocumentation />
                </TabsContent>
                <TabsContent value="fonctions"><FonctionDocumentation /></TabsContent>
                <TabsContent value="graphe2d">Change your password here.</TabsContent>
                <TabsContent value="graphe3d">Change your password here.</TabsContent>
            </Tabs>

        </ScrollArea>

    )
}

export default page