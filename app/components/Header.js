"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header({ translations, currentLocale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Обработка якорей при загрузке страницы
  useEffect(() => {
    const isHomePage =
      pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`;

    if (isHomePage && window.location.hash) {
      const anchorId = window.location.hash.substring(1); // Убираем #
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 120;

          const extraOffset =
            anchorId === "prices" || anchorId === "faq" ? -200 : 0;

          const elementTop =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementTop - headerHeight - extraOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        }
      }, 100); // Небольшая задержка для загрузки контента
    }
  }, [pathname, currentLocale]);

  const switchLocale = (newLocale) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault();

    // Проверяем, находимся ли мы на главной странице
    const isHomePage =
      pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`;

    if (!isHomePage) {
      // Если не на главной странице, переходим на главную с якорем
      window.location.href = `/${currentLocale}#${anchorId}`;
      return;
    }

    // Если на главной странице, прокручиваем к якорю
    const element = document.getElementById(anchorId);
    if (element) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 120;

      // Для секций prices и faq нужен больший отступ
      const extraOffset =
        anchorId === "prices" || anchorId === "faq" ? -200 : 0;

      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - headerHeight - extraOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="w-full bg-white pt-5 max-h-[75px] pb-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[73.5rem] mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-80">
            <Link
              href={`/${currentLocale}`}
              className="flex items-center gap-2"
            >
              <Image src="/Logo.svg" alt="SellerON" width={120} height={23} />
            </Link>

            <nav className="hidden lg:flex items-center gap-11 mx-auto pb-1">
              <Link
                href={`/${currentLocale}#platform`}
                onClick={(e) => handleAnchorClick(e, "platform")}
                className="text-black hover:text-green-600 transition-colors"
              >
                {translations.nav.platform}
              </Link>
              <Link
                href={`/${currentLocale}#prices`}
                onClick={(e) => handleAnchorClick(e, "prices")}
                className="text-black hover:text-green-600 transition-colors"
              >
                {translations.nav.prices}
              </Link>

              <Link
                href={`/${currentLocale}#faq`}
                onClick={(e) => handleAnchorClick(e, "faq")}
                className="text-black hover:text-green-600 transition-colors -ml-0.5 "
              >
                {translations.nav.faq}
              </Link>
            </nav>
          </div>

          <div className="-mr-13.5 flex items-center gap-4.5">
            <button
              onClick={() => switchLocale(currentLocale === "kz" ? "ru" : "kz")}
              className="px-2.5 py-1.5 max-w-[38px] max-h-[32px] -mt-1 -mr-0.5   text-[15px] font-normal transition-colors text-green-600 rounded-lg border-[1.5px] border-green-600 justify-center cursor-pointer items-center flex"
            >
              {currentLocale === "kz" ? "RU" : "KZ"}
            </button>
            <button className="-mt-0.5 min-w-[108px] min-h-[45px] mr-0.5 text-black rounded-lg border-[1.5px] border-black text-[15px] font-[400] justify-center items-center flex tracking-[-0.5px]">
              <a
                href={`https://app.selleron.kz/login`}
                rel="noopener noreferrer"
                className="w-full h-full flex justify-center items-center px-4 py-2"
              >
                {translations.login}
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
