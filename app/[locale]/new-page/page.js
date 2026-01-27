import { translations, defaultLocale } from "@/lib/i18n";

export default async function NewPage({ params }) {
  const { locale } = await params;
  const currentLocale = locale || defaultLocale;
  const t = translations[currentLocale] || translations[defaultLocale];
  return <div>New Page</div>;
}
