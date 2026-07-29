export interface SearchResult {
    id: string
    title: string
    subtitle: string
    image?: string
}

export interface SearchConfig {
    endpoint: string
    debounceMs?: number
    transform: (raw: unknown) => SearchResult[]
    filter?: (item: SearchResult, query: string) => boolean
}

export interface UseSearchReturn {
    query: string
    setQuery: (value: string) => void
    results: SearchResult[]
    isPending: boolean
    error: string | null
    cancel: () => void
}

export interface SearchBarProps{
    listingType: 'SALE' | 'RENT'
}

