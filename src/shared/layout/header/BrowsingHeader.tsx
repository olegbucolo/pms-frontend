import BrowsingSearch from "@/features/rent/components/BrowsingSearch";
import MainDrawer from "./drawer/MainDrawer";
import Logo from "./Logo";
import { useLocation, useSearchParams } from "react-router-dom";
import BrowsingFilters from "@/features/browsing/filters/BrowsingFilters";
import { useBrowseListings } from "@/features/browsing/hooks/useBrowseListings";

export default function BrowsingHeader() {

    const [searchParams] = useSearchParams();
    const listingType = (searchParams.get('type')?.toUpperCase() || 'SALE') as 'SALE' | 'RENT';

    const { filters, setFilters, listings, isPending, error } = useBrowseListings();


    return (
        <header className="fixed inset-x-0 z-5" >
            <div className="relative">
                {/* blur element */}
                <div className="absolute backdrop-blur-xl bg-white/80 inset-0"></div>
                <nav className="relative flex justify-between h-20 items-center px-5 mx-auto p-3">
                    {/* logo */}
                    <div className="z-2 left relative min-w-30 h-full flex justify-start items-center overflow-hidden">
                        <Logo />
                    </div>
                    {/* main nav */}
                    <div className="z-2 relative middle h-[80%] w-full max-w-7xl items-center rounded-4xl border">
                        <BrowsingSearch listingType={listingType} />
                    </div>
                    {/* login */}
                    <div className="z-2 right min-w-30 flex items-center justify-end">
                        <MainDrawer />
                    </div>
                </nav>
                <BrowsingFilters filters={filters} onApply={setFilters} />
            </div>
        </header>
    )
}