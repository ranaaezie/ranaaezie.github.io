import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    imgar: string[],
    title: string,
    startDate: string,
    endDate: string,
    summaryP1: string,
    summaryP2: string,
    summaryP3: string,
    summaryP4: string,
    summaryP5: string,
    company: string,
}

// @ts-ignore
function ExperienceCard({title,startDate,endDate,summaryP1,summaryP2,summaryP3,summaryP4,summaryP5,imgar, company }: Props) {
  return (
    <article className='flex mt-[100px] flex-col rounded-lg  items-center  space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:mt-[300px] xl:w-[900px] snap-center bg-[#292929]  p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            key = 'hello'
            initial={{opacity: 0,y:-100}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1,y:0}}
            viewport={{once: true}}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="https://i.postimg.cc/RFtf74Wz/AWS-Expert.jpg"
            alt="Aezie profile"
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>{title}</h4>
            <p className='font-bold text-2xl mt-1'>{company || ''}</p>
            <div className='flex space-x-2 my-2'>
                {

                    imgar.map((pic) => (

                        <motion.img
                            key={'grfeds'}
                        className='h-10 w-10 rounded-full'
                        src={pic}
                        />
                    ))
                }

            </div>
            <p className='uppercase py-5 text-gray-300'>{startDate} - {endDate}</p>
            <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>{summaryP1}</li>
                <li>{summaryP2}</li>
                <li>{summaryP3}</li>
                <li>{summaryP4}</li>
                <li>{summaryP5}</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
