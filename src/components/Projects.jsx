const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone",
      description: "A Spotify clone built with React.js and Tailwind CSS.",
      url: "https://github.com/KushalKoirala99/Spotify-clone",
    },
    {
      title: "Film Finder",
      description: "An interactive web application to search and discover movies.",
      url: "https://github.com/KushalKoirala99/Learning-React/tree/main/flimFinder",
    },
    {
      title: "To-Do App",
      description: "A simple and functional To-Do application. Using React",
      url: "https://github.com/KushalKoirala99/Learning-React/tree/main/todo-app",
    },
    {
      title: "JavaScript To-Do List",
      description: "A minimal and functional to-do list application built using vanilla JavaScript, HTML, and CSS.",
      url: "https://github.com/KushalKoirala99/learning-js/tree/main/todolist",
    },
    {
      title: "Calculator",
      description: "A basic calculator built using vanilla JavaScript, HTML, and CSS.",
      url: "https://github.com/KushalKoirala99/learning-js/tree/main/calculator",
    },
    {
      title: "Background Color Changer",
      description: "A simple web application that dynamically changes the background color of the page based on user interaction.",
      url: "https://github.com/KushalKoirala99/learning-js/tree/main/background%20color%20changer",
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-600 flex flex-col items-center py-12 px-4 overflow-y-auto"
    >
      <h1 className="text-4xl font-bold my-8 text-white text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full ">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-auto"
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                className="mt-auto inline-block py-2 px-6 rounded-full text-white font-semibold text-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
