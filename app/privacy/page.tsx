import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-tight">
          プライバシーポリシー
        </h1>

        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              1. 個人情報の定義
            </h2>
            <p>
              本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。）を意味するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              2. 個人情報の利用目的
            </h2>
            <p className="mb-4">
              当社は、お客様の個人情報を、以下の目的で利用いたします。
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>お客様からのお問い合わせに対応するため</li>
              <li>当社の商品・サービスのご案内、ご提供のため</li>
              <li>当社のサービス改善、新サービスの開発等に役立てるため</li>
              <li>その他、上記利用目的に付随する目的のため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              3. 個人情報の第三者提供
            </h2>
            <p>
              当社は、個人情報保護法その他の法令に基づき開示が認められる場合を除くほか、あらかじめお客様の同意を得ないで、個人情報を第三者に提供しません。ただし、次に掲げる場合は上記に定める第三者への提供には該当しません。
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を委託する場合</li>
              <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              4. 個人情報の開示・訂正・利用停止等
            </h2>
            <p>
              当社は、お客様から、個人情報保護法の定めに基づき個人情報の開示、訂正、利用停止等を求められたときは、お客様ご本人からのご請求であることを確認の上で、遅滞なく対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              5. お問い合わせ窓口
            </h2>
            <p>
              個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <div className="mt-4 bg-gray-50 p-6 rounded-lg">
              <p className="font-bold mb-2">株式会社ジャカコン</p>
              <p>〒901-0304 沖縄県糸満市西川町28-1 202号</p>
              <p className="mt-2">TEL: 098-860-2335</p>
              <p>Email: info@jacacon.jp</p>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-bold uppercase tracking-widest hover:bg-gray-700 transition-colors rounded-sm"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
