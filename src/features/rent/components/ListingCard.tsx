import type { ListingDto } from "@/shared/types/Listing";

// import Swiper JS
// import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import swiperCard from '@/features/rent/components/swiperCard.module.css'

/* 
bathroom: 
import { GiBathtub } from "react-icons/gi";
import { PiBathtub } from "react-icons/pi";

bedroom:
import { IoBedOutline } from "react-icons/io5";

m^2 (size, sqm):
import { TfiRulerAlt2 } from "react-icons/tfi"; - ruler
import { RiCustomSize } from "react-icons/ri"; - area of the square

location:
import { FaMapMarkerAlt } from "react-icons/fa"; - simple google maps pin
*/

export default function ListingCard({ listing }: { listing: ListingDto }) {
    return (
        <div className="overflow-hidden relative h-150">

            {/* TOP */}
            {/*image */}
            {/* <div className="opacity-50 h-1/2 w-full overflow-hidden">
                <img className="w-full"
                    src={`https://picsum.photos/seed/${listing.id + 2000000}/200/200`}
                    alt="" />
            </div> */}
            <Swiper
                loop={false}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className={`${swiperCard.ListingSwiper} mySwiper h-2/3 `}
            >
                <SwiperSlide className="relative flex items-center justify-center overflow-hidden ">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 1}/800/800`}
                        alt="" /></SwiperSlide>
                <div className="pointer-events-none absolute z-2 inset-0 shadow-[inset_0_-2rem_1rem_-1rem_black]" />

                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 11}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 111}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 1111}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 2222}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 3333}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 4444}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 5555}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 6666}/800/800`}
                        alt="" /></SwiperSlide>
            </Swiper>


            {/* BOTTOM */}


            <div>
                <div>{listing.title}</div>

                <div >{listing.property.address.city} </div>
                <div >{listing.property.address.street} </div>
                <div>{listing.property.address.zipCode} </div>

                <div>{`$${listing.price}`}</div>
            </div>

        </div>
    )
}