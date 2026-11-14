import React, { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function GaleriLightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev,
  onSelectIndex
}) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'id';

  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  const itemTitle = currentItem.title[currentLang] || currentItem.title.id;
  const itemDesc = currentItem.desc[currentLang] || currentItem.desc.id;
  const itemLoc = currentItem.location[currentLang] || currentItem.location.id;

  return (
    <div
      className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target.id === 'lightbox-backdrop') onClose();
      }}
      id="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={t('galeri.modal.title')}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-on-primary shrink-0 z-10 py-2">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-surface-container-lowest/15 backdrop-blur-md rounded-full text-xs font-semibold text-tertiary-fixed uppercase tracking-wider">
            {t(`galeri.filter.${currentItem.category}`) || currentItem.category}
          </span>
          <span className="font-label-caption text-label-caption text-surface-container-low hidden sm:inline">
            {t('galeri.modal.imageCounter', {
              current: currentIndex + 1,
              total: items.length
            })}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label={t('galeri.modal.close')}
          className="w-10 h-10 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-all focus:outline-none focus:ring-2 focus:ring-tertiary-fixed"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-2 max-h-[72vh] overflow-hidden">
        {/* Prev Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label={t('galeri.modal.prev')}
          className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-primary/70 hover:bg-primary text-on-primary border border-surface-container-lowest/20 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <span className="material-symbols-outlined text-[28px]">chevron_left</span>
        </button>

        {/* Current Image */}
        <div className="relative max-w-5xl max-h-full flex items-center justify-center rounded-xl overflow-hidden shadow-2xl">
          <img
            key={currentItem.id}
            src={currentItem.src}
            alt={itemTitle}
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl select-none animate-in zoom-in-95 duration-200"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label={t('galeri.modal.next')}
          className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-primary/70 hover:bg-primary text-on-primary border border-surface-container-lowest/20 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <span className="material-symbols-outlined text-[28px]">chevron_right</span>
        </button>
      </div>

      {/* Bottom Information Panel & Thumbnail Strip */}
      <div className="shrink-0 max-w-4xl mx-auto w-full bg-surface-container-lowest/10 backdrop-blur-md border border-surface-container-lowest/15 rounded-xl p-space-md text-on-primary z-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm mb-space-sm">
          <div>
            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-primary">
              {itemTitle}
            </h3>
            <p className="font-body-sm text-body-sm text-surface-container-low mt-1 leading-relaxed">
              {itemDesc}
            </p>
          </div>
          <div className="flex items-center gap-space-sm shrink-0 font-label-caption text-label-caption text-tertiary-fixed">
            <span className="flex items-center gap-1 bg-primary/60 px-2.5 py-1 rounded-lg">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>{itemLoc}</span>
            </span>
            <span className="flex items-center gap-1 bg-primary/60 px-2.5 py-1 rounded-lg">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span>{currentItem.date}</span>
            </span>
          </div>
        </div>

        {/* Thumbnail Preview Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-surface-container-lowest/15 no-scrollbar">
          {items.map((it, idx) => (
            <button
              key={it.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectIndex(idx);
              }}
              className={`relative shrink-0 w-14 h-10 rounded-md overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? 'border-tertiary-fixed scale-105 shadow-md opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-90'
              }`}
            >
              <img
                src={it.src}
                alt={it.title[currentLang] || it.title.id}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
