import { translations, locales, defaultLocale } from "@/lib/i18n";
import localFont from "next/font/local";
import "../globals.css";

const sfProDisplay = localFont({
  src: [
    {
      path: "../../fonts/SF-Pro-Display-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-display",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: "SellerON - CRM платформа для Kaspi.kz",
    description: translations[locale]?.hero?.description || "",
    icons: {
      icon: [
        {
          url: "/favicon/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
        {
          url: "/favicon/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
        { url: "/favicon/favicon.ico" },
      ],
      apple: [
        {
          url: "/favicon/apple-touch-icon.png",
          type: "image/png",
          sizes: "180x180",
        },
      ],
      other: [
        {
          rel: "android-chrome",
          url: "/favicon/android-chrome-192x192.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          rel: "android-chrome",
          url: "/favicon/android-chrome-512x512.png",
          type: "image/png",
          sizes: "512x512",
        },
      ],
    },
    manifest: "/favicon/site.webmanifest",
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const currentLocale = locale || defaultLocale;

  return (
    <html lang={currentLocale}>
      <body className={`${sfProDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
