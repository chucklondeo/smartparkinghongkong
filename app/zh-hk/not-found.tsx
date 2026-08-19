import Link from "next/link";

export default function NotFoundZh() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-dark-900">
      <div className="text-center max-w-md">
        <p className="text-sm text-gold-400 font-mono mb-4">404</p>
        <h1 className="text-3xl font-black mb-4 text-white">找不到頁面</h1>
        <p className="text-white/50 mb-8">您要查找的頁面不存在或已被移動。</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/zh-hk" className="btn-neon-solid px-6 py-3 rounded-xl text-sm font-bold">
            返回首頁
          </Link>
          <Link href="/" className="btn-neon px-6 py-3 rounded-xl text-sm font-semibold">
            Go to English site
          </Link>
        </div>
      </div>
    </main>
  );
}
