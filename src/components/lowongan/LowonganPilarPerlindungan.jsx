import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LowonganPilarPerlindungan() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-surface px-margin py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-on-tertiary-container font-label-eyebrow text-label-eyebrow uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">policy</span>
            <span>{t('lowongan.pilar.eyebrow')}</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
            {t('lowongan.pilar.title')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {t('lowongan.pilar.desc')}
          </p>
        </div>

        {/* 3 Protection Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: BP2MI / Kemnaker */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">account_balance</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{t('lowongan.pilar.pillar1Title')}</h3>
              <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase font-semibold">{t('lowongan.pilar.pillar1Eyebrow')}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {t('lowongan.pilar.pillar1Desc')}
            </p>
            <ul className="font-label-caption text-label-caption text-on-surface space-y-1.5 mt-auto pt-2">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>{t('lowongan.pilar.pillar1Point1')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>{t('lowongan.pilar.pillar1Point2')}</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: BPJS Ketenagakerjaan PMI */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">health_and_safety</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{t('lowongan.pilar.pillar2Title')}</h3>
              <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase font-semibold">{t('lowongan.pilar.pillar2Eyebrow')}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {t('lowongan.pilar.pillar2Desc')}
            </p>
            <ul className="font-label-caption text-label-caption text-on-surface space-y-1.5 mt-auto pt-2">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>{t('lowongan.pilar.pillar2Point1')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>{t('lowongan.pilar.pillar2Point2')}</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Perwakilan RI (KBRI / KJRI) */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">apartment</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{t('lowongan.pilar.pillar3Title')}</h3>
              <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase font-semibold">{t('lowongan.pilar.pillar3Eyebrow')}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {t('lowongan.pilar.pillar3Desc')}
            </p>
            <ul className="font-label-caption text-label-caption text-on-surface space-y-1.5 mt-auto pt-2">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>{t('lowongan.pilar.pillar3Point1')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>{t('lowongan.pilar.pillar3Point2')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
