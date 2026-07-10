import { useEffect, useRef, useState } from "react";

// Typing animation hook
function useTypingEffect(text, speed = 80) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

// Fade in on scroll
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = "" }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

// Glass card component
function GlassCard({ children, className = "" }) {
  return (
    <div className={`glass-card ${className}`}>
      {children}
    </div>
  );
}

export default function App() {
  const heroName = useTypingEffect("ROONEY KING", 100);
  const [copied, setCopied] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("krodney552@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#projects", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#cv", label: "CV" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-glass px-6 py-4 flex justify-between items-center">
        <span className="text-sm font-bold tracking-widest text-white">RK</span>
        <div className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm tracking-wider transition-all duration-300 ${
                activeNav === href.slice(1)
                  ? "text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main className="bg-[#080808] text-white" style={{ scrollBehavior: "smooth" }}>

        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 relative overflow-hidden">
          <div className="hero-glow" />
          <p className="text-xs tracking-[0.4em] text-gray-500 mb-6 uppercase">
            Junior Software Developer · Nairobi
          </p>
          <h1 className="hero-heading min-h-[1.2em]">
            {heroName}
            <span className="animate-pulse text-gray-600">|</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-400 max-w-lg leading-relaxed">
            Building clean systems with strong visual identity.
          </p>
          <div className="mt-10 flex gap-4 flex-wrap justify-center">
            <a href="#projects" className="btn-primary">View Work</a>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-dot" />
          </div>
        </section>

        {/* PROJECTS */}
        <FadeSection>
          <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="section-label">Selected Work</div>
            <h2 className="section-heading">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 mt-12">

              <GlassCard>
                <span className="card-tag">Web Application</span>
                <h3 className="card-title">Personal Portfolio</h3>
                <p className="card-desc">
                  Minimal, performance-focused portfolio built with React, Vite, and Tailwind CSS.
                  Designed to communicate clarity, structure, and intent.
                </p>
                <p className="card-stack">React · Tailwind · Vite</p>
                <div className="card-links">
                  <a href="https://rodney-portfolio-szjn.vercel.app/" target="_blank" className="card-link">Live ↗</a>
                  <a href="https://github.com/Rodney-king/rodney-portfolio" target="_blank" className="card-link">Code ↗</a>
                </div>
              </GlassCard>

              <GlassCard>
                <span className="card-tag">Client Website</span>
                <h3 className="card-title">School Website</h3>
                <p className="card-desc">
                  A school administration system that allows authorized administrators to add,
                  update, and manage student records through a structured interface.
                </p>
                <p className="card-stack">HTML · CSS · JavaScript</p>
                <div className="card-links">
                  <a href="https://rodney-king.github.io/School-website/" target="_blank" className="card-link">Live ↗</a>
                  <a href="https://github.com/Rodney-king/School-website" target="_blank" className="card-link">Code ↗</a>
                </div>
              </GlassCard>

              <GlassCard>
                <span className="card-tag">Full Stack</span>
                <h3 className="card-title">AirBnB Clone</h3>
                <p className="card-desc">
                  A property listing and booking web application modelled after AirBnB.
                  Built to demonstrate full-stack architecture and dynamic UI rendering.
                </p>
                <p className="card-stack">Python · Django · JavaScript</p>
                <div className="card-links">
                  <a href="https://github.com/Rodney-king/Air-BNB-" target="_blank" className="card-link">Code ↗</a>
                </div>
              </GlassCard>

              <GlassCard>
                <span className="card-tag">Backend Project</span>
                <h3 className="card-title">Django Project</h3>
                <p className="card-desc">
                  A backend web project built with Django demonstrating server-side architecture,
                  URL routing, views, templates, and database integration.
                </p>
                <p className="card-stack">Python · Django · SQLite</p>
                <div className="card-links">
                  <a href="https://github.com/Rodney-king/mydjangoproject" target="_blank" className="card-link">Code ↗</a>
                </div>
              </GlassCard>

            </div>
          </section>
        </FadeSection>

        <div className="divider" />

        {/* ABOUT */}
        <FadeSection>
          <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
            <div className="section-label">Who I Am</div>
            <h2 className="section-heading">About</h2>
            <p className="mt-8 text-gray-400 text-lg leading-relaxed">
              I'm a junior frontend / full-stack developer based in Nairobi, currently pursuing a Bachelor's in Computer Science at Riara University. I have hands-on experience building real-world web systems — including ICT and administrative support at the GDP eCitizen Office under the National Treasury, alongside personal and academic projects. Deliberate work. Always improving.
            </p>
          </section>
        </FadeSection>

        <div className="divider" />

        {/* EDUCATION */}
        <FadeSection>
          <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="section-label">Academic Background</div>
            <h2 className="section-heading">Education</h2>
            <div className="grid gap-6 md:grid-cols-2 mt-12">

              <GlassCard>
                <span className="card-tag">In Progress · 2026</span>
                <h3 className="card-title">BSc Computer Science</h3>
                <p className="card-desc">Riara University, Nairobi</p>
              </GlassCard>

              <GlassCard>
                <span className="card-tag">Completed · December 2025</span>
                <h3 className="card-title">Diploma in Computer Science</h3>
                <p className="card-desc">The Co-operative University of Kenya</p>
                <p className="card-stack">Cert No: 16597</p>
              </GlassCard>

              <GlassCard>
                <span className="card-tag">Completed</span>
                <h3 className="card-title">Certificate in Full Stack Development</h3>
                <p className="card-desc">eMobilis Technology Training Institute, Westlands</p>
              </GlassCard>

              <GlassCard>
                <span className="card-tag">KCSE</span>
                <h3 className="card-title">Upper Hill School, Nairobi</h3>
                <p className="card-desc">Computer Studies: A Plain</p>
              </GlassCard>

            </div>
          </section>
        </FadeSection>

        <div className="divider" />

        {/* CV */}
        <FadeSection>
          <section id="cv" className="py-24 px-6 max-w-4xl mx-auto text-center">
            <div className="section-label">Download</div>
            <h2 className="section-heading">Curriculum Vitae</h2>
            <p className="text-gray-400 text-lg mt-4 mb-10">
              Frontend / Full-Stack Developer (Junior) · Government & private-sector experience.
            </p>
            <a href="/cv/Rooney_King_MainaCV_1.pdf" download className="btn-primary">
              Download CV ↓
            </a>
          </section>
        </FadeSection>

        <div className="divider" />

        {/* CONTACT */}
        <FadeSection>
          <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
            <div className="section-label">Let's Talk</div>
            <h2 className="section-heading">Contact</h2>
            <p className="text-gray-400 text-lg mt-4 mb-10">
              Open to junior frontend / full-stack roles, internships, and graduate opportunities.
            </p>
            <div className="space-y-5 text-lg">
              <p>
                <span className="text-gray-600">Email </span>
                <button onClick={handleCopyEmail} className="hover:text-gray-300 transition">
                  krodney552@gmail.com
                  <span className="ml-3 text-sm text-gray-500">
                    {copied ? "Copied ✓" : "[ copy ]"}
                  </span>
                </button>
              </p>
              <p>
                <span className="text-gray-600">Phone </span>
                <a href="tel:+254707797037" className="hover:text-gray-300 transition">+254 707 797 037</a>
              </p>
              <p>
                <span className="text-gray-600">GitHub </span>
                <a href="https://github.com/Rodney-king" target="_blank" className="hover:text-gray-300 transition">
                  github.com/Rodney-king
                </a>
              </p>
            </div>
          </section>
        </FadeSection>

        {/* FOOTER */}
        <footer className="py-8 text-center text-gray-700 text-sm border-t border-gray-900">
          © 2026 Rooney King · Built with React & Vite
        </footer>

      </main>
    </>
  );
}

