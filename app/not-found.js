import { translations, defaultLocale } from "@/lib/i18n";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default async function GlobalNotFound() {
  // Используем defaultLocale для глобальной страницы 404
  const currentLocale = defaultLocale;
  const t = translations[currentLocale];
  const notFound = t.notFound;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header translations={t} currentLocale={currentLocale} />
      <main className="flex-1 relative pt-32 pb-16 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-9xl font-bold text-gray-200 mb-4">
            {notFound.title}
          </h1>
          <h2 className="text-4xl font-bold text-black mb-4">
            {notFound.subtitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8">{notFound.description}</p>
          <Link
            href={`/${currentLocale}`}
            className="inline-block px-8 py-4 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-colors"
          >
            {notFound.button}
          </Link>
        </div>
      </main>
      <Footer translations={t} currentLocale={currentLocale} />
    </div>
  );
}
