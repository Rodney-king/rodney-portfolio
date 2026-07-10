import { useEffect, useRef, useState } from "react";

// Typing animation
function useTypingEffect(text, speed = 80) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text]);
  return displayed;
}

// Fade in on scroll
function FadeIn({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const heroName = useTypingEffect("ROONEY KING", 90);
  const [copied, setCopied] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorLarge, setCursorLarge] = useState({ x: 0, y: 0 });

  // Custom cursor
  useEffect(() => {
    const moveCursor = (e) => setCursor({ x: e.clientX, y: e.clientY });
    const moveLarge = (e) => {
      setTimeout(() => setCursorLarge({ x: e.clientX, y: e.clientY }), 80);
    };
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", moveLarge);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", moveLarge);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("krodney552@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      tag: "Backend Project",
      title: "Django Project",
      desc: "A backend web project built with Django demonstrating server-side architecture, URL routing, views, templates, and database integration.",
      stack: "Python · Django · SQLite",
      code: "https://github.com/Rodney-king/mydjangoproject",
      featured: true,
    },
    {
      tag: "Web Application",
      title: "Personal Portfolio",
      desc: "Minimal, performance-focused portfolio built with React, Vite, and Tailwind CSS. Designed to communicate clarity, structure, and intent.",
      stack: "React · Tailwind · Vite",
      live: "https://rodney-portfolio-szjn.vercel.app/",
      code: "https://github.com/Rodney-king/rodney-portfolio",
    },
    {
      tag: "Client Website",
      title: "School Website",
      desc: "A school administration system allowing authorized administrators to add, update, and manage student records through a structured interface.",
      stack: "HTML · CSS · JavaScript",
      live: "https://rodney-king.github.io/School-website/",
      code: "https://github.com/Rodney-king/School-website",
    },
    {
      tag: "Full Stack",
      title: "AirBnB Clone",
      desc: "A property listing and booking web application modelled after AirBnB demonstrating full-stack architecture and dynamic UI rendering.",
      stack: "Python · Django · JavaScript",
      code: "https://github.com/Rodney-king/Air-BNB-",
    },
  ];

  return (
    <>
      {/* CUSTOM CURSOR */}
      <div
        style={{
          position: "fixed",
          left: cursor.x - 5,
          top: cursor.y - 5,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#22d3ee",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.1s ease",
          mixBlendMode: "difference",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: cursorLarge.x - 20,
          top: cursorLarge.y - 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid rgba(34,211,238,0.4)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "all 0.15s ease",
        }}
      />

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(10,10,18,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(34,211,238,0.08)",
        padding: "1rem 2rem",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <span style={{ fontWeight: 800, letterSpacing: "0.2em", fontSize: "0.9rem", color: "#22d3ee" }}>RK</span>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {["projects", "about", "education", "contact"].map(s => (
            <a key={s} href={`#${s}`} style={{
              color: "#6b7280", fontSize: "0.8rem", letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none",
              transition: "color 0.3s"
            }}
              onMouseEnter={e => e.target.style.color = "#22d3ee"}
              onMouseLeave={e => e.target.style.color = "#6b7280"}
            >{s}</a>
          ))}
        </div>
      </nav>

      <main style={{ background: "#0a0a12", color: "#fff", scrollBehavior: "smooth" }}>

        {/* HERO */}
        <section style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "6rem 1.5rem 3rem",
          position: "relative", overflow: "hidden"
        }}>
          {/* glow orb */}
          <div style={{
            position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
            width: 600, height: 600,
            background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
            pointerEvents: "none"
          }} />
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.4em", color: "#374151", marginBottom: "1.5rem", textTransform: "uppercase" }}>
            Junior Software Developer · Nairobi, Kenya
          </p>
          <h1 style={{
            fontSize: "clamp(3rem, 12vw, 8rem)", fontWeight: 800,
            letterSpacing: "-0.03em", lineHeight: 1, minHeight: "1.2em",
            background: "linear-gradient(135deg, #ffffff 0%, #22d3ee 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            {heroName}<span style={{ WebkitTextFillColor: "#374151" }}>|</span>
          </h1>
          <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", color: "#6b7280", maxWidth: 500, lineHeight: 1.7 }}>
            Building clean systems with strong visual identity.
          </p>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#projects" style={{
              padding: "0.8rem 2rem", background: "#22d3ee", color: "#0a0a12",
              fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em",
              textDecoration: "none", transition: "all 0.3s"
            }}
              onMouseEnter={e => { e.target.style.background = "#fff"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.background = "#22d3ee"; e.target.style.transform = "translateY(0)"; }}
            >View Work</a>
            <a href="#contact" style={{
              padding: "0.8rem 2rem", border: "1px solid rgba(34,211,238,0.3)",
              color: "#9ca3af", fontWeight: 500, fontSize: "0.85rem",
              textDecoration: "none", transition: "all 0.3s"
            }}
              onMouseEnter={e => { e.target.style.borderColor = "#22d3ee"; e.target.style.color = "#fff"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(34,211,238,0.3)"; e.target.style.color = "#9ca3af"; }}
            >Get in Touch</a>
          </div>
        </section>

        {/* PROJECTS */}
        <FadeIn>
          <section id="projects" style={{ padding: "6rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#374151", textTransform: "uppercase" }}>Selected Work</p>
            <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: "0.5rem" }}>Projects</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
              {projects.map((p, i) => (
                <div key={i}
                  style={{
                    background: p.featured ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(12px)",
                    border: p.featured ? "1px solid rgba(34,211,238,0.2)" : "1px solid rgba(255,255,255,0.06)",
                    padding: "2rem",
                    transition: "all 0.4s ease",
                    position: "relative",
                    cursor: "none",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)";
                    e.currentTarget.style.boxShadow = "0 0 30px rgba(34,211,238,0.08)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = p.featured ? "rgba(34,211,238,0.2)" : "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {p.featured && (
                    <span style={{
                      position: "absolute", top: "1rem", right: "1rem",
                      fontSize: "0.55rem", letterSpacing: "0.15em", color: "#22d3ee",
                      border: "1px solid rgba(34,211,238,0.3)", padding: "2px 8px",
                      textTransform: "uppercase"
                    }}>Featured</span>
                  )}
                  <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "#374151", textTransform: "uppercase" }}>{p.tag}</span>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginTop: "0.5rem", color: "#fff" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.7, marginTop: "0.75rem" }}>{p.desc}</p>
                  <p style={{ fontSize: "0.75rem", color: "#1f2937", marginTop: "1.5rem", letterSpacing: "0.05em" }}>{p.stack}</p>
                  <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.25rem" }}>
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={{ fontSize: "0.8rem", color: "#22d3ee", textDecoration: "none" }}>Live ↗</a>}
                    {p.code && <a href={p.code} target="_blank" rel="noreferrer" style={{ fontSize: "0.8rem", color: "#6b7280", textDecoration: "none" }}
                      onMouseEnter={e => e.target.style.color = "#fff"}
                      onMouseLeave={e => e.target.style.color = "#6b7280"}
                    >View Code ↗</a>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <div style={{ maxWidth: "72rem", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.04)" }} />

        {/* ABOUT */}
        <FadeIn>
          <section id="about" style={{ padding: "6rem 1.5rem", maxWidth: "56rem", margin: "0 auto" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#374151", textTransform: "uppercase" }}>Who I Am</p>
            <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: "0.5rem" }}>About</h2>
            <p style={{ fontSize: "1.1rem", color: "#6b7280", lineHeight: 1.8, marginTop: "2rem" }}>
              I'm a junior frontend / full-stack developer based in Nairobi, currently pursuing a
              Bachelor's in Computer Science at Riara University. I have hands-on experience building
              real-world web systems — including ICT and administrative support at the GDP eCitizen
              Office under the National Treasury, alongside personal and academic projects.
              Deliberate work. Always improving.
            </p>
          </section>
        </FadeIn>

        <div style={{ maxWidth: "72rem", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.04)" }} />

        {/* EDUCATION */}
        <FadeIn>
          <section id="education" style={{ padding: "6rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#374151", textTransform: "uppercase" }}>Academic Background</p>
            <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: "0.5rem" }}>Education</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
              {[
                { period: "In Progress · 2026", title: "BSc Computer Science", sub: "Riara University, Nairobi" },
                { period: "Completed · Dec 2025", title: "Diploma in Computer Science", sub: "The Co-operative University of Kenya", note: "Cert No: 16597" },
                { period: "Completed", title: "Certificate in Full Stack Development", sub: "eMobilis Technology Training Institute" },
                { period: "KCSE", title: "Upper Hill School, Nairobi", sub: "Computer Studies: A Plain" },
              ].map((e, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                  padding: "1.75rem", transition: "all 0.3s",
                }}
                  onMouseEnter={el => { el.currentTarget.style.borderColor = "rgba(34,211,238,0.2)"; el.currentTarget.style.background = "rgba(34,211,238,0.02)"; }}
                  onMouseLeave={el => { el.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; el.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                >
                  <span style={{ fontSize: "0.6rem", letterSpacing: "0.12em", color: "#374151", textTransform: "uppercase" }}>{e.period}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginTop: "0.5rem" }}>{e.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "0.4rem" }}>{e.sub}</p>
                  {e.note && <p style={{ fontSize: "0.75rem", color: "#374151", marginTop: "0.4rem" }}>{e.note}</p>}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <div style={{ maxWidth: "72rem", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.04)" }} />

        {/* CV */}
        <FadeIn>
          <section id="cv" style={{ padding: "6rem 1.5rem", maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#374151", textTransform: "uppercase" }}>Download</p>
            <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: "0.5rem" }}>Curriculum Vitae</h2>
            <p style={{ color: "#6b7280", marginTop: "1rem", marginBottom: "2.5rem" }}>
              Frontend / Full-Stack Developer (Junior) · Government & private-sector experience.
            </p>
            <a href="/cv/Rooney_King_MainaCV_1.pdf" download style={{
              display: "inline-block", padding: "0.9rem 2.5rem",
              background: "#22d3ee", color: "#0a0a12", fontWeight: 700,
              fontSize: "0.875rem", letterSpacing: "0.05em", textDecoration: "none",
              transition: "all 0.3s"
            }}
              onMouseEnter={e => { e.target.style.background = "#fff"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.background = "#22d3ee"; e.target.style.transform = "translateY(0)"; }}
            >Download CV ↓</a>
          </section>
        </FadeIn>

        <div style={{ maxWidth: "72rem", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.04)" }} />

        {/* CONTACT */}
        <FadeIn>
          <section id="contact" style={{ padding: "6rem 1.5rem", maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#374151", textTransform: "uppercase" }}>Let's Talk</p>
            <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: "0.5rem" }}>Contact</h2>
            <p style={{ color: "#6b7280", marginTop: "1rem", marginBottom: "2.5rem" }}>
              Open to junior frontend / full-stack roles, internships, and graduate opportunities.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "1rem" }}>
              <p>
                <span style={{ color: "#374151" }}>Email </span>
                <button onClick={handleCopy} style={{
                  background: "none", border: "none", color: "#fff",
                  cursor: "none", fontSize: "1rem", transition: "color 0.3s"
                }}>
                  krodney552@gmail.com
                  <span style={{ marginLeft: "0.75rem", fontSize: "0.75rem", color: "#22d3ee" }}>
                    {copied ? "Copied ✓" : "[ copy ]"}
                  </span>
                </button>
              </p>
              <p>
                <span style={{ color: "#374151" }}>Phone </span>
                <a href="tel:+254707797037" style={{ color: "#fff", textDecoration: "none" }}>+254 707 797 037</a>
              </p>
              <p>
                <span style={{ color: "#374151" }}>GitHub </span>
                <a href="https://github.com/Rodney-king" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none" }}>github.com/Rodney-king</a>
              </p>
            </div>
          </section>
        </FadeIn>

        <footer style={{ padding: "2rem", textAlign: "center", color: "#1f2937", fontSize: "0.8rem", borderTop: "1px solid rgba(255,255,255,0.03)" }}>
          © 2026 Rooney King · Built with React & Vite
        </footer>

      </main>
    </>
  );
}
