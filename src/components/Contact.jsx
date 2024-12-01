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
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Contact Me
        </h2>

        {/* Contact Form */}
        <p className="text-xl sm:text-2xl mb-8">
          I'd love to hear from you! Feel free to reach out for collaborations,
          inquiries, or just to connect.
        </p>

        {/* Form */}
        <form className="space-y-6 mb-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 text-black rounded-lg w-full sm:w-1/2"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 text-black rounded-lg w-full sm:w-1/2"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            className="p-4 text-black rounded-lg w-full h-28 md:h-40"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-8 py-3 text-white bg-gradient-to-r from-coral-400 to-peach-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-coral-500 hover:to-peach-600"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className=' w-full  mt-3 flex justify-center items-center'>
          <a href="https://github.com/KushalKoirala99"
          target='blank'><img src={githubIcon}
          className='h-12 w-h-12 mr-4  m:h-18 mb-4 icon-style'></img></a>
          <a href="https://www.linkedin.com/in/kushal-koirala-448931260/" target='blank'><img 
          src={linkdenIcon}
          className='h-12 w-h-12 ml-4 m:h-18 mb-4 icon-style'></img></a>
        </div>

      
    </section>
  );
};

export default Contact;
