import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function DetailHero({ onOpenShareModal }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Top Progress & Context Navigation Strip */}
      <section className="w-full bg-surface-container-low py-space-sm">
        <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link className="font-label-caption text-label-caption text-secondary hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[15px]">home</span>
              <span>{t('detailLowongan.hero.breadcrumbHome')}</span>
            </Link>
            <span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
            <Link className="font-label-caption text-label-caption text-secondary hover:text-primary transition-colors" to="/lowongan-kerja">
              {t('detailLowongan.hero.breadcrumbJobs')}
            </Link>
            <span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
            <span className="font-label-caption text-label-caption text-on-surface font-semibold truncate max-w-[220px] sm:max-w-none">
              {t('detailLowongan.hero.breadcrumbCurrent')}
            </span>
          </nav>
          <div className="inline-flex items-center gap-space-xs px-2.5 py-1 bg-surface-container-lowest rounded-full shadow-sm">
            <span className="h-2 w-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            <span className="font-label-caption text-label-caption text-on-surface-variant">{t('detailLowongan.hero.batchOpen')}</span>
          </div>
        </div>
      </section>

      {/* Editorial Job Header Banner */}
      <section className="relative w-full bg-primary-container text-on-primary py-space-xl overflow-hidden">
        {/* Ambient Pattern SVG Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="10" id="grid-pattern" patternUnits="userSpaceOnUse" width="10">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-margin">
          {/* Regulatory Verification Badges */}
          <div className="flex flex-wrap items-center gap-space-xs mb-space-md">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary-container text-tertiary-fixed font-label-eyebrow text-label-eyebrow rounded shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified</span>
              {t('detailLowongan.hero.badgeSiskopmi')}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container-lowest/10 backdrop-blur-sm text-surface-container font-label-caption text-label-caption rounded">
              <span className="material-symbols-outlined text-[14px]">description</span>
              {t('detailLowongan.hero.badgeJobOrder')} <strong className="text-on-primary font-semibold">JO-TW-2025-089A</strong>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container-lowest/10 backdrop-blur-sm text-surface-container font-label-caption text-label-caption rounded">
              <span className="material-symbols-outlined text-[14px]">business</span>
              {t('detailLowongan.hero.badgeLicense')}
            </span>
          </div>
          {/* Job Position Main Title & Editorial Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end mb-space-lg">
            <div className="lg:col-span-8 flex flex-col space-y-space-xs">
              <p className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed-dim uppercase tracking-widest">
                {t('detailLowongan.hero.eyebrow')}
              </p>
              <h1 className="font-headline-xl text-headline-xl text-on-primary tracking-tight leading-tight">
                {t('detailLowongan.hero.title')}
              </h1>
              <p className="font-body-md text-body-md text-on-primary-container max-w-2xl">
                {t('detailLowongan.hero.desc')}
              </p>
            </div>
            {/* Fast CTA Controls */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm items-stretch lg:items-end justify-center">
              <a className="inline-flex items-center justify-center gap-2 px-space-lg py-3 bg-on-tertiary-container text-surface-container-lowest font-label-button text-label-button rounded shadow-md hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all duration-200" href="#form-lamaran">
                <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                <span>{t('detailLowongan.hero.applyBtn')}</span>
              </a>
              <button
                className="inline-flex items-center justify-center gap-2 px-space-md py-2.5 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-button text-label-button rounded transition-colors"
                id="btnShareModal"
                type="button"
                onClick={onOpenShareModal}
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
                <span>{t('detailLowongan.hero.shareBtn')}</span>
              </button>
            </div>
          </div>
          {/* Metadata Strip Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-md border-t border-surface-container-lowest/15">
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-md rounded flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded bg-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">public</span>
              </div>
              <div>
                <div className="font-label-caption text-label-caption text-on-primary-container">{t('detailLowongan.hero.card1Label')}</div>
                <div className="font-headline-sm text-headline-sm text-on-primary">{t('detailLowongan.hero.card1Val')}</div>
                <div className="font-label-caption text-label-caption text-tertiary-fixed-dim">{t('detailLowongan.hero.card1Sub')}</div>
              </div>
            </div>
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-md rounded flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded bg-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">payments</span>
              </div>
              <div>
                <div className="font-label-caption text-label-caption text-on-primary-container">{t('detailLowongan.hero.card2Label')}</div>
                <div className="font-headline-sm text-headline-sm text-on-primary">{t('detailLowongan.hero.card2Val')}</div>
                <div className="font-label-caption text-label-caption text-tertiary-fixed-dim">{t('detailLowongan.hero.card2Sub')}</div>
              </div>
            </div>
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-md rounded flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded bg-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">history_toggle_off</span>
              </div>
              <div>
                <div className="font-label-caption text-label-caption text-on-primary-container">{t('detailLowongan.hero.card3Label')}</div>
                <div className="font-headline-sm text-headline-sm text-on-primary">{t('detailLowongan.hero.card3Val')}</div>
                <div className="font-label-caption text-label-caption text-tertiary-fixed-dim">{t('detailLowongan.hero.card3Sub')}</div>
              </div>
            </div>
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-md rounded flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded bg-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">shield_with_heart</span>
              </div>
              <div>
                <div className="font-label-caption text-label-caption text-on-primary-container">{t('detailLowongan.hero.card4Label')}</div>
                <div className="font-headline-sm text-headline-sm text-on-primary">{t('detailLowongan.hero.card4Val')}</div>
                <div className="font-label-caption text-label-caption text-tertiary-fixed-dim">{t('detailLowongan.hero.card4Sub')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
