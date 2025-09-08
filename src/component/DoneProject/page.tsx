"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay  } from "swiper/modules";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";




// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import trans1 from "../../../public/image/doneproject.svg";
import trans2 from "../../../public/image/doneproject.svg";
import trans3 from "../../../public/image/doneproject.svg";
import trans4 from "../../../public/image/doneproject.svg";
import trans5 from "../../../public/image/doneproject.svg";

const sectors = [
    { img: trans1 },
    { img: trans2 },
    { img: trans3 },
    { img: trans4 },
    { img: trans5 },
    { img: trans1 },
    { img: trans2 },
    { img: trans3 },
    { img: trans4 },
    { img: trans5 },
];

function DoneProject() {
    const [progress, setProgress] = useState(20); // initial center bar progress

    const handleNext = () => {
        setProgress((prev) => Math.min(prev + 20, 100));
    };

    const handlePrev = () => {
        setProgress((prev) => Math.max(prev - 20, 0));
    };
console.log(progress);

    return (
        <section className="DoneProject___">
            <div className="container">
                <div className="heading___ text-center">
                    <h4>
                        <span>What We </span> Done Our Projects
                    </h4>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    autoplay={{
    delay: 2000,       // 3 seconds per slide
    disableOnInteraction: false, // keeps autoplay even if user interacts
  }}
                    breakpoints={{
                        0: {       // mobile
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {     // tablet
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        1024: {    // desktop
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation , Autoplay]}
                    className="transforming-swiper"
                >
                    {sectors.map((sec, index) => (
                        <SwiperSlide key={index}>
                            <section className="sector-card">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 p-0 pe-3">
                                            <Image src={sec.img} alt="img" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6 d-flex align-items-center">
                                            <div className="heading___">
                                                <h5>Application Design for Handmark</h5>
                                                <p>Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>

                                                <div className="text-end read__">
                                                    <a href="">Read More <span><MdKeyboardArrowRight /></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>


                {/* Custom navigation + progress bar */}
                <div className="nav-progress">
                    <div className="nav-inner">
                        <button
                            className="swiper-button-prev-custom"
                            onClick={handlePrev}
                        >
                            <MdOutlineArrowBackIosNew style={{ marginBottom: "0.3rem" }} />

                        </button>
                       
                        <button
                            className="swiper-button-next-custom"
                            onClick={handleNext}
                        >
                            <MdOutlineArrowForwardIos style={{ marginBottom: "0.3rem" }} />

                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default DoneProject;
