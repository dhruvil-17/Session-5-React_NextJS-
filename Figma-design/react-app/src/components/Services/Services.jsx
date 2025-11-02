import React from 'react'
import ServiceItem from './ServiceItem'
import Communications from '../../assets/services-img/communications.png'
import Engagement from '../../assets/services-img/engagements.png'
import Facilitation from '../../assets/services-img/facilitation.png'
import Consultation from '../../assets/services-img/consultation.png'
import Training from '../../assets/services-img/training.png'
import Underline from '../../assets/services-img/underline.png'
import LeftBlue from '../../assets/services-img/blue-left-1.png'
import RightBlue from '../../assets/services-img/blue-right-2.png'
import LeftPurple from '../../assets/services-img/purple-left-3.png'
import RightPurple from '../../assets/services-img/purple-right-4.png'
export default function Services() {
  return (
    <section className='relative'>
      {/* Graphic Images */}
      <img src={LeftBlue} alt="" className='h-1/5 w-1/6 absolute top-0 left-0' />
      <img src={RightBlue} alt="" className='h-1/5 w-1/8 absolute top-2/7 right-0' />
      <img src={LeftPurple} alt="" className='h-1/4 w-1/8 absolute bottom-1/4 left-0' />
      <img src={RightPurple} alt="" className='h-1/4 w-1/7 absolute bottom-1/9 right-0' />  



      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className='grid justify-center '>
          <h3 className="text-4xl font-bold text-center">SERVICES</h3>
          <img src={Underline} alt="" className='w-40' />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-10 justify-center place-items-center ">
          
          <div className="space-y-12">
            <ServiceItem title="ENGAGEMENT" text="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources." imgSrc={Engagement} />
            <ServiceItem title="COMMUNICATIONS" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. " imgSrc={Communications} flip />
            <ServiceItem title="FACILITATION" text="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and 
            natural resources." imgSrc={Facilitation} />
            <ServiceItem title="CONSULTATION & RESEARCH" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. " imgSrc={Consultation} flip />
            <ServiceItem title="TRAINING & MENTORING" text="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources." imgSrc={Training} />
          </div>
          <div className="space-y-12">


          </div>
        </div>
      </div>
    </section>
  )
}