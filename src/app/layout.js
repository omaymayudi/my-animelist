import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layouts/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "cuyanimelist",
  description: "Website for anime indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-white`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
