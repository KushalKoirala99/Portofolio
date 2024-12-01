import { motion } from 'framer-motion';
import githubIcon from "../assets/github-icon-1.svg";
import linkdenIcon from "../assets/linkedin-icon.svg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-teal-400 via-green-500 to-emerald-600 text-white flex flex-col justify-center items-center px-4 "
    >
      <div className="max-w-2xl mx-auto mt-20 text-center  ">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Description */}
        <motion.p
          className="text-xl sm:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'd love to hear from you! Feel free to reach out for collaborations,
          inquiries, or just to connect.
        </motion.p>

        {/* Form */}
        <motion.form
          className="space-y-6 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="p-4 text-black rounded-lg w-full sm:w-1/2"
              required
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="p-4 text-black rounded-lg w-full sm:w-1/2"
              required
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </div>

          <motion.textarea
            placeholder="Your Message"
            className="p-4 text-black rounded-lg w-full h-28 md:h-40"
            required
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          ></motion.textarea>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="px-8 py-3 text-white bg-gradient-to-r from-coral-400 to-peach-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-coral-500 hover:to-peach-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Social Icons */}
      <motion.div
        className='w-full mt-3 flex justify-center items-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="https://github.com/KushalKoirala99"
          target='blank'
        >
          <motion.img
            src={githubIcon}
            className='h-12 w-12 mr-4 mb-4 icon-style'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kushal-koirala-448931260/"
          target='blank'
        >
          <motion.img
            src={linkdenIcon}
            className='h-12 w-12 ml-4 mb-4 icon-style'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
