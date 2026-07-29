import { Autocomplete, Button } from "@base-ui/react";

import { useSearch } from "../../../shared/hooks/useSearch";
import type {ListingApiResponse } from "../../../shared/types/Listing";

import autocomplete from '@/shared/layout/header/search/autocomplete.module.css'
import buttoncss from '@/shared/layout/header/button.module.css'
import buttonSearch from '@/shared/layout/header/search/buttonSearch.module.css'
import autocompleteO from '@/shared/layout/header/search/autocompleteO.module.css'
import type { ReactNode } from "react";

const transformBuy = (raw: unknown) => {
    const data = raw as ListingApiResponse
    return data.content.map((item) => ({
        id: String(item.id),
        title: item.property.address.street,
        subtitle: `$${item.price.toLocaleString()}`,
    }))
}

export default function BuySearch() {
    const { query, setQuery, results, isPending, error } = useSearch({
        endpoint: 'http://localhost:8080/api/v1/listings',
        debounceMs: 400,
        transform: transformBuy,
    })

    function getStatus(): ReactNode | null {
        if (isPending) {
            return (
                <>
                    <span className={autocomplete.Spinner} aria-hidden />
                    Searching…
                </>
            );
        }

        if (error) {
            return error;
        }

        if (query === '') {
            return null;
        }

        if (results.length === 0) {
            return `!!!!!! Property "${query}" does not exist `;
        }

        return `${results.length} result${results.length === 1 ? '' : 's'} found`;
    }

    const status = getStatus();

    return (
        <Autocomplete.Root items={results} value={query} onValueChange={setQuery}>
            <Autocomplete.InputGroup
                className='INPUT-GGROUP h-15 flex w-full overflow-hidden z-10 justify-between items-center rounded-4xl p-0.75'>
                <Autocomplete.Input placeholder="Search..." className={`${autocomplete.Input} ${autocompleteO.Input}`} />
                <Button className={`${buttoncss.Button} ${buttonSearch.Button}`}>Search</Button>
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
                                    <Autocomplete.Item key={item.id} value={item} className={autocomplete.Item}>
                                        <span className={autocomplete.Title}>{item.title}</span>s
                                        <span className={autocomplete.Subtitle}>{item.subtitle}</span>
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
