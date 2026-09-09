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
    property: PropertySummaryDto
    org: OrgSummaryDto
}

export interface PropertySummaryDto {
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

export interface OrgSummaryDto {
    id: number
    name: string
    address: string
}

export interface ListingShowDTO{
        id: number,
        title: string,
        description: string,
        listingType: string,
        price: number,
        status: string,
        createdAt: string,
        updatedAt: string,
        listedDate: string,
        expiryDate: string,
        property: PropertyDetailDTO,
        org: OrgDetailDTO
}

export interface PropertyDetailDTO{
        id: number,
        address: AddressDto,
        type: string
}

export interface OrgDetailDTO{
            id: number,
            address: string
}