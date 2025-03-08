import React from 'react'
import {SocialIcon} from 'react-social-icons'
import {motion} from 'framer-motion'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
            initial={{
                opacity: 0,
                x: -500,
                scale: 0.5,
            }}
            animate={{
                opacity: 1,
                x: 0,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className="flex flex-row items-center">
            <SocialIcon
                url="https://www.linkedin.com/in/muhammad-azeem-39854623b/"
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon
                url="https://www.github.com/ranaaezie"
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon
                url="https://www.youtube.com/ranaaezie"
                fgColor='gray'
                bgColor='transparent'
            />
            {/*<SocialIcon*/}
            {/*    url="https://www.fiverr.com/users/ranaaeie/portfolio?origin=seller_profile"*/}
            {/*    fgColor='gray'*/}
            {/*    bgColor='transparent'*/}
            {/*/>*/}
            <a href="https://www.fiverr.com/users/ranaaeie/portfolio?origin=seller_profile" title="fiverr profile" target={'_blank'} rel="noreferrer">
                <img src={'https://i.postimg.cc/yxL8TWYb/fiverr-1.png'} width={'23'} height={'23'} alt={'fiverr-profile'}/>
            </a>
        </motion.div>
        <motion.div
            initial={{
                opacity: 0,
                x: 500,
                scale: 0.5,
            }}
            animate={{
            opacity: 1,
            x:0,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
         className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
            />
            <a href="mailto:ranaaezie@gmail.com" className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</a>
        </motion.div>
    </header>
  )
}
