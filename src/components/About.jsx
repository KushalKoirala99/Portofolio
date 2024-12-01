import cssIcon from '../assets/css-3.svg'
import htmlIcon from '../assets/html.svg'
import reactIcon from '../assets/react.svg'
import tailwindIcon from '../assets/tailwind-css-2.svg'


const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex justify-center items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          About Me
        </h2>

        {/* Description */}
        <p className="text-xl sm:text-2xl md:text-3xl mb-8">
          I'm a passionate Frontend Developer who loves creating intuitive user experiences with cutting-edge technologies like React and Tailwind CSS.
          I enjoy solving complex problems and bringing creative ideas to life through code.
        </p>

        {/* Skills or Technologies */}
        <div className="flex justify-center gap-8 sm:gap-12 md:gap-16">
          <div className="flex flex-col items-center">
            <img src={reactIcon} alt="React" className="w-16 h-16 sm:w-20 sm:h-20 mb-4" />
            <p className="text-lg">React</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={htmlIcon} alt="HTML5" className="w-16 h-16 sm:w-20 sm:h-20 mb-4" />
            <p className="text-lg">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={cssIcon} alt="CSS3" className="w-16 h-16 sm:w-20 sm:h-20 mb-4" />
            <p className="text-lg">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={tailwindIcon} alt="Tailwind" className="w-16 h-16 sm:w-20 sm:h-20 mb-4" />
            <p className="text-lg">Tailwind</p>
          </div>
        </div>

        {/* More information button */}
        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600"
        >
          See My Work
        </a>
      </div>
    </section>
  );
};

export default About;
