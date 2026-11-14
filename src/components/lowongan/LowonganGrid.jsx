import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LowonganGrid({ zeroCostOnly, searchQuery, selectedCountry, selectedSector }) {
  const { t } = useTranslation();

  const baseJobs = [
    {
      id: 'taiwan-cnc',
      key: 'taiwanCnc',
      country: 'taiwan',
      sector: 'manufaktur',
      badgeClass: 'bg-surface-container text-on-tertiary-container',
      isZeroCost: false,
      detailUrl: '/detail-lowongan'
    },
    {
      id: 'jepang-caregiver',
      key: 'jepangCaregiver',
      country: 'jepang',
      sector: 'caregiver',
      badgeClass: 'bg-tertiary-fixed text-tertiary font-bold',
      isZeroCost: false,
      detailUrl: '#inquiry'
    },
    {
      id: 'malaysia-semikonduktor',
      key: 'malaysiaSemi',
      country: 'malaysia',
      sector: 'manufaktur',
      badgeClass: 'bg-surface-container-highest text-primary font-bold',
      isZeroCost: true,
      detailUrl: '#inquiry'
    },
    {
      id: 'timurtengah-hospitality',
      key: 'timurTengahHosp',
      country: 'timurtengah',
      sector: 'hospitality',
      badgeClass: 'bg-surface-container text-on-tertiary-container',
      hasDurationLabel: true,
      isZeroCost: false,
      detailUrl: '#inquiry'
    },
    {
      id: 'polandia-logistik',
      key: 'polandiaLogistik',
      country: 'polandia',
      sector: 'logistik',
      badgeClass: 'bg-surface-container-highest text-primary font-bold',
      hasDurationLabel: true,
      isZeroCost: false,
      detailUrl: '#inquiry'
    }
  ];

  const jobs = baseJobs.map((job) => {
    const item = t(`lowongan.grid.jobs.${job.key}`, { returnObjects: true });
    return {
      ...job,
      flag: item.flag,
      badge: item.badge,
      title: item.title,
      subtitle: item.subtitle,
      salary: item.salary,
      duration: item.duration,
      durationLabel: job.hasDurationLabel ? item.durationLabel : t('lowongan.grid.labelDuration'),
      extraLabel: item.extraLabel,
      extraVal: item.extraVal,
      quota: item.quota,
      reqs: Array.isArray(item.reqs) ? item.reqs : []
    };
  });

  const filteredJobs = jobs.filter((job) => {
    const matchesCountry = !selectedCountry || selectedCountry === 'all' || job.country === selectedCountry;
    const matchesSector = !selectedSector || selectedSector === 'all' || job.sector === selectedSector;
    const term = (searchQuery || '').toLowerCase().trim();
    const matchesSearch =
      term === '' ||
      job.title.toLowerCase().includes(term) ||
      job.subtitle.toLowerCase().includes(term) ||
      job.flag.toLowerCase().includes(term) ||
      job.reqs.some((r) => r.toLowerCase().includes(term));
    return matchesCountry && matchesSector && matchesSearch;
  });

  return (
    <section className="w-full bg-surface px-margin py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Grid of Verified Jobs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => {
            const isDimmed = zeroCostOnly && !job.isZeroCost;
            return (
              <article
                key={job.id}
                className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
                style={{ opacity: isDimmed ? 0.35 : 1 }}
              >
                <div className="p-space-lg flex flex-col flex-1 gap-4">
                  {/* Header Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low text-primary font-label-caption text-label-caption font-semibold">
                      <span className="material-symbols-outlined text-[14px]">flag</span>
                      <span>{job.flag}</span>
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded font-label-eyebrow text-label-eyebrow uppercase ${job.badgeClass}`}>
                      {job.badge}
                    </span>
                  </div>
                  {/* Title & Company Meta */}
                  <div>
                    {job.detailUrl.startsWith('/') ? (
                      <Link to={job.detailUrl}>
                        <h2 className="font-headline-md text-headline-md text-primary font-bold group-hover:text-secondary transition-colors">
                          {job.title}
                        </h2>
                      </Link>
                    ) : (
                      <h2 className="font-headline-md text-headline-md text-primary font-bold group-hover:text-secondary transition-colors">
                        {job.title}
                      </h2>
                    )}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {job.subtitle}
                    </p>
                  </div>
                  {/* Key Details Matrix */}
                  <div className="bg-surface-container-low/60 rounded-lg p-space-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-caption text-label-caption text-outline">{t('lowongan.grid.labelSalary')}</span>
                      <span className="font-body-sm text-body-sm font-bold text-primary">{job.salary}</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-caption text-label-caption text-outline">{job.durationLabel}</span>
                      <span className="font-body-sm text-body-sm font-medium">{job.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-caption text-label-caption text-outline">{job.extraLabel}</span>
                      <span className="font-body-sm text-body-sm font-medium text-on-tertiary-container">{job.extraVal}</span>
                    </div>
                  </div>
                  {/* Qualifications checklist */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label-caption text-label-caption text-outline uppercase tracking-wider font-semibold">
                      {t('lowongan.grid.labelRequirements')}
                    </span>
                    <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1">
                      {job.reqs.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">check_circle</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Card Footer Action */}
                <div className="p-space-md bg-surface-container-low flex items-center justify-between mt-auto">
                  <span className="font-label-caption text-label-caption text-outline">{job.quota}</span>
                  {job.detailUrl.startsWith('/') ? (
                    <Link className="inline-flex items-center gap-1 text-primary font-label-button text-label-button font-bold hover:text-secondary transition-colors" to={job.detailUrl}>
                      <span>{t('lowongan.grid.applyJobBtn')}</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  ) : (
                    <a className="inline-flex items-center gap-1 text-primary font-label-button text-label-button font-bold hover:text-secondary transition-colors" href={job.detailUrl}>
                      <span>{t('lowongan.grid.applyJobBtn')}</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}

          {/* SPECIAL STATE CARD: KUOTA TERPENUHI */}
          <article
            className="bg-surface-container-low/50 rounded-xl overflow-hidden flex flex-col opacity-90 relative"
            style={{ opacity: zeroCostOnly ? 0.35 : 0.9 }}
          >
            <div className="p-space-lg flex flex-col flex-1 gap-4">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-caption text-label-caption font-semibold">
                  <span className="material-symbols-outlined text-[14px]">flag</span>
                  <span>Korea Selatan • Ulsan</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-surface-container-highest text-outline font-label-eyebrow text-label-eyebrow uppercase font-bold">
                  {t('lowongan.grid.closedBadge')}
                </span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface-variant font-bold">
                  {t('lowongan.grid.closedJobTitle')}
                </h2>
                <p className="font-body-sm text-body-sm text-outline mt-1">
                  {t('lowongan.grid.closedJobSubtitle')}
                </p>
              </div>
              <div className="bg-surface-container rounded-lg p-space-sm flex flex-col gap-2">
                <div className="flex items-center justify-between text-outline">
                  <span className="font-label-caption text-label-caption">{t('lowongan.grid.closedBatchLabel')}</span>
                  <span className="font-body-sm text-body-sm font-semibold text-on-surface-variant">{t('lowongan.grid.closedBatchVal')}</span>
                </div>
                <div className="flex items-center justify-between text-outline">
                  <span className="font-label-caption text-label-caption">{t('lowongan.grid.closedNextBatchLabel')}</span>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface-variant">{t('lowongan.grid.closedNextBatchVal')}</span>
                </div>
              </div>
              <div className="p-3 bg-surface-container-lowest rounded-lg flex items-start gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] text-outline shrink-0 mt-0.5">lock_clock</span>
                <p className="font-label-caption text-label-caption">
                  {t('lowongan.grid.closedNotice')}
                </p>
              </div>
            </div>
            <div className="p-space-md bg-surface-container flex items-center justify-between mt-auto">
              <span className="font-label-caption text-label-caption text-outline">{t('lowongan.grid.closedFooterNotice')}</span>
              <button className="inline-flex items-center gap-1 text-on-surface-variant font-label-button text-label-button hover:text-primary transition-colors" type="button">
                <span>{t('lowongan.grid.waitingListBtn')}</span>
                <span className="material-symbols-outlined text-[16px]">notifications</span>
              </button>
            </div>
          </article>
        </div>

        {/* Quick Summary Alert */}
        <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
            </div>
            <div>
              <h3 className="font-body-md text-body-md font-bold text-primary">{t('lowongan.grid.customConsultTitle')}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{t('lowongan.grid.customConsultDesc')}</p>
            </div>
          </div>
          <a className="px-5 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-button text-label-button font-bold hover:bg-surface-container-high transition-colors shadow-sm shrink-0" href="#inquiry">
            {t('lowongan.grid.customConsultBtn')}
          </a>
        </div>
      </div>
    </section>
  );
}
