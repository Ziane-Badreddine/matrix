"use client";
import { MathBlock, MathRenderer, Section, SubSection } from '@/components/ui/latex';



export default function MatrixDocumentation() {
    return (
        <div className=" w-full mx-auto   rounded-lg transition-all duration-300 ">

            <Section title="Définition d'une Matrice">
                <p className='text-muted-foreground'>En mathématiques, les matrices sont des tableaux d'éléments (nombres, caractères) qui servent à interpréter en termes calculatoires, et donc opérationnels, les résultats théoriques de l'algèbre linéaire, et même de l'algèbre bilinéaire.

                    Toutes les disciplines étudiant des phénomènes linéaires utilisent les matrices.

                    Quant aux phénomènes non linéaires, on en donne souvent des approximations linéaires, comme en optique géométrique, avec les approximations de Gauss.</p>
                <p className='mt-2 text-muted-foreground'>Une matrice de taille <MathRenderer content="m \times n" /> est définie comme :</p>
                <MathBlock content="
          A = \begin{pmatrix} 
            a_{11} & a_{12} & \dots & a_{1n} \\ 
            a_{21} & a_{22} & \dots & a_{2n} \\ 
            \vdots & \vdots & \ddots & \vdots \\ 
            a_{m1} & a_{m2} & \dots & a_{mn} 
          \end{pmatrix}"
                />
            </Section>

            <Section title="Types de Matrices">
                <SubSection title="Matrice Carrée">
                    <p className='text-muted-foreground'>Une matrice carrée a le même nombre de lignes et de colonnes <MathRenderer content='(m = n)' /></p>
                    <p className='text-muted-foreground'>
                        Exemple :
                    </p>
                    <MathBlock content="B = \begin{pmatrix} 2 & 4  \\ 6 & 8  \end{pmatrix}" />
                </SubSection>
                <SubSection title="Matrice Identité">
                    <p className='text-muted-foreground'>Une matrice identité est une matrice carrée où tous les éléments de la diagonale principale sont 1 et les autres sont 0.</p>
                    <p className='text-muted-foreground'>
                        Exemple pour <MathRenderer content="I_{3}" />
                    </p>
                    <MathBlock content="I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}" />
                </SubSection>
                <SubSection title="Matrice Diagonale">
                    <p className='text-muted-foreground'>Une matrice est diagonale si tous les éléments en dehors de la diagonale principale sont nuls.</p>
                    <p className='text-muted-foreground'>
                        Exemple :
                    </p>
                    <MathBlock content="D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 4 \end{pmatrix}" />

                </SubSection>
                <SubSection title="Matrice Nulle">
                    <p className='text-muted-foreground'>Une matrice nulle contient uniquement des zéros.</p>
                    <p className='text-muted-foreground'>
                        Exemple :
                    </p>
                    <MathBlock content="O = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}" />
                </SubSection>
                <SubSection title="Matrice Transposée">
                    <p className='text-muted-foreground'>La transposée d’une matrice <MathRenderer content='A' /> est obtenue en échangeant ses lignes et ses colonnes.</p>
                    <p className='text-muted-foreground'>
                        Exemple :
                    </p>
                    <p className='text-muted-foreground'>
                        Si
                    </p>
                    <MathBlock content="A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}" />
                    <p>
                        Alors la transposée <MathRenderer content="A^{T}" /> est :
                    </p>
                    <MathBlock content="A^{T} = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}" />
                </SubSection>
            </Section>
            <Section title=' Opérations sur les Matrices'>
                <SubSection title='Addition et Soustraction de Matrices'>
                    <p className='text-muted-foreground'>Deux matrices A et B peuvent être additionnées ou soustraites si elles ont la même taille.La règle : on additionne (ou soustrait) les éléments correspondants.</p>
                    <p className='text-muted-foreground'>
                        Exemple :
                    </p>
                    <MathBlock content="  A = \begin{pmatrix} 1 & 2 \\ 3 & 4  \end{pmatrix},B = \begin{pmatrix} 5 & 6 \\ 7 & 8  \end{pmatrix}
                    \Rightarrow A+B = \begin{pmatrix} 1 + 5 & 2 + 6 \\ 3 + 7 & 4 + 8  \end{pmatrix} = \begin{pmatrix} 6 & 8 \\ 10 & 12  \end{pmatrix}" />
                </SubSection>
                <SubSection title='Multiplication par un Scalaire'>
                    <p className='text-muted-foreground'>On multiplie chaque élément de la matrice par le scalaire <MathRenderer content='k' /></p>
                    <p className='text-muted-foreground'>
                        Exemple :
                    </p>
                    <p className='text-muted-foreground'>
                        Si
                    </p>
                    <MathBlock content="A = \begin{pmatrix} 1 & 2  \\ 3 & 4 \end{pmatrix} " />
                    <p className='text-muted-foreground'>
                        et <MathRenderer content='k = 3,' />alors
                    </p>
                    <MathBlock content="3A = 3 \begin{pmatrix} 1 & 2  \\ 3 & 4  \end{pmatrix} = \begin{pmatrix} 3 \times 1 & 3 \times 2  \\ 3 \times 3 & 3\times 4  \end{pmatrix} = \begin{pmatrix} 3 & 6  \\ 9 & 12  \end{pmatrix}" />
                </SubSection>
                <SubSection title='Multiplication de Matrices'>
                    <p className='text-muted-foreground'>Une matrice <MathRenderer content='A_{m\times n}' /> peut être multipliée par une matrice <MathRenderer content='B_{n\times p}' /> si le nombre de colonne de A est égal au nombre de lignes de B. </p>
                    <p className='text-muted-foreground'>
                        La règle de multiplication :
                    </p>
                    <MathBlock content='(A \times B)_{ij} = \sum\limits_{j=1}^k A_{ik}B_{kj}' />
                    <p className='text-muted-foreground'>
                        Exemple :
                    </p>
                    <MathBlock content="   A = \begin{pmatrix} 1 & 2 \\ 3 & 4  \end{pmatrix},B = \begin{pmatrix} 5 & 6 \\ 7 & 8  \end{pmatrix}
                    \Rightarrow A\times B = \begin{pmatrix} ​(1×5+2×7) & (1×6+2×8) \\ (3×5+4×7) & (3×6+4×8) \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50  \end{pmatrix}" />
                </SubSection>
                <SubSection title='Déterminant d’une Matrice Carrée'>
                    <p className='text-muted-foreground'>Le déterminant de la matrice carrée <MathRenderer content='A = \begin{pmatrix} 
                                a_{11}  & \dots & a_{1n} \\ 
                                \vdots  & \ddots & \vdots \\ 
                                a_{n1} & \dots & a_{nn} 
                                 \end{pmatrix} ' /> est donné par la formule de Leibniz
                    </p>
                    <MathBlock content='det(A) = \begin{vmatrix} 
            a_{11}  & \dots & a_{1n} \\ 
            \vdots  & \ddots & \vdots \\ 
            a_{n1} & \dots & a_{nn} 
          \end{vmatrix}  = \sum\limits_{\sigma\in \mathfrak {S}_n}^k \epsilon(\sigma)\prod\limits_{i=1}^n a_{\sigma(i),i}' />
                    <p className='text-muted-foreground'>
                        où <MathRenderer content='\mathfrak {S}_n' /> désigne l'ensemble des permutations de <MathRenderer content='\{1,...,n\}' /> et <MathRenderer content='\epsilon(\sigma)' /> est le signe de la permutation <MathRenderer content='\sigma' />.

                    </p>
                    <p className='text-muted-foreground'>
                        Déterminant d'une matrice de dimension 2 :
                    </p>
                    <MathBlock content='\begin{vmatrix} a & b \\ c & d\end{vmatrix} =ad-bc' />
                    <p className='text-muted-foreground'>
                        Déterminant d'une matrice de dimension 3 :
                    </p>
                    <MathBlock content=' \begin{aligned}|A|={\begin{vmatrix}a&b&c\\d&e&f\\g&h&i\end{vmatrix}}=a\,{\begin{vmatrix}\Box &\Box &\Box \\\Box &e&f\\\Box &h&i\end{vmatrix}}-b\,{\begin{vmatrix}\Box &\Box &\Box \\d&\Box &f\\g&\Box &i\end{vmatrix}}+c\,{\begin{vmatrix}\Box &\Box &\Box \\d&e&\Box \\g&h&\Box \end{vmatrix}}&=a\,{\begin{vmatrix}e&f\\h&i\end{vmatrix}}-b\,{\begin{vmatrix}d&f\\g&i\end{vmatrix}}+c\,{\begin{vmatrix}d&e\\g&h\end{vmatrix}}\\&=aei+bfg+cdh-ceg-bdi-afh.\end{aligned}
' />
                </SubSection>
                <SubSection title='Inverse d’une Matrice Carrée'>
                    <p className='text-muted-foreground'>Une matrice carrée <MathRenderer content='A' /> est inversible si <MathRenderer content='det(A) \neq 0' /> </p>
                    <p className='text-muted-foreground'>
                        L’inverse d'une matrice <MathRenderer content='2 \times 2' /> est donnée par :
                    </p>
                    <MathBlock content=" A^{-1}={\begin{pmatrix}a&b\\c&d\end{pmatrix}}^{-1}={\frac {1}{ad-bc}}{\begin{pmatrix}d&-b\\-c&a\end{pmatrix}}" />
                    <p className='text-muted-foreground'>
                    L’inverse d'une matrice <MathRenderer content='3 \times 3' /> est donnée par :
                    </p>
                    <MathBlock content=" A^{-1}={\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\\\end{pmatrix}}^{-1}={\frac {1}{\det A}}^{\operatorname {t} }\!{\begin{pmatrix}ei-fh&fg-di&dh-eg\\ch-bi&ai-cg&bg-ah\\bf-ce&cd-af&ae-bd\end{pmatrix}}={\frac {1}{\det A}}{\begin{pmatrix}ei-fh&ch-bi&bf-ce\\fg-di&ai-cg&cd-af\\dh-eg&bg-ah&ae-bd\end{pmatrix}}" />
                </SubSection>
            </Section>
        </div>
    );
}

