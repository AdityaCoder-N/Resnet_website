import React from 'react'
import aboutvector1 from "../assets/about-vetor1.svg";
import triangle from '../assets/Polygon 1.png'
import caseStudy from '../assets/caseStudy-img.png'
import gpt from '../assets/gpt.svg'

const CaseStudyItem = () => {
  return (
    <div className='text-white font-Sg md:mt-24 w-full md:pt-[30vh] '>
        
        <div className='absolute left-[50%] md:left-[56%] md:top-[1%] lg:top-[2%] -translate-x-[50%] h-[5rem] md:h-[15rem] flex items-center z-10'>
            <img src={aboutvector1} alt="" className='h-full absolute -left-[30%] md:-left-[35%] top-0 z-1'/>
            <div className='z-5 relative text-[28px] md:text-[50px] lg:text-[64px] font-bold'>
                <h1 className='font-bold'>Document</h1>
                <div className='flex items-center gap-5'>
                    <h1 className='font-bold'>Automation</h1>
                    <img src={triangle} alt="" className='w-[15%] md:w-full '/>
                    <img src={triangle} alt="" className='w-[15%] md:w-full ' />
                </div>
            </div>
        </div>

        {/* Problemm */}
        <div className='red-gradient px-12 md:px-32 py-32  sm:pb-[30vh] md:pb-[40vh] lg:pb-[50vh] relative z-5'>
            <h2 className='text-2xl sm:text-5xl font-semibold'>Problem</h2>
            <ol className='md:text-2xl lg:text-3xl mt-4 sm:mt-12 list-decimal'>
                <li className='mt-4'>Traditional documentation often requires significant manual effort for creation, editing, and distribution.</li>
                <li className='mt-4'>Human error is inevitable, leading to inaccuracies in documentation.</li>
                <li className='mt-4'>Difficulty in managing and tracking multiple versions of documents, especially in collaborative environments.</li>
                <li className='mt-4'>Physical documentation may not be easily accessible to remote or geographically dispersed teams , Lack of real-time collaboration capabilities.</li>
                <li className='mt-4'>As organizations grow, manual documentation processes may struggle to scale efficiently.</li>
            </ol>
            <div className='absolute -bottom-[8%]  md:-bottom-[10%] lg:-bottom-[20%] left-[50%] -translate-x-[50%] w-[60%] z-5'>
                <img src={caseStudy} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>

        {/* Solution */}

        <div className='red-gradient px-12 md:px-32 py-32 md:py-48 md:pt-[44vh] z-2 '>
            <h2 className='text-2xl sm:text-5xl font-semibold'>Solution</h2>
            <p className='md:text-2xl lg:text-3xl mt-4 md:mt-10'>
            Certainly! Implementing Artificial Intelligence (AI) for documentation automation addresses manual inefficiencies by streamlining tasks, reducing errors, and fostering collaboration. It ensures scalability, diminishes reliance on experts, and contributes to environmental sustainability. The shift to AI signifies a transformative leap towards heightened productivity, precision, and eco-friendly information management.
            </p>
        </div>

        {/* Obstacle Faced */}

        <div className='px-12 md:px-32 py-20'>

            <h2 className='text-2xl sm:text-5xl font-semibold'>Obstacles Faced</h2>

            <ol className='md:text-2xl lg:text-3xl mt-4 sm:mt-12 list-decimal'>
                <li className='mt-4'>Introducing AI documentation systems may face challenges in integration with existing infrastructure, requiring careful planning and execution.</li>
                <li className='mt-4'>Ensuring accurate and high-quality data input poses a challenge, as AI documentation heavily relies on the integrity of the information it processes.</li>
                <li className='mt-4'>Overcoming resistance to change and providing adequate training for employees to effectively utilize AI-powered documentation tools can be a significant challenge.</li>
            </ol>


        </div>

        <div className='px-12 md:px-32 py-10 md:py-20'>
            <h2 className='text-5xl '>Tools Used</h2>

            <div className='flex justify-around items-center mt-8 md:mt-16 gap-6'>

                <div className='flex items-center gap-2 lg:gap-8'>
                    <div className='bg-[#ffffff] p-1 md:p-4 rounded-md flex items-center justify-center'>
                        <img src={gpt} alt="" className='md:h-full md:w-full'/>
                    </div>
                    <div className='md:text-2xl lg:text-3xl'>
                        Chat GPT
                    </div>
                </div>
                <div className='flex items-center gap-2 lg:gap-8'>
                    <div className='bg-[#ffffff] p-1 md:p-4 rounded-md flex items-center justify-center'>
                        <img src={gpt} alt="" className='md:h-full md:w-full'/>
                    </div>
                    <div className='md:text-2xl lg:text-3xl'>
                        Chat GPT
                    </div>
                </div>
                <div className='flex items-center gap-2 lg:gap-8'>
                    <div className='bg-[#ffffff] p-1 md:p-4 rounded-md flex items-center justify-center'>
                        <img src={gpt} alt="" className='md:h-full md:w-full'/>
                    </div>
                    <div className='md:text-2xl lg:text-3xl'>
                        Chat GPT
                    </div>
                </div>
    
            </div>
        </div>


    </div>
  )
}

export default CaseStudyItem