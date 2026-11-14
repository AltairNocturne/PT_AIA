import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LowonganHero() {
  const { t } = useTranslation();

  return (
    <>
      {/* BREADCRUMB & CONTEXT STRIP */}
      <section className="w-full bg-surface-container-low py-space-sm px-margin">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-caption text-label-caption text-on-surface-variant">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[14px]">home</span>
              <span>{t('lowongan.hero.breadcrumbHome')}</span>
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-semibold">{t('lowongan.hero.breadcrumbCurrent')}</span>
          </nav>
          <div className="hidden md:flex items-center gap-space-sm text-on-surface-variant font-label-caption text-label-caption">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-highest text-primary font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
              {t('lowongan.hero.siskopmiSync')}
            </span>
            <span className="text-outline-variant">•</span>
            <span>{t('lowongan.hero.lastUpdated')}</span>
          </div>
        </div>
      </section>

      {/* EDITORIAL HEADER & FRAUD PREVENTION CALLOUT */}
      <section className="w-full bg-surface px-margin py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Title Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 text-on-tertiary-container font-label-eyebrow text-label-eyebrow uppercase tracking-widest">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span>{t('lowongan.hero.eyebrow')}</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight leading-tight">
                {t('lowongan.hero.title')}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                {t('lowongan.hero.desc')}
              </p>
            </div>
            {/* Metrics pill box */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
              <div className="flex items-center justify-between py-1">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{t('lowongan.hero.stat1Label')}</span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">{t('lowongan.hero.stat1Val')}</span>
              </div>
              <div className="h-px w-full bg-surface-container"></div>
              <div className="flex items-center justify-between py-1">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{t('lowongan.hero.stat2Label')}</span>
                <span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold">{t('lowongan.hero.stat2Val')}</span>
              </div>
              <div className="h-px w-full bg-surface-container"></div>
              <div className="flex items-center justify-between py-1">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{t('lowongan.hero.stat3Label')}</span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">{t('lowongan.hero.stat3Val')}</span>
              </div>
            </div>
          </div>
          {/* Fraud Warning Banner */}
          <div className="bg-primary-container text-on-primary rounded-xl p-space-md sm:p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
            <div className="flex items-start gap-space-md">
              <div className="p-2.5 rounded-lg bg-surface-container-lowest/10 text-tertiary-fixed-dim shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[24px]">gavel</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-tertiary-fixed-dim font-bold tracking-tight">
                  {t('lowongan.hero.warningTitle')}
                </span>
                <p className="font-body-sm text-body-sm text-on-primary-container max-w-2xl mt-0.5">
                  {t('lowongan.hero.warningDesc')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-tertiary-fixed-dim text-tertiary font-label-button text-label-button hover:bg-tertiary-fixed transition-colors" href="#inquiry">
                <span className="material-symbols-outlined text-[16px]">report</span>
                <span>{t('lowongan.hero.warningBtn')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
