import { Truck, Zap, ShieldCheck } from "lucide-react";

export default function Philosophy() {
  const items = [
    {
      icon: <Truck className="w-12 h-12 mb-6 text-gray-900" />,
      title: "Mobile Asset",
      subtitle: "動かせる資産",
      description:
        "災害時やイベント時など、必要な場所へ即座に移動・設置が可能。耐久性と運搬効率に優れた「動くインフラ」として、ビジネスリスクを最小限に抑えます。",
    },
    {
      icon: <Zap className="w-12 h-12 mb-6 text-gray-900" />,
      title: "Off-grid",
      subtitle: "自立型エネルギー",
      description:
        "インフラが届かない場所でも、再生可能エネルギーと組み合わせることで完全な自立運用を実現。農業、林業、災害対策拠点など、あらゆる場所が活動拠点になります。",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 mb-6 text-gray-900" />,
      title: "Phase-free",
      subtitle: "フェーズフリー",
      description:
        "平時はホテルや店舗として、有事には避難所や医療施設として。日常と非常時の境界をなくし、社会のレジリエンスを高める新しい建築の形です。",
    },
  ];

  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            OUR PHILOSOPHY
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            コンテナが持つ可能性を最大限に引き出し、社会課題を解決する3つのアプローチ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="p-4 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 font-medium mb-4">{item.subtitle}</p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
