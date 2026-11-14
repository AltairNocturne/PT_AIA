import React from 'react';
import { useTranslation } from 'react-i18next';

// Class literal supaya aman dari purge Tailwind.
// Tetap kompatibel dengan data lama: colSpan: 'col-span-2', rowSpan: 'row-span-2'
const COL_SPAN = {
  'col-span-2': 'sm:col-span-2',
  'col-span-3': 'sm:col-span-2 lg:col-span-3',
};
const ROW_SPAN = {
  'row-span-2': 'sm:row-span-2',
};

const CATEGORY_ICON = {
  training: 'school',
  departure: 'flight_takeoff',
  facility: 'domain',
  overseas: 'public',
};

export default function GaleriGrid({ items, onOpenLightbox }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'id';

  if (!items || items.length === 0) {
    return (
      <section className="py-20 text-center">
        <div className="max-w-md mx-auto px-margin">
          <div className="w-16 h-16 mx-auto rounded-full bg-surface-container flex items-center justify-center text-secondary mb-space-md">
            <span className="material-symbols-outlined text-[32px]">photo_library</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
            {t('galeri.empty.title', { defaultValue: 'Tidak Ada Dokumentasi yang Cocok' })}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {t('galeri.empty.desc', {
              defaultValue: 'Coba ubah kata kunci pencarian atau pilih kategori dokumentasi lainnya.',
            })}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Bento grid: baris tinggi tetap, item yang span otomatis nutup lubang */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense auto-rows-[260px] sm:auto-rows-[280px] lg:auto-rows-[300px] gap-space-md lg:gap-space-lg">
          {items.map((item, index) => {
            const title = item.title?.[currentLang] || item.title?.id;
            const location = item.location?.[currentLang] || item.location?.id;
            const icon = CATEGORY_ICON[item.category] || 'handshake';

            const spanClass = [
              COL_SPAN[item.colSpan] || '',
              ROW_SPAN[item.rowSpan] || '',
            ].join(' ');

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(index)}
                className={`group relative h-full rounded-2xl overflow-hidden cursor-pointer bg-surface-container-low border border-outline-variant/30 shadow-sm hover:shadow-xl transition-shadow duration-300 ${spanClass}`}
              >
                <img
                  src={item.src}
                  alt={title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Category chip */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/70 backdrop-blur-md border border-surface-container-lowest/20 font-label-eyebrow text-label-eyebrow text-tertiary-fixed shadow-sm">
                    <span className="material-symbols-outlined text-[14px]">{icon}</span>
                    <span>{t(`galeri.filter.${item.category}`, { defaultValue: item.category })}</span>
                  </span>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <div className="w-9 h-9 rounded-full bg-surface-container-lowest/20 backdrop-blur-md border border-surface-container-lowest/30 flex items-center justify-center text-on-primary shadow-md">
                    <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute inset-x-0 bottom-0 p-space-md flex flex-col justify-end text-on-primary z-10">
                  <div className="flex items-center gap-2 mb-1.5 text-tertiary-fixed font-label-caption text-label-caption">
                    <span className="flex items-center gap-1 min-w-0">
                      <span className="material-symbols-outlined text-[14px] shrink-0">location_on</span>
                      <span className="truncate">{location}</span>
                    </span>
                    <span className="shrink-0">•</span>
                    <span className="flex items-center gap-1 shrink-0">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-primary line-clamp-2 leading-snug group-hover:text-tertiary-fixed transition-colors">
                    {title}
                  </h3>

                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-tertiary-fixed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{t('galeri.card.viewDetail')}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
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