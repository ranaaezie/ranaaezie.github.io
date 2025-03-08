import React from 'react'
import {PhoneIcon} from '@heroicons/react/24/outline'
import {MapIcon} from '@heroicons/react/24/outline'

type Props = {}

function Contact({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
      <div className='flex flex-col space-y-5'>
        <h4 className='text-2xl font-semibold text-center'>I have got just what you need.{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
        </h4>
        <div className='space-y-5'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-lg'>+923106623463 , +923106864794</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="text-[#F7AB0A] h-7 w-7 animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
            </svg>

            <p className='text-lg'>ranaaezie@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-lg'>Mandiala Warraich Gujranwala</p>
          </div>
        </div>
        <form
            className="flex flex-col space-y-2 w-fit mx-auto"
            action="https://formsubmit.co/0e9d68b1c4d2109df2e35b5602f13c21"
            method="POST"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
                placeholder="Name"
                className="contactInput w-full"
                type="text"
                name="name"
                required
            />
            <input
                placeholder="Email"
                className="contactInput w-full"
                type="email"
                name="email"
                required
            />
          </div>
          <input
              placeholder="Subject"
              className="contactInput w-full"
              type="text"
              name="_subject"
          />
          <textarea
              placeholder="Message"
              className="contactInput w-full"
              name="message"
          />
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_next" value="https://ranaaezie.vercel.app/thanks"/>
          <button
              className="bg-[#F7AB0A] text-black py-5 px-10 rounded-md font-bold text-lg"
              type="submit"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default Contact
