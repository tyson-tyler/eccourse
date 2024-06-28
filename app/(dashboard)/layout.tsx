import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "../components/Topbar";
import LeftSideBar from "../components/layout/Leftbar";
import { ThemeProvider } from "../components/layout/theme";

import { ToasterProvider } from "@/lib/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Borcelle - Admin Auth",
  description: "Admin dashboard to manage Borcelle's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body className={inter.className}>
            <ToasterProvider />
            <Topbar />
            <div className="flex">
              <LeftSideBar />
              {children}
            </div>
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
