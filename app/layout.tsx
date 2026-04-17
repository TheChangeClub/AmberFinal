import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <header className="flex justify-between items-center px-10 py-6 border-b border-zinc-900">
          <Link
            href="/"
            className="text-[#ffbf00] font-black text-2xl tracking-tighter"
          >
            Amber.
          </Link>
          <div className="flex gap-8 items-center">
            <Link
              href="/profile"
              className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 hover:text-[#ffbf00] uppercase transition-colors"
            >
              PROFILE
            </Link>
          </div>
        </header>
        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
