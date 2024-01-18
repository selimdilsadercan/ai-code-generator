import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
const font = Lexend({ subsets: ["latin"] });

import ThemeProvider from "@/providers/theme-provider";
import ToastProvider from "@/providers/toast-provider";
import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
  title: "AI Course Generator"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <QueryProvider>
          <ThemeProvider>
            {children}
            <ToastProvider />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

export default Layout;
