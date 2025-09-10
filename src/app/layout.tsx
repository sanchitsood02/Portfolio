import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Sanchit Sood | Software Engineer",
  description: "Portfolio of Sanchit Sood – Software Engineer from Bristol, UK. Explore projects, experience, and contact details.",
  keywords: "Sanchit Sood, portfolio, Software Engineer, Web Development, React, JavaScript, TypeScript, Python, SQL, Machine Learning, Predictive Maintenance",
  authors: [{ name: "Sanchit Sood" }],
  creator: "Sanchit Sood",
  metadataBase: new URL("https://www.sanchitsood.co.uk"),
  openGraph: {
    title: "Sanchit Sood | Software Engineer",
    description: "Showcasing work, skills, and achievements of a software engineer focused on building impactful applications.",
    url: "https://www.sanchitsood.co.uk",
    siteName: "Sanchit Sood Portfolio",
    type: "website",
    locale: "en_US",
    images: [
    {
      url: "https://www.sanchitsood.co.uk/og-image.png",
      width: 1200,
      height: 630,
      alt: "Sanchit Sood Developer Portfolio",
    },
  ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchit Sood | Software Engineer Portfolio",
    description: "Explore the portfolio of Sanchit Sood, a software engineer from Bristol, UK.",
    creator: "@SanchitSood",
    images: ["https://www.sanchitsood.co.uk/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Sanchit Sood | Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="F-3BijcciQLBcKa0qGz_zjFwsVwM_4D-_KDKrjBrdGE" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S3MLK25EVM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S3MLK25EVM');
            `,
          }}
        />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  );
}