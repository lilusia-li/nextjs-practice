import { translations, defaultLocale } from "@/lib/i18n";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default async function PrivacyPage({ params }) {
  const { locale } = await params;
  const currentLocale = locale || defaultLocale;
  const t = translations[currentLocale] || translations[defaultLocale];
  const privacy = t.privacy;

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
              {privacy.title}
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              {privacy.subtitle}
            </p>
            <p className="text-sm text-gray-500">
              {privacy.lastUpdate}
            </p>
          </div>

          {/* Введение */}
          <div className="mb-10 text-gray-800 leading-relaxed space-y-3">
            {privacy.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Секции */}
          <div className="space-y-8">
            {/* I. Общие положения */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {privacy.sections.general.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {privacy.sections.general.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">1.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* II. Состав обрабатываемых данных */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {privacy.sections.dataComposition.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {privacy.sections.dataComposition.items.map((item, index) => (
                  <li key={index} className={item.startsWith("—") ? "ml-4" : "flex items-start"}>
                    {!item.startsWith("—") && index < 7 && <span className="mr-2">2.{index + 1}.</span>}
                    {index === 7 && <span className="mr-2">2.{index + 1}.</span>}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* III. Цели обработки персональных данных */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {privacy.sections.processingPurposes.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {privacy.sections.processingPurposes.items.map((item, index) => (
                  <li key={index} className={item.startsWith("—") ? "ml-4" : index === 8 ? "flex items-start" : "flex items-start"}>
                    {!item.startsWith("—") && index < 8 && <span className="mr-2">3.{index + 1}.</span>}
                    {index === 8 && <span className="mr-2">3.{index + 1}.</span>}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* IV. Порядок и условия обработки данных */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {privacy.sections.processingOrder.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {privacy.sections.processingOrder.items.map((item, index) => (
                  <li key={index} className={item.startsWith("—") ? "ml-4" : "flex items-start"}>
                    {!item.startsWith("—") && <span className="mr-2">4.{index + 1}.</span>}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* V. Файлы cookie и техническая информация */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {privacy.sections.cookies.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {privacy.sections.cookies.items.map((item, index) => (
                  <li key={index} className={item.startsWith("—") ? "ml-4" : "flex items-start"}>
                    {!item.startsWith("—") && <span className="mr-2">5.{index + 1}.</span>}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* VI. Хранение и удаление данных */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {privacy.sections.storage.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {privacy.sections.storage.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">6.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* VII. Права пользователя */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {privacy.sections.userRights.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {privacy.sections.userRights.items.map((item, index) => (
                  <li key={index} className={item.startsWith("—") ? "ml-4" : item.includes("support@selleron.kz") ? "flex items-start" : "flex items-start"}>
                    {!item.startsWith("—") && !item.includes("support@selleron.kz") && <span className="mr-2">7.1.</span>}
                    {item.includes("support@selleron.kz") && <span className="mr-2">7.2.</span>}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* VIII. Ответственность */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {privacy.sections.responsibility.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {privacy.sections.responsibility.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">8.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* IX. Изменение политики */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {privacy.sections.changes.title}
              </h2>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                {privacy.sections.changes.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">9.{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* X. Контакты исполнителя */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                {privacy.sections.contacts.title}
              </h2>
              <div className="space-y-2 text-gray-800 leading-relaxed">
                <p className="font-semibold">{privacy.sections.contacts.company}</p>
                <p>{privacy.sections.contacts.bin}</p>
                <p>{privacy.sections.contacts.address}</p>
                <p>{privacy.sections.contacts.email}</p>
                <p>{privacy.sections.contacts.phone}</p>
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

