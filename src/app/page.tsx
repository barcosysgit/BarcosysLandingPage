import ClientTestimonial from '@/component/ClientTestimonial/page';
import CompanyTechnology from '@/component/CompanyTechnology/page';
import DoneProject from '@/component/DoneProject/page';
import Experience from '@/component/Experience/page';
import Footer from '@/component/Footer/page';
import Header from '@/component/Header/page';
import MainSection from '@/component/MainSection/page';
import Partner from '@/component/Partner/page';
import Service from '@/component/Service/page';
import TransformingSlide from '@/component/TransformingSlide/page';
import WhatWeDo from '@/component/WhatWeDo/page';
import React from 'react'

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <WhatWeDo />
      <Service/>
      <TransformingSlide />
      <CompanyTechnology />
      <ClientTestimonial />
      <Experience />
      <DoneProject />
      <Partner />
      <Footer />

    
    </>
  );
}
