"use client";

import { useState } from "react";
import Image from "next/image";

export default function StartSellingCTA({ translations }) {
  const { cta: t } = translations;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    store: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Формируем URL с параметрами для Bitrix24
      const baseUrl = "https://vrtech.bitrix24.kz/rest/1/2ymg6fq34fbruog7/crm.deal.add.json";
      const params = new URLSearchParams({
        "FIELDS[TITLE]": formData.store || "Новый лид",
        "FIELDS[NAME]": formData.name || "",
        "FIELDS[EMAIL][0][VALUE]": formData.email || "",
        "FIELDS[EMAIL][0][VALUE_TYPE]": "WORK",
        "FIELDS[PHONE][0][VALUE]": formData.phone || "",
        "FIELDS[PHONE][0][VALUE_TYPE]": "WORK",
        "COMPANY_TITLE": formData.store || "",
      });

      const response = await fetch(`${baseUrl}?${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.result) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          store: "",
        });
        // Скрываем сообщение об успехе через 5 секунд
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-28">
      <div className="max-w-[75rem] mx-auto px-6.5 ">
        <div
          className="
            relative overflow-hidden rounded-[32px]
            h-[409px] w-full
            bg-cover bg-center
            shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-shadow
          "
          style={{
            backgroundImage: "url('/bg.png')",
          }}
        >
          {/* затемнение */}
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 h-full grid grid-cols-[1.2fr_0.8fr] items-center px-14">
  <div className="text-white w-full">
    <h2 className="text-[32px] font-bold leading-tight mb-4 whitespace-nowrap">
      {t.title}
    </h2>

    <div className="h-[2px] w-full bg-white mb-6 "  />

    <p className="text-[20px] text-white/90 mb-8 max-w-[430px] line-clamp-2">
      {t.description}
    </p>

              <ul className="space-y-3 text-[20px]">
                {t.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Image
                      src="/icons/check.png"
                      alt=""
                      width={24}
                      height={19}
                      className="brightness-0 invert"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== ПРАВАЯ ЧАСТЬ (форма) ===== */}
            <div className="flex justify-end">
              <form onSubmit={handleSubmit} className="w-[360px] space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.form.name}
                  required
                  className="h-[44px] w-full rounded-[12px] px-4 text-[14px] outline-none bg-white"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.form.phone}
                  required
                  className="h-[44px] w-full rounded-[12px] px-4 text-[14px] outline-none bg-white"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.form.email}
                  required
                  className="h-[44px] w-full rounded-[12px] px-4 text-[14px] outline-none bg-white"
                />
                <input
                  type="text"
                  name="store"
                  value={formData.store}
                  onChange={handleChange}
                  placeholder={t.form.store}
                  className="h-[44px] w-full rounded-[12px] px-4 text-[14px] outline-none bg-white"
                />

                {submitStatus === "success" && (
                  <div className="p-3 bg-green-500 text-white text-sm rounded-[12px] text-center">
                    {t.form.success}
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-500 text-white text-sm rounded-[12px] text-center">
                    {t.form.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    h-[48px] w-full rounded-[12px]
                    bg-gradient-to-r from-[#19C060] to-[#8AE837]
                    text-white text-[15px] font-semibold
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-opacity
                  "
                >
                  {isSubmitting ? t.form.submitting : t.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


