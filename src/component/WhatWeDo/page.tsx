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
                            <div className='heading__'>
                                <button>What We Do</button>
                                <h2>Transforming Tech Complexity <br/> Into Simplicity</h2>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div>
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