import React from 'react'
import triangle from '../assets/Polygon 1.png'
import rightblob from '../assets/right-blob.png'
import leftblob from '../assets/left-blob.png'
import phone from '../assets/phone.png'

const Services = () => {
  return (
    <div className='bg-black text-white py-20'>
        <div className="flex gap-6 justify-center items-center">
            <span className='font-bold text-2xl sm:text-6xl font-Sg text-white '>Services</span>
        <img src={triangle} alt="" /> <img src={triangle} alt="" /> 
        </div>

        <p className='text-center ml-[50%] sm:ml-0 -translate-x-[50%] sm:translate-x-0 w-[85%] sm:w-full mt-6 text-base sm:text-2xl'>How we help you move through Machine Learning and Artificial Intelligence</p>

        {/* service container */}
        <div className='block sm:flex pl-10 mt-28 gap-20 items-center relative'>
            <div className='w-full sm:w-[50%] z-10 relative p-4 sm:p-0 '>
                <h1 className='font-semibold text-4xl'>We Do The Hard Work For You</h1>
                <p className='text-xl sm:text-2xl my-6'>
                Ready to elevate your business with AI and ML? Contact us today for a consultation. Our team is eager to understand your unique challenges and design a tailor-made solution that propels your business into the future.
                </p>
                <a href="" className='text-[#D61426] font-semibold'>Check to see more &gt;</a>
            </div>
            <div className='w-[85%] right-0   sm:w-[50%] absolute top-0 sm:relative h-full z-1'>
                <img src={rightblob} alt="" className='relative float-right z-1'/>
                <img src={phone} alt="" className='hidden sm:block absolute right-[20%] -top-20 z-2 h-[100%] w-full '/>
            </div>
        </div>

        {/* service container */}
        <div className='block sm:flex sm:pl-10 mt-28 gap-20 items-center relative'>
            <div className='w-full  sm:w-[50%] absolute top-0 sm:relative h-full z-1'>
                <img src={leftblob} alt="" className='relative float-right z-1'/>
                <img src={phone} alt="" className='hidden sm:block absolute right-[20%] -top-20 z-2 h-[100%] w-full '/>
            </div>
            <div className='w-full sm:w-[50%] z-10 relative p-4 sm:p-0'>
                <h1 className='font-semibold text-4xl'>Data Science Consulting</h1>
                <p className='text-xl sm:text-2xl my-6'>
                Unleash the power of your data with our data science consulting services. We help you extract meaningful patterns, trends, and insights, empowering you to make informed decisions.
                </p>
                <a href="" className='text-[#D61426] font-semibold'>Check to see more &gt;</a>
            </div>
            
        </div>

        {/* service container */}
        <div className='block sm:flex pl-10 mt-28 gap-20 items-center relative'>
            <div className='w-full sm:w-[50%] z-10 relative p-4 sm:p-0 '>
                <h1 className='font-semibold text-4xl'>AI Implementation & Integration</h1>
                <p className='text-xl sm:text-2xl my-6'>
                Seamlessly integrate AI solutions into your existing infrastructure with our implementation and integration services. Our experts ensure a smooth transition and provide ongoing support to maximize efficiency.
                </p>
                <a href="" className='text-[#D61426] font-semibold'>Check to see more &gt;</a>
            </div>
            <div className='w-[85%] right-0   sm:w-[50%] absolute top-0 sm:relative h-full z-1'>
                <img src={rightblob} alt="" className='relative float-right z-1'/>
                <img src={phone} alt="" className='hidden sm:block absolute right-[20%] -top-20 z-2 h-[100%] w-full'/>
            </div>
        </div>


        
    </div>
  )
}

export default Services