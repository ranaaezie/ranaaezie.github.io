/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { motion } from 'framer-motion'
import React, {useRef, useState} from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [
        {
            number: 1,
            title: 'Multi-Function E-commerce Platform',
            img: 'https://i.postimg.cc/xdt2Ckqq/my-Terrace.gif',
            alt: 'my-terrace',
            name: 'myTerrace',
            description: 'Developed a versatile e-commerce platform that integrates job listings, freelance services, marketplace transactions, events, and service bookings.\n' +
                'The platform uses ReactJS for dynamic user interfaces, Tailwind CSS for responsive design, and React Query for efficient data management. Payment processing is securely handled through Stripe to ensure smooth transactions. The platform also integrates with Firebase for user authentication and data storage. ',
            link: 'https://my-terrace-latest-main.vercel.app/'
        },
        {
            number: 2,
            title: 'Subscription Flow',
            img: 'https://i.postimg.cc/dQd7WRKx/Subscriptio-FLow.png',
            alt: 'subscription-flow',
            name: 'Subscription Flow',
            description: 'While working at Techloyce I contributed to the development of a subscription flow for a client’s e-commerce platform. \n' +
            'The platform offers a seamless subscription experience, I worked with integration of Square, Shopify, Woo-commerce, Hubspot, and other platforms to ensure a smooth user experience. I helped clients to write custom workflows in Hubspot to automate processes and improve efficiency.',
            link: 'https://test.subscriptionflow.com/login'
        },
        {
            title: 'SlotTrail: Rewarding Players, Empowering Merchants',
            number: 3,
            img: 'https://i.postimg.cc/y69sBG1J/Slot-Trail.gif',
            alt: 'slot-trail',
            name: 'Slot Trail',
            description: 'SlotTrail is a platform where COAM owners can add locations and offer free promos on machines with a Pro Subscription. \n' +
                'Players earn points as they play, which can be redeemed for discounts at participating merchants. This seamless integration benefits both owners and players, fostering a rewarding experience for all.',
            link: 'https://slottrail.vercel.app/'
        },
        {
          title : 'ESurvey',
          number: 4,
          img: 'https://i.postimg.cc/nL1zbxkj/E-Survey.png',
          alt: 'e-survey',
          name: 'ESurvey',
          description: 'E-survey is a platform designed to streamline the can supply chain, connecting farmers, suppliers, and sugar mills, owned by Farmdar. \n' +
                'The platform offers a seamless experience for all stakeholders, enabling efficient communication and transactions. Built with Django REST and ReactJS, the platform provides a responsive, user-friendly interface for managing the entire supply chain process.',
          link: 'https://www.farmdar.ai/products'
        },
        {
          title: 'Dense AI : AI-Powered Field Delineation',
          number: 5,
          img: 'https://i.postimg.cc/c17NFhFC/Dense-an-AI-powered-Platform.gif',
          alt: 'dense-ai',
          name: 'Dense AI',
          description: 'Dense AI is an AI-powered platform designed to streamline field delineation for farmers, enabling them to identify and manage fields with ease. \n' +
                    'The platform uses advanced AI Deep Learning algorithm to analyze satellite images and provide accurate field boundaries. Built with FAST API and ReactJS, the platform offers a responsive, user-friendly interface for farmers to optimize their land management.',
          link: 'https://dense-frontend.vercel.app/'
        },
        {
            number: 6,
            title: 'Verity Tech: Streamlining Contract Management',
            img: 'https://i.postimg.cc/fR5z3qrw/React-django-contract-management.gif',
            alt: 'verity-tech',
            name: 'Verity Tech',
            description: 'Verity Tech is a platform designed for creating and managing contracts, enabling contractors to hire talent on an hourly basis \n' +
                'from around the world while efficiently managing costs. Built with Django REST and ReactJS, the platform offers a responsive, smooth user experience powered by RadixUI for intuitive design.',
            link: 'https://verity-tech-frontend.vercel.app/'
        },
        {
            number: 7,
            title: 'AnchorProWash: Custom Website Design and Development',
            img: 'https://i.postimg.cc/j5gJz2X2/eleventyjs-website.png',
            alt: 'anchor-pro-wash',
            name: 'AnchorProWash',
            description: 'I designed and developed a responsive website for AnchorProWash, a professional power washing service. \n' +
                'Using Bootstrap and Eleventy.js, I showcased their previous projects and created an intuitive contact form for potential customers. The site was deployed seamlessly on Vercel, ensuring fast load times and a smooth user experience.',
            link: 'https://anchorprowash.com/'
        },
        {
            number: 8,
            title: 'Ascension Moving: Custom Website Design and SEO Optimization',
            img: 'https://i.postimg.cc/fk4nF7KP/node-JS-nextjs.png',
            alt: 'ascension-moving',
            name: 'Ascension Moving',
            description: 'I designed and developed a fully optimized website for Ascension Moving, a U.S.-based company specializing \n' +
                'in house shifting and packaging services. Using Bootstrap and EleventyJS, I created a user-friendly experience, while optimizing the site for SEO to enhance visibility and search engine rankings.',
            link: 'https://ascensionmoving.vercel.app/'
        },
        {
            number: 9,
            title: 'E-commerce Platform',
            img: 'https://i.postimg.cc/25xKK2NP/descriptionai.gif',
            alt: 'descriptionai',
            name: 'Description AI',
            description: 'DescriptionAI is an intuitive platform designed to effortlessly generate product descriptions. By integrating advanced AI capabilities, \n' +
            'including ChatGPT, it offers users a responsive and efficient solution for creating high-quality, engaging descriptions for any product. The platform streamlines the writing process, saving time and enhancing content creation for businesses, marketers, and e-commerce platforms.',
            link: 'https://descriptionai-client-servelogy1.vercel.app/'
        },
        {
            number: 10,
            title: 'Payment Gateways',
            img: 'https://i.pinimg.com/564x/40/94/e8/4094e8e095102be3213c4606014a3638.jpg',
            alt: 'hello world',
            name: 'React',
            description: 'Netflix 2.0 app built with React, Redux, and Firebase.\n' +
                'This app is a clone of the Netflix app. It is built with React, Redux, and Firebase. It uses the TMDB API to fetch movies and TV shows. It also uses Firebase for authentication and storing user data. It is fully responsive and works on all devices.',
            link: 'https://www.google.com'
        },
    ]

        const [modalOpen, setModalOpen] = useState(false);

        const handleModalToggle = (desc: string) => {
            setModalOpen(!modalOpen);
            setDescription(desc);
        };
        const [description, setDescription] = useState('');

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            // @ts-ignore
            scrollContainerRef.current.scrollBy({
                left: -window.innerWidth,
                behavior: 'smooth',
            });
        }
    };
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            // @ts-ignore
            scrollContainerRef.current.scrollBy({
                left: window.innerWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:mb-6">Projects</h3>

            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 bg-black text-white z-30"
            >
                &#8592;
            </button>

            <div
                ref={scrollContainerRef}
                className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"
            >
                {projects.map((project, i) => (
                    <div
                        className="w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                        key={i}
                    >
                        <motion.img
                            src={project.img}
                            alt=""
                            className="w-80 mt-44"
                        />

                        <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}
                </span>{" "}
                                :{" "}
                                <a
                                    href={project.link || '#'}
                                    target="_blank"
                                    rel="external noreferrer"
                                    title={'redirect-link'}
                                >
                                    {project.title}
                                </a>
                            </h4>

                            <p className="text-lg text-center md:text-left hidden sm:block">
                                {project.description}
                            </p>

                            {project.description.length > 100 && (
                                <>
                                    <p className="text-lg text-center md:text-left sm:hidden">
                                        {project.description.substring(0, 40)}...
                                    </p>

                                    <button
                                        onClick={() => handleModalToggle(project.description)}
                                        className="text-blue-500 underline mt-2 sm:hidden"
                                    >
                                        Read More
                                    </button>
                                </>
                            )}
                        </div>
                        {modalOpen && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                                onClick={() => handleModalToggle('')}
                            >
                                <div
                                    className=" bg-black p-6 rounded-lg max-w-md w-full"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h2 className="text-xl font-semibold">Full Description</h2>
                                    <p>{description}</p>
                                    <button
                                        onClick={() => handleModalToggle('')}
                                        className="text-red-500 mt-4"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 bg-black text-white z-30"
            >
                &#8594;
            </button>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12"></div>
        </div>
    );
}

export default Projects
