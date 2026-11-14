import React from 'react';
import { useTranslation } from 'react-i18next';

export default function DetailFaq() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="max-w-3xl mb-space-xl">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider block mb-1">
            {t('detailLowongan.faq.eyebrow')}
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            {t('detailLowongan.faq.title')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            {t('detailLowongan.faq.desc')}
          </p>
        </div>
        {/* Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {/* FAQ 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {t('detailLowongan.faq.q1')}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t('detailLowongan.faq.a1')}
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {t('detailLowongan.faq.q2')}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t('detailLowongan.faq.a2')}
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {t('detailLowongan.faq.q3')}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t('detailLowongan.faq.a3')}
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 4 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {t('detailLowongan.faq.q4')}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t('detailLowongan.faq.a4')}
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 5 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {t('detailLowongan.faq.q5')}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t('detailLowongan.faq.a5')}
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 6 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {t('detailLowongan.faq.q6')}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t('detailLowongan.faq.a6')}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Direct Assistance Banner */}
        <div className="mt-space-xl bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-[24px]">support_agent</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">{t('detailLowongan.faq.bannerTitle')}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {t('detailLowongan.faq.bannerDesc')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <a className="inline-flex items-center gap-2 px-space-md py-2.5 bg-surface-container-low text-primary hover:bg-surface-container font-label-button text-label-button rounded transition-colors" href="https://wa.me/6281200000000" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>{t('detailLowongan.faq.waBtn')}</span>
            </a>
            <a className="inline-flex items-center gap-2 px-space-md py-2.5 bg-primary text-on-primary font-label-button text-label-button rounded hover:bg-primary-container transition-colors" href="#form-lamaran">
              <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
              <span>{t('detailLowongan.faq.formBtn')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
