import "./globals.css";

import Image from "next/image";
import Link from "next/link";

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
            alt="Home Icon"
            className="absolute left-5 top-5"
          />
        </Link>
        {children}
      </body>
    </html>
  );
}
