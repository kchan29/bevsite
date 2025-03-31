"use client";

import { useEffect } from "react";
import Head from "next/head";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      <Head>
        <title>Happy Birthday! 🎂 | Celebration Website</title>
        <meta name="theme-color" content="#a855f7" />
      </Head>
      {children}
    </body>
  );
}
