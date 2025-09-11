import React from 'react'
import micro1 from "../../../public/image/marco-1.png";
import micro2 from "../../../public/image/micro-2.png";
import micro3 from "../../../public/image/micro-3.png";
import Image from "next/image";


function Partner() {
    return (
        <>
            <section className='partner___ my-5'>
                <div className="container">
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <div className='heading___' data-aos="fade-right">
                                <button>Partners</button>
                                <h2 className='pt-2'>We Are Partner At</h2>
                                <p>The company needed to complete a complex migration on <br /> a tight deadline to avoid millions of dollars in post- <br />contract fees and fines.</p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4 col-6">
                                    <div>
                                        <Image src={micro1} alt="mirco" className='img-fluid w-100' />
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div>
                                        <Image src={micro2} alt="mirco" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div>
                                        <Image src={micro3} alt="mirco" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Partner