import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Code2,
  Briefcase,
  Award,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "BeMyOwnCoach",
      type: "Mobile App (React Native)",
      description:
        "Health & fitness companion app with AI-powered chat, task management, daily wisdom quotes, and progress tracking.",
      features: [
        "Task Management",
        "AI Chat Integration",
        "Daily Quotes",
        "Health Dashboard",
      ],
      tech: ["React Native", "Firebase", "AI Integration"],
      link: "https://drive.google.com/file/d/16kwgnzziEvK2K338imhjHoRhjMypI72S/view?usp=drive_link",
    },
    {
      title: "ShemIT",
      type: "Vessel Tracking Platform",
      description:
        "Advanced shipping cost calculator with real-time vessel tracking and integrated in-app subscription system.",
      features: [
        "Vessel Tracking",
        "Cost Calculation",
        "Port Management",
        "In-App Subscription",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Payment Integration"],
      link: "https://drive.google.com/file/d/1Yecc8BSlc4LZWxFIIFp6E1T-s5szI9Q2/view?usp=drive_link",
    },
    {
      title: "TradeApp",
      type: "Trading Platform",
      description:
        "Referral-based trading application with stock management, wallet integration, and reward system.",
      features: [
        "Referral System",
        "Stock Trading",
        "Wallet Management",
        "Real-time Pricing",
        "Reward System",
      ],
      tech: ["React Native", "Node.js", "MongoDB", "Real-time Data"],
      link: "https://drive.google.com/file/d/1eQ_kRZZvF9cujfHGB6GHOVgAJJEBWner/view?usp=drive_link",
    },
    {
      title: "GameLoom Interactive",
      type: "Gaming Website",
      description:
        "Responsive gaming platform with smooth animations, interactive components, and optimized performance.",
      features: [
        "Responsive Design",
        "Animations",
        "Game Cards",
        "Optimized Performance",
      ],
      tech: ["React.js", "Next.js", "Tailwind CSS"],
      link: "https://game-loom-interactive.vercel.app/",
    },
  ];

  const skills = {
    Frontend: [
      "React.js",
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
    Backend: ["Node.js", "Express.js", "FastAPI", "Django"],
    Databases: ["PostgreSQL", "MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "AWS", "Vercel", "Firebase"],
    Languages: ["JavaScript", "Python", "C", "TypeScript"],
  };

  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "GameLoom Interactive",
      period: "Jul 2025 - Oct 2025",
      achievements: [
        "Developed responsive web applications using React.js and Next.js",
        "Built reusable UI components with 30% increase in user engagement",
        "Integrated REST APIs and optimized performance through lazy loading",
      ],
    },
  ];

  const certifications = [
    "Programming Essentials in Python (CCNA)",
    "MongoDB Basics",
    "Introduction to Cybersecurity (CCNA)",
    "The Ultimate React Course 2025: React, Next.js, Redux & More (Udemy)",
  ];

  const navLinks = ["home", "projects", "skills", "experience", "contact"];

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">PK</div>

            {/* Desktop Menu */}
            <div className="nav-menu-desktop">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="nav-link"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="nav-menu-mobile">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="mobile-nav-link"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="hero-blob-1"></div>
          <div className="hero-blob-2"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Hey, I'm <span className="gradient-text">Praveen Kumar</span>
          </h1>

          <p className="hero-subtitle">React Native & Frontend Developer</p>

          <p className="hero-description">
            Building stunning, high-performance mobile and web applications with
            modern tech. Specializing in React Native, React.js, and full-stack
            development.
          </p>

          <div className="hero-buttons">
            <a
              href="https://github.com/Praveen5102?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View My Work
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="btn btn-secondary"
            >
              Get In Touch
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/praveen5102"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/gonepraveen"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:praveenkumargone229@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-indicator-inner">
            <div className="scroll-indicator-dot"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-type">{project.type}</p>
                  </div>
                  <ExternalLink className="project-icon" />
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <p className="features-label">Key Features:</p>
                  <div className="features-tags">
                    {project.features.map((feature, i) => (
                      <span key={i} className="feature-badge">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-card">
              <div className="skill-header">
                <Code2 className="skill-icon" />
                <h3 className="skill-category">{category}</h3>
              </div>
              <div className="skill-items">
                {items.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="section-title">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        <div className="experience-container">
          {experience.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-period">{exp.period}</p>
                </div>
                <Briefcase className="experience-icon" size={32} />
              </div>
              <ul className="experience-list">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="experience-item">
                    <ArrowRight size={18} className="achievement-icon" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="education-section">
          <h3 className="education-title">
            Education & <span className="gradient-text">Certifications</span>
          </h3>

          <div className="education-grid">
            <div className="education-card">
              <div className="education-header">
                <Award className="education-icon" size={32} />
                <div>
                  <h4 className="degree-title">Bachelor of Technology</h4>
                  <p className="degree-field">CSE - GPA: 7.45/10</p>
                </div>
              </div>
              <p className="school-name">
                Sagi Rama krishnam Raju Engineering College
              </p>
              <p className="school-year">2022 - 2025</p>
            </div>

            <div className="education-card">
              <div className="education-header">
                <Award className="certification-icon" size={32} />
                <h4 className="degree-title">Certifications</h4>
              </div>
              <ul className="certification-list">
                {certifications.map((cert, i) => (
                  <li key={i} className="certification-item">
                    <span className="cert-check">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-card">
          <div className="contact-overlay"></div>

          <div className="contact-content">
            <h2 className="contact-title">Let's Build Something Amazing</h2>
            <p className="contact-description">
              I'm always excited to collaborate on new projects and help
              businesses bring their ideas to life. Whether you need a React
              Native app, website, or full-stack solution, let's connect!
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:praveenkumargone229@gmail.com"
                className="btn btn-contact"
              >
                Send Me an Email
              </a>
              <a
                href="https://drive.google.com/file/d/1D7rYCKAQ_jDfnf3XCnYxrTsG9uuHSujR/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-contact-secondary"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <p className="footer-copyright">
              © 2025 Praveen Kumar. All rights reserved.
            </p>
            <div className="footer-links">
              <a
                href="https://github.com/praveen5102"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/gonepraveen"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:praveenkumargone229@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
