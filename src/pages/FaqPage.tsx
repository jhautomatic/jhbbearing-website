import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { ChevronRight, HelpCircle } from 'lucide-react';

const faqs = [
  { q: 'faq_q1', a: 'faq_a1' },
  { q: 'faq_q2', a: 'faq_a2' },
  { q: 'faq_q3', a: 'faq_a3' },
  { q: 'faq_q4', a: 'faq_a4' },
  { q: 'faq_q5', a: 'faq_a5' },
  { q: 'faq_q6', a: 'faq_a6' },
];

export default function FaqPage() {
  const { t } = useTranslation();

  const supportNav = [
    { name: t('nav_faq'), path: '/support/faq' },
    { name: t('nav_downloads'), path: '/support/downloads' },
    { name: t('nav_software'), path: '/support/software' },
    { name: t('nav_calculator'), path: '/support/calculator' },
  ];

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_support_faq_title')}
        description={t('seo_support_faq_desc')}
      />
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('nav_home')}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">{t('nav_support')}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('faq_title')}
          </h1>
          <p className="text-primary-foreground/70 mt-2">{t('faq_desc')}</p>
        </div>
      </div>

      <section className="py-10 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-xl overflow-hidden">
                {supportNav.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 text-sm font-medium border-b border-border last:border-b-0 transition-colors ${
                      item.path === '/support/faq'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-pretty">{t(faq.q)}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed ml-10">{t(faq.a)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
