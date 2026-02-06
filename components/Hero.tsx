import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-v2.png"
          alt="株式会社ジャカコンのモダンなコンテナハウス外観"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="block mb-2 font-light">FUTURE OF</span>
          MOBILE ARCHITECTURE
        </h1>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-gray-200">
          コンテナハウス・トランクルームのパイオニア。<br className="hidden md:block" />
          10,000件以上の実績が証明する、確かな品質とデザイン。
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="px-8 py-4 bg-white text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-gray-900 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
