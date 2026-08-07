import type { Metadata } from "next";
import { Schibsted_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import LightRays from "@/components/LightRays";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "EventHub",
  description: "The Hub for Every Dev Event You Mustn't Miss",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("min-h-screen", "h-full", "antialiased", schibstedGrotesk.variable, martianMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
          <div className="absolute inset-0 top-0 -z-1 min-h-screen">
            <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={0.7}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0.0}
            distortion={0.01}
          />
          </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
