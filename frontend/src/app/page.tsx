export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Neon Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-30 transition-all bg-black/70 backdrop-blur border-b border-[var(--accent)] shadow-lg">
        <span
          className="text-2xl font-extrabold neon-text"
          style={{ color: "var(--accent)" }}
        >
          GTA VIA
        </span>
        <div className="flex gap-8">
          <a
            href="#"
            className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition neon-text"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition neon-text"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition neon-text"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition neon-text"
          >
            Contact
          </a>
        </div>
      </nav>
      {/* Main Content Card */}
      <main className="flex flex-1 flex-col items-center justify-center w-full px-4 pt-32">
        <div className="gta-card max-w-2xl w-full text-center mx-auto">
          <h1
            className="text-5xl md:text-7xl font-extrabold neon-text mb-6"
            style={{ color: "var(--accent)" }}
          >
            GTA VIA
          </h1>
          <p className="text-xl md:text-2xl text-[var(--foreground)] mb-8">
            Experience the next generation of Grand Theft Auto. Explore,
            connect, and create in the ultimate open-world adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#get-started" className="gta-button">
              Get Started
            </a>
            <a href="#learn-more" className="gta-button secondary">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
