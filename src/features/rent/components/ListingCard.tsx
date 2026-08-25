import type { ListingDto } from "@/shared/types/Listing";

export default function ListingCard({listing}: {listing: ListingDto}){
    return (
        
        <div key={listing.id}>{listing.property.address.street} — ${listing.price.toLocaleString()}</div>
    )
}