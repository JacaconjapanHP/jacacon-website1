"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert("プライバシーポリシーへの同意が必要です。");
      return;
    }
    alert("お問い合わせを受け付けました。自動返信メールをご確認ください。");
    setFormData({ name: "", email: "", phone: "", message: "", privacy: false });
  };

  return (
    <section id="contact" className="relative bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[700px]">
        
        {/* Left Column: Context & Info */}
        <div className="w-full lg:w-5/12 bg-gray-900 text-white p-12 lg:p-20 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-bg-v2.png')] bg-cover bg-center mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              GET IN TOUCH
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              あなたのビジョンをお聞かせください。<br />
              コンテナ建築のプロフェッショナルが、<br />
              理想の実現をサポートします。
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:098-860-2335" className="text-xl font-bold hover:text-gray-300 transition-colors">098-860-2335</a>
                  <p className="text-sm text-gray-500 mt-1">平日 9:00～18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:info@jacacon.jp" className="text-xl font-bold hover:text-gray-300 transition-colors">info@jacacon.jp</a>
                  <p className="text-sm text-gray-500 mt-1">24時間受付・自動返信あり</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="font-bold">株式会社ジャカコン</p>
                  <p className="text-gray-400">〒901-0304 沖縄県糸満市西川町28-1 202号</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-12 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Building the Future of Architecture
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-7/12 bg-gray-50 p-12 lg:p-24 flex items-center">
          <div className="w-full max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
              SEND A MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative z-0 w-full mb-5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer transition-colors"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="group relative z-0 w-full mb-5">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer transition-colors"
                    placeholder=" "
                  />
                  <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    電話番号
                  </label>
                </div>
              </div>

              <div className="group relative z-0 w-full mb-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer transition-colors"
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="group relative z-0 w-full mb-5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer transition-colors resize-y"
                  placeholder=" "
                  required
                ></textarea>
                <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="pt-4">
                <div className="flex items-center mb-8">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded focus:ring-gray-900 focus:ring-2"
                  />
                  <label htmlFor="privacy" className="ml-3 text-sm text-gray-500">
                    <Link href="/privacy" target="_blank" className="text-gray-900 font-medium hover:underline">プライバシーポリシー</Link>
                    に同意します
                  </label>
                </div>

                <button
                  type="submit"
                  className="group relative w-full md:w-auto px-10 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10">Submit Message</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gray-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
