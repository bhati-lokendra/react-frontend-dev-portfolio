import React, { Component } from "react";

const projectData = [
  {
    title: "Online Food Delivery App",
    startDate: "Personal Project",
    icon: "🍕",
    color: "#fbbf24",
    description: [
      "Developed a full-featured online food ordering platform using React.js with modern architecture and best practices.",
      "Implemented advanced features including shopping cart functionality, user authentication, rating and review system, and dynamic food search capabilities.",
      "Utilized modern React patterns, hooks, and context API to create a responsive and user-friendly interface.",
      "Integrated payment gateway and real-time order tracking functionality for enhanced user experience."
    ],
    technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "Bootstrap"],
    features: ["Shopping Cart", "User Authentication", "Payment Gateway", "Real-time Tracking"],
    url: "https://github.com/lokendrasingh"
  },
  {
    title: "Student Information Management System",
    startDate: "Academic Project",
    icon: "📚",
    color: "#f87171",
    description: [
      "Created a comprehensive system for managing student data using Java, MySQL, and Servlets with MVC architecture.",
      "Implemented features for tracking enrollment numbers, subject details, academic records, and generating reports.",
      "Developed user authentication system with role-based access control for students, teachers, and administrators.",
      "Gained hands-on experience with backend development, database design, and full-stack web development."
    ],
    technologies: ["Java", "MySQL", "Servlets", "HTML5", "CSS3"],
    features: ["Role-based Access", "Report Generation", "MVC Architecture", "Database Management"],
    url: "https://github.com/lokendrasingh"
  },
  {
    title: "Portfolio Website",
    startDate: "Personal Project",
    icon: "💼",
    color: "#8b5cf6",
    description: [
      "Designed and developed a responsive portfolio website to showcase my skills, experience, and projects.",
      "Built with React.js using modern hooks and functional components for optimal performance.",
      "Implemented smooth animations, dark/light theme toggle, and mobile-first responsive design.",
      "Integrated contact form with email functionality and SEO optimization for better visibility."
    ],
    technologies: ["React.js", "JavaScript", "Bootstrap", "SASS", "Node.js"],
    features: ["Theme Toggle", "Responsive Design", "SEO Optimized", "Contact Form"],
    url: "https://lokendrasingh.dev"
  }
];

class Projects extends Component {
  render() {
    const sectionName = "Projects";
    
    const projects = projectData.map((project, idx) => (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={project.title + idx}
        style={{ marginBottom: "30px" }}
      >
        <div 
          className="card project-card h-100"
          style={{
            border: "1px solid #dee2e6",
            borderRadius: "15px",
            transition: "all 0.3s ease",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
          }}
        >
          {/* Card Header */}
          <div className="card-header" style={{
            background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
            color: "white",
            padding: "20px",
            borderBottom: "none",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Background decoration */}
            <div style={{
              position: "absolute",
              top: "-50%",
              right: "-20%",
              width: "100px",
              height: "100px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              filter: "blur(20px)"
            }} />
            
            <div style={{ position: "relative", zIndex: 2 }}>
              <span
                className="iconify"
                data-icon="emojione:red-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
              <span style={{
                marginLeft: "15px",
                fontSize: "2rem"
              }}>
                {project.icon}
              </span>
            </div>
          </div>
          
          {/* Card Body */}
          <div className="card-body" style={{ 
            padding: "25px",
            background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "15px"
            }}>
              <h5 style={{ 
                fontSize: "1.3rem", 
                fontWeight: "700",
                color: "#1f2937",
                margin: 0,
                lineHeight: "1.3"
              }}>
                {project.title}
              </h5>
              
              <span style={{
                background: project.color,
                color: "white",
                padding: "4px 8px",
                borderRadius: "12px",
                fontSize: "0.7rem",
                fontWeight: "600",
                whiteSpace: "nowrap",
                marginLeft: "10px"
              }}>
                {project.startDate}
              </span>
            </div>

            {/* Description */}
            <p style={{
              color: "#4a5568",
              fontSize: "0.9rem",
              lineHeight: "1.6",
              marginBottom: "20px",
              textAlign: "justify"
            }}>
              {project.description[0]}
            </p>

            {/* Key Features */}
            <div style={{ marginBottom: "20px" }}>
              <h6 style={{
                fontSize: "0.85rem",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                Key Features
              </h6>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.features.map((feature, featureIdx) => (
                  <span
                    key={featureIdx}
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      padding: "4px 8px",
                      borderRadius: "8px",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      border: `1px solid ${project.color}30`
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div style={{ marginBottom: "20px" }}>
              <h6 style={{
                fontSize: "0.85rem",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                Technologies Used
              </h6>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    style={{
                      background: "#f1f5f9",
                      color: "#475569",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      border: "1px solid #e2e8f0"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Link */}
            {/* <div style={{ textAlign: "center", marginTop: "auto" }}>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                  boxShadow: `0 4px 15px ${project.color}40`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 6px 20px ${project.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 4px 15px ${project.color}40`;
                }}
              >
                <i className="fab fa-github"></i>
                View on GitHub
              </a>
            </div> */}
          </div>
        </div>
      </div>
    ));

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;