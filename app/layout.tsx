import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mosque Tech Challenge",
  description: "Empowering youth to build Islamic tech solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
