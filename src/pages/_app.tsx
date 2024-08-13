import type { AppProps } from "next/app";

import { cx } from "class-variance-authority";
import { Montserrat } from "next/font/google";

import "@borabaloglu/ui/main.dark.css";
import "@/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cx(montserrat.className, "min-h-screen min-w-full")}>
      <Component {...pageProps} />
    </main>
  );
}
