import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-dungeon-bg dark:bg-dark-dungeon-bg bg-cover">
      <div className="z-10 max-w-5xl w-full font-mono text-sm">
        <div className="mb-32 grid place-items-center gap-10 text-center lg:grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
          <Link href="/charactercreation">
            <span className="group">
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

          <Link href="/hall">
            <span className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className="mb-3 text-2xl font-semibold">
                Hall of Heroes{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                "Walk the halls where the echoes of valorous deeds resonate, and draw inspiration from the heroes of yore."
              </p>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
