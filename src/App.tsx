import { useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2,
  Github, Linkedin, Mail, Menu, X, ExternalLink, Layers3, Database,
  ShieldCheck, ShoppingBag, Stethoscope, Cloud, Braces,
} from 'lucide-react';

const links = {
  github: 'https://github.com/Nimishaks123',
  linkedin: 'https://www.linkedin.com/in/nimisha-k-s-7351362b5/',
  email: 'nimishamolks666@gmail.com',
  phone: '+91 96459 47662',
  resume: `${import.meta.env.BASE_URL}Nimisha_KS_Resume.pdf`,
};

const projects = [
  {
    number: '01',
    name: 'MediConnect',
    category: 'Healthcare platform',
    description: 'A healthcare appointment and online consultation platform connecting patients, doctors, and administrators through dedicated workflows.',
    highlights: [
      'Doctor discovery, onboarding, verification, and availability management',
      'Backend structured with Clean Architecture, use cases, repository abstractions, DTOs, and Dependency Injection',
      'Appointment scheduling with availability checks and safeguards against conflicting bookings',
      'JWT access/refresh tokens, Google OAuth, email OTP, and role-based access control',
      'Stripe payment workflows and webhook handling, with wallet and transaction features',
      'Real-time chat with Socket.IO and WebRTC signaling for video consultations',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Socket.IO', 'WebRTC'],
    icon: Stethoscope,
    featured: true,
    demo: 'https://www.mediconnectportal.site/',
    repos: [
      { label: 'Frontend', url: 'https://github.com/Nimishaks123/mediconnect_frontend' },
      { label: 'Backend', url: 'https://github.com/Nimishaks123/mediconnect_backend' },
    ],
  },
  {
    number: '02',
    name: 'Shopiz',
    category: 'E-commerce application',
    description: 'A clothing e-commerce application with customer shopping flows and administration features for managing products, categories, and orders.',
    highlights: [
      'Product catalogue, cart, checkout, and order management',
      'User authentication and role-based customer/admin workflows',
      'Razorpay checkout and payment verification',
      'Product and category management for administrators',
    ],
    stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'EJS', 'Razorpay', 'Google OAuth'],
    icon: ShoppingBag,
    featured: false,
    demo: 'https://shopiz.site/',
    repos: [{ label: 'GitHub', url: 'https://github.com/Nimishaks123/E-Commerce' }],
  },
  {
    number: '03',
    name: 'Imvera',
    category: 'Image gallery · In development',
    description: 'An image gallery project focused on a maintainable TypeScript codebase, layered backend structure, and cloud-backed file storage.',
    highlights: [
      'React and TypeScript frontend with a Node.js and Express backend',
      'Clean Architecture-inspired separation of responsibilities',
      'AWS S3 file-storage integration',
      'Centralized API response and error-handling utilities',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
    icon: Cloud,
    featured: false,
    demo: 'https://imvera-frontend.onrender.com/',
    repos: [],
  },
];

const skillGroups = [
  { title: 'Frontend', icon: Code2, skills: ['React', 'TypeScript', 'JavaScript ES6+', 'Redux Toolkit', 'React Router', 'Tailwind CSS', 'Responsive UI'] },
  { title: 'Backend', icon: Braces, skills: ['Node.js', 'Express.js', 'REST APIs', 'Middleware', 'Request validation', 'Centralized error handling'] },
  { title: 'Data & integrations', icon: Database, skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Stripe', 'Razorpay', 'Google OAuth', 'Cloudinary', 'AWS S3'] },
  { title: 'Architecture & tools', icon: Layers3, skills: ['Clean Architecture', 'Dependency Injection', 'Repository Pattern', 'DTOs', 'JWT / RBAC', 'Git', 'GitHub', 'Postman'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Nimisha home">
          <span className="brand-mark">N<span>.</span></span>
          <span className="brand-label">NIMISHA K S</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-resume" href={links.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> OPEN TO DEVELOPER OPPORTUNITIES</div>
            <p className="eyebrow">FULL STACK DEVELOPER · KERALA, INDIA</p>
            <h1>Building useful<br />products with <span className="gradient-text">thoughtful code.</span></h1>
            <p className="hero-description">I'm Nimisha, a Full Stack MERN Developer focused on creating practical web applications, reliable APIs, and maintainable backend systems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href={links.resume} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16} /></a>
            </div>
            <div className="social-row">
              <a href={links.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={12} /></a>
              <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={12} /></a>
              <button onClick={copyEmail} className="copy-email"><Mail size={17} /> {copied ? 'Email copied' : 'Email'} {copied ? <Check size={13} /> : <ArrowUpRight size={12} />}</button>
            </div>
          </div>
          <div className="hero-art" aria-label="Developer technology summary">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-core">
              <span className="core-bracket">{'</>'}</span>
              <span className="core-label">BUILD · SOLVE · IMPROVE</span>
            </div>
            <div className="float-card float-card-top"><span className="float-icon teal"><Code2 size={17} /></span><span><strong>Frontend</strong><small>React · TypeScript</small></span></div>
            <div className="float-card float-card-right"><span className="float-icon purple"><Database size={17} /></span><span><strong>Backend</strong><small>Node · MongoDB</small></span></div>
            <div className="float-card float-card-bottom"><span className="float-icon orange"><ShieldCheck size={17} /></span><span><strong>Built with care</strong><small>Architecture · Security</small></span></div>
            <div className="art-dot dot-a" /><div className="art-dot dot-b" /><div className="art-dot dot-c" />
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="intro-strip" aria-label="Core focus areas">
          <div><span>01</span> Full-stack development</div>
          <div><span>02</span> API design & business logic</div>
          <div><span>03</span> Maintainable architecture</div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Curious by nature.<br /><span className="muted-heading">Developer by practice.</span></h2></div>
          <div className="about-content">
            <p className="about-lead">I enjoy turning real requirements into software that is clear, dependable, and easy to maintain.</p>
            <p>My work spans React interfaces, TypeScript APIs, MongoDB data models, authentication, payment workflows, and real-time communication. While building projects, I focus not only on making a feature work, but also on understanding its edge cases and how the pieces fit together.</p>
            <p>I'm continuing to strengthen my engineering fundamentals and looking for an opportunity to contribute, learn from a team, and build software that solves real problems.</p>
            <div className="education-line"><span className="education-icon"><Layers3 size={17} /></span><span><strong>M.Sc. & B.Sc. Computer Science</strong><small>Mahatma Gandhi University, Kerala</small></span></div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <div className="section-heading heading-row"><div><p className="eyebrow">SELECTED WORK</p><h2>Projects built to<br /><span className="muted-heading">solve real problems.</span></h2></div><p className="heading-note">A closer look at the products, workflows, and engineering decisions behind my work.</p></div>
            <div className="project-list">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.name}>
                    <div className="project-topline"><span className="project-number">/{project.number}</span><span className="project-category">{project.category}</span></div>
                    <div className="project-main">
                      <div className="project-icon"><Icon size={25} strokeWidth={1.7} /></div>
                      <div className="project-copy"><h3>{project.name}</h3><p className="project-description">{project.description}</p></div>
                      <div className="project-links">
                        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}><ExternalLink size={16} /> <span>Live demo</span></a>}
                        {project.repos.map((repo) => <a key={repo.label} href={repo.url} target="_blank" rel="noreferrer"><Github size={16} /> <span>{repo.label}</span></a>)}
                        {!project.demo && project.repos.length === 0 && <span className="in-progress">In progress</span>}
                      </div>
                    </div>
                    <div className="project-details">
                      <ul>{project.highlights.map((highlight) => <li key={highlight}><span className="list-dot" />{highlight}</li>)}</ul>
                      <div className="tech-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="project-footnote"><span className="footnote-mark">↳</span> I value understanding the edge cases behind a feature—not just getting the happy path to work.</div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading"><p className="eyebrow">TOOLS & TECHNOLOGIES</p><h2>My engineering <span className="muted-heading">toolkit.</span></h2><p className="section-subtitle">Technologies I use across frontend, backend, data, and application design.</p></div>
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return <article className="skill-card" key={group.title}><div className="skill-card-head"><span className="skill-icon"><Icon size={18} /></span><h3>{group.title}</h3></div><div className="skill-pills">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>;
            })}
          </div>
          <div className="problem-solving"><div className="problem-symbol">{`{ }`}</div><div><p className="eyebrow">PROBLEM SOLVING</p><h3>Consistent practice. Stronger fundamentals.</h3><p>Practicing data structures, algorithms, and JavaScript problem-solving through 150+ LeetCode problems.</p></div><a href="https://leetcode.com/" target="_blank" rel="noreferrer" aria-label="Open LeetCode">Practice <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div><p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p><h2>Let's build something<br /><span className="gradient-text">meaningful.</span></h2><p className="contact-description">I'm open to junior and entry-level Full Stack, MERN, and Backend Developer opportunities.</p></div>
            <div className="contact-panel"><span className="contact-panel-label">GET IN TOUCH</span><a className="contact-email" href={`mailto:${links.email}`}>{links.email} <ArrowUpRight size={17} /></a><div className="contact-divider" /><a href={links.linkedin} target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={17} /> Connect on LinkedIn <ArrowRight size={15} /></a><a href={links.github} target="_blank" rel="noreferrer" className="contact-link"><Github size={17} /> Explore GitHub <ArrowRight size={15} /></a><p className="contact-location">Based in Ernakulam, Kerala, India</p></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">N<span>.</span></span></a><p>Designed with intention. Built with React.</p><span>© {new Date().getFullYear()} Nimisha K S</span><a className="back-top" href="#home">Back to top <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}

export default App;
