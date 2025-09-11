"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import trans1 from "../../../public/image/trans-1.svg";
import trans2 from "../../../public/image/ecomerce.svg";
import trans3 from "../../../public/image/travel.svg";
import trans4 from "../../../public/image/education.svg";
import trans5 from "../../../public/image/banking.svg";

const sectors = [
    { img: trans1, title: "Technology" },
    { img: trans2, title: "E-Commerce" },
    { img: trans3, title: "Travel" },
    { img: trans4, title: "Education" },
    { img: trans5, title: "Banking" },
    { img: trans1, title: "Technology" },
    { img: trans2, title: "E-Commerce" },
    { img: trans3, title: "Travel" },
    { img: trans4, title: "Education" },
    { img: trans5, title: "Banking" },
];

function TransformingSlide() {
    const [progress, setProgress] = useState(20); // initial center bar progress

    const handleNext = () => {
        setProgress((prev) => Math.min(prev + 20, 100));
    };

    const handlePrev = () => {
        setProgress((prev) => Math.max(prev - 20, 0));
    };

    return (
        <section className="transforming___">
            <div className="container">
                <div className="heading___ text-center" data-aos="fade-right">
                    <h4>
                        <span>Transforming</span> Challenges <br />
                        Across Different Sectors
                    </h4>
                </div>

                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    breakpoints={{
                        0: {       // mobile
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {     // tablet
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {    // desktop
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation]}
                    className="transforming-swiper"
                >
                    {sectors.map((sec, index) => (
                        <SwiperSlide key={index}>
                            <div className="sector-card text-center">
                                <Image src={sec.img} alt={sec.title} width={80} height={80} />
                                <p>{sec.title}</p>
                            </div>
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
                        <div className="progress-bar-wrapper">
                            <div
                                className="progress-bar-inner"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
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

export default TransformingSlide;
