import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/layout/providers";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmachalz  — Software Engineer",
  description:
    "Software engineer and researcher specializing in computer vision, safety systems, and distributed computing. Currently at ConTi Lab in Seoul.",
  openGraph: {
    title: "Emmachalz — Software Engineer",
    description:
      "Software engineer and researcher specializing in computer vision, safety systems, and distributed computing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RDWT77QMPF"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RDWT77QMPF');
      `}</Script>
      <body className="bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 antialiased min-h-screen">
        <Providers>
          <NoiseOverlay />
          <div className="mx-auto max-w-2xl px-4 pt-24 pb-16 flex flex-col min-h-screen">
            <Nav />
            <main className="flex-1 flex flex-col gap-20 mt-8">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
