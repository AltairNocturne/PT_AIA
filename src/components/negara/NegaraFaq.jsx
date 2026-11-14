import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function NegaraFaq() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: t('negara.faq.q1'),
      a: t('negara.faq.a1')
    },
    {
      q: t('negara.faq.q2'),
      a: t('negara.faq.a2')
    },
    {
      q: t('negara.faq.q3'),
      a: t('negara.faq.a3')
    },
    {
      q: t('negara.faq.q4'),
      a: t('negara.faq.a4')
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-surface-container-low/50 py-space-xl">
      <div className="max-w-4xl mx-auto px-margin">
        <div className="text-center mb-10">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-widest block mb-2">{t('negara.faq.eyebrow')}</span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            {t('negara.faq.title')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            {t('negara.faq.desc')}
          </p>
        </div>
        <div className="space-y-space-sm" id="faqAccordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full text-left p-space-md flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-primary focus:outline-none"
                  type="button"
                  onClick={() => toggle(idx)}
                >
                  <span>{faq.q}</span>
                  <span className={`material-symbols-outlined text-outline transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-content px-space-md pb-space-md text-body-sm text-on-surface-variant leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
