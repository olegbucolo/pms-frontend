import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import BrowsingHeader from "./header/BrowsingHeader";

export default function BrowsingLayout() {
    return (
        <>
            <BrowsingHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}