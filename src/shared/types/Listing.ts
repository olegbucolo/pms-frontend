
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
