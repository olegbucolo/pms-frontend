import type { ListingApiResponse, ListingDto } from "@/shared/types/Listing";
import type { PropertyType, SearchFilters } from "@/shared/types/search";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

function toNumberOrNull(raw: string | null): number | null {
    if (raw === null || raw.trim() === "") return null;
    const num = Number(raw);
    return Number.isNaN(num) ? null : num;
}

export function parseSearchParams(params: URLSearchParams): SearchFilters {
    return {
        listingType: params.get("listingType") === "RENT" ? "RENT" : "SALE",
        city: params.get("city"),
        zipCode: params.get("zipCode"),
        street: params.get("street"),
        propertyType: (params.get("propertyType") as PropertyType | null) ?? null,
        minPrice: toNumberOrNull(params.get("minPrice")),
        maxPrice: toNumberOrNull(params.get("maxPrice")),
        minBedrooms: toNumberOrNull(params.get("minBedrooms")),
        lotSize: toNumberOrNull(params.get("lotSize")),
        hasGarage: params.get("hasGarage") === null ? null : params.get("hasGarage") === "true",
        floorNumber: toNumberOrNull(params.get("floorNumber")),
    }
}

export function buildQueryString(filters: SearchFilters): string {
    const sp = new URLSearchParams();
    for (const [key, value] of Object.entries(filters)) {
        if (value !== null && value !== undefined && value !== "") sp.set(key, String(value));
    }
    return sp.toString();
}

interface BrowseListingsState {
    listings: ListingDto[];
    isPending: boolean;
    error: string | null;
}

export function useBrowseListings() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [state, setState] = useState<BrowseListingsState>({ listings: [], isPending: false, error: null })

    const filters = useMemo(() => parseSearchParams(searchParams), [searchParams]);
    const queryString = useMemo(() => buildQueryString(filters), [filters]);

    

    useEffect(() => {
        const controller = new AbortController();
        setState((prev) => ({ ...prev, isPending: true }));

        fetch(`http://localhost:8080/api/v1/listings/search?${queryString}`, { signal: controller.signal })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load listings");
                return res.json() as Promise<ListingApiResponse>;
            })
            .then((data) => setState({ listings: data.content, isPending: false, error: null }))
            .catch((err: Error) => {
                if (err.name !== "AbortError") {
                    setState({ listings: [], isPending: false, error: err.message });
                }
            });

        return () => controller.abort();
    }, [queryString]);

    const setFilters = useCallback((next: SearchFilters) => {
        setSearchParams(buildQueryString(next), { replace: false });
    }, [setSearchParams]);

    return { filters, setFilters, ...state };
}