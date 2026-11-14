import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function BeritaHero({ featuredArticle, onOpenArticle }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'id';

  const featTitle = featuredArticle?.title?.[currentLang] || featuredArticle?.title?.id;
  const featExcerpt = featuredArticle?.excerpt?.[currentLang] || featuredArticle?.excerpt?.id;
  const featAuthor = featuredArticle?.author?.name;

  return (
    <>
      {/* Top Breadcrumb & Administrative Metadata Bar */}
      <section className="w-full bg-surface-container-low/70 py-space-sm border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm text-label-caption">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>{t('navbar.home')}</span>
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <span className="text-primary font-semibold">{t('navbar.news')}</span>
          </nav>
          <div className="flex items-center gap-space-md">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caption text-label-caption font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Pusat Informasi &amp; Regulasi</span>
            </span>
            <span className="hidden md:inline-block font-label-caption text-label-caption text-on-surface-variant">
              Update Berkala Kemenaker RI
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Executive Header (Clean Light Theme) */}
      <header className="w-full bg-surface-container-lowest py-space-xl border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Left: Title & Description */}
            <div className="lg:col-span-7 flex flex-col space-y-space-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low text-on-tertiary-container rounded-md w-fit">
                <span className="material-symbols-outlined text-[16px]">newspaper</span>
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest uppercase">
                  {t('beritaPage.hero.badge')}
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight leading-tight">
                {t('beritaPage.hero.title')}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                {t('beritaPage.hero.desc')}
              </p>
            </div>

            {/* Right: Featured Story Card (Executive Clean Light Style) */}
            {featuredArticle && (
              <div className="lg:col-span-5">
                <div
                  onClick={() => onOpenArticle(featuredArticle)}
                  className="group cursor-pointer bg-surface-container-low/70 hover:bg-surface-container-low p-space-md lg:p-space-lg rounded-2xl shadow-sm border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 flex flex-col gap-space-sm"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
                    <span className="inline-flex items-center gap-1.5 font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span>{t('beritaPage.hero.featuredTag')}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-caption text-xs font-bold">
                      {t(`beritaPage.filter.${featuredArticle.category}`) || featuredArticle.category}
                    </span>
                  </div>

                  {/* Thumbnail & Meta */}
                  <div className="relative h-44 rounded-xl overflow-hidden bg-surface-container">
                    <img
                      src={featuredArticle.image}
                      alt={featTitle}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-2.5 left-3 text-white text-xs font-medium flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                        <span>{featuredArticle.date}</span>
                      </span>
                      <span>•</span>
                      <span>{featuredArticle.readTime} {t('beritaPage.card.minRead')}</span>
                    </div>
                  </div>

                  {/* Headline & Excerpt */}
                  <h3 className="font-headline-sm text-body-md font-bold text-primary group-hover:text-on-tertiary-container transition-colors line-clamp-2 leading-snug">
                    {featTitle}
                  </h3>

                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                    {featExcerpt}
                  </p>

                  {/* Footer Action */}
                  <div className="pt-space-xs flex items-center justify-between text-xs">
                    <span className="text-secondary font-medium truncate max-w-[200px]">
                      {featAuthor}
                    </span>
                    <span className="inline-flex items-center gap-1 font-label-button text-label-button text-primary group-hover:text-on-tertiary-container group-hover:translate-x-0.5 transition-all font-semibold">
                      <span>{t('beritaPage.hero.readArticle')}</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
