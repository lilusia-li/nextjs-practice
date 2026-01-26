import Image from "next/image";

export default function Tarifs({ translations }) {
  const { tarifs: t } = translations;
  // padding: 82px 80px; //для удобства берем одинаковый: p-20?
  // у каждого li должен быть key, а использовать key={feature} - норм?
  // цвета #B3B3B3 нет в tailwind, норм использовать аналог text-zinc-400?
  return (
    <section id="tarifs" className="bg-white p-20">
      <div className="flex flex-col gap-y-20 ">
        <h2 className="font-bold text-[40px]">{t.title}</h2>
        <div className="flex gap-x-5 ">
          <div className="max-w-[630px] flex-grow relative overflow-hidden p-8 border-[1.5px] rounded-3xl border-gray-200 ">
            <h3 className="mb-6 font-bold text-[40px]">{t.plans.turbo.name}</h3>
            <div className="mb-10 font-normal text-[40px]">
              {t.plans.turbo.price}/
              <span className="text-zinc-400 text-[24px]">
                {t.plans.turbo.pricePeriod}
              </span>
            </div>
            <div className="mb-3 text-zinc-400 font-medium text-[16px]">
              {t.plans.turbo.featuresTitle}
            </div>
            <div className="min-h-[219px] mb-4 flex flex-col justify-between">
              <ul className="flex flex-col gap-y-1.5 mb-8 font-normal text-[13px]">
                {t.plans.turbo.features.map((feature) => {
                  return (
                    <li key={feature} className="flex gap-x-1">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                      >
                        <path
                          d="M9.6357 18.1678L3.88281 12.4149L5.32103 10.9767L9.6357 15.2914L18.8958 6.03125L20.334 7.46947L9.6357 18.1678Z"
                          fill="black"
                        />
                      </svg>
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <button
                className="min-h-[52px]  min-w-[222px] max-w-[222px] text-white font-medium text-[16px] rounded-lg outline outline-lime-500 outline-[0.5px] outline-offset-4"
                style={{
                  background:
                    "linear-gradient(90deg, #11A550 0%, #99E83F 100%)",
                }}
              >
                {t.plans.turbo.button}
              </button>
            </div>

            <div className="text-zinc-400 font-normal text-[13px] ">
              {t.plans.turbo.description}
            </div>
            <Image
              src="/rocket2.png"
              alt=""
              width={291}
              height={291}
              className="absolute -top-20 -right-22"
            />
          </div>
          <div className="max-w-[630px] flex-grow relative overflow-hidden p-8 border-[1.5px] rounded-3xl border-gray-200 ">
            <h3 className="mb-6 font-bold text-[40px]">
              {t.plans.standart.name}
            </h3>
            <div className="mb-10 font-normal text-[40px]">
              {t.plans.standart.price}/
              <span className="text-zinc-400 text-[24px]">
                {t.plans.standart.pricePeriod}
              </span>
            </div>
            <div className="mb-3 text-zinc-400 font-medium text-[16px]">
              {t.plans.standart.featuresTitle}
            </div>
            <div className="min-h-[219px] mb-4 flex flex-col justify-between">
              <ul className="flex flex-col gap-y-1.5 mb-8 font-normal text-[13px]">
                {t.plans.standart.features.map((feature) => {
                  return (
                    <li key={feature} className="flex gap-x-1">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                      >
                        <path
                          d="M9.6357 18.1678L3.88281 12.4149L5.32103 10.9767L9.6357 15.2914L18.8958 6.03125L20.334 7.46947L9.6357 18.1678Z"
                          fill="black"
                        />
                      </svg>
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <button className="min-h-[52px] min-w-[222px] max-w-[222px] bg-black text-white font-medium text-[16px] rounded-lg outline outline-black outline-[0.5px] outline-offset-4">
                {t.plans.standart.button}
              </button>
            </div>

            <div className="text-zinc-400 font-normal text-[13px] ">
              {t.plans.standart.description}
            </div>
            <Image
              src="/check.png"
              alt=""
              width={279}
              height={279}
              className="absolute -top-18 -right-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
