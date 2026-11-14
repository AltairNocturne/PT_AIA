import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function DetailSidebar() {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState('');
  const [nikNumber, setNikNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [originCity, setOriginCity] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [agreeConsent, setAgreeConsent] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');

  // Errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNikChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    if (val.length <= 16) {
      setNikNumber(val);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map((f) => f.name).join(', ');
      setSelectedFileName(`${t('detailLowongan.sidebar.fileSelected')} ${names}`);
    } else {
      setSelectedFileName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = t('detailLowongan.sidebar.errName');
    }
    if (!nikNumber || nikNumber.length !== 16) {
      newErrors.nikNumber = t('detailLowongan.sidebar.errNik');
    }
    const cleanWa = whatsappNumber.replace(/[^0-9]/g, '');
    if (!cleanWa || cleanWa.length < 10) {
      newErrors.whatsapp = t('detailLowongan.sidebar.errWa');
    }
    if (!originCity.trim()) {
      newErrors.originCity = t('detailLowongan.sidebar.errCity');
    }
    if (!agreeConsent) {
      newErrors.consent = t('detailLowongan.sidebar.errConsent');
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 800);
    }
  };

  const handleReset = () => {
    setFullName('');
    setNikNumber('');
    setWhatsappNumber('');
    setOriginCity('');
    setEducation('');
    setExperience('');
    setAgreeConsent(false);
    setSelectedFileName('');
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <aside className="lg:col-span-4 w-full sticky top-24 space-y-space-md">
      {/* Sticky Official Application Form Card */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md border-t-4 border-t-on-tertiary-container relative" id="form-lamaran">
        <div className="mb-space-md">
          <div className="flex items-center justify-between mb-1">
            <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider">
              {t('detailLowongan.sidebar.formEyebrow')}
            </span>
            <span className="inline-flex items-center gap-1 font-label-caption text-label-caption text-secondary">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              {t('detailLowongan.sidebar.sslEncrypted')}
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface">
            {t('detailLowongan.sidebar.formTitle')}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            {t('detailLowongan.sidebar.formDesc')}
          </p>
        </div>

        <form className="space-y-space-md" id="candidateApplicationForm" onSubmit={handleSubmit} noValidate>
          {/* Nama Lengkap */}
          <div className="space-y-1">
            <label className="block font-label-button text-label-button text-on-surface" htmlFor="fullName">
              {t('detailLowongan.sidebar.nameLabel')} <span className="text-error">*</span>
            </label>
            <div className="relative">
              <input
                className="w-full h-11 px-3 pl-10 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all"
                id="fullName"
                name="fullName"
                placeholder={t('detailLowongan.sidebar.namePlaceholder')}
                required
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <span className="material-symbols-outlined text-outline absolute left-3 top-3 text-[18px]">person</span>
            </div>
            {errors.fullName && (
              <p className="font-label-caption text-label-caption text-error" id="fullNameError">{errors.fullName}</p>
            )}
          </div>

          {/* NIK KTP Validated Field */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block font-label-button text-label-button text-on-surface" htmlFor="nikNumber">
                {t('detailLowongan.sidebar.nikLabel')} <span className="text-error">*</span>
              </label>
              <span className={`font-label-caption text-label-caption ${nikNumber.length === 16 ? 'text-on-tertiary-container font-bold' : 'text-secondary'}`} id="nikCounter">
                {nikNumber.length}/16 {t('detailLowongan.sidebar.nikDigit')}
              </span>
            </div>
            <div className="relative">
              <input
                className="w-full h-11 px-3 pl-10 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-sm tracking-widest transition-all"
                id="nikNumber"
                inputMode="numeric"
                maxLength={16}
                name="nikNumber"
                placeholder={t('detailLowongan.sidebar.nikPlaceholder')}
                required
                type="text"
                value={nikNumber}
                onChange={handleNikChange}
              />
              <span className="material-symbols-outlined text-outline absolute left-3 top-3 text-[18px]">badge</span>
            </div>
            {errors.nikNumber && (
              <p className="font-label-caption text-label-caption text-error" id="nikNumberError">{errors.nikNumber}</p>
            )}
          </div>

          {/* Nomor WhatsApp Aktif */}
          <div className="space-y-1">
            <label className="block font-label-button text-label-button text-on-surface" htmlFor="whatsappNumber">
              {t('detailLowongan.sidebar.waLabel')} <span className="text-error">*</span>
            </label>
            <div className="relative">
              <input
                className="w-full h-11 px-3 pl-10 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all"
                id="whatsappNumber"
                inputMode="tel"
                name="whatsappNumber"
                placeholder={t('detailLowongan.sidebar.waPlaceholder')}
                required
                type="tel"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
              />
              <span className="material-symbols-outlined text-outline absolute left-3 top-3 text-[18px]">chat</span>
            </div>
            <p className="font-label-caption text-label-caption text-on-surface-variant">
              {t('detailLowongan.sidebar.waNotice')}
            </p>
            {errors.whatsapp && (
              <p className="font-label-caption text-label-caption text-error" id="whatsappError">{errors.whatsapp}</p>
            )}
          </div>

          {/* Domisili / Kota Asal */}
          <div className="space-y-1">
            <label className="block font-label-button text-label-button text-on-surface" htmlFor="originCity">
              {t('detailLowongan.sidebar.cityLabel')} <span className="text-error">*</span>
            </label>
            <div className="relative">
              <input
                className="w-full h-11 px-3 pl-10 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all"
                id="originCity"
                name="originCity"
                placeholder={t('detailLowongan.sidebar.cityPlaceholder')}
                required
                type="text"
                value={originCity}
                onChange={(e) => setOriginCity(e.target.value)}
              />
              <span className="material-symbols-outlined text-outline absolute left-3 top-3 text-[18px]">location_on</span>
            </div>
            {errors.originCity && (
              <p className="font-label-caption text-label-caption text-error" id="originCityError">{errors.originCity}</p>
            )}
          </div>

          {/* Pendidikan & Pengalaman */}
          <div className="grid grid-cols-2 gap-space-sm">
            <div className="space-y-1">
              <label className="block font-label-button text-label-button text-on-surface" htmlFor="educationSelect">
                {t('detailLowongan.sidebar.eduLabel')} <span className="text-error">*</span>
              </label>
              <select
                className="w-full h-11 px-2.5 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                id="educationSelect"
                name="educationSelect"
                required
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              >
                <option disabled value="">{t('detailLowongan.sidebar.eduPlaceholder')}</option>
                <option value="SMK_TEKNIK">{t('detailLowongan.sidebar.eduSmkTeknik')}</option>
                <option value="SMA_IPA">{t('detailLowongan.sidebar.eduSmaIpa')}</option>
                <option value="SMK_LAIN">{t('detailLowongan.sidebar.eduSmkLain')}</option>
                <option value="DIPLOMA">{t('detailLowongan.sidebar.eduDiploma')}</option>
                <option value="SARJANA">{t('detailLowongan.sidebar.eduSarjana')}</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="block font-label-button text-label-button text-on-surface" htmlFor="experienceSelect">
                {t('detailLowongan.sidebar.expLabel')} <span className="text-error">*</span>
              </label>
              <select
                className="w-full h-11 px-2.5 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                id="experienceSelect"
                name="experienceSelect"
                required
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option disabled value="">{t('detailLowongan.sidebar.expPlaceholder')}</option>
                <option value="FRESH">{t('detailLowongan.sidebar.expFresh')}</option>
                <option value="PABRIK_1">{t('detailLowongan.sidebar.expFactory1')}</option>
                <option value="PABRIK_2">{t('detailLowongan.sidebar.expFactory2')}</option>
                <option value="EX_TAIWAN">{t('detailLowongan.sidebar.expExTaiwan')}</option>
              </select>
            </div>
          </div>

          {/* Upload Berkas Mini Dropzone */}
          <div className="space-y-1">
            <label className="block font-label-button text-label-button text-on-surface">
              {t('detailLowongan.sidebar.fileLabel')}
            </label>
            <label className="p-space-md bg-surface-container-low rounded text-center cursor-pointer hover:bg-surface-container transition-colors block" id="dropzoneContainer">
              <input
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                id="fileUpload"
                multiple
                type="file"
                onChange={handleFileChange}
              />
              <span className="material-symbols-outlined text-secondary text-[28px] mb-1">cloud_upload</span>
              <div className="font-label-button text-label-button text-primary">{t('detailLowongan.sidebar.fileClick')}</div>
              <div className="font-label-caption text-label-caption text-secondary mt-0.5">{t('detailLowongan.sidebar.fileFormat')}</div>
              {selectedFileName && (
                <div className="font-label-caption text-label-caption text-on-tertiary-container font-semibold mt-2" id="fileUploadName">
                  {selectedFileName}
                </div>
              )}
            </label>
          </div>

          {/* Pernyataan Integritas Checkbox */}
          <div className="flex items-start gap-2 pt-2">
            <input
              className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary accent-primary"
              id="agreeConsent"
              name="agreeConsent"
              required
              type="checkbox"
              checked={agreeConsent}
              onChange={(e) => setAgreeConsent(e.target.checked)}
            />
            <label className="font-label-caption text-label-caption text-on-surface-variant leading-tight cursor-pointer" htmlFor="agreeConsent">
              {t('detailLowongan.sidebar.consentText')}
            </label>
          </div>
          {errors.consent && (
            <p className="font-label-caption text-label-caption text-error" id="consentError">{errors.consent}</p>
          )}

          {/* Action Submit Button */}
          <button
            className="w-full h-12 bg-primary text-on-primary font-label-button text-label-button rounded shadow hover:bg-primary-container transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
            id="btnSubmitApplication"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                <span>{t('detailLowongan.sidebar.submittingBtn')}</span>
              </>
            ) : (
              <>
                <span>{t('detailLowongan.sidebar.submitBtn')}</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </>
            )}
          </button>
        </form>

        {/* Success State Overlay Banner */}
        {isSuccess && (
          <div className="absolute inset-0 bg-surface-container-lowest rounded-xl p-space-lg flex flex-col items-center justify-center text-center" id="applicationSuccessCard">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-[36px]">task_alt</span>
            </div>
            <span className="inline-block px-2 py-0.5 bg-tertiary-container text-tertiary-fixed font-label-eyebrow text-label-eyebrow rounded mb-2">
              {t('detailLowongan.sidebar.successBadge')}
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
              {t('detailLowongan.sidebar.successTitle')}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mb-space-lg">
              {t('detailLowongan.sidebar.successDesc')}
            </p>
            <button
              className="px-space-md py-2 bg-surface-container text-on-surface font-label-button text-label-button rounded hover:bg-surface-container-high transition-colors"
              id="btnResetForm"
              type="button"
              onClick={handleReset}
            >
              {t('detailLowongan.sidebar.resetBtn')}
            </button>
          </div>
        )}
      </div>

      {/* Official Anti-Fraud / Anti-Pungli Warning Box */}
      <div className="bg-error-container text-on-error-container p-space-md rounded-xl shadow-sm">
        <div className="flex items-start gap-space-sm">
          <span className="material-symbols-outlined text-error text-[24px] shrink-0 mt-0.5">policy</span>
          <div>
            <h4 className="font-label-button text-label-button font-bold text-on-error-container">
              {t('detailLowongan.sidebar.fraudWarningTitle')}
            </h4>
            <p className="font-body-sm text-body-sm text-on-error-container/90 mt-1 leading-snug">
              {t('detailLowongan.sidebar.fraudWarningDesc')}
            </p>
            <div className="mt-space-sm pt-space-sm border-t border-error-container/40 flex items-center justify-between flex-wrap gap-2">
              <span className="font-label-caption text-label-caption text-on-error-container font-semibold">
                {t('detailLowongan.sidebar.hotlineLabel')}
              </span>
              <a className="inline-flex items-center gap-1 font-label-button text-label-button text-on-error-container underline hover:opacity-80" href="tel:+62215558900">
                <span className="material-symbols-outlined text-[16px]">call</span>
                (021) 555-8900 ext. 4
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Agency Credentials Card */}
      <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm space-y-space-sm">
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px]">domain_verification</span>
          </div>
          <div>
            <h4 className="font-label-button text-label-button text-on-surface">{t('detailLowongan.sidebar.officeTitle')}</h4>
            <p className="font-label-caption text-label-caption text-secondary">{t('detailLowongan.sidebar.officeCompany')}</p>
          </div>
        </div>
        <p className="font-label-caption text-label-caption text-on-surface-variant">
          {t('detailLowongan.sidebar.officeAddress')}
        </p>
        <div className="pt-2 flex items-center gap-space-xs text-secondary font-label-caption text-label-caption">
          <span className="material-symbols-outlined text-[14px]">schedule</span>
          <span>{t('detailLowongan.sidebar.processDuration')}</span>
        </div>
      </div>
    </aside>
  );
}
