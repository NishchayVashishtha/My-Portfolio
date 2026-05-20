import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishchay Vashishtha | Full-Stack Developer & AI Engineer",
  description: "B.Tech CSE student specializing in Full-Stack Development, AI/ML, and Product Engineering. Building scalable web applications with React, Node.js, and modern technologies.",
  keywords: ["Nishchay Vashishtha", "Full-Stack Developer", "AI Engineer", "React Developer", "Node.js", "Product Engineer", "BMU", "Software Engineer"],
  authors: [{ name: "Nishchay Vashishtha" }],
  openGraph: {
    title: "Nishchay Vashishtha | Full-Stack Developer & AI Engineer",
    description: "Building intelligent, scalable web applications with modern technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
