import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export type Greeting = {
    id: number
    name: string
    message: string
    created_at: string
}

type SubmitResult = 
    | { ok: true }
    | { ok: false, error: string }

export function useGreetings() {
    const [greetings, setGreetings] = useState<Greeting[]>([])
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        fetch(`${API_URL}/api/greetings`)
            .then(res => res.json())
            .then((data: Greeting[]) => {
                setGreetings(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    const submit = async (name: string, message: string, website: string): Promise<SubmitResult> => {
        setSubmitting(true)
        try {
            const res = await fetch(`${API_URL}/api/greetings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ name, message, website }),
            })

            if (res.status === 201) {
                const newGreeting: Greeting = await res.json()
                setGreetings(prev => [newGreeting, ...prev])
                return { ok: true }
            }

            if (res.status === 429) {
                const data = await res.json()
                return { ok: false, error: data.error }
            }

            if (res.status === 422) {
                return { ok: false, error: 'Controlla i campi e riprova.' }
            }

            return { ok: false, error: 'Errore di rete, riprova più tardi.' }
        } catch {
            return { ok: false, error: 'Errore di rete, riprova più tardi.' }
        } finally {
            setSubmitting(false)
        }
    }

    return { greetings, loading, submitting, submit }
}