import BrowsingFilters from "@/features/browsing/filters/BrowsingFilters";
import { useBrowseListings } from "@/features/browsing/hooks/useBrowseListings";
import ListingCard from "../rent/components/ListingCard";

export default function BrowsingPage() {
    const { filters, setFilters, listings, isPending, error } = useBrowseListings();

    return (
        <div className="max-w-7xl mx-auto px-4">
            <BrowsingFilters filters={filters} onApply={setFilters} />

            {isPending ? (
                <div>Loading…</div>
            ) : error ? (
                <div>{error}</div>
            ) : listings.length === 0 ? (
                <div>No properties match your filters</div>
            ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
                    {listings.map((l) => (
                            <ListingCard key={l.id} listing={l}/> 
                            

                    ))}
                </div>
            )}
        </div>
    );
}