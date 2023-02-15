function ProjectCard( {title, imageUrl, description, stack, link, gitHub}) {
    const stackList = stack.map((tech) => (
        <span
        key={tech}
        className="bg-gray-600 text-white inline-block font-semibold px-2 py-1 border-2 border-stone-900 rounded-md">
        {tech}
        </span>
    ));

  return (
    <div className="bg-gray-300 border-4 border-stone-900 rounded-md overflow-hidden hover:-translate-y-2 transition ease-in-out">
      <img
        src={imageUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="w-full p-4">
        <h3 className="font-bold text-4xl mb-1">{title}</h3>
        <p className="mb-2 font-light italic">{description}</p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stackList}
        </p>

        <a href={gitHub}>
          <button className="text-white bg-stone-900 mt-6 mr-2  font-semibold rounded-md p-1 w-1/4 hover:scale-105 transition ease-in-out focus:bg-stone-700">
            GitHub
          </button>
        </a>
        {link ? ( 
        <a href={link}>
          <button className="text-white bg-stone-900 mt-6 font-semibold rounded-md p-1 w-1/4 hover:scale-105 transition ease-in-out focus:bg-stone-700">
            Demo
          </button>
        </a>
        ) : (
            ""
        )}
      </div>
    </div>
  );
}

export default ProjectCard;