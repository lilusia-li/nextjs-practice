import { translations, defaultLocale } from "@/lib/i18n";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default async function OfferPage({ params }) {
  const { locale } = await params;
  const currentLocale = locale || defaultLocale;
  const t = translations[currentLocale] || translations[defaultLocale];
  const offer = t.offer;

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
            
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black mb-2">
              {offer.title}
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              {offer.subtitle}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              {offer.city}
            </p>
          </div>

          {/* Введение */}
          <div className="mb-10 text-gray-800 leading-relaxed">
            <p>{offer.intro}</p>
          </div>

          {/* Секции */}
          <div className="space-y-8">
            {/* I. Основные понятия и определения */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {offer.sections.definitions.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {offer.sections.definitions.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">1.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* II. Документы */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {offer.sections.documents.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {offer.sections.documents.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">2.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* III. Предмет договора */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {offer.sections.subject.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {offer.sections.subject.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">3.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* IV. Порядок подключения */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {offer.sections.connection.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {offer.sections.connection.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">4.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* V. Стоимость и порядок оплаты */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {offer.sections.payment.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {offer.sections.payment.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">5.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* VI. Права и обязанности сторон */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {offer.sections.rights.title}
              </h2>
              
              {/* 6.1. Исполнитель обязуется */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {offer.sections.rights.executor.title}
                </h3>
                <ul className="space-y-2 text-gray-800 leading-relaxed ml-4">
                  {offer.sections.rights.executor.obligations.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">6.1.{index + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6.2. Исполнитель вправе */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {offer.sections.rights.executor.rights.title}
                </h3>
                <ul className="space-y-2 text-gray-800 leading-relaxed ml-4">
                  {offer.sections.rights.executor.rights.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">6.2.{index + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6.3. Пользователь обязуется */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {offer.sections.rights.user.obligations.title}
                </h3>
                <ul className="space-y-2 text-gray-800 leading-relaxed ml-4">
                  {offer.sections.rights.user.obligations.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">6.3.{index + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6.4. Пользователь вправе */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {offer.sections.rights.user.rights.title}
                </h3>
                <ul className="space-y-2 text-gray-800 leading-relaxed ml-4">
                  {offer.sections.rights.user.rights.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">6.4.{index + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* VII. Ответственность сторон */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {offer.sections.responsibility.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {offer.sections.responsibility.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">7.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* VIII. Порядок разрешения споров */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {offer.sections.disputes.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {offer.sections.disputes.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">8.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* IX. Изменение и расторжение договора */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {offer.sections.changes.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {offer.sections.changes.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">9.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* X. Реквизиты исполнителя */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {offer.sections.requisites.title}
              </h2>
              <div className="space-y-2 text-gray-800 leading-relaxed">
                <p className="font-semibold">{offer.sections.requisites.company}</p>
                <p>{offer.sections.requisites.bin}</p>
                <p>{offer.sections.requisites.legalAddress}</p>
                <p>{offer.sections.requisites.actualAddress}</p>
                <p>{offer.sections.requisites.phone}</p>
                <p>{offer.sections.requisites.email}</p>
                <div className="mt-4">
                  <p className="font-semibold mb-2">{offer.sections.requisites.bank.title}</p>
                  <p>{offer.sections.requisites.bank.name}</p>
                  <p>{offer.sections.requisites.bank.bik}</p>
                  <p>{offer.sections.requisites.bank.iik}</p>
                  <p>{offer.sections.requisites.bank.kbe}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Кнопка назад */}
         
        </div>
      </main>
      <Footer translations={t} currentLocale={currentLocale} />
    </div>
  );
}

