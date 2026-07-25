import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

type LikesMap = Record<string, number>

export function useLikes() {
    const [counts, setCounts] = useState<LikesMap>({})
    const [likedByMe, setLikedByMe] = useState<Set<string>>(() => {
        const saved = localStorage.getItem('liked-projects')
        return saved ? new Set(JSON.parse(saved)) : new Set()
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${API_URL}/api/likes`)
            .then(res => res.json())
            .then((data: LikesMap) => {
                setCounts(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    const toggle = async (project: string) => {
        const wasLiked = likedByMe.has(project)
        
        // Optimistic update
        setCounts(prev => ({
            ...prev,
            [project]: (prev[project] || 0) + (wasLiked ? -1 : 1)
        }))
        setLikedByMe(prev => {
            const next = new Set(prev)
            wasLiked ? next.delete(project) : next.add(project)
            localStorage.setItem('liked-projects', JSON.stringify([...next]))
            return next
        })

        // Chiamata API
        try {
            const res = await fetch(`${API_URL}/api/likes/${project}`, {
                method: 'POST',
            })
            const data = await res.json()
            // Riallinea col dato server
            setCounts(prev => ({ ...prev, [project]: data.count }))
        } catch {
            // Rollback in caso di errore
            setCounts(prev => ({
                ...prev,
                [project]: (prev[project] || 0) + (wasLiked ? 1 : -1)
            }))
            setLikedByMe(prev => {
                const next = new Set(prev)
                wasLiked ? next.add(project) : next.delete(project)
                localStorage.setItem('liked-projects', JSON.stringify([...next]))
                return next
            })
        }
    }

    return { counts, likedByMe, toggle, loading }
}