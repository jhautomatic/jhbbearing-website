import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { ChevronRight, Calculator } from 'lucide-react';
import { useState } from 'react';

export default function CalculatorPage() {
  const { t } = useTranslation();

  const [d, setD] = useState('');
  const [n, setN] = useState('');
  const [f, setF] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalc = () => {
    const dm = parseFloat(d);
    const nm = parseFloat(n);
    const fm = parseFloat(f);
    if (!dm || !nm || !fm) return;
    const l10 = Math.pow((dm * nm) / fm, 3);
    setResult(Math.round(l10));
  };

  const supportNav = [
    { name: t('nav_faq'), path: '/support/faq' },
    { name: t('nav_downloads'), path: '/support/downloads' },
    { name: t('nav_software'), path: '/support/software' },
    { name: t('nav_calculator'), path: '/support/calculator' },
  ];

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_support_calculator_title')}
        description={t('seo_support_calculator_desc')}
      />
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('nav_home')}</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/support" className="hover:text-primary-foreground transition-colors">{t('nav_support')}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">{t('calc_title')}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('calc_title')}
          </h1>
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
                      item.path === '/support/calculator'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-bold text-foreground">丝杆轴承寿命计算器</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">丝杆导程 (mm)</label>
                    <input
                      type="number"
                      value={d}
                      onChange={(e) => setD(e.target.value)}
                      placeholder="例如：10"
                      className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">转速 (rpm)</label>
                    <input
                      type="number"
                      value={n}
                      onChange={(e) => setN(e.target.value)}
                      placeholder="例如：1500"
                      className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">动负荷 (N)</label>
                    <input
                      type="number"
                      value={f}
                      onChange={(e) => setF(e.target.value)}
                      placeholder="例如：8000"
                      className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                  </div>
                </div>
                <button
                  onClick={handleCalc}
                  className="px-6 h-9 rounded-md text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                >
                  计算寿命
                </button>

                {result !== null && (
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm text-muted-foreground mb-1">理论额定寿命 (L10)</p>
                    <p className="text-2xl font-bold text-primary">{result.toLocaleString()} 小时</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
