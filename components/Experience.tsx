import React from 'react'
// import '../styles/globals.css'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {

};

const sections = [
    {
        title: 'Software Engineer (FullStack)',
        company: 'Farmdar',
        img: [
            'https://i.postimg.cc/3RJR0g3v/postgre.png',
            'https://i.postimg.cc/SxMVH9FC/django-icon-0-1525228261.png',
            'https://repository-images.githubusercontent.com/296760375/876b9000-2673-11eb-8680-ec65b312bb89',
            'https://i.postimg.cc/4dxX8s77/docker-icon-146192-586029888.png',
            'https://i.postimg.cc/Kz18GmGX/kubernetes-icon-31-2576940259.png',
            'https://i.postimg.cc/gkCR1BKk/google-cloud-platform-icon-1024x823-mrdn81d1-188270368.png'
        ],
        key: 'sdfsdfsl345nkfodfghdhfg7t5',
        start_date: '2023/10/23',
        end_date: 'Cont...',
        summary_Points1: 'Django Rest',
        summary_Points2: 'ReactJS',
        summary_Points3: 'PostgreSQL',
        summary_Points4: 'Docker',
        summary_Points5: 'Kubernetes (GCP)',
    },
    {
        title: 'Automation Expert',
        company: 'Techloyce',
        img: [
            'https://cdn-icons-png.flaticon.com/512/919/919825.png',
            'https://static-00.iconduck.com/assets.00/compute-awslambda-lambdafunction-icon-491x512-lj7r3nlo.png',
            'https://cdn-icons-png.flaticon.com/512/1440/1440518.png',
            'https://cdn-icons-png.flaticon.com/512/919/919829.png',
            'https://cdn-icons-png.flaticon.com/512/8329/8329425.png',
            'https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png',
            // 'https://25y35xxcueanov2s108puszp-wpengine.netdna-ssl.com/wp-content/uploads/2022/03/ext-553.png', mongoDB

        ],
        key: 'sdfsdfsl345nkfodfghdhfg7t5',
        start_date: '2022/07/22',
        end_date: '2023/10/22',
        summary_Points1: 'NodeJS',
        summary_Points2: 'AWS Lambda',
        summary_Points3: 'Payment Gateways, SquarePOS, Stripe',
        summary_Points4: 'Webhooks \& API Integrations',
        summary_Points5: 'Customer Relationship Management',
    },
    {
        title: 'Fullstack Developer',
        company: 'Codembeded',
        img: [
            'https://cdn-icons-png.flaticon.com/512/919/919825.png',
            'https://miro.medium.com/max/1160/0\*skYUWg3ZvcY8xRf5',
            'https://repository-images.githubusercontent.com/296760375/876b9000-2673-11eb-8680-ec65b312bb89',
            'https://www.pngrepo.com/png/331488/512/mongodb.png',
            'https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png',
        ],
        key: 'sdfsdfsl345nkfo',
        start_date: '2019/10/01',
        end_date: '2020/07/01',
        summary_Points1: 'NodeJS',
        summary_Points2: 'ExpressJS',
        summary_Points3: 'ReactJS',
        summary_Points4: 'MongoDB',
        summary_Points5: 'API Implementation',
    },
    {
        title: 'Frontend Developer',
        company: 'OctaSolutions',
        img: [
            'https://cdn-icons-png.flaticon.com/512/5968/5968672.png',
            'https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
            'https://cdn-icons-png.flaticon.com/512/1078/1078407.png',
            'https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png'
        ],
        key: 'sdfsdfsl345nkfogervd4',
        start_date: '2021/01/01',
        end_date: '2021/01/01',
        summary_Points1: 'Bootstrap',
        summary_Points2: 'HTML5',
        summary_Points3: 'CSS3',
        summary_Points4: 'JavaScript',
        summary_Points5: 'Font Awesome',
    },

];



function Experience({}: Props) {

    return (
    <motion.div
        key={'modal'}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        {/* <p className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a card or scroll left for more information</p> */}
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>

            {
                sections.map((section) => (

                    // <ExperienceCard  {...section} />


                    // eslint-disable-next-line react/jsx-key
                    <ExperienceCard imgar={section.img}
                                    title={section.title}
                                    startDate={section.start_date}
                                    endDate={section.end_date}
                                    summaryP1={section.summary_Points1}
                                    summaryP2={section.summary_Points2}
                                    summaryP3={section.summary_Points3}
                                    summaryP4={section.summary_Points4}
                                    summaryP5={section.summary_Points5}
                                    company={section.company}
                    />
                ))
            }

        </div>
    </motion.div>
  )
}

export default Experience
