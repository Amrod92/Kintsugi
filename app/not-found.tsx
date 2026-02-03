import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen px-2">
        <div className="text-center">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-2xl font-medium mt-4">
            Oops! Non esiste questa pagina
          </p>
          <p className="mt-4 mb-8">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <Link
            href="/"
            className="
              hidden md:inline-flex
              relative overflow-hidden
              px-6 py-2.5
              rounded-full
              text-sm font-semibold
              text-yellow-100
              shadow-md
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-lg
              focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/70
              bg-[url('/kintsugi-marble.jpg')]
              bg-cover bg-center
            "
          >
            {/* Dark polish overlay */}
            <span className="absolute inset-0 bg-black/35" />
            {/* Gold highlight sheen */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-yellow-300/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 tracking-wide">Torna alla Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
