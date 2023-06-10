import Navbar from "@/components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Provider } from "@/utils/Provider";
import Footer from "@/components/Footer";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "Study Squad",
	description: "Study Squad",
};

export default function RootLayout({ children }) {
	return (
		<html  lang="en">
			<body className={roboto.className}>
				<Provider>
					<Navbar />
					<main className="container mx-auto">{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
