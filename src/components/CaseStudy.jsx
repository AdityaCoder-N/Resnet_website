import React from 'react'
import topleft from '../assets/topleftblob.png'
import triangle from '../assets/Polygon 1.png'
const CaseStudy = () => {
  return (
    <div className='bg-black text-white relative py-20 px-6 sm:px-10'>
        <img src={topleft} alt="" className='absolute left-0 top-0 z-1'/>
        <div className="flex gap-6 z-50 relative items-center ">
            <span className='font-bold text-4xl sm:text-6xl text-white relative'>Case Study</span>
            <img src={triangle} alt="" /> <img src={triangle} alt="" /> 
        </div>
        <p className='mt-6 w-full text-base sm:text-xl sm:w-[70%]'>Our case studies showcase how we've partnered with businesses across diverse industries to overcome challenges, drive efficiency, and achieve remarkable results.</p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-2 0 sm:px-20 py-16'>

            <div className='border-2 border-[#D61426] rounded-xl px-10 py-8'>
                <h2 className='text-2xl font-bold'>Optimizing Supply Chain with Predictive Analytics</h2>
                <p className='my-4 text-lg'>Explore how our predictive analytics solutions streamlined inventory management, reducing stockouts and optimizing supply chain operations. Learn how data-driven insights revolutionized decision-making, leading to a 20% increase in overall supply chain efficiency.</p>
                <a href="" className='text-[#D61426] font-semibold'>Check to see more &gt;</a>
            </div>
            <div className='border-2 border-[#D61426] rounded-xl px-10 py-8'>
                <h2 className='text-2xl font-bold'>Transforming Customer Engagement in Retail</h2>
                <p className='my-4 text-lg'>Discover the success story of a retail giant as we implemented AI-driven strategies to enhance customer engagement. Learn how personalized recommendations and targeted marketing campaigns led to a 15% increase in customer satisfaction and a substantial boost in sales.</p>
                <a href="" className='text-[#D61426] font-semibold'>Check to see more &gt;</a>
            </div>
            <div className='border-2 border-[#D61426] rounded-xl px-10 py-8'>
                <h2 className='text-2xl font-bold'>Healthcare Revolution: AI in Patient Care</h2>
                <p className='my-4 text-lg'>Dive into the impact of AI on healthcare with our case study highlighting improved patient care and operational efficiency. Explore how machine learning algorithms reduced diagnosis time, enhanced treatment plans, and ultimately elevated the quality of healthcare services provided.</p>
                <a href="" className='text-[#D61426] font-semibold'>Check to see more &gt;</a>
            </div>

        </div>
    </div>
  )
}

export default CaseStudy