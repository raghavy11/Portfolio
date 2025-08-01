import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
   title: "Raghav Yadav | Fullstack Developer.",
  description: "Fullstack developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
              {children}
          </ThemeProvider>
          <Footer />
        
      </body>
    </html>
  );
}
