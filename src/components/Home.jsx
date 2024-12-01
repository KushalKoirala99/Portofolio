import cssIcon from "../assets/css-3.svg";
import htmlIcon from "../assets/html.svg";
import reactIcon from "../assets/react.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col justify-center items-center px-4"
    >
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Hello, I'm <span className="text-orange-500">Kushal</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          Frontend Developer | React Enthusiast
        </p>

        <a
          href="#projects"
          className="inline-block px-6 py-3 text-white bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600"
        >
          See My Work
        </a>

        {/* Skills (Logos) */}
      </div>
    </section>
  );
};

export default Home;
