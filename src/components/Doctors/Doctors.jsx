import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/pagination";
import {Autoplay,Pagination } from 'swiper/modules';
import './Doctor.css';
import Doc1 from '../../assets/doctor1.svg';
import Doc2 from '../../assets/doctor2.svg';
import Doc3 from '../../assets/doctor3.svg';

const DoctorData = [
    {image: Doc1 , label: 'Dr. Ahmad Khan' , speciality: 'Neurologist'},
    {image: Doc2 , label: 'Dr. Heena Sachdevan' , speciality: 'Orthopadics'},
    {image: Doc3 , label: 'Dr. Ankur Sharma' , speciality: 'Medicine'},
    {image: Doc1 , label: 'Dr. Ahmad Khan' , speciality: 'Neurologist'},
    {image: Doc2 , label: 'Dr. Heena Sachdeva' , speciality: 'Orthopadics'},
    {image: Doc3 , label: 'Dr. Ankur Sharma' , speciality: 'Medicine'},
]

function DoctorSlider(){
    return (
        <div className='doctorContainer'>
            <p className='title'>Our Medical Specialist</p>
            <div className='doctorSlider'>
                <Swiper
                     modules={[Autoplay,Pagination]}
                     autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop= {true}
                    // spaceBetween={10}
                    slidesPerView={3}
                    // centeredSlides={true}
                    pagination={{ clickable: true }}
                >
                    {DoctorData.map((item,idx) => (
                        <SwiperSlide className='slide' key={idx}>
                            <img src={item.image} alt={item.label}/>
                            <h3>{item.label}</h3>
                            <p>{item.speciality}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}


export default DoctorSlider;