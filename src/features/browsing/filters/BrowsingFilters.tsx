import { useEffect, useState } from "react";
import type { SearchFilters } from "@/shared/types/search";

interface BrowsingFiltersProps {
    filters: SearchFilters;                       // committed filters from URL
    onApply: (next: SearchFilters) => void;       // commit to URL
}

export default function BrowsingFilters({ filters, onApply }: BrowsingFiltersProps) {
    const [draft, setDraft] = useState<SearchFilters>(filters);

    useEffect(() => { setDraft(filters); }, [filters]);

    const update = (patch: Partial<SearchFilters>) => setDraft((d) => ({ ...d, ...patch }));
    const num = (v: string) => (v === "" ? null : Number(v));

    return (
        <div className="flex flex-col gap-3 p-4">
            <div className="flex gap-2">
                <input type="number" placeholder="Min price" value={draft.minPrice ?? ""}
                    onChange={(e) => update({ minPrice: num(e.target.value) })} />
                <input type="number" placeholder="Max price" value={draft.maxPrice ?? ""}
                    onChange={(e) => update({ maxPrice: num(e.target.value) })} />
            </div>

            <select value={draft.propertyType ?? ""}
                onChange={(e) => update({ propertyType: (e.target.value || null) as SearchFilters["propertyType"] })}>
                <option value="">Any type</option>
                <option value="APARTMENT">Apartment</option>
                <option value="HOUSE">House</option>
                <option value="GARAGE">Garage</option>
                <option value="LAND">Land</option>
                <option value="COMMERCIAL">Commercial</option>
            </select>

            <input type="number" placeholder="Min bedrooms" value={draft.minBedrooms ?? ""}
                onChange={(e) => update({ minBedrooms: num(e.target.value) })} />

            <label className="flex items-center gap-2">
                <input type="checkbox" checked={draft.hasGarage === true}
                    onChange={(e) => update({ hasGarage: e.target.checked ? true : null })} />
                Has garage
            </label>

            <button onClick={() => onApply(draft)}>Done</button>
        </div>
    );
}