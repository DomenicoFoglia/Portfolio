import { useState, useEffect } from "react";


export function useScrollSpy(ids: string[]): string {
    const [activeId, setActiveId] = useState<string>(ids[0] || '');

    useEffect(() => {
        const sections = ids
            .map(id => document.getElementById(id))
            .filter((s): s is HTMLElement => s !== null);


        const observer = new IntersectionObserver(
            (entries) => {
                // Per ogni entry visibile aggiorna lo stato
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-30% 0px -70% 0px'
            }
        )

        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [ids])

    return activeId
}