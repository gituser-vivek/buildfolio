import type { Metadata } from "next";

export const metadata:Metadata = {
  title: "buildfolio – Template Selection",
  description: "Select a template to start building your portfolio.",
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
