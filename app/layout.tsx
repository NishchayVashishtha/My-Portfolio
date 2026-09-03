import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishchay Vashishtha | AI/ML Engineer - Gen AI & LLM Specialist",
  description: "B.Tech CSE (4th Year) specializing in Generative AI, LLMs, RAG Systems, and ML Engineering. Expert in LangChain, FastAPI, TensorFlow with 150+ DSA problems solved.",
  keywords: ["Nishchay Vashishtha", "AI Engineer", "ML Engineer", "Generative AI", "LLMs", "RAG Systems", "LangChain", "FastAPI", "BMU", "AI Specialist"],
  authors: [{ name: "Nishchay Vashishtha", email: "nishchayvashishtha0505@gmail.com" }],
  openGraph: {
    title: "Nishchay Vashishtha | AI/ML Engineer - Gen AI & LLM Specialist",
    description: "Building production AI systems with LangChain, RAG, and LLMs",
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
