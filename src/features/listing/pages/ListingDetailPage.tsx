import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Zoom } from 'swiper/modules'
import swiperCard from '@/features/rent/components/swiperCard.module.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import swiperDetailPage from '@/features/listing/pages/swiperDetailPage.module.css'

export default function ListingDetailsPage() {

    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const controller = new AbortController();
        axios
            .get(`http://localhost:8080/api/v1/listings/${id}`, { signal: controller.signal })
            .then((res) => setDetail(res.data))
            .catch((err) => {
                if (!axios.isCancel(err)) setError(err.message);
            })
        return () => controller.abort();
    }, [id])

    useEffect(() => {
        console.log(detail);
    }, [detail])

    return (
        <div className="pt-40 max-w-7xl mx-auto ">
            <Swiper

                loop={true}
                zoom={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[Pagination, Zoom]}
                className={`${swiperDetailPage.ListingDetailSwiper} ${swiperDetailPage.SwiperImgC} relative mySwiper h-[50vh] mb-5`}
            >
                {/* <div className="z-2 absolute inset-0 shadow-[inset_0_-3rem_2rem_-3rem_black] pointer-events-none"></div> */}
                <SwiperSlide>
                    <div className={` w-fit mx-auto swiper-zoom-container flex items-center justify-center max-h-full`} >
                        <img className={`relative h-full object-cover object-bottom`}
                            src={`https://picsum.photos/800/1000?random=1`}
                            alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={` w-fit mx-auto swiper-zoom-container flex items-center justify-center max-h-full`} >
                        <img className={`relative h-full object-cover object-bottom`}
                            src={`https://picsum.photos/800/1000?random=2`}
                            alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-fit mx-auto swiper-zoom-container flex items-center justify-center max-h-full`} >
                        <img className={`relative h-full object-cover object-bottom`}
                            src={`https://picsum.photos/800/1000?random=3`}
                            alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-fit mx-auto swiper-zoom-container flex items-center justify-center max-h-full`} >
                        <img className={`relative h-full object-cover object-bottom`}
                            src={`https://picsum.photos/800/1000?random=4`}
                            alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-fit mx-auto swiper-zoom-container flex items-center justify-center max-h-full`} >
                        <img className={`relative h-full object-cover object-bottom`}
                            src={`https://picsum.photos/800/1000?random=5`}
                            alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    )
}