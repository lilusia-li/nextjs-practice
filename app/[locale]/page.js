import { translations, defaultLocale } from "@/lib/i18n";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Tarifs from "../components/Tarifs";
import Stats from "../components/Stats";
import Features from "../components/Features";
import PlatformFeatures from "../components/PlatformFeatures";
import Tarif from "../components/Tarif";
import FAQ from "../components/FAQ";
import AutomationBroadcasts from "../components/AutomationBroadcasts";
import StartSellingCTA from "../components/StartSellingCTA";
import Footer from "../components/Footer";
export default async function HomePage({ params }) {
  const { locale } = await params;
  const currentLocale = locale || defaultLocale;
  const t = translations[currentLocale] || translations[defaultLocale];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header translations={t} currentLocale={currentLocale} />
      <main className="flex-1 relative py-4">
        <div className="relative overflow-hidden">
          <Hero translations={t} />
        </div>
        <Tarifs translations={t} />
        <Stats translations={t} />
        <PlatformFeatures translations={t} />

        <Features translations={t} />
        <Tarif translations={t} />
        <FAQ translations={t} />
        <AutomationBroadcasts translations={t} />

        <StartSellingCTA translations={t} />
      </main>
      <Footer translations={t} currentLocale={currentLocale} />
    </div>
  );
}
