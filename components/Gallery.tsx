import Image from "next/image";

export default function Gallery() {
  const projects = [
    {
      title: "RESIDENTIAL",
      category: "住宅・別荘",
      image: "/images/residential.png",
      description: "自由度が高く、増築も簡単な新しい住まいの形。",
    },
    {
      title: "COMMERCIAL",
      category: "店舗・オフィス",
      image: "/images/commercial.jpg",
      description: "移設が可能で建築コストを抑えたビジネス拠点。",
    },
    {
      title: "HOTEL & RESORT",
      category: "宿泊施設",
      image: "/images/idx_img20.jpg",
      description: "非日常を演出する、ユニークな宿泊体験。",
    },
    {
      title: "INDUSTRIAL",
      category: "倉庫・ガレージ",
      image: "/images/industrial.png",
      description: "堅牢な構造で大切な資産を守る保管スペース。",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              FEATURED PROJECTS
            </h2>
            <p className="text-gray-500">
              多様なニーズに応える、ジャカコンの導入事例。
            </p>
          </div>
          <button className="hidden md:block text-sm font-bold uppercase tracking-widest border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden aspect-[4/3] bg-gray-200">
              <Image
                src={project.image}
                alt={`${project.title} - ${project.category}のコンテナハウス事例`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm max-w-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-gray-900 pb-1">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
