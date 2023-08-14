import Navbar from "@/components/Navbar";
import "./globals.css";
import { Lato } from "next/font/google";
import Provider from "@/lib/Provider";
import Footer from "@/components/Footer";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Study Squad",
  description: "Study Squad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
