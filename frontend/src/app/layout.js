import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stock Management Application",
  description: "Ahmad Bardana Stock Management Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="w-full bg-black flex justify-between flex-col items-center lg:flex-row mt-[100vh]">
          <h3 className="text-white text-sm py-2 lg:pl-4">
            Developer : Ahmad Imran
          </h3>
          <h4 className="text-white text-sm pb-1 lg:pr-4">
            Developer Contact : 03096600431
          </h4>
        </footer>
      </body>
    </html>
  );
}
