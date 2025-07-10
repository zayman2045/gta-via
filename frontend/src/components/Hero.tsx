export default function Hero() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center w-full px-4 pt-32">
      <div className="gta-card max-w-2xl w-full text-center mx-auto">
        <h1
          className="text-5xl md:text-7xl font-extrabold neon-text mb-6"
          style={{ color: "var(--accent)" }}
        >
          GTA VIA
        </h1>
        <p className="text-xl md:text-2xl text-[var(--foreground)] mb-8">
          Experience the next generation of Grand Theft Auto with this community
          companion app. Explore, connect, and create in the ultimate open-world
          adventure.
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
  );
}
