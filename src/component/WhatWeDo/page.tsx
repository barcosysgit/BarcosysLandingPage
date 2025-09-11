import React from 'react'
import globe from "../../../public/image/globe.png"
import Image from "next/image";


function WhatWeDo() {
    return (
        <>
            <section className='whatwedo___ my-5'>
                <div className="container border___">
                    <div className="row">
                        <div className="col-md-7">
                            <div className='heading__' data-aos="fade-left">
                                <button>What We Do</button>
                                <h2>Transforming Digital Complexity <br/>Into Competitive Advantage</h2>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div data-aos="zoom-in">
                                <Image src={globe} alt="global"  className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default WhatWeDo