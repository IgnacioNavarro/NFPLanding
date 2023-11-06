import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Non Fungible Pizza",
  description: "Colecciona tus pizzas favoritas en la blockchain, Pizzas NFT PFP profile pics, tokenizadas para que las puedas coleccionar y usar en tus redes sociales. El beneficio de la venta de las pizzas sera donado a personas sin hogar o en necesidad.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
