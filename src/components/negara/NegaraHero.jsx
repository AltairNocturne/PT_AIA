import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NegaraHero() {
  const { t } = useTranslation();

  return (
    <>
      {/* Top Breadcrumb & Administrative Metadata Bar */}
      <section className="w-full bg-surface-container-low/70 py-space-sm">
        <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm text-label-caption">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              {t('negara.hero.breadcrumbHome')}
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <span className="text-primary font-semibold">{t('negara.hero.breadcrumbCurrent')}</span>
          </nav>
          <div className="flex items-center gap-space-md">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caption text-label-caption font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              {t('negara.hero.syncStatus')}
            </span>
            <span className="hidden md:inline-block font-label-caption text-label-caption text-on-surface-variant">
              {t('negara.hero.lastUpdated')}
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Executive Header */}
      <header className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
            <div className="lg:col-span-8 flex flex-col space-y-space-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low text-on-tertiary-container rounded-md w-fit">
                <span className="material-symbols-outlined text-[16px]">public</span>
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest uppercase">{t('negara.hero.badge')}</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight leading-tight">
                {t('negara.hero.title')}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                {t('negara.hero.desc')}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-space-sm bg-surface-container-low/60 p-space-lg rounded-xl shadow-sm">
              <div className="flex items-center justify-between pb-space-sm">
                <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase">{t('negara.hero.cardEyebrow')}</span>
                <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
              </div>
              <div className="grid grid-cols-2 gap-space-md pt-space-xs">
                <div>
                  <span className="font-headline-md text-headline-md text-primary font-bold block">{t('negara.hero.cardStat1Value')}</span>
                  <span className="font-label-caption text-label-caption text-on-surface-variant">{t('negara.hero.cardStat1Label')}</span>
                </div>
                <div>
                  <span className="font-headline-md text-headline-md text-primary font-bold block">{t('negara.hero.cardStat2Value')}</span>
                  <span className="font-label-caption text-label-caption text-on-surface-variant">{t('negara.hero.cardStat2Label')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
