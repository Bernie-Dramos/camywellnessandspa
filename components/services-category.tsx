"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function ServicesCategory({
  category,
  language,
  isOpen,
  onToggle,
}: {
  category: any;
  language: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [openSub, setOpenSub] = useState<number | null>(null);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex flex-col items-center py-8 group focus:outline-none bg-transparent"
      >
        <span className="block rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
          <Image
            src={category.image}
            alt={language === "en" ? category.en : category.pt}
            width={220}
            height={220}
            className="object-cover aspect-[1/1]"
            style={{ borderRadius: "50%" }}
            loading="lazy"
          />
        </span>
        <span
          className="mt-6 text-2xl md:text-3xl font-serif font-light text-[#1a3c34] transition-colors duration-300 group-hover:text-[#d4af37]"
        >
          {language === "en" ? category.en : category.pt}
        </span>
        <ChevronDown
          className={`w-7 h-7 text-[#d4af37] mt-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-2 md:px-8 pb-8">
          {category.subcategories.map((sub: any, subIdx: number) => (
            <div key={subIdx} className="mb-4">
              <button
                onClick={() => setOpenSub(openSub === subIdx ? null : subIdx)}
                className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-md hover:bg-[#f8f5f0] transition-colors"
              >
                <span className="text-lg font-serif font-semibold text-[#1a3c34]">
                  {language === "en" ? sub.en : sub.pt}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#d4af37] transition-transform duration-300 ${openSub === subIdx ? "rotate-180" : ""}`}
                />
              </button>
              {openSub === subIdx && (
                <div className="mt-2 bg-white rounded-md shadow-sm border border-gray-100">
                  {sub.items.map((item: any, idx: number) => (
                    <div
                      key={idx}
                      className="flex justify-between items-start gap-4 px-4 py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-700 flex-1">{language === "en" ? item.en : item.pt}</span>
                      <span className="text-[#d4af37] font-semibold whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {category.key === "nailStudio" && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
              <p className="text-center text-gray-600 text-sm">
                {language === "en"
                  ? "DISCLAIMER: Prices subject to change. Nail art may incur extra fees."
                  : "ATENÇÃO: Preços sujeitos a alteração. Nail art pode ter custo adicional."}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
