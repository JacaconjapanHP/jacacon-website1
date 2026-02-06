import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-widest mb-6 block">
              JACACON
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              コンテナハウス・トランクルームのパイオニアとして、
              革新的な空間ソリューションを提供し続けます。
              10,000件以上の実績と信頼で、あなたのビジョンを形にします。
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholder */}
              {["Instagram", "Facebook", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">
              Menu
            </h4>
            <ul className="space-y-4">
              {["Projects", "About", "Philosophy", "News", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">
              Contact
            </h4>
            <address className="not-italic text-gray-300 space-y-4">
              <p>株式会社ジャカコン</p>
              <p>
                〒901-0304
                <br />
                沖縄県糸満市西川町28-1 202号
              </p>
              <p>
                TEL: <a href="tel:098-860-2335" className="hover:text-white">098-860-2335</a>
                <br />
                FAX: 098-860-2336
              </p>
              <p>
                <a href="mailto:info@jacacon.jp" className="hover:text-white">
                  info@jacacon.jp
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} JACACON WEST JAPAN. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
