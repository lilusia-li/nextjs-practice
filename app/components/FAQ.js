'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FAQ({ translations }) {
  const { faq: t } = translations;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-30 relative scroll-mt-[120px]">
      <div className="max-w-[73.5rem] mx-auto px-25.5  relative z-10 border border-gray-200 rounded-[24px] p-7.5 shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-shadow">
        <h2 className="text-[40px] font-bold mb-10">
          {t.title}
        </h2>

        <div className="space-y-6 mb-5">
          {t.items.map((item, index) => (
            <div
              key={index}
              className="rounded-[12px] border border-gray-200 overflow-hidden transition-all z-20"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors z-20"
              >
                <span className="text-[16px] font-medium text-black pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-600 shrink-0 transition-transform duration-300 ease-in-out ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-[500px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-14 pb-4">
                  <p className="text-[14px] text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

         {/* Декоративный элемент справа вверху */}
      <div className="absolute -top-40  right-0 translate-x-30 transform z-0">
        <Image 
          src="/question.png" 
          alt="Question mark decoration" 
          width={350} 
          height={350}
          className="object-contain"
        />
      </div>
      </div>

     
    </section>
  );
}
