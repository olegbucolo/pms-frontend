import MainDrawer from "./drawer/MainDrawer";
import Logo from "./Logo";

export default function BrowsingHeader() {
    return (
        <header className="fixed inset-x-0 z-5" >
            <nav className="flex justify-between px-5 mx-auto p-6">
                {/* logo */}
                <div className="left relative min-w-30 flex justify-start items-center overflow-hidden">
                    <Logo />
                </div>

                {/* main nav */}
                <div className="  middle w-full max-w-2/4 items-center">
                     
                </div>

                {/* login */}
                <div className="right min-w-30 flex items-center justify-end">
                    <MainDrawer />
                </div>
            </nav>
        </header>
    )
}