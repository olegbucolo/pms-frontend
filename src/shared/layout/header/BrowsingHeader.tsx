import BrowsingSearch from "@/features/rent/components/BrowsingSearch";
import MainDrawer from "./drawer/MainDrawer";
import Logo from "./Logo";
import { useLocation, useSearchParams } from "react-router-dom";

export default function BrowsingHeader() {

    const [searchParams] = useSearchParams();
    const listingType = (searchParams.get('type')?.toUpperCase() || 'SALE') as 'SALE' | 'RENT';
    
    return (
        <header className="fixed inset-x-0 z-5" >
            <nav className="flex justify-between h-20 items-center px-5 mx-auto p-3">
                {/* logo */}
                <div className="left relative min-w-30 h-full flex justify-start items-center overflow-hidden">
                    <Logo />
                </div>

                {/* main nav */}
                <div className="relative middle h-[80%] w-full max-w-2/4 items-center rounded-4xl border">
                     <BrowsingSearch listingType={listingType}/>
                </div>

                {/* login */}
                <div className="right min-w-30 flex items-center justify-end">
                    <MainDrawer />
                </div>
            </nav>
        </header>
    )
}