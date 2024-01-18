import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
const font = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Course Generator"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;
