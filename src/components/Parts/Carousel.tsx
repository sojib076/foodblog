
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const Carousel = () => {


    return (
        <Swiper
            spaceBetween={200}
            slidesPerView={2}

            modules={[Navigation]}
            navigation={true}
        >
            <SwiperSlide>
                <div className="lg:w-[352px] w-[300px] mb-3  shrink-0  shadow-[0px_20px_50px_0px_rgba(0,0,0,0.15)]
                
                rounded-[9px]">
                    <img src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" alt="pancakes" className=" h-80 shrink-0 rounded-lg" />
                    <h1 className=" text-center text-2xl font-bold leading-[31.992px] pb-10">v eewe </h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="lg:w-[352px] w-[300px] mb-3  shrink-0  shadow-[0px_20px_50px_0px_rgba(0,0,0,0.15)]
                
                rounded-[9px]">
                    <img src='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg' alt="pancakes" className=" h-80 shrink-0 rounded-lg" />
                    <h1 className=" text-center text-2xl font-bold leading-[31.992px] pb-10">v eewe </h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="lg:w-[352px] w-[300px] mb-3  shrink-0  shadow-[0px_20px_50px_0px_rgba(0,0,0,0.15)]
                
                rounded-[9px]">
                    <img src='https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg' alt="pancakes" className=" h-80 shrink-0 rounded-lg" />
                    <h1 className=" text-center text-2xl font-bold leading-[31.992px] pb-10">v eewe </h1>
                </div>
            </SwiperSlide>



            
       
        </Swiper>
    );
};

export default Carousel;
