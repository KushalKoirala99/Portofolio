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
          className="inline-block bg-orange-500 text-white py-2 px-6 rounded-lg text-lg sm:text-xl hover:bg-orange-400 transition duration-300 border-black border"
        >
          See My Work
        </a>

        {/* Skills (Logos) */}
      </div>
    </section>
  );
};

export default Home;
