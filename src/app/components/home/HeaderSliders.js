// Import Swiper React components
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useHomeSlidersQuery } from '@/app/apis/home-sliders/useHomeSlidersQuery';
export default function HeaderSliders() {
    const {data} = useHomeSlidersQuery();
    console.log(data?.data?.sliders)
    return (
        <Swiper
            className='bg-red-400'
            spaceBetween={50}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                data?.data?.sliders?.map((item , index) => (
                    <SwiperSlide 
                    key={index} 
                    className={`bg-red-700`}
                    >
                        <div 
                        className='min-h-screen bg-cover bg-no-repeat'
                        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_FRONT_API}/${item?.img?.path}')` }}
                        >

                        </div>

                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}