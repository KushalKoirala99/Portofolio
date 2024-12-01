import { motion } from 'framer-motion';
import cssIcon from '../assets/css-3.svg';
import htmlIcon from '../assets/html.svg';
import reactIcon from '../assets/react.svg';
import tailwindIcon from '../assets/tailwind-css-2.svg';

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex justify-center items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'm a passionate Frontend Developer who loves creating intuitive user experiences with cutting-edge technologies like React and Tailwind CSS.
          I enjoy solving complex problems and bringing creative ideas to life through code.
        </motion.p>

        {/* Skills or Technologies */}
        <div className="flex justify-center gap-8 sm:gap-12 md:gap-16">
          {[
            { icon: reactIcon, name: "React" },
            { icon: htmlIcon, name: "HTML5" },
            { icon: cssIcon, name: "CSS3" },
            { icon: tailwindIcon, name: "Tailwind" }
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 sm:w-20 sm:h-20 mb-4"
              />
              <p className="text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* More information button */}
        <motion.a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          See My Work
        </motion.a>
      </div>
    </section>
  );
};

export default About;
