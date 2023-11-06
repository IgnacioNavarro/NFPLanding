/**
 * v0 by Vercel.
 * @see https://v0.dev/t/abb1iZDoB9o
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="relative flex flex-col bg-light-blue-200 dark:bg-light-blue-900">
      <header className="w-full bg-white dark:bg-zinc-900 py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img
            alt="Logo"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "100/40",
              objectFit: "cover",
            }}
            width={100}
          />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  className="text-zinc-900 hover:text-green-500 dark:text-zinc-50 dark:hover:text-green-500"
                  href="#"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-900 hover:text-green-500 dark:text-zinc-50 dark:hover:text-green-500"
                  href="#"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-500 dark:text-white dark:hover:bg-green-600 dark:focus-visible:ring-green-600"
                  href="#"
                >
                  Mint Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 h-[calc(100dvh-10dvh)]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">
                Non-fungible Pizza
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Discover and collect our unique pizza-themed NFTs. Join the community of digital art enthusiasts.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                href="#"
              >
                Explore Collection
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-500 dark:text-white dark:hover:bg-green-600 dark:focus-visible:ring-green-600"
                href="#"
              >
                Mint NFT
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-950">
      <div
          className="container px-4 md:px-6 mt-12 scroll-opacity-100 bg-white dark:bg-zinc-900 rounded-lg p-4 mx-auto max-w-[700px] shadow-md"
          id="about">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none mb-4 text-center text-zinc-900 dark:text-zinc-50">
            Frequently Asked Questions
          </h2>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow-md">
            <details className="relative mb-4">
              <summary className="font-semibold text-zinc-900 dark:text-zinc-50 cursor-pointer flex justify-between items-center">
                <span>What are NFTs?</span>
                <svg
                  className=" absolute right-0 mr-2"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </summary>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                NFTs, or non-fungible tokens, represent ownership of unique items or assets on a blockchain.
              </p>
            </details>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow-md mt-4">
            <details className="relative mb-4">
              <summary className="font-semibold text-zinc-900 dark:text-zinc-50 cursor-pointer flex justify-between items-center">
                <span>How to claim?</span>
                <svg
                  className=" absolute right-0 mr-2"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </summary>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                To claim an NFT, you need to set up a digital wallet, mint the NFT, and then receive it in your wallet.
              </p>
            </details>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow-md mt-4">
            <details className="relative mb-4">
              <summary className="font-semibold text-zinc-900 dark:text-zinc-50 cursor-pointer flex justify-between items-center">
                <span>Our Aim</span>
                <svg
                  className=" absolute right-0 mr-2"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </summary>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                Our aim is to build a community of digital art enthusiasts, revolutionize the perception of art, and
                promote blockchain technology.
              </p>
            </details>
          </div>
        </div>
      </section>



      <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
        <div className="container px-4 md:px-6 mx-auto max-w-[700px]">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none mb-4 text-center">
            Contact Us
          </h2>
          <form className="space-y-4">
            <input
              aria-label="Your Name"
              className="block w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm transition-colors hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:focus-visible:ring-zinc-300"
              placeholder="Your Name"
              type="text"
            />
            <input
              aria-label="Your Email"
              className="block w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm transition-colors hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:focus-visible:ring-zinc-300"
              placeholder="Your Email"
              type="email"
            />
            <textarea
              aria-label="Your Message"
              className="block w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm transition-colors hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:focus-visible:ring-zinc-300"
              placeholder="Your Message"
            />
            <div className="flex items-center justify-between">
              <div>
                <input
                  aria-label="Captcha"
                  className="rounded border border-zinc-200 bg-white shadow-sm transition-colors hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:focus-visible:ring-zinc-300"
                  id="captcha"
                  type="checkbox"
                />
                <label className="ml-2 text-zinc-500 md:text-xl dark:text-zinc-400" htmlFor="captcha">
                  I am not a robot
                </label>
              </div>
              <button
                className="inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-500 dark:text-white dark:hover:bg-green-600 dark:focus-visible:ring-green-600"
                type="submit"
                variant="default"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

    <footer className="w-full bg-white dark:bg-zinc-900 py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-zinc-500 dark:text-zinc-400">
            © 2023 Non-fungible Pizza. All rights reserved.
          </p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  className="text-zinc-900 hover:text-green-500 dark:text-zinc-50 dark:hover:text-green-500"
                  href="#"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-900 hover:text-green-500 dark:text-zinc-50 dark:hover:text-green-500"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>



      <button className="fixed right-4 bottom-4 w-12 h-12 rounded-full bg-green-500 shadow-lg flex items-center justify-center">
        <img
          alt="Floating Button Image"
          height="24"
          src="/placeholder.svg"
          style={{
            aspectRatio: "24/24",
            objectFit: "cover",
          }}
          width="24"
        />
      </button>
    </div>
  )
}
