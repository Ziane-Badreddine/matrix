"use client"

import { MathBlock, MathRenderer, Section, SubSection } from '@/components/ui/latex';





const FonctionDocumentation = () => {
    return (
        <>
            <Section title="Définition d'une Fonction">
                <p className='text-muted-foreground'>
                    Une fonction est une relation mathématique qui associe à chaque élément d'un ensemble <MathRenderer content='X' /> un unique élément d'un ensemble <MathRenderer content='Y' />. Elle est souvent représentée sous la forme :
                </p>
                <MathBlock content='f:X→Y,x↦f(x)' />
                <p className='text-muted-foreground'>
                    Exemples de fonctions :
                </p>
                <MathBlock content="\begin{aligned}
                    f(x)&=x^2,\text{ (fonction polynomiale)}\\
                    g(x)&=sin(x),\text{  (fonction trigonométrique)}\\
                    h(x)&=e^x,\text{   (fonction exponentielle)}\\
                    \end{aligned}" />
            </Section>
            <Section title="Fonctions Célèbres et Leurs Propriétés">
                <SubSection title="Fonction Exponentielle">
                    <p className='text-muted-foreground'>
                        L'exponentielle est définie comme suit :
                    </p>
                    <MathBlock content='f(x)=e^x' />
                    <p className='text-muted-foreground'>
                        Où <MathRenderer content='e≈2.718' /> est la base de l'exponentielle.
                    </p>
                    <p className='text-muted-foreground'>
                        Propriétés :
                    </p>
                    <MathBlock content="\begin{aligned}
                                            e^0 &= 1\\
                                            e^{a+b} &= e^a.e^b\\
                                            (e^x)'& = e^x\\
                                            \int e^x dx &= e^x + C
                                            \end{aligned}" />
                </SubSection>
            </Section>
        </>
    )
}

export default FonctionDocumentation