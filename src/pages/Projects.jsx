const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "Real-time weather using OpenWeather API. Search any city worldwide.",
    tags: ["React", "API", "CSS"],
    color: "bg-purple-600"
  },
  {
    id: 2,
    title: "Todo App",
    description: "Full featured todo app with filters and localStorage persistence.",
    tags: ["React", "useState", "localStorage"],
    color: "bg-orange-500"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "This portfolio — built with React and React Router.",
    tags: ["React", "Router", "Tailwind"],
    color: "bg-green-600"
  }
]

function ProjectCard({ title, description, tags, color }) {
  return (
    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-1 transition-transform">
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-5">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-10 py-16">
      <h1 className="text-5xl font-bold text-orange-500 mb-12">My Projects</h1>
      <div className="grid grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects