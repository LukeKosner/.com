import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaArrowRight,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

export default function Home() {
  const date = new Date();

  return (
    <main className="min-h-screen flex flex-col bg-gray-200 text-black dark:bg-gray-900 dark:text-white p-5">
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
          <Link href="https://linkedin.com/in/luke-kosner">
            <FaLinkedin className="text-2xl" />
          </Link>
        </div>
      </div>
      <div id="columns" className="flex flex-row flex-grow">
        <div id="line" className="w-1 mt-3 bg-black dark:bg-white rounded-xl" />

        <div id="text" className="flex flex-col p-5 space-y-12">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">
              Crafting Digital Experiences to Tell Stories.
            </h1>
            <p className="font-lg">
              NYC-based student, developer, and (wannabe) pixel pusher. Using
              TypeScript, Python, and Swift.
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
                Retooling Zekher with LangGraph to improve accuracy and decrease
                hallucination.
              </p>
              <p className="font-mono">- 4/5/25</p>
            </div>
          </div>

          <div id="projects" className="space-y-3">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="space-y-1">
              <Link
                href="https://tap.lukekosner.com"
                className="flex flex-row space-x-3 items-center hover:underline"
              >
                <h2 className="text-2xl">Zekher</h2>
                <FaArrowRight />
              </Link>
              <p>
                Ask questions about the Holocaust and receive answers from
                firsthand testimonies collected by Dr. David P. Boder.
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
              <Link href="https://linkedin.com/in/luke-kosner">
                <FaLinkedin className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" className="mt-3 flex flex-row items-center">
        <p className="text-lg">
          &copy; {date.getFullYear()} Luke Kosner. Made with ♥ in New York City,
          USA.
        </p>
      </div>
    </main>
  );
}
