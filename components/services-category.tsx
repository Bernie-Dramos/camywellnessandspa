"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import type { ServiceCategory } from "@/lib/services-data";

export function ServicesCategory({
  category,
  language,
  isOpen,
  onToggle,
}: {
  category: ServiceCategory;
  language: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  // Default to the first subcategory so prices are visible as soon as a
  // category is opened, without a second click.
  const [openSub, setOpenSub] = useState<number | null>(0);
  const panelId = `category-panel-${category.key}`;

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
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

      {/* Always rendered, collapsed with `hidden`, so every price is present in
          the server-rendered HTML and can be indexed by search engines. */}
      <div id={panelId} hidden={!isOpen} className="px-2 md:px-8 pb-8">
        {category.subcategories.map((sub, subIdx) => {
          const subPanelId = `${panelId}-sub-${subIdx}`;
          const subOpen = openSub === subIdx;
          return (
            <div key={subIdx} className="mb-4">
              <button
                onClick={() => setOpenSub(subOpen ? null : subIdx)}
                aria-expanded={subOpen}
                aria-controls={subPanelId}
                className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-md hover:bg-[#f8f5f0] transition-colors"
              >
                <span className="text-lg font-serif font-semibold text-[#1a3c34] text-left">
                  {language === "en" ? sub.en : sub.pt}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#d4af37] shrink-0 transition-transform duration-300 ${subOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id={subPanelId}
                hidden={!subOpen}
                className="mt-2 bg-white rounded-md shadow-sm border border-gray-100"
              >
                {sub.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start gap-4 px-4 py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-gray-700 flex-1">{language === "en" ? item.en : item.pt}</span>
                    <span className="text-[#d4af37] font-semibold whitespace-nowrap">
                      {language === "en" && item.priceEn ? item.priceEn : item.price}
                    </span>
                  </div>
                ))}
                {(language === "en" ? sub.noteEn : sub.notePt) && (
                  <p className="px-4 py-3 text-sm text-gray-500 italic border-t border-gray-100">
                    {language === "en" ? sub.noteEn : sub.notePt}
                  </p>
                )}
              </div>
            </div>
          );
        })}
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
    </div>
  );
}
