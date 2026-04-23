const skills = [
  { name: "HTML & CSS", level: "90%" },
  { name: "JavaScript", level: "70%" },
  { name: "React", level: "60%" },
  { name: "Python", level: "30%" },
]

function About() {
  return (
    <div className="page">
      <h1 className="page-title">About Me</h1>

      <div className="about-grid">
        <div className="about-text">
          <h2>Who am I?</h2>
          <p>I'm Jerry — a self-taught developer from Jaipur, India. I'm passionate about building things for the web, mobile and AI space.</p>
          <p>I started coding recently and I'm moving fast. Always building, always learning.</p>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          {skills.map(skill => (
            <div key={skill.name} className="skill-item">
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About