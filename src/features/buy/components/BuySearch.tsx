import { Autocomplete, Button } from "@base-ui/react";
import buttoncss from '../../../shared/layout/header/button.module.css';
import autocompletecss from '../../../shared/layout/header/search/index.module.css'
import { useSearch } from "../../../shared/hooks/useSearch";
import styles from '../../../shared/layout/header/search/index.module.css'

interface Property {
    id: string
    address: string
    price: number
    beds: number
    sqft: number
    thumbnail: string
}

const transformBuy = (raw: unknown) => {
    const data = raw as { properties: Property[] }
    return data.properties.map((p) => ({
        id: p.id,
        title: p.address,
        subtitle: `$${p.price.toLocaleString()} · ${p.beds} bed · ${p.sqft} sqft`,
        image: p.thumbnail,
    }))
}

export default function BuySearch() {
    const { query, setQuery, results, isPending, error } = useSearch({
        endpoint: '/properties/buy',
        debounceMs: 400,
        transform: transformBuy,
    })
    return (
        <section className="h-screen w-screen flex justify-center items-center">
            <div className="bg-red-600">BUY now</div>
            <Autocomplete.Root items={results} value={query} onValueChange={setQuery}>
                <Autocomplete.Input className={autocompletecss.Input} placeholder="Search properties to buy..."></Autocomplete.Input>
                <Button className={buttoncss.Button}>Value</Button>
                <Autocomplete.Portal>
                    <Autocomplete.Positioner className={autocompletecss.Positioner}>
                        <Autocomplete.Popup className={autocompletecss.Popup}>
                            <Autocomplete.List className={autocompletecss.List}>
                                {(item) => (
                                    <Autocomplete.Item key={item.id} value={item} className={styles.Item}>
                                        <span className={styles.Title}>{item.title}</span>s
                                        <span className={styles.Subtitle}>{item.subtitle}</span>
                                    </Autocomplete.Item>
                                )}
                            </Autocomplete.List>
                        </Autocomplete.Popup>
                    </Autocomplete.Positioner>
                </Autocomplete.Portal>
            </Autocomplete.Root>
        </section>
    )
}

