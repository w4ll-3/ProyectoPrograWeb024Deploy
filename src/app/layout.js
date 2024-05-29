import "./css/card.scss";
import "./css/globals.scss";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio Wellington Cua",
  description:
    "Este es el portafolio de Wellington Cua. Soy un desarrollador frontend autodidacta. Me encanta aprender cosas nuevas y siempre estoy abierto a colaborar con otros. Aprendo rápido y siempre estoy buscando nuevos desafíos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" translate="no">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
