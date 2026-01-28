import Image from "next/image";

export default function Tarifs({ translations }) {
  const { tarifs: t } = translations;

  const variableData = [
    {
      tarif: "turbo",
      buttonColor: "linear-gradient(90deg, #11A550 0%, #99E83F 100%)",
      outlineColor: "#73D40A",
      pictureCrs: "/rocket2.png",
      pictureSize: "291",
      pictureOffsetTop: "5",
      pictureOffsetRight: "5",
    },
    {
      tarif: "standart",
      buttonColor: "black",
      outlineColor: "black",
      pictureCrs: "/check.png",
      pictureSize: "279",
      pictureOffsetTop: "4.5",
      pictureOffsetRight: "5.2",
    },
  ];

  return (
    <section
      id="tarifs"
      className="max-w-[73.5rem] px-6.5 bg-white py-20 mx-auto"
    >
      <div className="relative flex flex-col gap-y-20 max-lg:gap-y-10">
        <h2 className="relative font-bold text-[40px] max-lg:text-[30px]">
          {t.title}
        </h2>
        <div className="grid lg:grid-cols-2 place-items-center gap-5">
          {variableData.map((data) => {
            return (
              <div
                key={data.tarif}
                className=" max-w-[39.4rem] w-full max-h-[32.7rem] h-full relative overflow-hidden px-[2.187rem] pt-[1.875rem] pb-[1.312rem]   border-[1.5px] rounded-3xl border-gray-200"
              >
                <h3 className="mb-2 font-bold text-[40px] max-lg:text-[30px]">
                  {t.plans[data.tarif].name}
                </h3>
                <div className="mb-6 font-normal text-[40px] max-lg:text-[30px]">
                  {t.plans[data.tarif].price}/
                  <span className="text-[#B3B3B3] text-[24px] max-lg:text-[20px]">
                    {t.plans[data.tarif].pricePeriod}
                  </span>
                </div>
                <div className="mb-3 text-[#B3B3B3] font-medium text-[16px] max-lg:text-[14px]">
                  {t.plans[data.tarif].featuresTitle}
                </div>
                <div className="min-h-[219px] mb-[1.437rem] flex flex-col justify-between">
                  <ul className="flex flex-col gap-y-1.5 font-normal text-[13px] max-xl:text-[12px]">
                    {t.plans[data.tarif].features.map((feature) => {
                      return (
                        <li
                          key={feature}
                          className="flex items-center gap-x-1 shrink-0"
                        >
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block shrink-0"
                          >
                            <path
                              d="M9.6357 18.1678L3.88281 12.4149L5.32103 10.9767L9.6357 15.2914L18.8958 6.03125L20.334 7.46947L9.6357 18.1678Z"
                              fill="black"
                            />
                          </svg>
                          <p className="shrink-0">{feature}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`min-h-[52px] max-w-[222px] w-full text-white font-medium text-[16px] rounded-lg `}
                    style={{
                      outline: `0.5px solid ${data.outlineColor}`,
                      outlineOffset: "4px",
                      background: data.buttonColor,
                    }}
                  >
                    <a
                      href={`./new-page`}
                      rel="noopener noreferrer"
                      className="w-full h-full flex justify-center items-center px-4 py-2"
                    >
                      {t.plans[data.tarif].button}
                    </a>
                  </button>
                </div>

                <div className="text-[#B3B3B3] font-normal text-[13px] max-lg:text-[12px] ">
                  {t.plans[data.tarif].description}
                </div>
                <Image
                  src={`${data.pictureCrs}`}
                  alt=""
                  width={data.pictureSize}
                  height={data.pictureSize}
                  style={{
                    position: "absolute",
                    top: `-${data.pictureOffsetTop}rem`,
                    right: `-${data.pictureOffsetRight}rem`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
