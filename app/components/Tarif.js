"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";

export default function Tarif({ translations }) {
  const { tarif: t } = translations;
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const comparisonSections = t.compareModal?.sections || [];
  const columns = t.compareModal?.columns || {
    free: "FREE",
    pro: "PRO",
    proPlus: "PRO+",
  };

  const legends = t.compareModal?.legend || {
    available: "доступно",
    notAvailable: "нет",
    soon: "скоро",
  };

  const normalizeCell = (value) => {
    if (value === true) return { type: "check" };
    if (value === false) return { type: "cross" };
    if (value === "soon") return { type: "soon" };
    if (typeof value === "string") return { type: "text", text: value };
    if (value && typeof value === "object") {
      return { type: value.type || "text", text: value.text };
    }
    return { type: "text", text: "" };
  };

  const renderCell = (value) => {
    const cell = normalizeCell(value);

    if (cell.type === "check") {
      return (
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-gray-900 text-base leading-none">✓</span>
          {cell.text && <span className="text-sm text-gray-600">{cell.text}</span>}
        </div>
      );
    }

    if (cell.type === "cross") {
      return (
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-gray-400 text-base leading-none">✕</span>
          {cell.text && <span className="text-sm text-gray-500">{cell.text}</span>}
        </div>
      );
    }

    if (cell.type === "soon") {
      return (
        <span className="text-sm text-gray-500">
          {legends.soon || "скоро"}
        </span>
      );
    }

    return (
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-sm font-medium text-gray-900">{cell.text}</span>
      </div>
    );
  };

  const headerColumns = useMemo(
    () => [
      { key: "free", label: columns.free || "FREE" },
      { key: "pro", label: columns.pro || "PRO" },
      { key: "proPlus", label: columns.proPlus || "PRO+" },
    ],
    [columns.free, columns.pro, columns.proPlus]
  );

  return (
    <section id="prices" className="w-full bg-white py-10">
      <div className="max-w-[73.5rem] mx-auto px-6.5">
        <h2 className=" text-[40px] font-bold mb-23.5 ">
          {t.title}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* FREE */}
          <div className="relative rounded-[24px] bg-white/80 border border-black/5 px-6 py-6.5 min-w-[339px] min-h-[494px] max-w-[339px] max-h-[494px]
                          shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-shadow backdrop-blur-[20px]"> 
            <h3 className="text-[40px] font-bold mb-1">{t.plans.free.name}</h3>

            <p className="text-sm text-gray-500 mb-2 whitespace-pre-line">
              {t.plans.free.description}
            </p>
            <div className="border border-gray-200 mb-4 "></div>
            <p className="text-[14px] font-semibold text-gray-800 mb-4 ">{t.included}</p>
            <ul className="space-y-2 text-[14px] text-gray-800 mb-15 ">
              {t.plans.free.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Image 
                    src="/icons/check.png" 
                    alt="Check" 
                    width={24} 
                    height={24}
                    className="mr-1  flex-shrink-0"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <p className="text-[15px] text-gray-700 mb-2">
                {t.plans.free.price}
              </p>
              <button className="h-[44px] w-full rounded-[999px] border border-black/10 text-[15px] font-medium">
                {t.plans.free.button}
              </button>
            </div>
          </div>

          {/* PRO (зелёная) */}
          <div className="relative rounded-[24px] px-6 py-6.5 min-w-[339px] min-h-[494px] max-w-[339px] max-h-[494px]
                          bg-gradient-to-br from-[#10A547] via-[#3FC764] to-[#99E83F]
                          shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-shadow
                          text-white">
            <h3 className="text-[40px] font-bold mb-1">{t.plans.pro.name}</h3>

            <p className="text-sm text-white/90 mb-2 whitespace-pre-line">
              {t.plans.pro.description}
            </p>
            <div className="border border-gray-200 mb-4 "></div>
            <p className="text-[14px] font-semibold text-white mb-4">{t.included}</p>
            <ul className="space-y-2 text-[14px] text-white mb-5 px-1">
              {t.plans.pro.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Image 
                    src="/icons/check.png" 
                    alt="Check" 
                    width={24} 
                    height={24}
                    className="mr-1  flex-shrink-0 brightness-0 invert"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <p className="text-[24px] font-semibold mb-1">
                {t.plans.pro.price}
              </p>
              <p className="text-[13px] text-white/80 mb-4">
                {t.plans.pro.priceSubtitle}
              </p>
              <button className="h-[44px] w-full rounded-[999px] bg-black/80 text-[15px] font-medium">
                {t.plans.pro.button}
              </button>
            </div>
          </div>

          {/* PRO+ */}
          <div className="relative rounded-[24px] bg-white/80 border border-black/5 px-6 py-6.5 min-w-[339px] min-h-[494px] max-w-[339px] max-h-[494px]
                          shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-shadow backdrop-blur-[20px]">
            <h3 className="text-[40px] font-bold mb-1">{t.plans.proPlus.name}</h3>

            <p className="text-sm text-gray-500 mb-2 whitespace-pre-line">
              {t.plans.proPlus.description}
            </p>
            <div className="border border-gray-200 mb-4 "></div>
            <p className="text-[14px] font-semibold text-gray-800 mb-4">{t.included}</p>
            <ul className="space-y-2 text-[14px] text-gray-800 mb-5 px-1">
              {t.plans.proPlus.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Image 
                    src="/icons/check.png" 
                    alt="Check" 
                    width={24} 
                    height={24}
                    className="mr-1  flex-shrink-0"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <p className="text-[24px] font-semibold mb-1">
                {t.plans.proPlus.price}
              </p>
              <p className="text-[13px] text-gray-500 mb-4">
                {t.plans.proPlus.priceSubtitle}
              </p>
              <button className="h-[44px] w-full rounded-[999px] bg-[#10A547] text-white text-[15px] font-medium">
                {t.plans.proPlus.button}
              </button>
            </div>
          </div>
        </div>

        {/* Кнопка "Сравнить тарифы" как снизу на макете */}
        <div className="mt-28 flex justify-center">
          <button
            onClick={() => setIsCompareOpen(true)}
            className="min-w-[338px] min-h-[56px] max-h-[56px] max-w-[338px] rounded-[14px] bg-black text-white text-[20px] transition hover:bg-black/85"
          >
            {t.compareButton}
          </button>
        </div>
      </div>

      {isCompareOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 overflow-y-auto py-8"
          onClick={() => setIsCompareOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button - fixed outside modal frame */}
          <button
            onClick={() => setIsCompareOpen(false)}
            className="fixed top-8 right-[calc(50%-40rem-3rem)] z-[70] flex h-10 w-10 items-center justify-center rounded-full text-white hover:text-white/80 text-2xl transition"
            aria-label="Close"
          >
            ✕
          </button>

          <div
            className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
              {/* Title */}
            <div className="text-center pt-8 pb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {t.compareModal?.title || t.compareButton}
              </h2>
            </div>

            {/* Sticky header with plan cards */}
            <div className="sticky -top-7.5 z-10 bg-white border-b border-gray-200">
              <div className="grid grid-cols-4 gap-0">
                {/* Empty cell for features column */}
                <div className="p-4"></div>
                
                {/* FREE card */}
                <div className="p-4 text-center">
                  <div className="flex items-center flex-row gap-2 justify-center border border-black rounded-full w-30 p-2 mx-auto">
                  <Image src="/icons/lightning.png" alt="Free" width={17} height={18} className="" />
                    <h3 className="text-lg font-semibold text-gray-900">{t.plans.free.name}</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2 mt-4">
                    <span className="text-sm font-normal text-gray-500">{t.plans.free.price}</span>
                  </p>
             
                </div>

                {/* PRO card */}
                <div className="p-4 text-center border-x border-gray-200 bg-gray-50/50 rounded-t-lg ">
                  <div className="flex items-center flex-row gap-2 justify-center border border-black rounded-full w-30 p-2 mx-auto">
                  <Image src="/icons/crown.png" alt="Pro" width={17} height={18} className="" />
                    <h3 className="text-lg font-semibold text-gray-900">{t.plans.pro.name}</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2 mt-4">
                    {t.plans.pro.price}
                  </p>
               
                </div>

                {/* PRO+ card */}
                <div className="p-4 text-center">
                  <div className="flex items-center flex-row gap-2 justify-center border border-black rounded-full w-30 p-2 mx-auto">
                  <Image src="/icons/crown_fill.png" alt="Pro+" width={17} height={18} className="" />
                    <h3 className="text-lg font-semibold text-gray-900">{t.plans.proPlus.name}</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2 mt-4">
                    {t.plans.proPlus.price}
                  </p>
                 
                </div>
              </div>
            </div>

            {/* Comparison table */}
            <div className="pb-8">
              {comparisonSections.map((section, sectionIdx) => (
                <div key={section.title || sectionIdx}>
                  {/* Section header */}
                  <div className="grid grid-cols-4 gap-0 border-b border-gray-100">
                    <div className="p-8">
                      <h4 className="text-[16px] font-semibold text-gray-900">{section.title}</h4>
                    </div>
                    <div className="p-4"></div>
                    <div className="p-4 border-x border-gray-100 bg-gray-50/30"></div>
                    <div className="p-4"></div>
                  </div>

                  {/* Section items */}
                  {section.items?.map((item, itemIdx) => (
                    <div
                      key={`${section.title}-${item.label}-${itemIdx}`}
                      className="grid grid-cols-4 gap-0 border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="p-6 pl-12 flex items-center">
                        <span className="text-[14px] text-gray-600">{item.label}</span>
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        {renderCell(item.free)}
                      </div>
                      <div className="p-6 flex items-center justify-center border-x border-gray-100 bg-gray-50/30">
                        {renderCell(item.pro)}
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        {renderCell(item.proPlus)}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}