import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function GaleriCta() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-primary-container text-on-primary py-space-xl border-t border-surface-container-lowest/15">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="bg-gradient-to-r from-primary to-primary-container border border-surface-container-lowest/15 rounded-3xl p-space-lg lg:p-space-xl shadow-2xl relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-tertiary-fixed-dim/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-fixed-dim/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/10 font-label-eyebrow text-label-eyebrow text-tertiary-fixed mb-space-sm backdrop-blur-sm">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>P3MI Resmi SIP3MI Kemenaker RI</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg lg:text-[36px] lg:leading-[44px] font-bold text-on-primary tracking-tight mb-space-sm">
              {t('galeri.cta.title')}
            </h2>

            <p className="font-body-md text-body-md text-on-primary-container leading-relaxed mb-space-lg">
              {t('galeri.cta.desc')}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
              <Link
                to="/lowongan-kerja"
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3.5 rounded-xl font-label-button text-label-button bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-all shadow-md hover:shadow-lg font-semibold"
              >
                <span>{t('galeri.cta.btnJobs')}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>

              <a
                href="https://wa.me/6281289001234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3.5 rounded-xl font-label-button text-label-button bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary border border-surface-container-lowest/20 transition-all font-semibold"
              >
                <span className="material-symbols-outlined text-[18px] text-[#25D366]">chat</span>
                <span>{t('galeri.cta.btnContact')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
