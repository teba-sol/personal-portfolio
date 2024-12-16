import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
const Experiance = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiance
      </motion.h2>
      <div>
        {EXPERIENCES.map((experiance, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: -100 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="mb-2 text-sm text-stone-400"
              >
                {experiance.year}
              </motion.p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {experiance.role}={" "}
                <span className="text-sm text-stone-500">
                  {experiance.company}
                </span>
              </h3>
              <p className="mb-2 text-stone-400">{experiance.description}</p>
              {experiance.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-semibold text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiance;
