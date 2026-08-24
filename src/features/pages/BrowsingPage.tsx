import BrowsingFilters from "@/features/browsing/filters/BrowsingFilters";
import { useBrowseListings } from "@/features/browsing/hooks/useBrowseListings";

export default function BrowsingPage() {
    const { filters, setFilters, listings, isPending, error } = useBrowseListings();

    return (
        <div className="h-540 bg-white-600">
            <BrowsingFilters filters={filters} onApply={setFilters} />

            {isPending ? (
                <div>Loading…</div>
            ) : error ? (
                <div>{error}</div>
            ) : listings.length === 0 ? (
                <div>No properties match your filters</div>
            ) : (
                <div className="grid gap-4">
                    {listings.map((l) => (
                        <div key={l.id}>{l.property.address.street} — ${l.price.toLocaleString()}</div>
                    ))}
                </div>
            )}
        </div>
    );
}