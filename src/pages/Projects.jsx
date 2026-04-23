const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "Real-time weather using OpenWeather API. Search any city worldwide.",
    tags: ["React", "API", "CSS"],
    color: "#6c00ff"
  },
  {
    id: 2,
    title: "Todo App",
    description: "Full featured todo app with filters and localStorage persistence.",
    tags: ["React", "useState", "localStorage"],
    color: "#ff5500"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "This portfolio — built with React and React Router.",
    tags: ["React", "Router", "CSS"],
    color: "#00a86b"
  }
]

function ProjectCard({ title, description, tags, color }) {
  return (
    <div className="project-card">
      <div className="project-top" style={{ backgroundColor: color }}></div>
      <div className="project-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="page">
      <h1 className="page-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects