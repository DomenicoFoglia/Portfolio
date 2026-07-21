import { useState, useEffect } from 'react'

export function useScrollProgress(): number {
    const [progress, setProgress] = useState<number>(0)

    useEffect(() => {
        const calculateProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight
            const viewHeight = window.innerHeight
            const totalScrollable = docHeight - viewHeight

            if (totalScrollable <= 0) {
                setProgress(0)
                return
            }

            const percent = (scrollTop / totalScrollable) * 100
            setProgress(Math.min(100, Math.max(0, percent)))
        }

        calculateProgress()

        window.addEventListener('scroll', calculateProgress, { passive: true })
        window.addEventListener('resize', calculateProgress)

        return () => {
            window.removeEventListener('scroll', calculateProgress)
            window.removeEventListener('resize', calculateProgress)
        }
    }, [])

    return progress
}