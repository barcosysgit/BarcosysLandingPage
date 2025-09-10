'use client'
import Image from "next/image";
import blue from "../../../public/image/blue-background.png";
import a1 from "../../../public/image/a-1.svg";
import a2 from "../../../public/image/a-2.svg";
import a3 from "../../../public/image/a-3.svg";
import { MdArrowOutward } from "react-icons/md";
import CountUp from "react-countup";




function MainSection() {
  return (
    <>
      <section className="second__section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="pera__1 pt-3">
                <h2>We manage your  IT, <br /> <span>so you can manage <br />your business.</span> </h2>
                <p className="pt-2">Take charge of your buiness continuity with innovation IT solution</p>
                <button>Let&apos;s Discuss <span><MdArrowOutward /></span></button>
              </div>
              <div className="d-flex mt-3 compnay__logo">
                <div>
                  <Image src={a1} alt="blue" className="img-fluid" />
                </div>
                <div className="mx-2">
                  <Image src={a2} alt="blue" className="img-fluid" />
                </div>
                <div>
                  <Image src={a3} alt="blue" className="img-fluid" />
                </div>
              </div>

            </div>
            <div className="col-md-7">
              <div className="blue__background___ mt-4">
                <Image src={blue} alt="blue" className="img-fluid" />
                <div className="main___">
                  <div className="text__">
                    <h4>Ready to elevate your <br /> digital presence with us?</h4>
                    <p>Schedule your meeting and embark on a journey towards success.</p>
                  </div>
                  <div className="card">
                    <div className="input___">
                      <label htmlFor="">Full Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="input___">
                      <label htmlFor="">Email ID <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Your Email Address" />
                    </div>
                    <div className="input___">
                      <label htmlFor="">Phone Number <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Contact Number" />
                    </div>
                    <div className="input___">
                      <label htmlFor="">How Can We Help You? <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Select Option" />
                    </div>
                    <div className="input___">
                      <label htmlFor="">Tell us about your project<span className="text-danger">*</span></label>
                      <textarea name="" className="form-control" id=""></textarea>
                    </div>
                    <div className="btn_____ text-center">
                          <button>Schedule a Free Consultation</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
       <section className="numbering__div mt-4 py-3">
      <div className="container d-flex">
        
        <div className="dots__">
          <h6 className="mb-0">
            <CountUp end={9} duration={2} suffix="+" />
          </h6>
          <p className="mb-1">YEARS IN BUSINESS</p>
        </div>
        
        <div className="dots__ mx-4 borderr px-3">
          <h6 className="mb-0">
            <CountUp end={500} duration={2.5} suffix="+" />
          </h6>
          <p className="mb-1">PRODUCTS COMPLETED</p>
        </div>
        
        <div className="dots__">
          <h6 className="mb-0">
            <CountUp end={400} duration={2} suffix="+" />
          </h6>
          <p className="mb-1">HAPPY CLIENTS</p>
        </div>

      </div>
    </section>
    </>
  )
}

export default MainSection