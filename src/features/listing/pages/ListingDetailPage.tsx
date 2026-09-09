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
import type { ListingShowDTO } from '@/shared/types/Listing';

export default function ListingDetailsPage() {

    const { id } = useParams();
    const [detail, setDetail] = useState<ListingShowDTO | null>(null);
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
        <>
            <section className="pt-40 max-w-7xl mx-auto">
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
                                src={`https://loremflickr.com/800/600/house,building?lock=${detail?.id && detail.id + 11}`}
                                alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={` w-fit mx-auto swiper-zoom-container flex items-center justify-center max-h-full`} >
                            <img className={`relative h-full object-cover object-bottom`}
                                src={`https://loremflickr.com/800/600/house,building?lock=${detail?.id && detail.id + 110}`}
                                alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`w-fit mx-auto swiper-zoom-container flex items-center justify-center max-h-full`} >
                            <img className={`relative h-full object-cover object-bottom`}
                                src={`https://loremflickr.com/800/600/house,building?lock=${detail?.id && detail.id + 120}`}
                                alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`w-fit mx-auto swiper-zoom-container flex items-center justify-center max-h-full`} >
                            <img className={`relative h-full object-cover object-bottom`}
                                src={`https://loremflickr.com/800/600/house,building?lock=${detail?.id && detail.id + 130}`}
                                alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`w-fit mx-auto swiper-zoom-container flex items-center justify-center max-h-full`} >
                            <img className={`relative h-full object-cover object-bottom`}
                                src={`https://loremflickr.com/800/600/house,building?lock=${detail?.id && detail.id + 140}`}
                                alt="" />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section >
            <section className={`pt-8 px-4 max-w-7xl mx-auto`}>
                <h1 className={`font-medium text-2xl`}>{detail?.title}</h1>
                <p className={`pt-2 whitespace-pre-wrap`}>{detail?.description}</p>
            </section>
        </>
    )
}