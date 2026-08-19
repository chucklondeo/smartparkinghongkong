import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-dark-900">
      <div className="text-center max-w-md">
        <p className="text-sm text-gold-400 font-mono mb-4">404</p>
        <h1 className="text-3xl font-black mb-4 text-white">Page not found</h1>
        <p className="text-white/50 mb-8">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-neon-solid px-6 py-3 rounded-xl text-sm font-bold">
            Go to Homepage
          </Link>
          <Link href="/zh-hk" className="btn-neon px-6 py-3 rounded-xl text-sm font-semibold">
            前往中文版
          </Link>
        </div>
      </div>
    </main>
  );
}
