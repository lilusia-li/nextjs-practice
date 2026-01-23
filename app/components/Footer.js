import Image from "next/image";
import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function Footer({ translations, currentLocale }) {
  const { footer: t } = translations;

  return (
    <footer className="w-full py-10 bg-gradient-to-br from-[#FFE4C0] via-white to-[#C6FFC5] -mt-10">
      <div className="max-w-[82.5rem] mx-auto px-6.5">
        <div
          className="
            relative overflow-hidden rounded-[32px]
            px-10 py-8 md:px-16 md:py-10
            flex flex-row items-start justify-between gap-10
          "
        >
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="flex flex-col items-start justify-between gap-5 min-w-[220px] min-h-[220px] flex-shrink-0 mt-2">
            {/* логотип */}
            <div className="flex items-center gap-2 ">
              <Image
                src="/Logo.svg"
                alt="SellerON"
                width={150}
                height={30}
                className=""
              />
            </div>

            <div className="text-[20px] mt-8 leading-snug text-gray-800">
              <p>{t.company.name}</p>
              <p>{t.company.bin}</p>
            </div>

            {/* соц-иконки */}
            {/* <div className="flex gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#02A750] shadow-sm">
                <HiMail className="w-5 h-5 text-white" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#02A750] shadow-sm">
                <FaWhatsapp className="w-5 h-5 text-white" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#02A750] shadow-sm">
                <FaTelegram className="w-5 h-5 text-white" />
              </button>
            </div> */}
            <div className="-mt-12">
            <Image src="/AstanaHub.svg" alt="Socials" width={100} height={100} className="w-50 h-50" />
            </div>
          </div>

          {/* ЦЕНТРАЛЬНАЯ КОЛОНКА */}
          <div className="flex-1 flex flex-col gap-5 text-gray-900 ml-30">
            <div>
              <p className="font-semibold  text-[24px]">{t.contacts.sales.title}</p>
              <p className="text-[20px]">{t.contacts.sales.value}</p>
            </div>

            <div>
              <p className="font-semibold  text-[24px]">{t.contacts.support.title}</p>
              <p className="text-[20px]">{t.contacts.support.value}</p>
            </div>

            <div>
              <p className="font-semibold  text-[24px]">{t.contacts.office.title}</p>
              <p className="text-[20px]">{t.contacts.office.value}</p>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <div className="flex flex-col items-end gap-4 min-w-[230px] min-h-[220px] flex-shrink-0">
            <div className="text-right">
              <p className="text-[36px] md:text-[30px] font-semibold leading-none">
                {t.contacts.phone.number}
              </p>
              <p className="mt-2 text-[20px] text-gray-600">
                {t.contacts.phone.schedule}
              </p>
            </div>

            

            <div className="flex flex-col items-end gap-1 text-[20px] text-gray-700 mt-12">
              <Link href={`/${currentLocale}/offer`} className="text-left hover:underline">
                {t.links.offer}
              </Link>
              <Link href={`/${currentLocale}/privacy`} className="text-left hover:underline">
                {t.links.privacy}
              </Link>
              <Link href={`/${currentLocale}/payment-rules`} className="text-left hover:underline">
                {t.links.policy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

