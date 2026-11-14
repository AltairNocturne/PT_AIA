import React from 'react';
import { useTranslation } from 'react-i18next';

export default function BeritaGrid({ articles, onOpenArticle }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'id';

  if (!articles || articles.length === 0) {
    return (
      <section className="py-20 text-center">
        <div className="max-w-md mx-auto px-margin">
          <div className="w-16 h-16 mx-auto rounded-full bg-surface-container flex items-center justify-center text-secondary mb-space-md">
            <span className="material-symbols-outlined text-[32px]">feed</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
            {t('beritaPage.empty.title')}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {t('beritaPage.empty.desc')}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {articles.map((item) => {
            const title = item.title?.[currentLang] || item.title?.id;
            const excerpt = item.excerpt?.[currentLang] || item.excerpt?.id;
            const role = item.author?.role?.[currentLang] || item.author?.role?.id;

            return (
              <article
                key={item.id}
                onClick={() => onOpenArticle(item)}
                className="group cursor-pointer bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-52 overflow-hidden bg-surface-container">
                    <img
                      src={item.image}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-caption text-label-caption font-bold shadow-sm">
                        {t(`beritaPage.filter.${item.category}`) || item.category}
                      </span>
                    </div>

                    {/* Read time pill */}
                    <div className="absolute bottom-3 right-3 z-10">
                      <span className="px-2.5 py-0.5 rounded-md bg-primary/70 backdrop-blur-md text-tertiary-fixed font-label-caption text-label-caption flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">schedule</span>
                        <span>{item.readTime}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-space-md lg:p-space-lg">
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-2">
                      <span className="material-symbols-outlined text-[14px] text-secondary">calendar_today</span>
                      <span>{item.date}</span>
                    </div>

                    <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2 mb-2">
                      {title}
                    </h3>

                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                      {excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer metadata */}
                <div className="p-space-md lg:p-space-lg pt-0 border-t border-outline-variant/20 mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container text-xs font-bold shrink-0">
                      <span className="material-symbols-outlined text-[16px]">person</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-button text-xs font-semibold text-on-surface truncate max-w-[140px]">
                        {item.author?.name}
                      </div>
                      <div className="font-label-caption text-[11px] text-on-surface-variant truncate max-w-[140px]">
                        {role}
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 font-label-button text-label-button text-primary group-hover:text-on-tertiary-container group-hover:translate-x-1 transition-all">
                    <span>{t('beritaPage.card.readMore')}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
