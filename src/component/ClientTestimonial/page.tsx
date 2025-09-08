'use client'

import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from "next/image";

// Import your icons
import backendIcon from "../../../public/image/backend.svg";
import frontendIcon from "../../../public/image/nitcon____.svg";
import dbIcon from "../../../public/image/divine.svg";
import mobileIcon from "../../../public/image/priyagold.svg";
import cloudIcon from "../../../public/image/laxmi.svg";
import devopsIcon from "../../../public/image/handmark.svg";

function ClientTestimonial() {
  return (
    <section className='tesimonial____ my-5'>
      <div className="container">
        <div className="row">
          <div className='heading___ text-center'>
            <p className='btnnn'>CLIENT TESTIMONIALS</p>
            <h2><span>What Our </span>Clients Say About Us </h2>
            <p>At Barcosys, we measure our success by the success of our clients. That’s why we’re proud <br /> to share their experiences working with us.</p>
          </div>

          <div className='tabs____'>
            <Tabs
              defaultActiveKey="backend"
              id="uncontrolled-tab-example"
              className="mb-3 justify-content-evenly"
            >
              <Tab
                eventKey="backend"
                title={
                  <span className="d-flex align-items-center gap-2">
                    <Image src={backendIcon} alt="Backend" width={60} height={60} />
                   
                  </span>
                }
              >
                <section className='tabs___bg'>
                  <div className="container">
                    <div className="row">
                      <div className='text-center'>
                        <h6 className='pt-4'>
                          Barcosys exceeded our expectations in every aspect of our web development project. From the initial consultation to the final delivery, their team demonstrated a deep understanding of our business goals and user needs.
                        </h6>
                        <h4 className='mb-0 pt-4'>Deepak Sharma</h4>
                        <p>Managing Director</p>
                      </div>
                    </div>
                  </div>
                </section>
              </Tab>

              <Tab
                eventKey="frontend"
                title={
                  <span className="d-flex align-items-center gap-2">
                    <Image src={frontendIcon} alt="Frontend" width={100} height={60} />
                    
                  </span>
                }
              >
               <section className='tabs___bg'>
                  <div className="container">
                    <div className="row">
                      <div className='text-center'>
                        <h6 className='pt-4'>
                          Barcosys exceeded our expectations in every aspect of our web development project. From the initial consultation to the final delivery, their team demonstrated a deep understanding of our business goals and user needs.
                        </h6>
                        <h4 className='mb-0 pt-4'>Deepak Sharma</h4>
                        <p>Managing Director</p>
                      </div>
                    </div>
                  </div>
                </section>
              </Tab>

              <Tab
                eventKey="databases"
                title={
                  <span className="d-flex align-items-center gap-2">
                    <Image src={dbIcon} alt="Databases" width={60} height={60} />
                    
                  </span>
                }
              >
                <section className='tabs___bg'>
                  <div className="container">
                    <div className="row">
                      <div className='text-center'>
                        <h6 className='pt-4'>
                          Barcosys exceeded our expectations in every aspect of our web development project. From the initial consultation to the final delivery, their team demonstrated a deep understanding of our business goals and user needs.
                        </h6>
                        <h4 className='mb-0 pt-4'>Deepak Sharma</h4>
                        <p>Managing Director</p>
                      </div>
                    </div>
                  </div>
                </section>
              </Tab>

              <Tab
                eventKey="mobile"
                title={
                  <span className="d-flex align-items-center gap-2">
                    <Image src={mobileIcon} alt="Mobile" width={60} height={60} />
                    
                  </span>
                }
              >
              <section className='tabs___bg'>
                  <div className="container">
                    <div className="row">
                      <div className='text-center'>
                        <h6 className='pt-4'>
                          Barcosys exceeded our expectations in every aspect of our web development project. From the initial consultation to the final delivery, their team demonstrated a deep understanding of our business goals and user needs.
                        </h6>
                        <h4 className='mb-0 pt-4'>Deepak Sharma</h4>
                        <p>Managing Director</p>
                      </div>
                    </div>
                  </div>
                </section>
              </Tab>

              <Tab
                eventKey="cloud"
                title={
                  <span className="d-flex align-items-center gap-2">
                    <Image src={cloudIcon} alt="Cloud" width={60} height={60} />
                    
                  </span>
                }
              >
               <section className='tabs___bg'>
                  <div className="container">
                    <div className="row">
                      <div className='text-center'>
                        <h6 className='pt-4'>
                          Barcosys exceeded our expectations in every aspect of our web development project. From the initial consultation to the final delivery, their team demonstrated a deep understanding of our business goals and user needs.
                        </h6>
                        <h4 className='mb-0 pt-4'>Deepak Sharma</h4>
                        <p>Managing Director</p>
                      </div>
                    </div>
                  </div>
                </section>
              </Tab>

              <Tab
                eventKey="devOps"
                title={
                  <span className="d-flex align-items-center gap-2">
                    <Image src={devopsIcon} alt="DevOps" width={80} height={60} />
                  </span>
                }
              >
                <section className='tabs___bg'>
                  <div className="container">
                    <div className="row">
                      <div className='text-center'>
                        <h6 className='pt-4'>
                          Barcosys exceeded our expectations in every aspect of our web development project. From the initial consultation to the final delivery, their team demonstrated a deep understanding of our business goals and user needs.
                        </h6>
                        <h4 className='mb-0 pt-4'>Deepak Sharma</h4>
                        <p>Managing Director</p>
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
  )
}

export default ClientTestimonial
