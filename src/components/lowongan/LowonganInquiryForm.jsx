import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LowonganInquiryForm() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    emailAddress: '',
    educationLevel: '',
    targetCountry: '',
    skillFocus: '',
    privacyConsent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        whatsappNumber: '',
        emailAddress: '',
        educationLevel: '',
        targetCountry: '',
        skillFocus: '',
        privacyConsent: false
      });
    }, 1200);
  };

  return (
    <section className="w-full bg-surface-container-low px-margin py-16" id="inquiry">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contextual Guidance & Trust Elements */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-1 text-on-tertiary-container font-label-eyebrow text-label-eyebrow uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
              <span>{t('lowongan.inquiry.eyebrow')}</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
              {t('lowongan.inquiry.title')}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {t('lowongan.inquiry.desc')}
            </p>
          </div>
          {/* 3-Step Flow Diagram */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs shrink-0">1</span>
              <div>
                <h4 className="font-body-sm text-body-sm font-bold text-primary">{t('lowongan.inquiry.step1Title')}</h4>
                <p className="font-label-caption text-label-caption text-on-surface-variant">{t('lowongan.inquiry.step1Desc')}</p>
              </div>
            </div>
            <div className="h-4 border-l border-dashed border-outline-variant ml-3.5 -my-2"></div>
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-bold text-xs shrink-0">2</span>
              <div>
                <h4 className="font-body-sm text-body-sm font-bold text-primary">{t('lowongan.inquiry.step2Title')}</h4>
                <p className="font-label-caption text-label-caption text-on-surface-variant">{t('lowongan.inquiry.step2Desc')}</p>
              </div>
            </div>
            <div className="h-4 border-l border-dashed border-outline-variant ml-3.5 -my-2"></div>
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-bold text-xs shrink-0">3</span>
              <div>
                <h4 className="font-body-sm text-body-sm font-bold text-primary">{t('lowongan.inquiry.step3Title')}</h4>
                <p className="font-label-caption text-label-caption text-on-surface-variant">{t('lowongan.inquiry.step3Desc')}</p>
              </div>
            </div>
          </div>
          {/* Live Assistance Box */}
          <div className="p-space-md rounded-xl bg-surface-container flex items-center gap-4">
            <div className="p-3 bg-surface-container-lowest text-primary rounded-lg shrink-0">
              <span className="material-symbols-outlined text-[24px]">support_agent</span>
            </div>
            <div>
              <h4 className="font-body-sm text-body-sm font-bold text-primary">{t('lowongan.inquiry.fastAssistanceTitle')}</h4>
              <p className="font-label-caption text-label-caption text-on-surface-variant">{t('lowongan.inquiry.fastAssistanceDesc')}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Registration Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-xl shadow-sm flex flex-col gap-6">
          <div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">{t('lowongan.inquiry.formTitle')}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{t('lowongan.inquiry.formSubtitle')}</p>
          </div>
          <form className="flex flex-col gap-5" id="candidateInquiryForm" onSubmit={handleSubmit}>
            {/* Form Row 1: Nama Lengkap */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-caption text-label-caption font-bold text-on-surface" htmlFor="fullName">
                {t('lowongan.inquiry.fullNameLabel')}
              </label>
              <input
                className="w-full h-11 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                id="fullName"
                name="fullName"
                placeholder={t('lowongan.inquiry.fullNamePlaceholder')}
                required
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
            {/* Form Row 2: Kontak WhatsApp & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-caption text-label-caption font-bold text-on-surface" htmlFor="whatsappNumber">
                  {t('lowongan.inquiry.whatsappLabel')}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-body-sm text-body-sm text-outline font-medium">+62</span>
                  <input
                    className="w-full h-11 pl-12 pr-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    placeholder="812-3456-7890"
                    required
                    type="tel"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-caption text-label-caption font-bold text-on-surface" htmlFor="emailAddress">
                  {t('lowongan.inquiry.emailLabel')}
                </label>
                <input
                  className="w-full h-11 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder={t('lowongan.inquiry.emailPlaceholder')}
                  required
                  type="email"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                />
              </div>
            </div>
            {/* Form Row 3: Pendidikan & Negara Tujuan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-caption text-label-caption font-bold text-on-surface" htmlFor="educationLevel">
                  {t('lowongan.inquiry.educationLabel')}
                </label>
                <select
                  className="w-full h-11 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                  id="educationLevel"
                  name="educationLevel"
                  required
                  value={formData.educationLevel}
                  onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                >
                  <option value="">{t('lowongan.inquiry.educationSelectPlaceholder')}</option>
                  <option value="smp">{t('lowongan.inquiry.eduSmp')}</option>
                  <option value="sma">{t('lowongan.inquiry.eduSma')}</option>
                  <option value="smk">{t('lowongan.inquiry.eduSmk')}</option>
                  <option value="d3">{t('lowongan.inquiry.eduD3')}</option>
                  <option value="s1">{t('lowongan.inquiry.eduS1')}</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-caption text-label-caption font-bold text-on-surface" htmlFor="targetCountry">
                  {t('lowongan.inquiry.countryLabel')}
                </label>
                <select
                  className="w-full h-11 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                  id="targetCountry"
                  name="targetCountry"
                  required
                  value={formData.targetCountry}
                  onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
                >
                  <option value="">{t('lowongan.inquiry.countrySelectPlaceholder')}</option>
                  <option value="taiwan">{t('lowongan.inquiry.countryTaiwan')}</option>
                  <option value="jepang">{t('lowongan.inquiry.countryJapan')}</option>
                  <option value="malaysia">{t('lowongan.inquiry.countryMalaysia')}</option>
                  <option value="timurtengah">{t('lowongan.inquiry.countryMiddleEast')}</option>
                  <option value="polandia">{t('lowongan.inquiry.countryPoland')}</option>
                  <option value="fleksibel">{t('lowongan.inquiry.countryFlexible')}</option>
                </select>
              </div>
            </div>
            {/* Form Row 4: Bidang Keahlian */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-caption text-label-caption font-bold text-on-surface" htmlFor="skillFocus">
                {t('lowongan.inquiry.skillLabel')}
              </label>
              <input
                className="w-full h-11 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                id="skillFocus"
                name="skillFocus"
                placeholder={t('lowongan.inquiry.skillPlaceholder')}
                required
                type="text"
                value={formData.skillFocus}
                onChange={(e) => setFormData({ ...formData, skillFocus: e.target.value })}
              />
            </div>
            {/* Form Row 5: Upload CV/Dokumen (Opsional) */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-caption text-label-caption font-bold text-on-surface">
                {t('lowongan.inquiry.uploadLabel')}
              </label>
              <div className="border-2 border-dashed border-surface-container-highest rounded-lg p-4 bg-surface flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[28px] text-on-surface-variant">upload_file</span>
                <p className="font-body-sm text-body-sm text-on-surface mt-1">
                  <span className="font-semibold text-primary">{t('lowongan.inquiry.uploadClick')}</span> {t('lowongan.inquiry.uploadDrag')}
                </p>
                <p className="font-label-caption text-label-caption text-outline">{t('lowongan.inquiry.uploadFormat')}</p>
              </div>
            </div>
            {/* Form Row 6: Persetujuan Privasi Data (Checklist) */}
            <div className="flex items-start gap-3 pt-2">
              <input
                className="w-4 h-4 rounded text-primary focus:ring-primary mt-1"
                id="privacyConsent"
                name="privacyConsent"
                required
                type="checkbox"
                checked={formData.privacyConsent}
                onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
              />
              <label className="font-label-caption text-label-caption text-on-surface-variant leading-relaxed" htmlFor="privacyConsent">
                {t('lowongan.inquiry.privacyConsent')}
              </label>
            </div>
            {/* Submit Button */}
            <div className="pt-2">
              <button
                className="w-full h-12 bg-primary text-on-primary font-label-button text-label-button font-bold rounded-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
                    <span>{t('lowongan.inquiry.submittingBtn')}</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    <span>{t('lowongan.inquiry.submitBtn')}</span>
                  </>
                )}
              </button>
            </div>
            {isSubmitted && (
              <div className="flex p-4 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm items-center gap-3" id="formSuccessAlert">
                <span className="material-symbols-outlined text-on-tertiary-container">task_alt</span>
                <span>{t('lowongan.inquiry.successAlert')}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
