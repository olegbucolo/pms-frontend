import Logo from "./Logo";

import LoginAvatar from "./login/LoginAvatar";
import MainNav from "./nav/MainNav";

export default function Header() {
    return (
        <header className="">
            <nav className="flex justify-between px-5 container mx-auto">
                {/* logo */}
                <div className="left w-3xs flex justify-start items-center my-5 overflow-hidden">
                    <Logo />

                </div>

                {/* main nav */}
                <div className="middle flex items-center">
                    <MainNav />
                </div>

                {/* login */}
                <div className="right w-3xs flex items-center justify-end">
                    <LoginAvatar />
                </div>
            </nav>
        </header>
    )
}

