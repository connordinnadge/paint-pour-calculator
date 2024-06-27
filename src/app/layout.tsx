import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Acrylic Pour Paint Calculator",
  description: "Calculate the amount of paint needed for an acrylic pour paintings.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
