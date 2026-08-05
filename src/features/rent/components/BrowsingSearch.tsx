import { Autocomplete, Button } from "@base-ui/react"
import type { ListingApiResponse, ListingDto } from "../../../shared/types/Listing"
import { useSearch } from "../../../shared/hooks/useSearch"
import { RiSearch2Line } from "react-icons/ri";
import buttonO from '@/shared/layout/header/buttonO.module.css'

import autocomplete from '@/shared/layout/header/search/autocomplete.module.css'
import buttoncss from '@/shared/layout/header/button.module.css'
import autocompleteO from '@/shared/layout/header/search/autocompleteO.module.css'
import { useEffect, useState, type ReactNode } from "react"
import type { SearchBarProps, SearchResult } from "@/shared/types/search"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const transform = (raw: unknown) => {
    const data = raw as ListingApiResponse;
    return data.content.map((item) => ({
        id: String(item.id),
        title: item.property.address.street,
        subtitle: `$${item.price.toLocaleString()}`,
    }))
}

export default function BrowsingSearch({ listingType }: SearchBarProps) {

    const navigate = useNavigate();

    // retrieving the query from the url if present and setting it as value for the input
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q');

    function handleSubmit() {
        navigate(
            { pathname: '/search', search: `?type=${listingType}&q=${encodeURIComponent(query)}` },
            { replace: false }
        )
    }

    useEffect(() => {
        if (q) setQuery(q)
    }, [])

    // isBrowsingPage added for the 'search' text inside the search bar, ux only
    const location = useLocation();
    const isBrowsingPage = location.pathname.includes('search') ? true : false;

    const { query, setQuery, results, isPending, error } = useSearch({
        endpoint: 'http://localhost:8080/api/v1/listings',
        debounceMs: 400,
        transform: (raw) => raw as SearchResult[],
    })

    function getStatus(): ReactNode | null {
        if (isPending) {
            return (
                <>
                    <span className={autocomplete.Spinner} aria-hidden />
                    ...Searching
                </>
            )
        }

        if (error) { return error };

        if (query === "") {
            return null
        }
        console.log('results', results)

        if (results.length === 0) {
            return `property ${query} does not exist`
        }

        return `${results.length} result${results.length > 1 ? 's' : ''} found `
    }

    const status = getStatus();

    return (
        <Autocomplete.Root items={results} value={query} onValueChange={setQuery}>
            <Autocomplete.InputGroup
                className='INPUT-GGROUP h-full flex w-full overflow-hidden z-10 justify-between items-center rounded-4xl p-0.75'>
                <Autocomplete.Input placeholder="Search..." className={`${autocomplete.Input} ${autocompleteO.Input} h-full`} />
                <Button onClick={handleSubmit} className={`${buttoncss.Button} ${buttonO.Button}`}>
                    {isBrowsingPage ? '' : 'Search'}
                    <RiSearch2Line className="text-2xl" />
                </Button>
            </Autocomplete.InputGroup>
            <Autocomplete.Portal hidden={!status}>
                <Autocomplete.Positioner className={`${autocomplete.Positioner} `} sideOffset={4} align="start">
                    <Autocomplete.Popup className={`${autocomplete.Popup} rounded-4xl py-5 bg-transparent! backdrop-blur-sm`} aria-busy={isPending || undefined}>
                        <div className={autocomplete.Viewport}>
                            <Autocomplete.Status>
                                {status && <div className={autocomplete.Status}>{status}</div>}
                            </Autocomplete.Status>
                            <Autocomplete.List>
                                {(item) => (
                                    <Autocomplete.Item key={item.id} className={autocompleteO.Item}>
                                        <span className={autocompleteO.TextItem}>
                                            <span className={autocompleteO.TextName}>{item.title}</span>
                                        </span>
                                    </Autocomplete.Item>
                                )}
                            </Autocomplete.List>
                        </div>
                    </Autocomplete.Popup>
                </Autocomplete.Positioner>
            </Autocomplete.Portal>
        </Autocomplete.Root>

    )
}