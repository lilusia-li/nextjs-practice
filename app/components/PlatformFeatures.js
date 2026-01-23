import Image from "next/image";

export default function PlatformFeatures({ translations }) {
  return (
    <div id="platform" className="w-full bg-white   relative overflow-hidden scroll-mt-[120px]">
      <div className="max-w-[73.5rem] mx-auto px-6.5 mb-10 relative z-10">
        <div className="">
          <h2 className="text-[40px] font-bold text-black mb-4">
            {translations.platform.title}
          </h2>
          <p className="text-[20px] text-gray-700 leading-[1.3] whitespace-pre-line -ml-0.5 ">
            {translations.platform.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-17 mt-14 relative">
         

          {/* Карточка 1 */}
          <div
            className="relative z-10 overflow-hidden min-w-[578px] min-h-[671px] rounded-[28px] opacity-70 mb-5"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 100%)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 8px 40px 0 rgba(0,0,0,0.4), inset 0 40px 0 0 rgba(255,255,255,0.6)',
            }}
          >
            {/* Внутренний блик сверху */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[28px] opacity-50"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              }}
            />
            <div className="relative z-10 p-6 ">

            <div className="text-black flex items-center flex-row gap-6 mt-1 ">

              <div className="flex flex-col items-start justify-center ml-1 gap-20">
                <div className="">
                <h3 className="text-[27px] font-bold text-black">
                  {translations.platform.left[0].title}
                </h3>
                <p className="text-[20px] text-gray-700 leading-[1.5] mt-[9px] ml-1 whitespace-pre-line">
                  {translations.platform.left[0].description}
                </p>
                </div>
                <div className="">  
                <h3 className="text-[27px] font-bold text-black">
                  {translations.platform.left[1].title}
                </h3>
                <p className="text-[20px] text-gray-700 leading-[1.5] mt-3  whitespace-pre-line">
                  {translations.platform.left[1].description}
                </p>

                </div>
                <div className="">
                <h3 className="text-[27px] font-bold text-black mt-1 ">
                  {translations.platform.left[2].title}
                </h3>
                <p className="text-[20px] text-gray-700 leading-[1.5] mt-2.5  whitespace-pre-line">
                  {translations.platform.left[2].description}
                </p>
                </div>
              </div>
            </div>
            </div>
          </div>


          <div
            className="relative z-10 overflow-hidden min-w-[578px] min-h-[671px] rounded-[28px] opacity-70 mb-5"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 100%)',
              backdropFilter: 'blur(1000px) saturate(180%)',
              WebkitBackdropFilter: 'blur(1000px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 8px 40px 0 rgba(0,0,0,0.4), inset 0 40px 0 0 rgba(255,255,255,0.6)',
            }}
          >
            {/* Внутренний блик сверху */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[28px] bg"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              }}
            />
           
            <div className="relative z-10 p-6">
            <div className="text-black flex items-center flex-row gap-4 mt-0.5">
              <div className="flex flex-col items-start justify-center gap-20">
                <div className="">
                <h3 className="text-[27px] font-bold text-black mt-0.5 ">
                  {translations.platform.right[0].title}
                </h3>
                <p className="text-[20px] text-gray-700 leading-[1.5] mt-2.5  whitespace-pre-line">
                  {translations.platform.right[0].description}
                </p>
                </div>
                <div className="">
                <h3 className="text-[27px] font-bold text-black mt-0.5 ">
                  {translations.platform.right[1].title}
                </h3>
                <p className="text-[20px] text-gray-700 leading-relaxed mt-1.5 whitespace-pre-line">
                  {translations.platform.right[1].description}
                </p>
                </div>
                <div className="">
                <h3 className="text-[27px] font-bold text-black">
                  {translations.platform.right[2].title}
                </h3>
                <p className="text-[20px] text-gray-700 leading-relaxed mt-1.5 whitespace-pre-line">
                  {translations.platform.right[2].description}
                </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="absolute bottom-30 left-0 -translate-x-100 transform z-5">
              <Image 
                src="/notification.png" 
                alt="Tenge coin" 
                width={700} 
                height={700}
                className="object-contain"
              />
            </div>
        </div>
      </div>
    </div>
  );
}

