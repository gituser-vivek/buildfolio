import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "buildfolio - A No-Code Portfolio Builder",
  description: "Create and deploy your portfolio in seconds — no code required.",
  keywords: [
    "buildfolio",
    "portfolio builder",
    "no-code",
    "developer portfolio",
    "Next.js portfolio",
    "free portfolio generator"
  ],
  authors: [
    { name: " Tanish Bawa" },
    { name: "Daksh Pareek" }
  ],
  creator: "buildfolio Team",
  metadataBase: new URL("https://buildfolio.vercel.app"),
  openGraph: {
    title: "buildfolio - Build Your Portfolio Without Code",
    description: "Generate, customize, and deploy a developer portfolio instantly. 100% free and open source.",
    url: "https://buildfolio.vercel.app",
    siteName: "buildfolio",
    images: [
      {
        url: "/assets/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "buildfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "buildfolio - A No-Code Portfolio Builder",
    description: "Create and deploy your portfolio in seconds — 100% free and open source.",
    creator: "@tanishbawa",
    images: ["/assets/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "bg-slate-800 text-white border border-slate-700",
        }}
      />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
