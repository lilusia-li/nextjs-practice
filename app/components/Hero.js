import Image from "next/image";

export default function Hero({ translations }) {
  return (
    <div
      id="about"
      className="relative w-full overflow-hidden scroll-mt-[120px]"
    >
      {/* Левый градиент (оранжевый/персиковый) */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          left: "-200px",
          top: "500px",
          width: "636.4px",
          height: "390.85px",
          opacity: "1",
          transform: "rotate(-14.23deg)",
          filter: "blur(80px)",
          background: "linear-gradient(to bottom, #FFECD2 0%, #FCB69F 100%)",
        }}
      ></div>

      {/* Правый градиент (зеленый) */}
      <div
        className="pointer-events-none absolute z-0 overflow-hidden"
        style={{
          right: "-60px",
          top: "660px",
          width: "470.21px",
          height: "221.94px",
          opacity: "1",
          transform: "rotate(75deg)",
          filter: "blur(70px)",
          background:
            "linear-gradient(to right, #02A750 0%, #B2E06D 1%, #B2DE6D 100%)",
        }}
      ></div>
      <div
        className="pointer-events-none absolute z-0 overflow-hidden"
        style={{
          right: "-60px",
          top: "500px",
          width: "470.21px",
          height: "221.94px",
          opacity: "1",
          transform: "rotate(75deg)",
          filter: "blur(70px)",
          background:
            "linear-gradient(to right, #02A750 0%, #B2E06D 1%, #B2DE6D 100%)",
        }}
      ></div>

      <div
        className="pointer-events-none absolute z-0"
        style={{
          right: "-150px",
          top: "200px",
          width: "300.4px",
          height: "200.85px",
          opacity: "1",
          transform: "rotate(-14.23deg)",
          filter: "blur(80px)",
          background:
            "linear-gradient(to bottom, #FFECD2 0%, #FCB69F 20%, #FCB69F 80%, #FFECD2 100%)",
        }}
      ></div>

      {/* Контейнер для контента */}
      <div className="max-w-[83.25rem] mx-auto mt-18 px-6.5 relative z-10">
        {/* Текст и кнопка */}
        <div>
          <h1 className="text-[48px] font-bold text-black mb-8 whitespace-pre-line leading-[1.3]">
            {translations.hero.headline}
          </h1>
          <p className="text-[20px] text-gray-700 mb-8 -ml-0.5 whitespace-pre-line px-1 leading-[1.5]">
            {translations.hero.description}
          </p>

          <button
            className="
    min-w-[312px] max-w-[312px]
    min-h-[53px] max-h-[53px]
    mt-12.5 px-8
    flex items-center justify-center
    text-white text-[16px] font-normal
    rounded-xl
    transition-all
  "
            style={{
              background: "linear-gradient(90deg, #11A550 0%, #99E83F 100%)",
              boxShadow: "0 0 40px rgba(153, 232, 63, 0.6)",
            }}
          >
            {translations.hero.cta}
          </button>

          <div className="mt-7 text-[16px] px-0.5 flex flex-col -space-y-1 text-sm text-gray-600">
            <span className="">{translations.hero.features.free}</span>
            <span className="">{translations.hero.features.fast}</span>
            <span className="">{translations.hero.features.noCard}</span>
          </div>
        </div>

        {/* Три карточки друг на друге под текстом */}
        <div className="relative w-full flex items-center justify-center ">
          <div className="relative w-full  h-[315px]">
            {/* Монетка power - за первой карточкой */}
            <div className="absolute bottom-6 -left-12 transform z-5">
              <Image
                src="/power.png"
                alt="Power coin"
                width={214}
                height={179}
                className="object-contain"
              />
            </div>

            {/* Монетка tenge - за последней карточкой */}
            <div className="absolute bottom-71  right-0 translate-x-43 transform z-5">
              <Image
                src="/tenge.png"
                alt="Tenge coin"
                width={360}
                height={284}
                className="object-contain"
              />
            </div>

            {/* Card 1 - самая нижняя */}
            <div className="absolute bottom-0 left-13.5 transform  z-20">
              <Image
                src="/card1.png"
                alt="Card 1"
                width={480}
                height={487}
                className="object-contain"
              />
            </div>
            {/* Card 2 - средняя */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-47.5 z-15">
              <Image
                src="/card2.png"
                alt="Card 2"
                width={480}
                height={490}
                className="object-contain"
              />
            </div>
            {/* Card 3 - самая верхняя */}
            <div className="absolute bottom-0 right-0 translate-x-27 transform  z-10">
              <Image
                src="/card3.png"
                alt="Card 3"
                width={480}
                height={487}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
