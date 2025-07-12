import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const experienceData = [
  {
    title: "Technical Consultant (Frontend Developer)",
    company: "Deloitte",
    years: "Jun 2024 - Present",
    mainTech: ["Next.js", "TypeScript", "React"],
    technologies: [
      "React Query",
      "Material-UI",
      "Redux",
      "Docker",
      "Kubernetes",
      "Government Solutions"
    ],
    icon: "fas fa-briefcase",
    color: "#86efac"
  },
  {
    title: "Application Development Analyst",
    company: "Accenture",
    years: "Jan 2021 - Jun 2024",
    mainTech: ["React.js", "Redux", "JavaScript"],
    technologies: [
      "Redux-Saga",
      "Performance Optimization",
      "Component Libraries",
      "Healthcare Systems",
      "Transportation",
      "Large-scale Applications"
    ],
    icon: "fas fa-code",
    color: "#a78bfa"
  }
];

class Experience extends Component {
  render() {
    const sectionName = "Work Experience";
    
    const work = experienceData.map((work, i) => {
      const technologies = work.technologies;
      const mainTechnologies = work.mainTech;

      var mainTech = mainTechnologies.map((technology, i) => {
        return (
          <Badge 
            pill 
            className="main-badge mr-2 mb-2" 
            key={i}
            style={{
              backgroundColor: work.color,
              color: "white",
              fontSize: "0.8rem",
              padding: "6px 12px"
            }}
          >
            {technology}
          </Badge>
        );
      });
      
      var tech = technologies.map((technology, i) => {
        return (
          <Badge 
            pill 
            className="experience-badge mr-2 mb-2" 
            key={i}
            style={{
              backgroundColor: "#f8f9fa",
              color: "#495057",
              fontSize: "0.75rem",
              padding: "4px 10px"
            }}
          >
            {technology}
          </Badge>
        );
      });
      
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{
            background: work.color,
            color: "#fff",
            textAlign: "center",
            boxShadow: `0 0 0 4px ${work.color}20`
          }}
          icon={<i className={`${work.icon} experience-icon`}></i>}
          key={i}
          contentStyle={{
            background: "white",
            borderTop: `4px solid ${work.color}`,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <div style={{ textAlign: "left", marginBottom: "12px" }}>
            {mainTech}
          </div>

          <h3
            className="vertical-timeline-element-title"
            style={{ 
              textAlign: "left",
              color: "#1f2937",
              fontSize: "1.4rem",
              fontWeight: "600",
              marginBottom: "8px"
            }}
          >
            {work.title}
          </h3>
          
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ 
              textAlign: "left",
              color: "#6b7280",
              fontSize: "1.1rem",
              fontWeight: "500",
              marginBottom: "15px"
            }}
          >
            {work.company}
          </h4>
          
          {/* Key Achievements */}
          <div style={{ textAlign: "left", marginBottom: "15px" }}>
            {work.company === "Deloitte" && (
              <ul style={{ color: "#374151", fontSize: "0.95rem", lineHeight: "1.6" }}>
                <li>Developed comprehensive tax management system (ITMS) for Rajasthan government</li>
                <li>Independently established entire frontend codebase with Material-UI and Redux</li>
                <li>Implemented reusable component library for enhanced development efficiency</li>
                <li>Gained hands-on experience with Docker and Kubernetes deployment</li>
              </ul>
            )}
            {work.company === "Accenture" && (
              <ul style={{ color: "#374151", fontSize: "0.95rem", lineHeight: "1.6" }}>
                <li>Developed large-scale web applications for healthcare and transportation sectors</li>
                <li>Achieved 30% reduction in application crashes through robust state management</li>
                <li>Optimized performance achieving 40% reduction in loading times</li>
                <li>Created reusable components decreasing development time by 30%</li>
              </ul>
            )}
          </div>
          
          <div style={{ textAlign: "left", marginTop: "15px" }}>
            {tech}
          </div>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#3b82f6",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;