import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BeritaNewsletter() {
  const { t } = useTranslation();
  const [contactValue, setContactValue] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactValue.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setContactValue('');
      }, 5000);
    }
  };

  return (
    <section className="w-full bg-primary-container text-on-primary py-space-xl border-t border-surface-container-lowest/15">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="bg-gradient-to-r from-primary via-primary-container to-primary border border-surface-container-lowest/15 rounded-3xl p-space-lg lg:p-space-xl shadow-2xl relative overflow-hidden">
          {/* Ambient blur accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-tertiary-fixed-dim/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-fixed-dim/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/10 font-label-eyebrow text-label-eyebrow text-tertiary-fixed mb-space-sm backdrop-blur-sm">
              <span className="material-symbols-outlined text-[16px]">notifications_active</span>
              <span>{t('beritaPage.newsletter.badge')}</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg lg:text-[34px] lg:leading-[42px] font-bold text-on-primary tracking-tight mb-space-sm">
              {t('beritaPage.newsletter.title')}
            </h2>

            <p className="font-body-md text-body-md text-on-primary-container leading-relaxed mb-space-lg">
              {t('beritaPage.newsletter.desc')}
            </p>

            {subscribed ? (
              <div className="p-space-md bg-tertiary-fixed/20 border border-tertiary-fixed/40 rounded-2xl flex items-center gap-3 text-tertiary-fixed font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[24px]">verified</span>
                <span>{t('beritaPage.newsletter.successMsg')}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-space-sm max-w-xl">
                <input
                  type="text"
                  required
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  placeholder={t('beritaPage.newsletter.inputPlaceholder')}
                  className="flex-1 h-12 px-4 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/60 border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-tertiary-fixed"
                />
                <button
                  type="submit"
                  className="h-12 px-space-lg rounded-xl font-label-button text-label-button bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-all shadow-md font-semibold whitespace-nowrap"
                >
                  {t('beritaPage.newsletter.btnSubscribe')}
                </button>
              </form>
            )}

            <p className="font-label-caption text-label-caption text-on-primary-container mt-space-sm">
              {t('beritaPage.newsletter.note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
