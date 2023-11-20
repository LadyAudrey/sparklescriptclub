import "./globals.css";

import Link from "next/link";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="w-screen h-full bg-gradient-to-b from-lime5 to-aqua5 text-orange0
    "
    >
      <body>
        <Link href="/">
          <Image
            src="/graphics/Home.svg"
            height={150}
            width={150}
            alt="home button"
            className="absolute m-5"
          ></Image>
        </Link>
        {children}
      </body>
    </html>
  );
}
