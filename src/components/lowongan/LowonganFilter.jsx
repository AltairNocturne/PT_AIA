import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LowonganFilter({
  searchQuery,
  setSearchQuery,
  selectedCountry,
  setSelectedCountry,
  selectedSector,
  setSelectedSector,
  zeroCostOnly,
  setZeroCostOnly,
  onApply
}) {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-surface-container-low px-margin py-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Search Controls Box */}
        <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Text Query */}
            <div className="md:col-span-5 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
              <input
                className="w-full h-11 pl-10 pr-4 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                id="jobSearchInput"
                placeholder={t('lowongan.filter.searchPlaceholder')}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* Country Dropdown */}
            <div className="md:col-span-3">
              <select
                className="w-full h-11 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                id="countryFilter"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="all">{t('lowongan.filter.countryAll')}</option>
                <option value="taiwan">{t('lowongan.filter.countryTaiwan')}</option>
                <option value="jepang">{t('lowongan.filter.countryJapan')}</option>
                <option value="malaysia">{t('lowongan.filter.countryMalaysia')}</option>
                <option value="timurtengah">{t('lowongan.filter.countryMiddleEast')}</option>
                <option value="polandia">{t('lowongan.filter.countryPoland')}</option>
              </select>
            </div>
            {/* Sector Dropdown */}
            <div className="md:col-span-2">
              <select
                className="w-full h-11 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                id="sectorFilter"
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
              >
                <option value="all">{t('lowongan.filter.sectorAll')}</option>
                <option value="manufaktur">{t('lowongan.filter.sectorManufaktur')}</option>
                <option value="caregiver">{t('lowongan.filter.sectorCaregiver')}</option>
                <option value="hospitality">{t('lowongan.filter.sectorHospitality')}</option>
                <option value="logistik">{t('lowongan.filter.sectorLogistik')}</option>
                <option value="konstruksi">{t('lowongan.filter.sectorKonstruksi')}</option>
              </select>
            </div>
            {/* Action Button */}
            <div className="md:col-span-2">
              <button
                className="w-full h-11 bg-primary text-on-primary font-label-button text-label-button rounded-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-1.5"
                id="applyFiltersBtn"
                onClick={onApply}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">tune</span>
                <span>{t('lowongan.filter.applyBtn')}</span>
              </button>
            </div>
          </div>
          {/* Filter bar bottom: Zero Cost Toggle & Quick Tags */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
            <div className="flex items-center gap-3">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  className="sr-only peer"
                  id="zeroCostToggle"
                  type="checkbox"
                  checked={zeroCostOnly}
                  onChange={(e) => setZeroCostOnly(e.target.checked)}
                />
                <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
              <span className="font-body-sm text-body-sm text-on-surface font-medium flex items-center gap-1">
                <span>{t('lowongan.filter.zeroCostLabel')}</span>
                <span className="material-symbols-outlined text-[16px] text-on-tertiary-container" title={t('lowongan.filter.zeroCostTooltip')}>info</span>
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <span className="font-label-caption text-label-caption text-outline shrink-0">{t('lowongan.filter.popularLabel')}</span>
              <button
                className="px-2.5 py-1 rounded bg-surface text-on-surface font-label-caption text-label-caption hover:bg-surface-container transition-colors shrink-0"
                type="button"
                onClick={() => setSearchQuery('Tokutei Ginou')}
              >
                Tokutei Ginou
              </button>
              <button
                className="px-2.5 py-1 rounded bg-surface text-on-surface font-label-caption text-label-caption hover:bg-surface-container transition-colors shrink-0"
                type="button"
                onClick={() => setSearchQuery('CNC Taichung')}
              >
                CNC Taichung
              </button>
              <button
                className="px-2.5 py-1 rounded bg-surface text-on-surface font-label-caption text-label-caption hover:bg-surface-container transition-colors shrink-0"
                type="button"
                onClick={() => setSearchQuery('Perawat Lansia')}
              >
                Perawat Lansia
              </button>
              <button
                className="px-2.5 py-1 rounded bg-surface text-on-surface font-label-caption text-label-caption hover:bg-surface-container transition-colors shrink-0"
                type="button"
                onClick={() => setSearchQuery('Schengen Polandia')}
              >
                Schengen Polandia
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
