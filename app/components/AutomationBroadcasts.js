import Image from "next/image";

export default function AutomationBroadcasts({ translations }) {
  const { automation: t } = translations;

  return (
    <section className="w-full bg-white py-15">
      <div className="max-w-[77rem] mx-auto px-6.5">
        <h2 className="text-[40px] font-bold mb-4">{t.title}</h2>
        <p className="text-[20px] text-gray-700 mb-14 -ml-0.5 whitespace-pre-line px-1 leading-[1.5]">
          {t.description}
        </p>

        <div className="grid gap-4 md:grid-cols-3 items-stretch ">
          {t.cards.map((card, cardIndex) => (
            <article
              key={card.id}
              className="flex h-[509px] flex-col rounded-[24px] bg-white/80 border border-black/5
                         px-6 py-7 shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-shadow backdrop-blur-[20px]
                         min-w-[380px] max-w-[380px ]"
            >
              {/* ===== HEADER (одинаковая высота) ===== */}
              <header className="h-[140px] flex flex-col mb-0">
                <h3 className="text-[35px] font-semibold mb-1">
                  {card.title}
                </h3>
                <div className="border border-gray-200 mb-4" />
                <p className="text-[15px] text-gray-500 whitespace-pre-line flex-1">
                  {card.description}
                </p>
              </header>

              {/* ===== ПРЕИМУЩЕСТВА (одинаковая высота) ===== */}
              <div className="h-[130px] flex flex-col mt-2">
                <p className="text-[14px] font-semibold text-gray-800 mb-3 h-[18px]">
                  {card.advantagesTitle}
                </p>
                <ul className="space-y-0.5 text-[12px] text-gray-800 flex-1 overflow-hidden">
                  {card.advantages.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Image
                        src="/icons/check.png"
                        alt="Check"
                        width={18}
                        height={19}
                        className="mr-1 mt-[2px] shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ===== ОГРАНИЧЕНИЯ (одинаковая высота) ===== */}
              <div className="h-[90px] flex flex-col mt-2">
                <p className="text-[14px] font-semibold text-[#B3B3B3] mb-2 h-[18px]">
                  {card.limitations.length > 0 ? card.limitationsTitle : ""}
                </p>

                {card.limitations.length > 0 ? (
                  <ul className="space-y-1.5 text-[12px] text-gray-500 flex-1 overflow-hidden">
                    {card.limitations.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-gray-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex-1" />
                )}
              </div>

              {/* ===== НИЗ КАРТОЧКИ (всегда прижат к низу) ===== */}
              <div className="mt-auto pt-5 flex flex-col gap-4">
                {/* Цена */}
                <div className="flex flex-col">
                  {card.oldPrice && (
                    <span className="text-[12px] text-gray-400 line-through">
                      {card.oldPrice}
                    </span>
                  )}
                  <span className="text-[24px] font-semibold text-gray-900">
                    {card.price}
                  </span>
                </div>

                {/* Бейджи тарифов */}
                <div className="flex gap-2 w-full justify-end">
                  {t.badges
                    .filter((badge) => {

                      if (card.id === "wa-business" && badge.id === "FREE") {
                        return false;
                      }
                      return true;
                    })
                    .map((badge) => {
                      const isActive = badge.id === card.highlightBadge;
                      const shouldFlex = cardIndex === 0 || cardIndex === 2;

                      const base =
                        `inline-flex h-9 items-center justify-center gap-1.5 rounded-full border px-3 text-[12px] font-medium min-w-[70px] ${shouldFlex ? 'flex-1' : 'px-7'}`;

                      const getIconSrc = (badgeId) => {
                        switch (badgeId) {
                          case "FREE":
                            return "/icons/lightning.png";
                          case "PRO":
                            return "/icons/crown.png";
                          case "PRO+":
                            return "/icons/crown_fill.png";
                          default:
                            return null;
                        }
                      };

                      const iconSrc = getIconSrc(badge.id);

                      return (
                        <button
                          key={badge.id}
                          type="button"
                          className={
                            base +
                            (isActive ? "" : " bg-white text-gray-800")
                          }
                        >
                          {iconSrc && (
                            <Image
                              src={iconSrc}
                              alt={badge.label}
                              width={18}
                              height={18}
                              className="shrink-0"
                            />
                          )}
                          {badge.label}
                        </button>
                      );
                    })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
