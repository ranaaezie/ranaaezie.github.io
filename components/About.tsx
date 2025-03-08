import React, {useState} from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
    const para2 = 'I’ve also worked extensively in CRM solutions, collaborating with a team of experts to implement automations using Node.js. My current focus is on full-stack development with Django, React, and PostgreSQL, delivering robust, scalable applications.';
    const para3 = 'Specializing in modern JavaScript frameworks, including the MERN stack, Next.js, and TypeScript, I’m committed to providing top-notch web solutions that meet industry standards and exceed client expectations.';
    const para1 = "With over 4 years of experience in front-end and back-end development, I’ve mastered responsive design using Bootstrap for various projects, including blogs, hotel websites, and portfolios. My expertise extends to back-end development with Node.js, Express.js, and MongoDB, where I’ve gained hands-on experience in building APIs.";
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleModalToggle = (content: string) => {
        const formattedContent: any = content
            .split("\n")
            .map((line, index) => <p key={index}>{line}</p>);

        setModalContent(formattedContent);
        setModalOpen(!modalOpen);
    };
  return (
    <motion.div
    initial={{ x:-200, opacity:0 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, x:0 }}
    viewport={{ once: true }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <img
        src="https://i.postimg.cc/RFtf74Wz/AWS-Expert.jpg"
        alt='Aezie profile'
        className='-mb-4 mt-[120px] md:mb-4 flex-shrink-0 w-[75px] h-[75px]  rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[530px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a{" "}
                <span className='underline decoration-[#F7AB0A]/50'>
          little<span>{" "}background</span>
        </span>
            </h4>
            <p>
                With over 4 years of experience in front-end and back-end development, I’ve mastered responsive design using Bootstrap for various projects, including blogs, hotel websites, and portfolios. My expertise extends to back-end development with Node.js, Express.js, and MongoDB, where I’ve gained hands-on experience in building APIs.
            </p>

            <p>
                {/* On Mobile and Tablet view, show a button to open para2 */}
                <span className="hidden sm:inline">{para2}</span>
                <br/>
                <br/>
                <span className={"hidden sm:inline"}>{para3}</span>
                <button
                    onClick={() => handleModalToggle(para1 + '\n '+para2 + '\n '+ para3)}
                    className="text-blue-500 sm:hidden underline mt-2"
                >
                    Read More about my background
                </button>
            </p>
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="bg-black p-6 rounded-lg max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-semibold mb-3">More Information</h2>
                        <p>{modalContent}</p>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="text-red-500 mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    </motion.div>
  )
}
