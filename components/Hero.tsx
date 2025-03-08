import NextImage from 'next/image'
const Image = NextImage as any;
import Link from 'next/link'
import React from 'react'
import { Cursor as TypewriterCursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

// Create properly typed components for elements with TypeScript errors
const Cursor = TypewriterCursor as unknown as React.FC<{cursorColor?: string}>

type Props = {}

const Hero = (props: Props) => {
const [text, count] = useTypewriter({
    words: [
        "Hi, My Name is Muhammad Azeem",
        "<JavaScript Professional/>",
    ],
    loop: true,
    delaySpeed: 2000,
})
return (
<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
    <BackgroundCircles />
    <div className="relative h-32 w-32 mx-auto">
      <Image
        src='https://i.postimg.cc/RFtf74Wz/AWS-Expert.jpg'
        alt='Muhammad Azeem'
        width={200}
        height={200}
        className='rounded-full object-cover'
      />
    </div>
    <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[20px]'>Web Developer & Automation Expert</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
            <Link href='#about'>
                <button className='heroButton'>About</button>
            </Link>
            <Link href='#experience'>
                <button className='heroButton'>Experience</button>
            </Link>
            <Link href='#skills'>
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#projects'>
                <button className='heroButton'>Projects</button>
            </Link>
        </div>
    </div>
</div>
)
}

export default Hero