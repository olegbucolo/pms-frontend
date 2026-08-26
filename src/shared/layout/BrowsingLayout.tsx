import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import BrowsingHeader from "./header/BrowsingHeader";

export default function BrowsingLayout() {
    return (
        <>
            <BrowsingHeader />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}