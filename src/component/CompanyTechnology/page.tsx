'use client'

import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from "next/image";
import php from "../../../public/image/PHP.svg"
import node from "../../../public/image/NodeJS.svg"
import net from "../../../public/image/NET-logo-1.svg"
import java from "../../../public/image/Java.svg"
import python from "../../../public/image/Python_logo.svg"
import laravel from "../../../public/image/laravel.svg"

function CompanyTechnology() {
    return (
        <>
            <section className='technology____ my-5'>
                <div className="container">
                    <div className="row">
                        <div className='heading___ text-center' data-aos="fade-right">
                            <h2> <span>Technologies </span>  In Which we work</h2>
                            <p>We offer only well-recognized and time-tested technologies to support any of your business goals.</p>
                        </div>

                        <div className='tabs____'>
                            <Tabs
                                defaultActiveKey="backend"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="backend" title="Backend">
                                    <section className='tabs___bg'>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={php} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={node} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={net} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={python} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={java} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={laravel} alt="php" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Tab>
                                <Tab eventKey="frontend" title="Frontend">
                                   <section className='tabs___bg'>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={php} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={node} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={net} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={python} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={java} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={laravel} alt="php" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Tab>
                                <Tab eventKey="databases" title="Databases">
                                    <section className='tabs___bg'>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={php} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={node} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={net} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={python} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={java} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={laravel} alt="php" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Tab>
                                <Tab eventKey="mobile" title="Mobile">
                                    <section className='tabs___bg'>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={php} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={node} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={net} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={python} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={java} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={laravel} alt="php" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Tab>
                                <Tab eventKey="cloud" title="Cloud">
                                    <section className='tabs___bg'>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={php} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={node} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={net} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={python} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={java} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={laravel} alt="php" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Tab>
                                <Tab eventKey="devOps" title="DevOps">
                                    <section className='tabs___bg'>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={php} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={node} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={net} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={python} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={java} alt="php" className='img-fluid' />
                                                </div>
                                                <div className="col-md-2 col-6 d-flex align-items-center">
                                                    <Image src={laravel} alt="php" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyTechnology