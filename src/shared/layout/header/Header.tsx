import Logo from "./Logo";
import MainDrawer from "./drawer/MainDrawer";

import LoginAvatar from "./login/LoginAvatar";
import MainNav from "./nav/MainNav";
import MainSearch from "./search/MainSearch";

export default function Header() {
    return (
        <header >
            <nav className="flex justify-between px-5 mx-auto p-6">
                {/* logo */}
                <div className="left relative w-3xs flex justify-start items-center overflow-hidden">
                    <Logo />
                </div>

                {/* main nav */}
                <div className="middle flex items-center">
                    {/* <MainNav /> */}
                    <MainSearch />
                </div>

                {/* login */}
                <div className="right w-3xs flex items-center justify-end">
                    <MainDrawer />
                </div>
            </nav>
        </header>
    )
}

