import Image from "next/image";

export default function Features({ translations }) {
  return (
    <div className="w-full bg-white py-2 relative overflow-hidden max-h-[1366px] min-h-[1366px]">
      {/* Фоновая монетка справа вверху */}
    

      <div
        className="pointer-events-none absolute z-0"
        style={{
          left: '-500px',
          top: '400px',
          width: '636.4px',
          height: '390.85px',
          opacity: '1',
          transform: 'rotate(-14.23deg)',
          filter: 'blur(80px)',
          background: 'linear-gradient(to right, #02A750 0%, #B2E06D 1%, #B2DE6D 100%)'
        }}
      ></div>
    

<div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          right: '-550px',
          top: '400px',
          width: '826px',
          height: '883px',
          opacity: '1',
          filter: 'blur(80px)',
          background: 'linear-gradient(to right, #D4FC79 0%,  #33B361 100%)'
        }}
      ></div>



      <div className="max-w-[73.5rem] mx-auto px-6.5   py-20 relative z-10">



      <div className="max-w-[1178px] min-h-[337px] flex flex-col items-start justify-start px-5.5 bg-white border border-gray-200 rounded-[24px] p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-shadow mb-65">
            <div className="flex flex-col items-start justify-start mt-7">
                <h3 className="text-[36px] font-bold text-black">
                    {translations.features.mobile[0].title}
                </h3>
                <p className="text-[24px] text-gray-700 leading-[1.5] mt-2.5 -ml-0.5 whitespace-pre-line  ">
                    {translations.features.mobile[0].description}
                </p>
               
            </div>
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
    background: 'linear-gradient(90deg, #11A550 0%, #99E83F 100%)',
    boxShadow: '0 0 40px rgba(153, 232, 63, 0.6)',
  }}
>
                {translations.features.mobile[0].cta}
            </button>

            <div className="absolute -top-[16px] py-20 right-20.5 transform z-10">
              <Image 
                src="/iphone.png" 
                alt="Power coin" 
                width={361} 
                height={715}
                className="object-contain"
              />
            </div>  
            
            <div className="absolute -top-[63px] py-20 right-0 translate-x-16.5  z-5">
              <Image 
                src="/rocket.png" 
                alt="Power coin" 
                width={460} 
                height={490}
                className="object-contain"
              />
            </div>  
            
        </div>

        <h2 className="text-[40px] font-bold text-black mb-18">
          {translations.features.title}
        </h2>
        
        <div className="grid grid-cols-2 gap-20 -space-y-15 ">

        <div className="absolute bottom-55  right-0 translate-x-60 transform z-1">
              <Image 
                src="/fun.png" 
                alt="Tenge coin" 
                width={518} 
                height={518}
                className="object-contain"
              />
            </div>
          {/* Карточка 1 */}
          <div className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-shadow max-w-[580px] max-h-[209px] min-h-[209px] min-w-[580px] z-10">
            <div className="text-black flex items-center flex-row gap-6 mt-1 z-10">
                <div className="flex items-center justify-center -mt-22.5 -ml-2 max-w-[63px] max-h-[63px] min-w-[63px] min-h-[63px] rounded-[10px] border border-gray-200 ">
              <Image 
                src="/icons/people.png" 
                alt="People icon" 
                width={36} 
                height={36}
                className="object-contain"
              />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h3 className="text-[25px] font-bold text-black">
                  {translations.features.items[0].title}
                </h3>
                <p className="text-[20px] text-gray-700 leading-[1.6] mt-1.5 -ml-0.5 whitespace-pre-line  ">
                  {translations.features.items[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-shadow max-w-[580px] max-h-[209px] min-h-[209px] min-w-[580px] z-10">
            <div className="text-black flex items-center flex-row gap-4 mt-1 z-10">
                <div className="flex items-center justify-center -mt-22.5 -ml-1.5 max-w-[63px] max-h-[63px] min-w-[63px] min-h-[63px] rounded-[10px] border border-gray-200 ">
              <Image 
                src="/icons/diagram.png" 
                alt="Diagram icon" 
                width={36} 
                height={36}
                className="object-contain"
              />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h3 className="text-[25px] font-bold text-black">
                  {translations.features.items[1].title}
                </h3>
                <p className="text-[20px] text-gray-700 leading-[1.5] mt-2.5 -ml-0.5 whitespace-pre-line  ">
                  {translations.features.items[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-shadow max-w-[580px] max-h-[209px] min-h-[209px] min-w-[580px] z-10">
            <div className="text-black flex items-center flex-row gap-5 -ml-0.5 z-10">
                <div className="flex items-center justify-center -mt-22 -ml-1.5 max-w-[63px] max-h-[63px] min-w-[63px] min-h-[63px] rounded-[10px] border border-gray-200 ">
              <Image 
                src="/icons/star.png" 
                alt="Star icon" 
                width={36} 
                height={36}
                className="object-contain"
              />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h3 className="text-[25px] font-bold text-black">
                  {translations.features.items[2].title}
                </h3>
                <p className="text-[20px] text-gray-700 leading-[1.5] mt-3 -ml-0.5 whitespace-pre-line  ">
                  {translations.features.items[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-shadow max-w-[580px] max-h-[209px] min-h-[209px] min-w-[580px] z-10">
            <div className="text-black flex items-center flex-row gap-4.5 mt-0.5 z-10">
                <div className="flex items-center justify-center -mt-22.5 -ml-2 max-w-[63px] max-h-[63px] min-w-[63px] min-h-[63px] rounded-[10px] border border-gray-200 ">
              <Image 
                src="/icons/clock.png" 
                alt="Clock icon" 
                width={36} 
                height={36}
                className="object-contain"
              />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h3 className="text-[25px] font-bold text-black">
                  {translations.features.items[3].title}
                </h3>
                <p className="text-[20px] text-gray-700 leading-[1.5] mt-2.5 -ml-0.5 whitespace-pre-line  ">
                  {translations.features.items[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

       
        
      </div>
    </div>
  );
}

