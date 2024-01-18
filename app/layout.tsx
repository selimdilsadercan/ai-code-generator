import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
const font = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Course Generator"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

export default Layout;
