import ProjectCard from "./ProjectCard";

let projectList = [
  {
    id: 1,
    title: "JeeperCreeper",
    imageUrl: "/images/jeepercreeper02.png",
    description: "Specialty off-roading trail finder app",
    stack: ["React", "Ruby on Rails", "TailwindCSS"],
    link: "https://www.youtube.com/watch?v=B3yoMHOD1zY",
    gitHub: "https://github.com/dbrown13/phase-5-project",
  },
  {
    id: 2,
    title: "Work Out",
    imageUrl: "",
    description:
      "App to help users track workouts, meals, and utilize a calendar setting",
    stack: ["React", "Ruby on Rails", "TailwindCSS"],
    gitHub: "https://github.com/dbrown13/Work-Out-Phase-4",
  },
  {
    id: 3,
    title: "Memories of Autumn",
    imageUrl: "/images/memories.png",
    description:
      "Memory/matching game with scoreboard, various card themes, and timer",
    stack: ["React", "CSS"],
    gitHub: "https://github.com/dbrown13/matching-game",
  },
];

function ProjectContainer() {
  const projectCard = projectList.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        title={project.title}
        imageUrl={project.imageUrl}
        description={project.description}
        stack={project.stack}
        link={project.link}
        gitHub={project.gitHub}
      />
    );
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3">
        {projectCard}
      </div>
    </div>
  );
}

export default ProjectContainer;
