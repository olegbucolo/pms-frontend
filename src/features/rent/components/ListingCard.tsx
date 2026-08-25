import type { ListingDto } from "@/shared/types/Listing";

export default function ListingCard({ listing }: { listing: ListingDto }) {
    return (
        <div style={{backgroundColor: "red"}}>
            {/* card title */}
            <div>{listing.title}</div>
            <div>{`$${listing.price}`}</div>
            <div >{listing.property.address.street} </div>
            <div>{listing.property.address.zipCode} </div>

        </div>
    )
}