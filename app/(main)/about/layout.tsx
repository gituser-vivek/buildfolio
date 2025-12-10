import type { Metadata } from "next";

export const metadata:Metadata = {
  title: "buildfolio – About",
  description: "Learn more about buildfolio, our mission, and the team behind this no-code portfolio builder.",
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
