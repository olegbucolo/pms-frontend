import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function BrowsingPage() {

    const [searchParams] = useSearchParams();

    useEffect(() => {
        axios.get()

    }, [])


    return (
        <>
            <div className="h-540 bg-white-600">

                {/* <BrowsingFilters filters={}/> */}



            </div>
        </>
    )
}