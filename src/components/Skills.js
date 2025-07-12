import React, { Component } from "react";

const skillsData = [
  // Languages
  { name: "JavaScript", level: "85", icon: "⚡", color: "#f7df1e", category: "Languages" },
  { name: "TypeScript", level: "90", icon: "🔷", color: "#3178c6", category: "Languages" },
  
  // Frontend Technologies
  { name: "React", level: "90", icon: "⚛️", color: "#61dafb", category: "Frontend" },
  { name: "Next.js", level: "85", icon: "▲", color: "#000000", category: "Frontend" },
  { name: "Redux", level: "80", icon: "🔄", color: "#764abc", category: "Frontend" },
  { name: "HTML5", level: "95", icon: "🌐", color: "#e34c26", category: "Frontend" },
  { name: "CSS3", level: "95", icon: "🎨", color: "#1572b6", category: "Frontend" },
  { name: "Material UI", level: "85", icon: "🎯", color: "#0081cb", category: "Frontend" },
  { name: "Tailwind", level: "80", icon: "💨", color: "#06b6d4", category: "Frontend" },
  
  // Testing & Tools
  { name: "Jest", level: "70", icon: "🧪", color: "#c21325", category: "Tools" },
  { name: "Docker", level: "75", icon: "🐳", color: "#2496ed", category: "Tools" }
];

class Skills extends Component {
  render() {
    const sectionName = "Technical Skills";

    return (
      <section id="skills" style={{ 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background decoration */}
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "500px",
          height: "500px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "50%",
          filter: "blur(100px)"
        }} />
        <div style={{
          position: "absolute",
          bottom: "-30%",
          left: "-10%",
          width: "300px",
          height: "300px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "50%",
          filter: "blur(80px)"
        }} />
        
        <div className="col-md-12" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ 
            color: "white",
            textAlign: "center",
            marginBottom: "60px",
            fontSize: "2.5rem",
            fontWeight: "700",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)"
          }}>
            <span>{sectionName}</span>
          </h1>
          
          <div className="container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              maxWidth: "1000px",
              margin: "0 auto"
            }}>
              {skillsData.map((skill, idx) => (
                <div key={idx} style={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  padding: "25px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
                }}>
                  
                  {/* Skill Icon and Name */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px"
                  }}>
                    <div style={{
                      width: "50px",
                      height: "50px",
                      background: `linear-gradient(135deg, ${skill.color}, ${skill.color}dd)`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      marginRight: "15px",
                      boxShadow: `0 4px 15px ${skill.color}40`
                    }}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 style={{
                        margin: 0,
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        color: "#2d3748",
                        lineHeight: "1.2"
                      }}>
                        {skill.name}
                      </h3>
                      <span style={{
                        fontSize: "0.9rem",
                        color: "#718096",
                        fontWeight: "500"
                      }}>
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Circle */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    marginBottom: "15px"
                  }}>
                    <svg width="80" height="80" style={{ transform: "rotate(-90deg)" }}>
                      {/* Background circle */}
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="#e2e8f0"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke={skill.color}
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 35}`}
                        strokeDashoffset={`${2 * Math.PI * 35 * (1 - skill.level / 100)}`}
                        strokeLinecap="round"
                        style={{
                          transition: "stroke-dashoffset 2s ease-in-out",
                          filter: `drop-shadow(0 0 8px ${skill.color}40)`
                        }}
                      />
                    </svg>
                    <div style={{
                      position: "absolute",
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: skill.color
                    }}>
                      {skill.level}%
                    </div>
                  </div>
                  
                  {/* Skill Level Text */}
                  <div style={{
                    textAlign: "center"
                  }}>
                    <div style={{
                      display: "inline-block",
                      background: `${skill.color}15`,
                      color: skill.color,
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      border: `1px solid ${skill.color}30`
                    }}>
                      {skill.level >= 90 ? "Expert" : 
                       skill.level >= 80 ? "Advanced" : 
                       skill.level >= 70 ? "Intermediate" : "Beginner"}
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div style={{
                    position: "absolute",
                    top: "-50%",
                    right: "-50%",
                    width: "100px",
                    height: "100px",
                    background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                    borderRadius: "50%",
                    filter: "blur(30px)",
                    pointerEvents: "none"
                  }} />
                </div>
              ))}
            </div>
            
            {/* Bottom decorative text */}
            <div style={{
              textAlign: "center",
              marginTop: "50px",
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.1rem"
            }}>
              <p style={{ margin: 0, fontWeight: "300" }}>
                Continuously learning and growing in the ever-evolving world of technology
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;