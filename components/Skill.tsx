import React from 'react'
import {motion} from 'framer-motion'

type Props = {
  directionLeft?: boolean
}
// @ts-ignore
function Skill({directionLeft,skill}: Props) {
  return (
    <div
    className='group relative flex cursor-pointer '
    >
      <motion.img
        initial={{
          opacity: 0,
          x:directionLeft ? -200 : 200
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        src={skill.img}
        className='rounded-full border border-gray-500 object-cover  w-20 h-20 md:w-24 md:h-24 xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
        {/*< motion.div*/}
        {/*initial={{*/}
        {/*    opacity: 0,*/}
        {/*}}*/}
        {/*transition={{duration: 1}}*/}
        {/*whileInView={{opacity: 1}}*/}
        {/*className='absolute top-0 left-0 w-full h-full bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'*/}
        {/*>*/}
        {/*    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm'>{skill.name}</p>*/}
        {/*</motion.div>*/}
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-24 md:w-24 xl:w-30 xl:h-30 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{skill.degree}</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
