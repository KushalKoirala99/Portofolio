const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "This is a description of the first project. It is awesome!",
      url: "",
    },
    {
      title: "Project 2",
      description: "This is a description of the second project. Check it out!",
      url: "",
    },
    {
      title: "Project 3",
      description: "Another amazing project to explore!",
      url: "",
    },
    {
      title: "Project 4",
      description: "Another amazing project to explore!",
      url: "",
    },
    {
      title: "Project 5",
      description: "Another amazing project to explore!",
      url: "",
    },
    {
      title: "Project 6",
      description: "Another amazing project to explore!",
      url: "",
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen bg-gray-100 flex flex-col items-center 
      py-12 px-4 overflow-y-auto"
    >
      <h1 className="text-4xl font-bold my-8 text-gray-800 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full ">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-white  shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-auto"
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                className="mt-auto inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300 text-center"
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
