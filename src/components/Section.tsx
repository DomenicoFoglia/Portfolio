import type { ReactNode } from 'react'
import './Section.css'

type SectionProps = {
    id: string;
    numeral: string;
    label: string;
    title?:string;
    children: ReactNode;
}

function Section({id, numeral, label, title, children}: SectionProps){
    return (
        <section id={id}>
            <span className='eyebrow'>
                {numeral} · {label}
            </span>

            {title && (
                <h2 className='section-title'>
                    {title}
                </h2>
            )}

            <div className="section-content">
                {children}
            </div>
        </section>
    )
}

export default Section