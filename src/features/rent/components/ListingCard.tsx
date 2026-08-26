import type { ListingDto } from "@/shared/types/Listing";

// import Swiper JS
// import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import swiperCard from '@/features/rent/components/swiperCard.module.css'
import { Popover } from "@base-ui/react";
import popover from '@/features/rent/components/popover.module.css';

// react-icons stuff:
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi"
import { TfiRulerAlt2 } from "react-icons/tfi";
import { GoHeart } from "react-icons/go";
/* 
bathroom: 
import { GiBathtub } from "react-icons/gi";
import { PiBathtub } from "react-icons/pi";

bedroom:
// import { IoBedOutline } from "react-icons/io5";

m^2 (size, sqm):
import { TfiRulerAlt2 } from "react-icons/tfi"; - ruler
import { RiCustomSize } from "react-icons/ri"; - area of the square

location:
import { FaMapMarkerAlt } from "react-icons/fa"; - simple google maps pin

heart: 
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
*/

export default function ListingCard({ listing }: { listing: ListingDto }) {
    return (
        <div className="hover:scale-105 transition-[scale] duration-200 p-2 pb-6 rounded-2xl overflow-hidden relative h-150 flex flex-col justify-center items-start">

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
                className={`${swiperCard.ListingSwiper} mySwiper w-full h-2/3 rounded-2xl`}
            >
                <SwiperSlide className="relative flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 1}/800/800`}
                        alt="" /></SwiperSlide>
                <a href="">
                    <div className="absolute top-4 right-4 rounded-full p-2 bg-[rgba(255,255,255,.6)] hover:bg-white transition-[background-color] duration-200 w-12 h-12 z-20">
                        <GoHeart className="w-full h-full pt-1 hover:text-red-600 transition-[color] duration-200" />
                    </div>
                </a>
                <div className="pointer-events-none absolute z-2 inset-0 shadow-[inset_0_-1rem_1rem_-.5rem_black]" />

                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 1040 + 1}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 1040 + 20}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 1040 + 30}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 1040 + 40}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 1040 + 50}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 1040 + 60}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 1040 + 70}/800/800`}
                        alt="" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover object-center"
                        src={`https://picsum.photos/seed/${listing.id + 1040 + 80}/800/800`}
                        alt="" /></SwiperSlide>
            </Swiper>


            {/* middle */}


            <div className="pt-3">
                <a className="underline" href="">
                    <h1 className="text-2xl font-normal">{listing.title}</h1>
                </a>
                <div className="pt-2">{listing.property.address.city} </div>
                <div className="pt-2">{`$${listing.price}`}</div>
            </div>

            {/* bottom */}

            <div className="pt-3 flex items-center mt-auto">
                <Popover.Root >
                    <Popover.Trigger className={`${popover.Button} border-0! cursor-pointer rounded bg-transparent! ps-0! mr-2! text-xl!`}>
                        <IoBedOutline className="text-2xl" />2
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Positioner sideOffset={8}>
                            <Popover.Popup className={popover.Popup}>
                                <Popover.Arrow className={popover.Arrow} />
                                <Popover.Title className={popover.Title}>Beds</Popover.Title>
                                <Popover.Description className={popover.Description}>
                                    This property has 2 bedrooms
                                </Popover.Description>
                            </Popover.Popup>
                        </Popover.Positioner>
                    </Popover.Portal>
                </Popover.Root>
                <Popover.Root >
                    <Popover.Trigger className={`${popover.Button} cursor-pointer rounded border-0! bg-transparent! mr-2! text-xl!`}>
                        <PiBathtub className="text-2xl" />1
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Positioner sideOffset={8}>
                            <Popover.Popup className={popover.Popup}>
                                <Popover.Arrow className={popover.Arrow} />
                                <Popover.Title className={popover.Title}>Baths</Popover.Title>
                                <Popover.Description className={popover.Description}>
                                    This property has 2 Baths
                                </Popover.Description>
                            </Popover.Popup>
                        </Popover.Positioner>
                    </Popover.Portal>
                </Popover.Root>

                <Popover.Root >
                    <Popover.Trigger className={`${popover.Button} border-0! cursor-pointer rounded bg-transparent! mr-2! text-xl!`}>
                        <TfiRulerAlt2 className="text-xl" />100 m²
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Positioner sideOffset={8}>
                            <Popover.Popup className={popover.Popup}>
                                <Popover.Arrow className={popover.Arrow} />
                                <Popover.Title className={popover.Title}>Area</Popover.Title>
                                <Popover.Description className={popover.Description}>
                                    This property is 100m^2
                                </Popover.Description>
                            </Popover.Popup>
                        </Popover.Positioner>
                    </Popover.Portal>
                </Popover.Root>
            </div>

        </div>
    )
}

// TfiRulerAlt2