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
          <div className="flex flex-col items-center lg:p-8">
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
            <motion.div
              className="mt-4 text-center text-2xl font-bold text-white shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent shadow-lg">
                Tebibu Solomon
              </span>
            </motion.div>
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
            <motion.p className="my-6 max-w-lg py-6 text-lg leading-relaxed tracking-wide text-white lg:text-xl ml-9">
              <span>I am a passionate full stack developer </span>
              <span className="italic">
                with a knack for crafting robust and scalable web applications.
              </span>{" "}
              <span className="italic">
                With 3 years of hands-on experience, I have honed my skills in
                front-end technologies like{" "}
              </span>
              <span className="text-blue-300 font-semibold">React</span>
              <span>, </span>
              <span className="text-green-300 font-semibold">Next.js</span>
              <span>, </span>
              <span>as well as back-end technologies like </span>
              <span className="text-purple-300 font-semibold">Node.js</span>
              <span>, </span>
              <span className="text-yellow-400 font-semibold">MySQL</span>
              <span>, </span>
              <span className="text-teal-300 font-semibold">PostgreSQL</span>
              <span>, and </span>
              <span className="text-orange-300 font-semibold">MongoDB</span>
              <span>. </span>
              <span>
                My goal is to leverage my expertise to create innovative
                solutions that drive business growth and deliver exceptional
                user experiences.
              </span>
            </motion.p>

            <motion.a
              variants={childVariant}
              href="/bibe_s.pdf"
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
