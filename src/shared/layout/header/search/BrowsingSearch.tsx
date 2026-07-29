import { Autocomplete } from "@base-ui/react";
import autocomplete from "@/shared/layout/header/search/autocomplete.module.css";

export default function BrowsingSearch() {
    return (
        <Autocomplete.Root>
            <Autocomplete.InputGroup>

            </Autocomplete.InputGroup>
            <Autocomplete.Portal>
                <Autocomplete.Positioner>
                    <Autocomplete.Popup>
                        <div >
                            <Autocomplete.Status>

                            </Autocomplete.Status>
                            <Autocomplete.List>

                            </Autocomplete.List>
                        </div>
                    </Autocomplete.Popup>
                </Autocomplete.Positioner>
            </Autocomplete.Portal>


        </Autocomplete.Root>
    )
}