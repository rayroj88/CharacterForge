import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-dungeon-bg dark:bg-dark-dungeon-bg bg-cover">
      <div className="relative w-full h-[300px]">
        <Image src="/banner/banner.png" alt="Banner" width={1900} height={300}/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-60 px-4 py-2 rounded">
            <h1 className="text-4xl font-bold text-white">Welcome to CharacterForge</h1>
          </div>
        </div>
      </div>
      <div className="z-10 max-w-5xl w-full font-mono text-sm mt-10"> {/* Added mt-10 for margin top */}
        <div className="flex flex-col items-center justify-center gap-10 text-center">
          <Link href="/charactercreation">
            <span className="group inline-block text-center">
              <h2 className="mb-3 text-2xl font-semibold">
                Character Creation{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Forge your hero with customizable classes, races, and abilities.
              </p>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
