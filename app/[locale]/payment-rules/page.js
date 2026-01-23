import { translations, defaultLocale } from "@/lib/i18n";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default async function PaymentRulesPage({ params }) {
  const { locale } = await params;
  const currentLocale = locale || defaultLocale;
  const t = translations[currentLocale] || translations[defaultLocale];
  const rules = t.paymentRules;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header translations={t} currentLocale={currentLocale} />
      <main className="flex-1 relative pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6 mb-12">
            <Link
              href={`/${currentLocale}`}
              className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              ← {currentLocale === 'kz' ? 'Басты бетке оралу' : 'Назад на главную'}
            </Link>
          </div>
        <div className="max-w-4xl mx-auto px-6">
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black mb-2">
              {rules.title}
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              {rules.subtitle}
            </p>
            <p className="text-sm text-gray-500">
              {rules.lastUpdate}
            </p>
          </div>

          {/* Введение */}
          <div className="mb-10 text-gray-800 leading-relaxed">
            <p>{rules.intro}</p>
          </div>

          {/* Секции */}
          <div className="space-y-8">
            {/* I. Общие положения */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {rules.sections.general.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {rules.sections.general.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">1.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* II. Способы оплаты */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {rules.sections.paymentMethods.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {rules.sections.paymentMethods.items.map((item, index) => (
                  <li key={index} className={item.startsWith("—") ? "ml-4" : "flex items-start"}>
                    {!item.startsWith("—") && <span className="mr-2">2.{index + 1}.</span>}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* III. Оплата банковской картой онлайн */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {rules.sections.onlinePayment.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {rules.sections.onlinePayment.items.map((item, index) => (
                  <li key={index} className={item.startsWith("—") ? "ml-4" : "flex items-start"}>
                    {!item.startsWith("—") && <span className="mr-2">3.{index + 1}.</span>}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* IV. Гарантии безопасности */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {rules.sections.security.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {rules.sections.security.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">4.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* V. Безопасность онлайн-платежей */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {rules.sections.paymentSecurity.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {rules.sections.paymentSecurity.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">5.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* VI. Возврат денежных средств */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {rules.sections.refund.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {rules.sections.refund.items.map((item, index) => (
                  <li key={index} className={item.startsWith("—") ? "ml-4" : "flex items-start"}>
                    {!item.startsWith("—") && <span className="mr-2">6.{index + 1}.</span>}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* VII. Случаи отказа в проведении платежа */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {rules.sections.paymentRejection.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {rules.sections.paymentRejection.items.map((item, index) => (
                  <li key={index} className={item.startsWith("—") ? "ml-4" : "flex items-start"}>
                    {!item.startsWith("—") && <span className="mr-2">7.{index + 1}.</span>}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* VIII. Реквизиты исполнителя */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {rules.sections.requisites.title}
              </h2>
              <div className="space-y-2 text-gray-800 leading-relaxed">
                <p className="font-semibold">{rules.sections.requisites.company}</p>
                <p>{rules.sections.requisites.bin}</p>
                <p>{rules.sections.requisites.address}</p>
                <p>{rules.sections.requisites.email}</p>
                <p>{rules.sections.requisites.phone}</p>
              </div>
            </section>
          </div>

         
        </div>
      </main>
      <Footer translations={t} currentLocale={currentLocale} />
    </div>
  );
}

