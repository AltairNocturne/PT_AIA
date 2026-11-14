import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NegaraTahapanPenempatan() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container text-on-tertiary-container rounded-md mb-space-sm">
              <span className="material-symbols-outlined text-[16px]">policy</span>
              <span className="font-label-eyebrow text-label-eyebrow tracking-widest uppercase">{t('negara.tahapan.eyebrow')}</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              {t('negara.tahapan.title')}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              {t('negara.tahapan.desc')}
            </p>
          </div>
          <div className="text-right">
            <span className="font-label-caption text-label-caption text-on-surface-variant block">{t('negara.tahapan.statLabel')}</span>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">{t('negara.tahapan.statValue')}</span>
          </div>
        </div>

        {/* Process Steps Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="bg-surface-container-low/70 p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm mb-4">
                01
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{t('negara.tahapan.step1Title')}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {t('negara.tahapan.step1Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-highest flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
              {t('negara.tahapan.step1Tag')}
            </div>
          </div>

          <div className="bg-surface-container-low/70 p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm mb-4">
                02
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{t('negara.tahapan.step2Title')}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {t('negara.tahapan.step2Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-highest flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
              {t('negara.tahapan.step2Tag')}
            </div>
          </div>

          <div className="bg-surface-container-low/70 p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm mb-4">
                03
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{t('negara.tahapan.step3Title')}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {t('negara.tahapan.step3Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-highest flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
              {t('negara.tahapan.step3Tag')}
            </div>
          </div>

          <div className="bg-surface-container-low/70 p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm mb-4">
                04
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{t('negara.tahapan.step4Title')}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {t('negara.tahapan.step4Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-highest flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
              {t('negara.tahapan.step4Tag')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
