import BrowsingSearch from "@/features/rent/components/BrowsingSearch";
import MainDrawer from "./drawer/MainDrawer";
import Logo from "./Logo";
import { useSearchParams } from "react-router-dom";

export default function BrowsingHeader() {

    const [searchParams] = useSearchParams();
    const listingType = (searchParams.get('type')?.toUpperCase() || 'SALE') as 'SALE' | 'RENT';
    console.log('listingType now: ', listingType)
    return (
        <header className="fixed inset-x-0 z-5" >
            <nav className="flex justify-between px-5 mx-auto p-6">
                {/* logo */}
                <div className="left relative min-w-30 flex justify-start items-center overflow-hidden">
                    <Logo />
                </div>

                {/* main nav */}
                <div className="relative middle scale-105 w-full max-w-2/4 items-center rounded-2xl border">
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