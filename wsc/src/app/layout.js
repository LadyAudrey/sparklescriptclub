import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="w-screen h-full bg-gradient-to-b from-lime5 to-aqua5 text-orange0
    "
    >
      <body>{children}</body>
    </html>
  );
}
