import React from 'react'
import Skill from './Skill'
import {motion} from 'framer-motion'

type Props = {}
const skills = [
    {
        img: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
        degree: '80%',
        name: 'NodeJS',
    },
    {
        img: 'https://i.postimg.cc/V6zfmR9J/2000px-AWS-Simple-Icons-AWS-Cloud-svg1-1806497280.png',
        degree: '80%',
        name: 'AWS',
    },
    {
        img: 'https://i.postimg.cc/YSDvnTBp/Stripe-Emblem-2089392519.png',
        degree: '60%',
        name: 'Stripe',
    },
    {
        //JS Logo
        img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png',
        degree: '70%',
        name: 'JavaScript',
    },
    {
        img:'https://i.postimg.cc/nz1vh06g/mern-stack-icon-1-2073488049.png',
        degree: '80%',
        name: 'MERN',
    },
    {
        img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        degree: '72%',
        name: 'React',
    },
    {
        img:  'https://i.postimg.cc/SxMVH9FC/django-icon-0-1525228261.png',
        degree: '90%',
        name: 'django',
    },
    {
        img: 'https://i.postimg.cc/SsmM3cJr/logo-GCP-2-768x876-4137374723.png',
        degree: '25%',
        name: 'Google Cloud',
    },
    {
        img:  'https://img.icons8.com/nolan/512/git.png',
        degree: '82%',
        name: 'github',
    },
    {
        img: 'https://img.icons8.com/color/2x/jira.png',//'https://cdn-icons-png.flaticon.com/512/5968/5968875.png',
        degree: '93%',
        name: 'Jira',
    },
    {
        img: 'https://img.icons8.com/color/512/webstorm.png',
        degree: '98%',
        name: 'Webstorm',
    },
    {
      img: 'https://img.icons8.com/dusk/512/postman-api.png',
        degree: '95%',
        name: 'Postman',
    }

];
function Skills({}: Props) {
  // @ts-ignore
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
            {/* <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency proficiency</h3> */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-[100px] md:mt-[300px] xl:mt-[300px]">
                {skills.map((skill) => (
                    // @ts-ignore
                    // eslint-disable-next-line react/jsx-key
                    <Skill skill={skill}/>
                ))}
            </div>
        </motion.div>
    )
}

export default Skills
