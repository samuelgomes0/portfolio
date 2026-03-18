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
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://samuelgomes.com'),
  title: {
    template: '%s | Samuel Gomes',
    default: 'Samuel Gomes | Full-Stack Engineer & Pesquisador',
  },
  description:
    'Portfólio de Samuel Gomes, Engenheiro de Software Full-Stack com 4+ anos de experiência em TypeScript, CPaaS Twilio e arquitetura de contact center omnichannel. Especialista em sistemas escaláveis, microsserviços e liderança técnica.',
  keywords: [
    'Samuel Gomes',
    'Full-Stack Engineer',
    'TypeScript',
    'Node.js',
    'NestJS',
    'React',
    'Next.js',
    'Twilio',
    'Twilio Flex',
    'Contact Center',
    'CPaaS',
    'Dialogflow CX',
    'Google Cloud Platform',
    'Microsserviços',
    'Arquitetura Limpa',
    'Observabilidade',
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
      'Engenheiro de Software Full-Stack com 4+ anos em TypeScript e CPaaS Twilio, especialista em contact center omnichannel, microsserviços e liderança técnica.',
    url: 'https://samuelgomes.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Samuel Gomes — Full-Stack Engineer & Pesquisador',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Gomes | Full-Stack Engineer & Pesquisador',
    description:
      'Engenheiro de Software Full-Stack com 4+ anos em TypeScript e CPaaS Twilio, especialista em contact center omnichannel, microsserviços e liderança técnica.',
    images: ['/og-image.png'],
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
