import { useState, useRef, useTransition, useCallback } from 'react';
import type { SearchConfig, SearchResult, UseSearchReturn } from "../types/search";

export function useSearch(config: SearchConfig): UseSearchReturn {
    const { endpoint, debounceMs = 300, transform, filter } = config
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<SearchResult[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isPending, startTransition] = useTransition()
    const [isSearching, setIsSearching] = useState(false);

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
            setIsSearching(false)
            return
        }

        setIsSearching(true)

        timerRef.current = setTimeout(() => {
            const controller = new AbortController()
            abortRef.current = controller

            startTransition(async () => {
                setError(null)
                try {
                    // const res = await fetch(`/api${endpoint}?q=${encodeURIComponent(nextValue)}`, {
                    const res = await fetch(`${endpoint}`, {
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
                await new Promise(r => setTimeout(r, 4)) // simulate network
                // setResults(properties)
                setIsSearching(false);
            })
        }, debounceMs)
    }, [endpoint, debounceMs, transform, filter, cancel])
    return { query, setQuery: handleChange, results, isPending: isSearching, error, cancel }

}

// const properties: SearchResult[] = [
//     {
//         id: '1',
//         title: 'Modern Villa with Pool',
//         subtitle: 'Lake Como, Italy',
//     },
//     {
//         id: '2',
//         title: 'Luxury Penthouse',
//         subtitle: 'Milan, Italy',
//     },
//     {
//         id: '3',
//         title: 'Beachfront Apartment',
//         subtitle: 'Palermo, Sicily',
//     },
//     {
//         id: '4',
//         title: 'Cozy Mountain Cabin',
//         subtitle: 'Cortina d’Ampezzo, Italy',
//     },
//     {
//         id: '5',
//         title: 'Elegant Townhouse',
//         subtitle: 'Florence, Italy',
//     },
//     {
//         id: '6',
//         title: 'Contemporary Loft',
//         subtitle: 'Turin, Italy',
//     },
//     {
//         id: '7',
//         title: 'Historic Stone House',
//         subtitle: 'Assisi, Italy',
//     },
//     {
//         id: '8',
//         title: 'Seaside Cottage',
//         subtitle: 'Amalfi Coast, Italy',
//     },
//     {
//         id: '9',
//         title: 'Minimalist Studio',
//         subtitle: 'Rome, Italy',
//     },
//     {
//         id: '10',
//         title: 'Country Farmhouse',
//         subtitle: 'Tuscany, Italy',
//     },
//     {
//         id: '11',
//         title: 'Family Home with Garden',
//         subtitle: 'Bologna, Italy',
//     },
//     {
//         id: '12',
//         title: 'Exclusive Waterfront Villa',
//         subtitle: 'Sardinia, Italy',
//     },
//     {
//         id: '13',
//         title: 'City Center Apartment',
//         subtitle: 'Naples, Italy',
//     },
//     {
//         id: '14',
//         title: 'Rustic Chalet',
//         subtitle: 'Aosta Valley, Italy',
//     },
//     {
//         id: '15',
//         title: 'Luxury Country Estate',
//         subtitle: 'Umbria, Italy',
//     },
//     {
//         id: '16',
//         title: 'Modern Duplex',
//         subtitle: 'Verona, Italy',
//     },
//     {
//         id: '17',
//         title: 'Ocean View Penthouse',
//         subtitle: 'Catania, Sicily',
//     },
//     {
//         id: '18',
//         title: 'Classic Villa',
//         subtitle: 'Lucca, Italy',
//     },
//     {
//         id: '19',
//         title: 'Smart Apartment',
//         subtitle: 'Genoa, Italy',
//     },
//     {
//         id: '20',
//         title: 'Luxury Ski Lodge',
//         subtitle: 'Livigno, Italy',
//     },
// ]
