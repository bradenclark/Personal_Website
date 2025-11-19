import { useState, useEffect } from 'react';
import FaultyTerminal from './components/FaultyTerminal';
import { Terminal, Code, Cpu, Briefcase, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import data from './data.json';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo mono">
            <span className="text-accent">&gt;</span> BMC_
          </div>
          <div className="nav-links mono">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="terminal-bg">
          <FaultyTerminal
            tint="#00ff41"
            gridMul={[1, 1]}
            scanlineIntensity={0.2}
            flickerAmount={0.1}
            glitchAmount={1.0}
          />
        </div>
        <div className="hero-content container">
          <h1 className="glitch-text" data-text={data.profile.name}>
            {data.profile.name}
          </h1>
          <p className="hero-subtitle mono text-accent">
            {data.profile.headline}
          </p>
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary mono">
              <Terminal size={18} /> View Experience
            </a>
            <a href="#projects" className="btn btn-outline mono">
              <Code size={18} /> View Projects
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown className="animate-bounce" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-dark">
        <div className="container">
          <h2 className="section-title mono"><span className="text-accent">01.</span> About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>{data.profile.about}</p>
              <p className="mt-4">
                I specialize in <span className="text-accent">Electrical Engineering</span> with a focus on signal processing and robotics.
                My passion lies in bridging the gap between hardware and software to create efficient, robust systems.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <Cpu className="text-accent" size={32} />
                <h3>Engineering</h3>
                <p>Hardware & Embedded Systems</p>
              </div>
              <div className="stat-card">
                <Code className="text-accent" size={32} />
                <h3>Development</h3>
                <p>Python, C++, MATLAB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <h2 className="section-title mono"><span className="text-accent">02.</span> Experience</h2>
          <div className="timeline">
            {data.experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-company text-accent mono">@ {job.company}</span>
                  </div>
                  <p className="job-dates mono text-secondary">{job.dates}</p>
                  <p className="job-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-dark">
        <div className="container">
          <h2 className="section-title mono"><span className="text-accent">03.</span> Projects</h2>
          <div className="projects-grid">
            {data.projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <Briefcase className="text-accent" size={24} />
                  <div className="project-links">
                    <ExternalLink size={20} />
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech mono">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container text-center">
          <h2 className="section-title mono"><span className="text-accent">04.</span> Contact</h2>
          <p className="contact-text">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <a href="mailto:hello@example.com" className="btn btn-primary mono mt-8">
            <Mail size={18} /> Say Hello
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-center mono text-secondary">
          <p>Designed & Built by Braden M Clark</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
