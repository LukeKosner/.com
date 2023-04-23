import Link from "next/link";
import { FaGithub, FaTwitter, FaArrowRight, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 text-black dark:bg-gray-900 dark:text-white p-5">
      <div
        id="header"
        className="h-12 flex flex-row items-center justify-between"
      >
        <h1 className="text-2xl">Luke Kosner</h1>
        <div className="flex flex-row space-x-3">
          <Link href="https://twitter.com/Luke_Kosner">
            <FaTwitter className="text-2xl" />
          </Link>
          <Link href="https://github.com/LukeKosner">
            <FaGithub className="text-2xl" />
          </Link>
        </div>
      </div>
      <div id="columns" className="flex flex-row min-h-screen">
        <div id="line" className="w-1 mt-3 bg-black dark:bg-white rounded-xl" />

        <div id="text" className="flex flex-col p-5 space-y-12">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">
              Crafting Digital Experiences to Tell Stories.
            </h1>
            <p className="font-lg">
              NYC-based student, developer, and pixel pusher. Using TypeScript,
              Python, and Swift for a better world.
            </p>
          </div>

          <div id="updates" className="space-y-3">
            <div className="flex flex-row">
              <h1 className="text-3xl font-bold">Updates</h1>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </div>

            <div className="p-3 rounded-xl border border-green-500">
              <p>
                I am bringing Gamle back into development. I am currently doing
                bug fixes and hope to release it soon.
              </p>
              <p className="font-mono">- 4/22/23</p>
            </div>
          </div>

          <div id="projects" className="space-y-3">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="space-y-1">
              <Link
                href="https://tap.lukekosner.com"
                className="flex flex-row space-x-3 items-center hover:underline"
              >
                <h2 className="text-2xl">The Auschwitz Project</h2>
                <FaArrowRight />
              </Link>
              <p>
                Sharing the primary accounts of Auschwitz through artificial
                intelligence.
              </p>
            </div>
            <div className="space-y-1">
              <Link
                href="/gamle"
                className="flex flex-row space-x-3 items-center pointer-events-none"
              >
                <h2 className="text-2xl  hover:underline">Gamle</h2>
                <p className="text-black bg-yellow-400 rounded-full px-2 py-1">
                  <p>Soon</p>
                </p>
              </Link>
              <p>
                A simple and joyful way to play Wordle-style games on your
                iPhone.
              </p>
            </div>
            <div className="space-y-1">
              <Link
                href="/ayudamigo"
                className="flex flex-row space-x-3 items-center pointer-events-none"
              >
                <h2 className="text-2xl  hover:underline">Ayudamigo</h2>
                <p className="bg-red-400 rounded-full px-2 py-1">
                  <p>Hopefully 🤞</p>
                </p>
              </Link>
              <p>
                A better purpose-based translator focusing on formal letters and
                messages.
              </p>
            </div>
          </div>

          <div id="contact" className="space-y-3">
            <h1 className="text-xl font-bold">Contact</h1>
            <div className="flex flex-row space-x-3">
              <Link href="mailto:hey@lukekosner.com">
                <FaEnvelope className="text-2xl" />
              </Link>
              <Link href="https://twitter.com/Luke_Kosner">
                <FaTwitter className="text-2xl" />
              </Link>
              <Link href="https://github.com/LukeKosner">
                <FaGithub className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" className="mt-3 flex flex-row items-center">
        <p className="text-lg">
          &copy; 2023 - Luke Kosner. Made in New York City, USA.
        </p>
      </div>
    </main>
  );
}
