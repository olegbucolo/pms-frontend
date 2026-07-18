import { useState, useRef, useTransition, useCallback } from 'react';
import type { SearchConfig, SearchResult, UseSearchReturn } from "../types/search";

export function useSearch(config: SearchConfig): UseSearchReturn {
    const { endpoint, debounceMs = 300, transform, filter } = config
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<SearchResult[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isPending, startTransition] = useTransition()

    const abortRef = useRef<AbortController | null>(null)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const cancel = useCallback(() => {
        abortRef.current?.abort()
        if (timerRef.current) clearTimeout(timerRef.current)
    }, [])

    const handleChange = useCallback((nextValue: string) => {
        setQuery(nextValue)
        cancel()

        if (!nextValue) {
            setResults([])
            setError(null)
            return
        }

        timerRef.current = setTimeout(() => {
            const controller = new AbortController()
            abortRef.current = controller

            startTransition(async () => {
                setError(null)
                try {
                    const res = await fetch(`/api${endpoint}?q=${encodeURIComponent(nextValue)}`, {
                        signal: controller.signal,
                    })
                    if (!res.ok) throw new Error('Search failed')
                    const raw = await res.json()
                    const items = transform(raw)

                    startTransition(() => {
                        setResults(filter ? items.filter(i => filter(i, nextValue)) : items)
                    })
                } catch (err: any) {
                    if (err.name !== 'AbortError') {
                        startTransition(() => setError(err.message))
                    }
                }
            })
        }, debounceMs)
    }, [endpoint, debounceMs, transform, filter, cancel])
    return { query, setQuery: handleChange, results, isPending, error, cancel }

}
