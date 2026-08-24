
export type ListingType = 'SALE' | 'RENT';
export type PropertyType = 'APARTMENT' | 'HOUSE' | 'GARAGE' | 'LAND' | 'COMMERCIAL';

export interface SearchResult {
    title: string
    filters: SearchFilters
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

export interface SearchBarProps {
    listingType: ListingType
}


export interface SearchFilters {
    listingType: ListingType
    city: string | null
    zipCode: string | null
    street: string | null
    propertyType: PropertyType | null
    minPrice: number | null
    maxPrice: number | null
    minBedrooms: number | null
    lotSize: number | null
    hasGarage: boolean | null
    floorNumber: number | null
}
