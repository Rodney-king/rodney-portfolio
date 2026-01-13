export default function App() {
  return (
    <main className="bg-black text-white opacity-100">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center opacity-100">
     <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
  ROONEY KING
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
     {/* PROJECTS */}
{/* PROJECTS */}
<section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold mb-12">Selected Projects</h2>

  <div className="grid gap-12 md:grid-cols-2">
    
    {/* Project 1 */}
    <div className="border border-gray-800 p-8 hover:border-white transition">
      <span className="text-sm text-gray-500 uppercase tracking-wide">
        Web Application
      </span>

      <h3 className="mt-2 text-2xl font-semibold">
        Personal Portfolio
      </h3>

      <p className="mt-3 text-gray-400 leading-relaxed">
        Minimal, performance-focused portfolio built with React, Vite, and Tailwind CSS.
        Designed to communicate clarity, structure, and intent.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        React · Tailwind · Vite
      </p>

      <div className="mt-6 flex gap-6 text-sm">
        <a
          href="https://rodney-portfolio-szjn.vercel.app/"
          target="_blank"
          className="underline hover:text-gray-300"
        >
          Live
        </a>
        <a
          href="https://github.com/Rodney-king/rodney-portfolio"
          target="_blank"
          className="underline hover:text-gray-300"
        >
          Code
        </a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="border border-gray-800 p-8 hover:border-white transition">
      <span className="text-sm text-gray-500 uppercase tracking-wide">
        Client Website
      </span>

      <h3 className="mt-2 text-2xl font-semibold">
        School Website
      </h3>

      <p className="mt-3 text-gray-400 leading-relaxed">
        Responsive school website developed as part of an institutional project.
        Focused on accessibility, structure, and maintainable front-end architecture.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        HTML · CSS · JavaScript
      </p>

      <div className="mt-6 flex gap-6 text-sm">
        <a
          href="https://rodney-king.github.io/School-website/"
          target="_blank"
          className="underline hover:text-gray-300"
        >
          Live
        </a>
        <a
          href="https://github.com/Rodney-king/School-website"
          target="_blank"
          className="underline hover:text-gray-300"
        >
          Code
        </a>
      </div>
    </div>

  </div>
</section>
      <div className="w-full max-w-6xl mx-auto border-t border-gray-800" />


      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
  I’m a software engineer who values structure, intent, and execution.
  I focus on building systems that are efficient, visually disciplined,
  and scalable. I’m intentional about what I build, how it looks, and
  why it exists.
</p>

      </section>
      <div className="w-full max-w-6xl mx-auto border-t border-gray-800" />
      {/* CV */}
<section id="cv" className="py-24 px-6 max-w-4xl mx-auto text-center">
  <h2 className="text-4xl font-bold mb-6">Curriculum Vitae</h2>

  <p className="text-gray-400 text-lg mb-10">
    Frontend / Full-Stack Developer (Junior) with government and private-sector experience.
  </p>

  <a
    href="/cv/Rooney_King_CV_.pdf"
    download
    className="inline-block px-8 py-4 border border-white hover:bg-white hover:text-black transition"
  >
    Download CV
  </a>
</section>
    </main>
  )
}
