import { Ubuntu } from "next/font/google";
import "./globals.css";

import TransitionProvider from "@/components/transitionProvider";

const ubuntu = Ubuntu({ 
  weight: ['300', '400', '500', '700'],

  subsets: ["latin"] });

export const metadata = {
  title: "Alphatech",
  description: "Invest In Real Estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      </head>
      <body className={ubuntu.className}>
        <TransitionProvider>{children}</TransitionProvider>
        </body>
    </html>
  );
}
