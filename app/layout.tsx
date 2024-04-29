import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";
import localfont from "next/font/local"

const gilroy = localfont({
  src: [{
    path: "../public/fonts/Gilroy-ExtraBold.otf",
    style: 'normal',
  }],
  variable: "--font-gilroy",
})

const openSans = localfont({
  src: [{
    path: "../public/fonts/OpenSans-Regular.ttf",
    style: 'normal',
  }],
  variable: "--font-openSans",
})


export const metadata: Metadata = {
  title: "Antoine Dangleterre",
  description: "Développeur Front-End",
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${gilroy.variable} ${openSans.variable}`}>
      <Analytics />
      <SpeedInsights/>
      <body>
        {children}
      </body>
    </html>
  );
}
