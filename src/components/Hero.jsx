import { HERO_CONTENT } from "../constants";
import tebapic from "../images/newpic.png";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
          <motion.img
  src={tebapic}
  alt="myPhoto"
  className="border border-stone-900 rounded-full w-full max-w-xs h-auto"
  initial={{ y: 0, opacity: 1 }}
  animate={{ y: [0, -20, 0] }} // Only animate the y property
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "loop",
  }}
/>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariant}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2 variants={childVariant} />

            <motion.span
              variants={childVariant}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text ml-7 text-3xl tracking-tighter text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              className="my-6 max-w-lg py-6 text-lg leading-relaxed tracking-wide text-gray-300 lg:text-xl ml-9"
            >
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent font-bold">
                I am a passionate full stack developer
              </span>{' '}
              <span className="font-medium text-white">
                with a knack for crafting robust and scalable web applications.
              </span>{' '}
              <span className="italic text-gray-400">
                With 5 years of hands-on experience, I have honed my skills in front-end technologies like
              </span>{' '}
              <span className="text-blue-300 font-semibold">React</span>{' '}
              <span className="text-green-300 font-semibold">and Next.js,</span>{' '}
              <span className="font-medium text-gray-300">
                as well as back-end technologies like
              </span>{' '}
              <span className="text-purple-300 font-semibold">Node.js,</span>{' '}
              <span className="text-yellow-400 font-semibold">MySQL,</span>{' '}
              <span className="text-teal-300 font-semibold">PostgreSQL,</span>{' '}
              <span className="text-orange-300 font-semibold">and MongoDB.</span>{' '}
              <span className="font-medium text-gray-400">
                My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
              </span>
            </motion.p>

            <motion.a
              variants={childVariant}
              href="/Tebibus'sCv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-sky-900 rounded-full p-4 text-sm text-stone-100 mb-10 ml-12"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
