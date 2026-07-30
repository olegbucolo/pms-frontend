import Logo from "./Logo";
import MainDrawer from "./drawer/MainDrawer";

import MainNav from "./nav/MainNav";

export default function Header() {
    return (
        <header className="fixed inset-x-0 z-5" >
            <nav className="flex justify-between h-20 items-center px-5 mx-auto p-3">
                {/* logo */}
                <div className="left relative min-w-30 h-full flex justify-start items-center overflow-hidden">
                    <Logo />
                </div>

                {/* main nav */}
                <div className="  middle w-full max-w-2/4 items-center">
                    <MainNav />
                </div>

                {/* login */}
                <div className="right min-w-30 flex items-center justify-end">
                    <MainDrawer />
                </div>
            </nav>
        </header>
    )
}

