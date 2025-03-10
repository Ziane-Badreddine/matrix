"use client"
import React, { useEffect, useRef } from 'react'
import { Divide, Dot, Minus, Plus } from 'lucide-react'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import katex from 'katex';
import "katex/dist/katex.min.css";

const Navbar = () => {
    const formulaRefNav = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (formulaRefNav.current) {
            const formula = `\\Pi a\\tau h `; // L'expression LaTeX à afficher
            katex.render(formula, formulaRefNav.current, {
                throwOnError: false, // Ne pas lancer d'erreur en cas de problème de rendu
            });
        }
    }, []);
    return (
        <header className='h-[10%] backdrop-blur-xl z-10 flex justify-between items-center p-4 border-b border-dotted border-black dark:border-white'>
            <div className='flex items-center justify-center '>
                <Link href={"/"} className='text-2xl'>
                    <span ref={formulaRefNav} />
                    <span className='animate-ping transition-all duration-1000 text-3xl'>.</span>
                </Link>
            </div>
            <nav>
                <ul className='flex space-x-4'>
                    <Link href={"/oprations"}>
                        <Button variant={"outline"}>
                            oprations
                        </Button>
                    </Link>
                    <Link href={"/docs"}>
                        <Button>
                            docs
                        </Button>
                    </Link>
                    <ModeToggle />
                </ul>
            </nav>
        </header>
    )
}

export default Navbar