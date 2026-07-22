import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishchay Vashishtha | AI Engineer & Data Science Specialist",
  description: "B.Tech CSE student specializing in AI Engineering, Data Science, and Python Development. Building intelligent ML solutions with Python, Scikit-Learn, and FastAPI.",
  keywords: ["Nishchay Vashishtha", "AI Engineer", "Data Science", "Machine Learning", "Python Developer", "Data Analytics", "BMU", "AI Specialist"],
  authors: [{ name: "Nishchay Vashishtha", email: "nishchayvashishtha0505@gmail.com" }],
  openGraph: {
    title: "Nishchay Vashishtha | AI Engineer & Data Science Specialist",
    description: "Building intelligent AI/ML solutions with Python and Data Science",
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
