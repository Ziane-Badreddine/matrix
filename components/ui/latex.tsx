"use client";
import { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export interface MathRendererProps {
    content: string;
    className?: string;
}

export function MathRenderer({ content, className }: MathRendererProps) {
    const html = useMemo(() => {
        try {
            return katex.renderToString(content, {
                throwOnError: true,
                displayMode: false,
            });
        } catch (error) {
            console.error('Erreur de rendu KaTeX:', error);
            return content;
        }
    }, [content]);

    return (
        <span
            className={`inline-block ${className}`}
            aria-label={content.replace(/\\/g, '')}
            role="math"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="my-6">
            <h2 className="text-xl font-semibold underline underline-offset-2    flex items-center gap-2">
                {title}
            </h2>
            {children}
        </section>
    );
}

export function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className=" ml-2 my-2">
            <h3 className="font-medium">{title}</h3>
            {children}
        </div>
    );
}

export function MathBlock({ content }: { content: string }) {
    return (
        <div className="p-4 my-2 pl-10 shadow border-2 border-dotted  rounded-md overflow-x-auto  transition-colors">
            <MathRenderer content={content} className="text-lg" />
        </div>
    );
}