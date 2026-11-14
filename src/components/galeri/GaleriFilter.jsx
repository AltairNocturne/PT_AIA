import React from 'react';
import { useTranslation } from 'react-i18next';

export default function GaleriFilter({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  counts
}) {
  const { t } = useTranslation();

  const categories = [
    { key: 'all', labelKey: 'galeri.filter.all', icon: 'apps' },
    { key: 'training', labelKey: 'galeri.filter.training', icon: 'school' },
    { key: 'departure', labelKey: 'galeri.filter.departure', icon: 'flight_takeoff' },
    { key: 'facility', labelKey: 'galeri.filter.facility', icon: 'domain' },
    { key: 'overseas', labelKey: 'galeri.filter.overseas', icon: 'public' },
    { key: 'diplomatic', labelKey: 'galeri.filter.diplomatic', icon: 'handshake' }
  ];

  return (
    <section className="sticky top-16 lg:top-20 z-30 bg-surface/95 backdrop-blur-md border-b border-outline-variant/40 py-4 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              const count = counts[cat.key] || 0;

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-label-button text-label-button transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-sm font-semibold'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[18px] ${isActive ? 'text-tertiary-fixed' : 'text-secondary'}`}>
                    {cat.icon}
                  </span>
                  <span>{t(cat.labelKey)}</span>
                  <span
                    className={`ml-1 text-xs px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-primary-container/80 text-tertiary-fixed'
                        : 'bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full lg:w-72 shrink-0">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px] pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari foto, lokasi, topik..."
              className="w-full h-10 pl-10 pr-8 bg-surface-container-lowest border border-outline-variant/40 rounded-xl text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface p-1 rounded-full"
                aria-label="Hapus pencarian"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
