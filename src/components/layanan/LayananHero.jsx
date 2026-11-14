import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LayananHero() {
  const { t } = useTranslation();

  return (
    <>
      {/* Top Breadcrumb & Administrative Metadata Bar */}
      <section className="w-full bg-surface-container-low/70 py-space-sm border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm text-label-caption">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>{t('layanan.hero.breadcrumbHome')}</span>
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <span className="text-primary font-semibold">{t('layanan.hero.breadcrumbCurrent')}</span>
          </nav>
          <div className="flex items-center gap-space-md">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caption text-label-caption font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>{t('layanan.hero.badgeEyebrow')}</span>
            </span>
            <span className="hidden md:inline-block font-label-caption text-label-caption text-on-surface-variant">
              Layanan Penempatan Terakreditasi
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Executive Header */}
      <header className="w-full bg-surface-container-lowest py-space-xl border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded text-on-tertiary-container mb-3.5">
                <span className="material-symbols-outlined text-[15px]">verified_user</span>
                <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest font-bold">
                  {t('layanan.hero.eyebrow')}
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-bold leading-tight">
                {t('layanan.hero.title')}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 leading-relaxed">
                {t('layanan.hero.desc')}
              </p>
            </div>
            {/* Live Credential Badge */}
            <div className="bg-surface-container-low/80 p-4 rounded-xl flex items-center gap-4 shrink-0 shadow-sm border border-outline-variant/30">
              <div className="w-12 h-12 rounded-lg bg-primary-container text-tertiary-fixed-dim flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[26px]">apartment</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                  {t('layanan.hero.badgeEyebrow')}
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {t('layanan.hero.badgeTitle')}
                </span>
                <span className="font-label-caption text-label-caption text-secondary">
                  {t('layanan.hero.badgeSub')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
