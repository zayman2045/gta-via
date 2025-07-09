import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background image */}
      <Image
        src="/gta6-bg.jpg"
        alt="GTA VIA Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 opacity-80"
        priority
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      {/* Content */}
      <main className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
          GTA VIA
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow-md">
          Experience the next generation of Grand Theft Auto. Explore, connect,
          and create in the ultimate open-world adventure.
        </p>
      </main>
    </div>
  );
}
