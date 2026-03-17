import DarkVeil from '@/components/DarkVeil';
import DockComponent from '@/components/Dock';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import { ThemeProvider } from '@/providers/ThemeProvider';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://samuelgomes.dev'),
  title: {
    template: '%s | Samuel Gomes',
    default: 'Samuel Gomes | Full-Stack Engineer & Pesquisador',
  },
  description:
    'Portfólio de Samuel Gomes, Engenheiro Full-Stack e Pesquisador com 5+ anos de experiência em TypeScript, Node.js e Twilio, especializado em soluções de comunicação digital de alta escala e em especialização em Machine Learning e Deep Learning.',
  keywords: [
    'Samuel Gomes',
    'Full-Stack Engineer',
    'Pesquisador IA',
    'iTec FURG',
    'TypeScript',
    'Node.js',
    'React',
    'Next.js',
    'Twilio',
    'Google Cloud Platform',
    'Dialogflow CX',
    'IA generativa',
    'Machine Learning',
    'Deep Learning',
    'Visão Computacional',
    'NestJS',
    'portfólio',
    'desenvolvedor',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  authors: [{ name: 'Samuel Gomes' }],
  openGraph: {
    type: 'website',
    siteName: 'Samuel Gomes',
    title: 'Samuel Gomes | Full-Stack Engineer & Pesquisador',
    description:
      'Engenheiro Full-Stack e Pesquisador com 5+ anos em TypeScript, Node.js e Twilio, especializado em comunicação digital de alta escala e IA generativa.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${bricolage.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            style={{
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <DarkVeil
              hueShift={0}
              noiseIntensity={0}
              scanlineIntensity={0}
              speed={0.5}
              scanlineFrequency={0}
              warpAmount={0}
            />
          </div>
          <ScrollProgress />
          {children}
          <DockComponent />
        </ThemeProvider>
      </body>
    </html>
  );
}
