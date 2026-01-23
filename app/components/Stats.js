export default function Stats({ translations }) {
  return (
    <div className="w-full bg-white py-26.5">
      <div className="max-w-[73.5rem] mx-auto ">
        <div className="flex items-center justify-center">
          {/* Левая часть - текст и статистика */}
          <div className="flex flex-col items-center justify-center ml-20">
            <p className="text-[32px] text-black text-center font-bold tracking-wide">
              {translations.stats.users}
            </p>
            <div className="flex items-center gap-4 -mt-0.5 -ml-5.5 tracking-tight">
              <span className="text-[30px] text-black">
                {translations.stats.growth}
              </span>
              <div 
                className="px-4 py-1 rounded-full text-white text-[32px] font-bold"
                style={{
                  background: 'linear-gradient(to right, #D4FC79 0%, #33B361 100%)'
                }}
              >
                {translations.stats.growthValue}
              </div>
            </div>
            <p className="text-[32px] text-black -mt-0.5 -ml-5.5">
              {translations.stats.savings}
            </p>
          </div>

        
        </div>
      </div>
    </div>
  );
}

