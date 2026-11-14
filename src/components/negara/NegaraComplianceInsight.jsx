import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NegaraComplianceInsight() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-primary-container text-on-primary py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 space-y-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest/10 text-tertiary-fixed-dim rounded-md">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest">{t('negara.complianceInsight.eyebrow')}</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-primary font-bold leading-tight">
              {t('negara.complianceInsight.title')}
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              {t('negara.complianceInsight.desc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-2">
              <div className="bg-surface-container-lowest/5 p-4 rounded-lg">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px] mb-1">lock_clock</span>
                <h4 className="font-headline-sm text-headline-sm text-on-primary mb-1">{t('negara.complianceInsight.pillar1Title')}</h4>
                <p className="font-label-caption text-label-caption text-on-primary-container">{t('negara.complianceInsight.pillar1Desc')}</p>
              </div>
              <div className="bg-surface-container-lowest/5 p-4 rounded-lg">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px] mb-1">shield_with_heart</span>
                <h4 className="font-headline-sm text-headline-sm text-on-primary mb-1">{t('negara.complianceInsight.pillar2Title')}</h4>
                <p className="font-label-caption text-label-caption text-on-primary-container">{t('negara.complianceInsight.pillar2Desc')}</p>
              </div>
              <div className="bg-surface-container-lowest/5 p-4 rounded-lg">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px] mb-1">contact_phone</span>
                <h4 className="font-headline-sm text-headline-sm text-on-primary mb-1">{t('negara.complianceInsight.pillar3Title')}</h4>
                <p className="font-label-caption text-label-caption text-on-primary-container">{t('negara.complianceInsight.pillar3Desc')}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface-container-lowest text-on-surface p-space-lg rounded-xl shadow-md">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{t('negara.complianceInsight.cardTitle')}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              {t('negara.complianceInsight.cardDesc')}
            </p>
            <ul className="space-y-space-sm font-body-sm text-body-sm mb-6">
              <li className="flex items-center justify-between p-2.5 rounded bg-surface-container-low">
                <span className="text-on-surface-variant font-medium">{t('negara.complianceInsight.verify1Label')}</span>
                <span className="text-primary font-bold">{t('negara.complianceInsight.verify1Val')}</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded bg-surface-container-low">
                <span className="text-on-surface-variant font-medium">{t('negara.complianceInsight.verify2Label')}</span>
                <span className="text-primary font-bold">{t('negara.complianceInsight.verify2Val')}</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded bg-surface-container-low">
                <span className="text-on-surface-variant font-medium">{t('negara.complianceInsight.verify3Label')}</span>
                <span className="text-primary font-bold">{t('negara.complianceInsight.verify3Val')}</span>
              </li>
            </ul>
            <Link className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-button text-label-button transition-colors" to="/legalitas-perusahaan">
              {t('negara.complianceInsight.cardBtn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
