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
    title: "Your Name — Academic Profile",
    description:
      "Research, publications, master’s students, supervision, and contact information.",
    openGraph: {
      title: "Your Name — Academic Profile",
      description:
        "Research, publications, master’s students, supervision, and contact information.",
      type: "profile",
      images: [new URL("/og.png", baseUrl).toString()],
    },
    twitter: {
      card: "summary_large_image",
      title: "Your Name — Academic Profile",
      description:
        "Research, publications, master’s students, supervision, and contact information.",
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
