const skills = [
  { name: "HTML & CSS", level: "90%" },
  { name: "JavaScript", level: "70%" },
  { name: "React", level: "60%" },
  { name: "Python", level: "30%" },
]

function About() {
  return (
    <div className="max-w-4xl mx-auto px-10 py-16">
      <h1 className="text-5xl font-bold text-orange-500 mb-12">About Me</h1>

      <div className="grid grid-cols-2 gap-16">
        <div>
          <h2 className="text-xl font-bold mb-5">Who am I?</h2>
          <p className="text-white/60 leading-relaxed mb-4">I'm Jerry — a self-taught developer from Jaipur, India. Passionate about building things for the web, mobile and AI space.</p>
          <p className="text-white/60 leading-relaxed">I started coding recently and I'm moving fast. Always building, always learning.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-5">Skills</h2>
          {skills.map(skill => (
            <div key={skill.name} className="mb-5">
              <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="bg-white/10 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About