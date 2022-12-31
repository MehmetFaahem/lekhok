import "../styles/globals.css";

import { Poppins } from "@next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
