import Image from "next/image";

export default function Statistic({ translations }) {
  const { statistic: s } = translations;
  const variableData = [
    {
      statsIndicator: "sellers",
      pictureSrc: "/statistic/sellers_black.svg",
      pictureSize: "39",
      borderColor: "#E5E7EB",
      borderWidth: "1.5px",
      shadow: "0 1px 34.2px 0 rgba(0, 0, 0, 0.25);",
      bg: "#FFFFFF80",
      blur: "blur(0px);",
    },
    {
      statsIndicator: "revenue",
      pictureSrc: "/statistic/diagram_black.svg",
      pictureSize: "40",
      borderColor: "#FFFFFF80",
      borderWidth: "3px",
      shadow: "0 1px 50px 0 rgba(0, 0, 0, 0.2);",
      bg: "#FFFFFF03",
      blur: "blur(18px)",
    },
    {
      statsIndicator: "people",
      pictureSrc: "/statistic/star_black.svg",
      pictureSize: "45",
      borderColor: "#FFFFFF80",
      borderWidth: "3px",
      shadow: "0 1px 50px 0 rgba(0, 0, 0, 0.2);",
      bg: "#FFFFFF03",
      blur: "blur(18px)",
    },
    {
      statsIndicator: "time",
      pictureSrc: "/statistic/clock_black.svg",
      pictureSize: "44",
      borderColor: "#FFFFFF80",
      borderWidth: "3px",
      shadow: "0 1px 50px 0 rgba(0, 0, 0, 0.2);",
      bg: "#FFFFFF03",
      blur: "blur(18px)",
    },
  ];
  return (
    <section
      id="statistic"
      className="px-6.5 pt-[5.94rem] pb-[7.38rem] bg-[#F9F9F9] overflow-hidden "
    >
      {/* Контейнер с контентом */}
      <div className="relative flex flex-col gap-y-[2.87rem] max-w-[80rem] mx-auto">
        {/* Фоновая картинка слева */}
        <Image
          src="/statistic/tenge.png"
          alt=""
          width={431}
          height={431}
          className="absolute top-[182px] -left-[235px]"
        ></Image>

        {/* Фоновая картинка справа */}
        <Image
          src="/statistic/big_man.png"
          alt=""
          width={603}
          height={603}
          className="absolute -top-[115px] -right-[253px]"
        ></Image>

        <h2 className="font-bold text-[2.5rem] max-w-[50rem] leading-tight">
          {s.title}
          <span
            style={{
              background: "linear-gradient(90deg, #02A750 0%, #73D40A 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {s.titleGreen}
          </span>
        </h2>
        <div className="grid grid-cols-2 gap-x-5 gap-y-4 z-10">
          {variableData.map((data) => {
            return (
              <div
                className="min-h-[13rem] p-[2.38rem] rounded-[1.5rem] shadow-[0_1px_34.2px_0_rgba(0,0,0,0.25)]"
                style={{
                  borderColor: `${data.borderColor}`,
                  borderWidth: `${data.borderWidth}`,
                  boxShadow: `${data.shadow}`,
                  background: `${data.bg}`,
                  backdropFilter: `${data.blur}`,
                }}
                key={data.statsIndicator}
              >
                <div className="flex gap-x-4 ">
                  <div className="shrink-0 -mt-1 flex items-center justify-center w-[80px] h-[80px] border-[1.5px] border-[#E5E7EB] rounded-xl">
                    <Image
                      src={`${data.pictureSrc}`}
                      alt=""
                      width={data.pictureSize}
                      height={data.pictureSize}
                    ></Image>
                  </div>

                  <div className="flex flex-col gap-y-3.5">
                    <h3 className="font-bold text-[1.68rem] leading-[1.1]">
                      {s.stats[data.statsIndicator].title}
                    </h3>
                    <p className="font-light text-xl leading-[1.45]">
                      {s.stats[data.statsIndicator].description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
