
export interface ListingApiResponse {
    content: ListingDto[]
    page: number
    size: number
    totalElements: number
    totalPages: number
}

export interface ListingDto {
    id: number
    title: string
    description: string
    listingType: 'SALE' | 'RENT'
    price: number
    status: string
    listedDate: string
    expiryDate: string
    property: PropertyDto
    org: OrgDto
}

export interface PropertyDto {
    id: number
    name: string
    description: string
    address: AddressDto
    // add beds, sqft, thumbnail HERE if your backend actually has them
}

export interface AddressDto {
    street: string
    city: string
    zipCode: string
}

export interface OrgDto {
    id: number
    name: string
    address: string
}

const listing = {
    "createdAt": "2026-07-23T18:29:35",
    "description": "Beautiful family home in prime location.",
    "expiryDate": "2026-10-21T18:29:35",
    "id": 1,
    "listedDate": "2026-07-23T18:29:35",
    "listingType": "SALE",
    "org": {
        "type": "Org$HibernateProxy",
        "address": "123 Business Ave, Metropolis",
        "hibernateLazyInitializer": {},
        "id": 1,
        "name": "Premium Realty"
    },
    "price": 450000,
    "property": {
        "type": "Property$HibernateProxy",
        "address": {
            "city": "Springfield",
            "street": "742 Evergreen Terrace",
            "zipCode": "62701"
        },
        "createdAt": "2026-07-23T18:29:35",
        "description": "Spacious 3-bed family home with open floor plan and large backyard.",
        "hibernateLazyInitializer": {},
        "id": 1,
        "name": "Modern Family Home",
        "price": 450000,
        "status": "AVAILABLE",
        "updatedAt": "2026-07-23T18:29:35"
    },
    "status": "ACTIVE",
    "title": "Modern Family Home - For Sale",
    "updatedAt": "2026-07-23T18:29:35"
}