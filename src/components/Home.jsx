import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col justify-center items-center px-4"
    >
      <div className="text-center">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm <span className="text-orange-500">Kushal</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Frontend Developer | React Enthusiast
        </motion.p>

        {/* Button */}
        <motion.a
          href="#projects"
          className="inline-block px-6 py-3 text-white bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600"
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

export default Home;
