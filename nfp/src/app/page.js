import ContactForm from "@/component/ContactForm"
import PizzaBox from "@/component/spline"
import Link from "next/link"
require('dotenv').config()

export default function Component() {
  <link rel="icon" href="/favicon.ico" sizes="any" />

  return (
    <div className="relative flex flex-col bg-light-blue-200 dark:bg-light-blue-900">
      <header className="w-full bg-white dark:bg-zinc-900 py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img
            alt="Logo"
            src="images/NFP WORD.png"
            className="h-8 w-auto sm:h-10 mr-4"
          />


          <nav>
            <ul className="flex space-x-4">

              <li>
                <Link
                  className="text-zinc-900 hover:text-green-500 dark:text-zinc-50 dark:hover:text-green-500 hidden md:block"
                  href="#about"
                >
                  Sobre NFP
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-900 hover:text-green-500 dark:text-zinc-50 dark:hover:text-green-500"
                  href="#contact"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  className="h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-500 dark:text-white dark:hover:bg-green-600 dark:focus-visible:ring-green-600"
                  href="#"
                >
                  Obtener
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>


      <section className="w-full pt-12 md:py-24 lg:py-30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">
                Non-fungible Pizza
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                
                Descubre y colecciona nuestros <b>NFTs benéficos</b> con temática de pizza. Únete a la comunidad y apoya a las <b>personas sin hogar y que más lo necesitan</b>.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                href="#"
              >
                Explora la colección
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-500 dark:text-white dark:hover:bg-green-600 dark:focus-visible:ring-green-600"
                href="#"
              >
                Consigue tu NFP
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2 my-4 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                href="#about"
              >
                Más
              </Link>
            </div>
          </div>
          <div className="px-4 md:px-6 mx-auto">
          <PizzaBox className="h-10"/>
        </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 min-[300px]:px-5 lg:py-32 bg-zinc-50 dark:bg-zinc-950" id="#about">
      <div
          className="container px-4 md:px-6 mt-12 scroll-opacity-100 bg-white dark:bg-zinc-900 rounded-lg p-4 mx-auto max-w-[700px] shadow-md"
          id="about">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none mb-4 text-center text-zinc-900 dark:text-zinc-50">
            Sobre NFP
          </h2>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow-md">
            <details className="relative mb-4">
              <summary className="font-semibold text-zinc-900 dark:text-zinc-50 cursor-pointer flex justify-between items-center">
                <span>¿Qué es NFP?</span>
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
                NFP o Non-fungible Pizza es una colección de token no fungibles (NFTs) en forma de imagen únicas con temática de pizza.
                <br/><br/>Gracias a la tecnología blockchain, cada NFT es único y no puede ser replicado, lo que lo convierte en un objeto de colección.
              </p>
            </details>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow-md mt-4">
            <details className="relative mb-4">
              <summary className="font-semibold text-zinc-900 dark:text-zinc-50 cursor-pointer flex justify-between items-center">
                <span>Nuestro Objetivo</span>
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
                El objetivo de NFP es recaudar dinero para <b>apoyar a las personas sin hogar y que más lo necesitan</b>, de esta manera, <b>todo lo obtenido de la venta</b> de los NFTs será <b>donado</b> a quien lo necesitan en forma de pizzas o alimentos básicos.
              </p>
            </details>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow-md mt-4">
            <details className="relative mb-4">
              <summary className="font-semibold text-zinc-900 dark:text-zinc-50 cursor-pointer flex justify-between items-center">
                <span>¿Cómo obtenerlo?</span>
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
                Puedes obtener tu NFP en la página de la colección, pulsando en el botón <b>Consigue tu NFP</b>. Podrás pagar con <b>tarjeta de crédito o criptomonedas</b>.
                Tras ello, recibirás una caja de pizza, la cual contiene tu NFP, que se revelará <b>más adelante</b>.
              </p>
            </details>
          </div>
        </div>
      </section>



      <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
        <ContactForm />
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
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-900 hover:text-green-500 dark:text-zinc-50 dark:hover:text-green-500"
                  href="#"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>


    </div>
  )
}
