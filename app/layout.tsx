import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentry — Finance Dashboard",
  description: "Hyper-personalized finance dashboard for Gaurav",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-canvas text-text-primary font-sans">
        <Navigation />
        {/* Main content: offset for sidebar on desktop, pad for bottom tabs on mobile */}
        <main className="pb-20 md:pb-0 md:ml-56">
          <div className="max-w-5xl mx-auto px-4 py-6 md:px-8 md:py-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
