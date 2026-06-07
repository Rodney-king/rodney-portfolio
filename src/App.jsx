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

// Fade in on scroll hook
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-6");
        }
      },
      { threshold: 0.15 }
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
      className={`opacity-0 translate-y-6 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const heroName = useTypingEffect("ROONEY KING", 100);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("krodney552@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-black text-white opacity-100">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight min-h-[1.2em]">
          {heroName}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl">
          Software Engineer focused on building clean systems with strong visual identity.
        </p>
        <div className="mt-10 flex gap-6">
          <a
            href="#projects"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
          >
            View Work
          </a>
          <a
            href="#about"
            className="px-6 py-3 text-gray-400 hover:text-white transition"
          >
            About
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <FadeSection>
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Selected Projects</h2>
          <div className="grid gap-12 md:grid-cols-2">

            {/* Project 1 */}
            <div className="border border-gray-800 p-8 hover:border-white transition">
              <span className="text-sm text-gray-500 uppercase tracking-wide">Web Application</span>
              <h3 className="mt-2 text-2xl font-semibold">Personal Portfolio</h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Minimal, performance-focused portfolio built with React, Vite, and Tailwind CSS.
                Designed to communicate clarity, structure, and intent.
              </p>
              <p className="mt-6 text-sm text-gray-500">React · Tailwind · Vite</p>
              <div className="mt-6 flex gap-6 text-sm">
                <a href="https://rodney-portfolio-szjn.vercel.app/" target="_blank" className="underline hover:text-gray-300">Live</a>
                <a href="https://github.com/Rodney-king/rodney-portfolio" target="_blank" className="underline hover:text-gray-300">Code</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-gray-800 p-8 hover:border-white transition">
              <span className="text-sm text-gray-500 uppercase tracking-wide">Client Website</span>
              <h3 className="mt-2 text-2xl font-semibold">School Website</h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                A school administration system built with React that allows authorized
                administrators to add, update, and manage student records through a structured interface.
                Designed for internal visibility, data organization, and ease of use.
              </p>
              <p className="mt-6 text-sm text-gray-500">HTML · CSS · JavaScript</p>
              <div className="mt-6 flex gap-6 text-sm">
                <a href="https://rodney-king.github.io/School-website/" target="_blank" className="underline hover:text-gray-300">Live</a>
                <a href="https://github.com/Rodney-king/School-website" target="_blank" className="underline hover:text-gray-300">Code</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-gray-800 p-8 hover:border-white transition">
              <span className="text-sm text-gray-500 uppercase tracking-wide">Full Stack Application</span>
              <h3 className="mt-2 text-2xl font-semibold">AirBnB Clone</h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                A property listing and booking web application modelled after AirBnB.
                Built to demonstrate full-stack architecture, dynamic UI rendering,
                and structured data handling.
              </p>
              <p className="mt-6 text-sm text-gray-500">Python · Django · JavaScript</p>
              <div className="mt-6 flex gap-6 text-sm">
                <a href="https://github.com/Rodney-king/Air-BNB-" target="_blank" className="underline hover:text-gray-300">Code</a>
              </div>
            </div>

            {/* Project 4 — Fun */}
            <div className="border border-gray-800 p-8 hover:border-white transition">
              <span className="text-sm text-gray-500 uppercase tracking-wide">Fun Project</span>
              <h3 className="mt-2 text-2xl font-semibold">Valentine's Card</h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                A custom digital Valentine's card built for someone special.
                Proof that code can be personal — sometimes you build for the moment, not the resume.
              </p>
              <p className="mt-6 text-sm text-gray-500">HTML · CSS · JavaScript</p>
            </div>

          </div>
        </section>
      </FadeSection>

      <div className="w-full max-w-6xl mx-auto border-t border-gray-800" />

      {/* ABOUT */}
      <FadeSection>
        <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a junior frontend / full-stack developer based in Nairobi, currently pursuing a
            Bachelor's in Computer Science at Riara University. I have hands-on experience building
            real-world web systems — from government ICT environments to structured institutional
            projects. Deliberate work. Always improving.
          </p>
        </section>
      </FadeSection>

      <div className="w-full max-w-6xl mx-auto border-t border-gray-800" />

      {/* EDUCATION */}
      <FadeSection>
        <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <div className="grid gap-8 md:grid-cols-2">

            <div className="border border-gray-800 p-8 hover:border-white transition">
              <span className="text-sm text-gray-500 uppercase tracking-wide">In Progress · 2026</span>
              <h3 className="mt-2 text-2xl font-semibold">BSc Computer Science</h3>
              <p className="mt-3 text-gray-400">Riara University, Nairobi</p>
            </div>

            <div className="border border-gray-800 p-8 hover:border-white transition">
              <span className="text-sm text-gray-500 uppercase tracking-wide">Completed · December 2025</span>
              <h3 className="mt-2 text-2xl font-semibold">Diploma in Computer Science</h3>
              <p className="mt-3 text-gray-400">The Co-operative University of Kenya</p>
              <p className="mt-2 text-sm text-gray-500">Lower Credit · Cert No. 16597</p>
            </div>

            <div className="border border-gray-800 p-8 hover:border-white transition">
              <span className="text-sm text-gray-500 uppercase tracking-wide">Completed</span>
              <h3 className="mt-2 text-2xl font-semibold">Certificate in Full Stack Development</h3>
              <p className="mt-3 text-gray-400">eMobilis Technology Training Institute, Westlands</p>
            </div>

            <div className="border border-gray-800 p-8 hover:border-white transition">
              <span className="text-sm text-gray-500 uppercase tracking-wide">KCSE</span>
              <h3 className="mt-2 text-2xl font-semibold">Upper Hill School, Nairobi</h3>
              <p className="mt-3 text-gray-400">Computer Studies: A Plain</p>
            </div>

          </div>
        </section>
      </FadeSection>

      <div className="w-full max-w-6xl mx-auto border-t border-gray-800" />

      {/* CV */}
      <FadeSection>
        <section id="cv" className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Curriculum Vitae</h2>
          <p className="text-gray-400 text-lg mb-10">
            Frontend / Full-Stack Developer (Junior) with government and private-sector experience.
          </p>
          <a
            href="/cv/Rooney_King_MainaCV_1.pdf"
            download
            className="inline-block px-8 py-4 border border-white hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </section>
      </FadeSection>

      {/* CONTACT */}
      <div className="w-full max-w-6xl mx-auto border-t border-gray-800" />
      <FadeSection>
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-gray-400 text-lg mb-8">
            Open to junior frontend / full-stack roles, internships, and graduate opportunities.
          </p>
          <div className="space-y-4 text-lg">
            <p>
              <span className="text-gray-500">Email: </span>
              <button
                onClick={handleCopyEmail}
                className="hover:underline focus:outline-none transition"
              >
                krodney552@gmail.com
                <span className="ml-3 text-sm text-gray-500">
                  {copied ? "Copied ✓" : "[ copy ]"}
                </span>
              </button>
            </p>
            <p>
              <span className="text-gray-500">Phone: </span>
              <a href="tel:+254707797037" className="hover:underline">+254 707 797 037</a>
            </p>
            <p>
              <span className="text-gray-500">GitHub: </span>
              <a href="https://github.com/Rodney-king" target="_blank" className="hover:underline">
                github.com/Rodney-king
              </a>
            </p>
          </div>
        </section>
      </FadeSection>

    </main>
  );
}
