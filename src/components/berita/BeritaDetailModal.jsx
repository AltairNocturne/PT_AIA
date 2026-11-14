import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function BeritaDetailModal({ article, isOpen, onClose }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'id';
  const [copied, setCopied] = useState(false);

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    },
    [isOpen, onClose]
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

  if (!isOpen || !article) return null;

  const title = article.title?.[currentLang] || article.title?.id;
  const role = article.author?.role?.[currentLang] || article.author?.role?.id;
  const paragraphs = article.content?.[currentLang] || article.content?.id || [];
  const keyPoints = article.keyPoints || [];

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/berita#${article.id}` : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target.id === 'modal-backdrop') onClose();
      }}
      id="modal-backdrop"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-surface-container-lowest rounded-3xl max-w-3xl w-full my-auto overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 border border-outline-variant/30 flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-surface-container-lowest/90 backdrop-blur-md px-space-md lg:px-space-lg py-3 border-b border-outline-variant/20 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">
            {t(`beritaPage.filter.${article.category}`) || article.category}
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label={t('beritaPage.modal.close')}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-space-md lg:p-space-xl space-y-space-md">
          {/* Header Image */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-surface-container shadow-md">
            <img
              src={article.image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-on-primary">
              <div className="flex items-center gap-3 text-tertiary-fixed text-xs font-medium mb-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                  <span>{article.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span>{article.readTime} {t('beritaPage.card.minRead')}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface leading-tight">
            {title}
          </h1>

          {/* Author Badge */}
          <div className="flex items-center gap-3 py-space-sm border-y border-outline-variant/30">
            <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-tertiary-fixed font-bold shrink-0">
              <span className="material-symbols-outlined text-[24px]">verified_user</span>
            </div>
            <div>
              <div className="font-label-button text-label-button text-on-surface">
                {article.author?.name}
              </div>
              <div className="font-label-caption text-label-caption text-secondary">
                {role}
              </div>
            </div>
          </div>

          {/* Key Takeaways Box */}
          {keyPoints.length > 0 && (
            <div className="bg-surface-container-low border border-secondary-container rounded-2xl p-space-md lg:p-space-lg">
              <div className="flex items-center gap-2 text-primary font-label-eyebrow text-label-eyebrow uppercase mb-space-sm">
                <span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">award_star</span>
                <span>{t('beritaPage.modal.keyPointsTitle')}</span>
              </div>
              <ul className="space-y-2">
                {keyPoints.map((kp, idx) => {
                  const pt = kp[currentLang] || kp.id;
                  return (
                    <li key={idx} className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{pt}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Full Paragraphs */}
          <div className="space-y-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Social Share & Copy Bar */}
          <div className="pt-space-md border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${title}: ${shareUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-xl bg-[#25D366] text-white flex items-center gap-2 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>{t('beritaPage.modal.shareWa')}</span>
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-xl bg-[#1877F2] text-white flex items-center gap-2 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
                <span>{t('beritaPage.modal.shareFb')}</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="h-10 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center gap-2 text-xs font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">content_copy</span>
                <span>{copied ? t('beritaPage.modal.copied') : 'Salin Tautan'}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-secondary hover:text-on-surface hover:underline transition-colors"
            >
              {t('beritaPage.modal.backBtn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
