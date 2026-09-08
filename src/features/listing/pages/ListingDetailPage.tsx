import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ListingDetailsPage() {

    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const controller = new AbortController();
        axios
            .get(`http://localhost:8080/api/v1/listings/${id}`, {signal: controller.signal})
            .then((res) => setDetail(res.data))
            .catch((err) => {
                if(!axios.isCancel(err)) setError(err.message);
            })
            return () => controller.abort();
    }, [id])

    useEffect(() => {
        console.log(detail);
    }, [detail])

    return (
        <div className="bg-yellow-500 pt-100">
            <div className='text-black'>{error ?? JSON.stringify(detail)}</div>
        </div>
    )
}