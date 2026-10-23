import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider } from '@/components/Toast';

export const metadata: Metadata = {
  metadataBase: new URL('https://am-afl.github.io'),
  title: 'AmirMohammad Aflatounian | Software Engineer & AI Researcher',
  description: 'Portfolio of AmirMohammad Aflatounian — Computer Engineering graduate from Sharif University of Technology. Specialized in enterprise backend microservices (Java Spring Boot, .NET Core) and agentic multimodal AI systems.',
  keywords: [
    'AmirMohammad Aflatounian',
    'Amir Aflatounian',
    'Sharif University of Technology',
    'Software Engineer',
    'AI Researcher',
    'Java Spring Boot',
    '.NET Core',
    'Agentic AI',
    'Multimodal Learning',
    'Text-to-Image',
    'Kafka',
    'Full-Stack Developer',
  ],
  authors: [{ name: 'AmirMohammad Aflatounian', url: 'https://github.com/am-afl' }],
  creator: 'AmirMohammad Aflatounian',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://am-afl.github.io',
    siteName: 'AmirMohammad Aflatounian Portfolio',
    title: 'AmirMohammad Aflatounian | Software Engineer & AI Researcher',
    description: 'Sharif University of Technology CE graduate. High-throughput distributed backends and self-correcting agentic AI systems.',
    images: [
      {
        url: 'https://am-afl.github.io/icon.svg',
        width: 1200,
        height: 630,
        alt: 'AmirMohammad Aflatounian — Software Engineer & AI Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AmirMohammad Aflatounian | Software Engineer & AI Researcher',
    description: 'Sharif University of Technology CE graduate. Enterprise backend microservices and agentic multimodal AI research.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'AmirMohammad Aflatounian',
    alternateName: ['Amir Aflatounian', 'am-afl'],
    url: 'https://am-afl.github.io',
    email: 'mailto:aflatounian.amir@gmail.com',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Sharif University of Technology',
      url: 'https://sharif.edu',
    },
    jobTitle: 'Software Engineer & AI Researcher',
    knowsAbout: [
      'Distributed Systems',
      'Java Spring Boot',
      '.NET Core',
      'Generative AI',
      'Multimodal Learning',
      'Agentic Systems',
      'Apache Kafka',
      'Clean Architecture',
    ],
    sameAs: ['https://github.com/am-afl'],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#030712] text-zinc-100 font-sans antialiased selection:bg-sky-500/30 selection:text-white">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
