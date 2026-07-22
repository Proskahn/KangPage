import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host =
    headerStore.get("x-forwarded-host") ??
    headerStore.get("host") ??
    "localhost:3000";
  const protocol =
    headerStore.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: baseUrl,
    title: "Zhuang Kang — PhD Candidate in Computer Science",
    description:
      "Zhuang Kang is a PhD candidate at LIACS, Leiden University, researching hydrogen energy systems, electrolyzer simulation, and optimization.",
    openGraph: {
      title: "Zhuang Kang — PhD Candidate in Computer Science",
      description:
        "Research on hydrogen energy systems, electrolyzer simulation, and optimization at Leiden University.",
      type: "profile",
      images: [new URL("/og.png", baseUrl).toString()],
    },
    twitter: {
      card: "summary_large_image",
      title: "Zhuang Kang — PhD Candidate in Computer Science",
      description:
        "Research on hydrogen energy systems, electrolyzer simulation, and optimization at Leiden University.",
      images: [new URL("/og.png", baseUrl).toString()],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
