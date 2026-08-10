import type { SearchFilters } from "@/shared/types/search";

export default function BrowsingFilters(filters: SearchFilters) {

    return (
        <div className="flex">
            {Object.entries(filters).map(([key, value]) => (
                <span>{key}, {value}</span>
            ))}
        </div>
    )
}