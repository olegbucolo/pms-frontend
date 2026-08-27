import { useEffect, useState } from "react";
import type { SearchFilters } from "@/shared/types/search";
import { Button, Input, NumberField, Popover, Select } from "@base-ui/react";
import { FaCaretDown, FaCaretUp, FaCheck, FaPlus, FaMinus } from "react-icons/fa";

import popover from '@/features/browsing/filters/popover.module.css';
import input from '@/features/browsing/filters/input.module.css';
import button from '@/features/browsing/filters/button.module.css';
import select from '@/features/browsing/filters/select.module.css';
import numberField from '@/features/browsing/filters/numberField.module.css';

interface BrowsingFiltersProps {
    filters: SearchFilters;                       // committed filters from URL
    onApply: (next: SearchFilters) => void;       // commit to URL
}

const propertyTypes = [
    { label: 'Any type', value: '' },
    { label: 'Apartment', value: 'Apartment' },
    { label: 'House', value: 'House' },
    { label: 'Garage', value: 'Garage' },
    { label: 'Land', value: 'Land' },
    { label: 'Commercial', value: 'Commercial' },
];

export default function BrowsingFilters({ filters, onApply }: BrowsingFiltersProps) {
    const [draft, setDraft] = useState<SearchFilters>(filters);

    useEffect(() => { setDraft(filters); }, [filters]);

    const update = (patch: Partial<SearchFilters>) => setDraft((d) => ({ ...d, ...patch }));
    const num = (v: string) => (v === "" ? null : Number(v));

    return (
        <div className="flex gap-3 pb-4 px-2 overflow-x-auto max-w-7xl ps-6 mx-auto">
            <Popover.Root >
                <Popover.Trigger className={`${popover.Button} z-1 cursor-pointer rounded bg-transparent! mr-2! text-xl!`}>
                    {(filters.maxPrice || filters.minPrice)
                        ? `Price: ${filters.minPrice} - ${filters.maxPrice}`
                        : `Price`}
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={8}>
                        <Popover.Popup className={popover.Popup}>
                            <Popover.Arrow className={popover.Arrow} />
                            <Popover.Title className={popover.Title}> </Popover.Title>
                            {/* INPUT BASE UI ELEMENT */}
                            <div className="flex gap-2">
                                <label className={input.Label}>
                                    Min price:
                                    <Input
                                        className={input.Input}
                                        placeholder="e.g. 50000"
                                        value={draft.minPrice ?? ""}
                                        onChange={(e) => update({ minPrice: num(e.target.value) })}
                                    />
                                </label>
                                <label className={input.Label}>
                                    Max price:
                                    <Input
                                        className={input.Input}
                                        placeholder="e.g. 100000"
                                        value={draft.maxPrice ?? ""}
                                        onChange={(e) => update({ maxPrice: num(e.target.value) })}
                                    />
                                </label>

                            </div>
                            <Button className={button.ButtonFilters} onClick={() => onApply(draft)}>Submit</Button>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>

            <Popover.Root >
                <Popover.Trigger className={`${popover.Button} z-1 cursor-pointer rounded bg-transparent! mr-2! text-xl!`}>
                    {filters.propertyType ? filters.propertyType : 'Property type'}
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={8}>
                        <Popover.Popup className={popover.Popup}>
                            <Popover.Arrow className={popover.Arrow} />
                            <Popover.Title className={popover.Title}> </Popover.Title>
                            {/* SELECT BASE UI ELEMENT */}
                            <div className={select.Field}>
                                <Select.Root items={propertyTypes} value={draft.propertyType ?? ''} onValueChange={(value) => update({ propertyType: (value || null) as SearchFilters["propertyType"] })}>
                                    <Select.Label className={select.Label}>Property Type</Select.Label>
                                    <Select.Trigger className={select.Select}>
                                        <Select.Value className={select.Value} placeholder="Any Type" />
                                        <Select.Icon>
                                            <FaCaretDown />
                                        </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Positioner className={select.Positioner} sideOffset={4}>
                                            <Select.Popup className={select.Popup}>
                                                <Select.ScrollUpArrow className={select.ScrollArrow}>
                                                    <FaCaretUp />
                                                </Select.ScrollUpArrow>
                                                <Select.List className={select.List}>
                                                    {propertyTypes.map(({ label, value }) => (
                                                        <Select.Item key={label} value={value} className={select.Item}>
                                                            <Select.ItemIndicator className={select.ItemIndicator}>
                                                                <FaCheck />
                                                            </Select.ItemIndicator>
                                                            <Select.ItemText className={select.ItemText}>{label}</Select.ItemText>
                                                        </Select.Item>
                                                    ))}
                                                </Select.List>
                                                <Select.ScrollDownArrow className={select.ScrollArrow}>
                                                    {/* <CaretDownIcon /> */}
                                                </Select.ScrollDownArrow>
                                            </Select.Popup>
                                        </Select.Positioner>
                                    </Select.Portal>
                                </Select.Root>
                            </div>
                            <Button className={button.ButtonFilters} onClick={() => onApply(draft)}>Submit</Button>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>

            <Popover.Root >
                <Popover.Trigger className={`${popover.Button} z-1 cursor-pointer rounded bg-transparent! mr-2! text-xl!`}>
                    {filters.minBedrooms ? `Beds: ${filters.minBedrooms}` : 'Beds'}
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={8}>
                        <Popover.Popup className={popover.Popup}>
                            <Popover.Arrow className={popover.Arrow} />
                            <Popover.Title className={popover.Title}> </Popover.Title>
                            {/* NUMBER FIELD BASE UI ELEMENT */}
                            <NumberField.Root onValueChange={(defaultValue) => update({ minBedrooms: defaultValue })} id="1" defaultValue={draft.minBedrooms ?? 0} className={numberField.Field}>
                                <NumberField.ScrubArea className={numberField.ScrubArea}>
                                    <label htmlFor="1" className={numberField.Label}>
                                        Amount
                                    </label>
                                    <NumberField.ScrubAreaCursor className={numberField.ScrubAreaCursor}>
                                        {/* <CursorGrowIcon /> */}
                                    </NumberField.ScrubAreaCursor>
                                </NumberField.ScrubArea>

                                <NumberField.Group className={numberField.Group}>
                                    <NumberField.Decrement className={numberField.Decrement}>
                                        <FaMinus />
                                    </NumberField.Decrement>
                                    <NumberField.Input className={numberField.Input} />
                                    <NumberField.Increment className={numberField.Increment}>
                                        <FaPlus />
                                    </NumberField.Increment>
                                </NumberField.Group>
                            </NumberField.Root>
                            <Button className={button.ButtonFilters} onClick={() => onApply(draft)}>Submit</Button>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>

            <Popover.Root >
                <Popover.Trigger className={`${popover.Button} z-1 cursor-pointer rounded bg-transparent! mr-2! text-xl!`}>
                    {filters.hasGarage ? `Garage: x${filters.hasGarage}` : 'Garage'}
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={8}>
                        <Popover.Popup className={popover.Popup}>
                            <Popover.Arrow className={popover.Arrow} />
                            <Popover.Title className={popover.Title}> </Popover.Title>
                            <Popover.Description className={popover.Description}>
                                <label className="flex items-center gap-2 border">
                                    <input
                                        type="checkbox"
                                        checked={draft.hasGarage === true}
                                        onChange={(e) => update({ hasGarage: e.target.checked ? true : null })} />
                                    Has garage
                                </label>
                                <Button className={button.ButtonFilters} onClick={() => onApply(draft)}>Submit</Button>

                            </Popover.Description>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}