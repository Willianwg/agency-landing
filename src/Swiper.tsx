import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ClientImage from "./assets/ex.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./swiper.css";
import { IoStarSharp } from 'react-icons/io5';

export function SwiperComponent() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={2}
            pagination={{ clickable:true }}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className="card">
                    <div className='client-information'>
                        <img src={ClientImage} />
                        <div className='client'>
                            <p className="name">Bobby Fischer</p>
                            <p className="occupation">Chess Master</p>
                        </div>
                    </div>
                    <p className="client-testimonial">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe enim esse fuga numquam possimus. Ipsa, repellendus. Labore nisi cumque, iure, reprehenderit dolor fuga quaerat dolorem expedita animi alias molestias tempora!</p>
                    <div className="stars">
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card">
                    <div className='client-information'>
                        <img src={ClientImage} />
                        <div className='client'>
                            <p className="name">Bobby Fischer</p>
                            <p className="occupation">Chess Master</p>
                        </div>
                    </div>
                    <p className="client-testimonial">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe enim esse fuga numquam possimus. Ipsa, repellendus. Labore nisi cumque, iure, reprehenderit dolor fuga quaerat dolorem expedita animi alias molestias tempora!</p>
                    <div className="stars">
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card">
                    <div className='client-information'>
                        <img src={ClientImage} />
                        <div className='client'>
                            <p className="name">Bobby Fischer</p>
                            <p className="occupation">Chess Master</p>
                        </div>
                    </div>
                    <p className="client-testimonial">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe enim esse fuga numquam possimus. Ipsa, repellendus. Labore nisi cumque, iure, reprehenderit dolor fuga quaerat dolorem expedita animi alias molestias tempora!</p>
                    <div className="stars">
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card">
                    <div className='client-information'>
                        <img src={ClientImage} />
                        <div className='client'>
                            <p className="name">Bobby Fischer</p>
                            <p className="occupation">Chess Master</p>
                        </div>
                    </div>
                    <p className="client-testimonial">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe enim esse fuga numquam possimus. Ipsa, repellendus. Labore nisi cumque, iure, reprehenderit dolor fuga quaerat dolorem expedita animi alias molestias tempora!</p>
                    <div className="stars">
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                        <IoStarSharp fill='orange' size={30} />
                    </div>
                </div>
            </SwiperSlide>
            
        </Swiper>
    );
};