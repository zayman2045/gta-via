export default function Navbar() {
  return (
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
  );
}
