import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <p className="font-semibold text-2xl">Welcome to Euro Stats!</p>
          <p className="font-extralight">
            Player and Team statistics for the EuroLeague
          </p>
          <Link href="/teams">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 font-bold bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get Started!
              </span>
            </button>
          </Link>
        </main>
      </div>
    </>
  );
}
