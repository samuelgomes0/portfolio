import DockComponent from "@/components/Dock";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Samuel Gomes Rosa | Engenheiro de Software Full-Stack & Especialista em Chatbots",
  description:
    "Engenheiro de Software Full-Stack especializado em criar soluções de IA conversacional com Twilio e Google Cloud. Desenvolvo aplicações web e APIs modernas com TypeScript, Next.js e Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
          <DockComponent />
        </ThemeProvider>
      </body>
    </html>
  );
}
