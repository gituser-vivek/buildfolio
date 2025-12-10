import type { Metadata } from "next";

export const metadata:Metadata = {
  title: "buildfolio – Your Generations",
  description: "View and manage your portfolio creations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
