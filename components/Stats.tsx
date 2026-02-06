export default function Stats() {
  const stats = [
    { label: "実績数", value: "10,000+", sub: "Projects Delivered" },
    { label: "対応業界", value: "200+", sub: "Industries Served" },
    { label: "自治体導入", value: "500+", sub: "Government Projects" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-inter">
                {stat.value}
              </p>
              <h3 className="text-lg font-bold text-gray-600 mb-1">{stat.label}</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
