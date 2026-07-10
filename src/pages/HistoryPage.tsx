import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { useLanguage } from '@/data/LanguageContext';
import { ChevronRight } from 'lucide-react';

const milestonesZh = [
  { year: '2000', event: '丽水市家和自动化技术有限公司正式成立，专注直线传动行业' },
  { year: '2003', event: '引进全套进口精密加工设备，产能大幅提升' },
  { year: '2006', event: '公司官方网站正式上线运营' },
  { year: '2008', event: '产品系列扩展至10大品类，覆盖全系列传动部件' },
  { year: '2010', event: '通过ISO 9001:2008国际质量管理体系认证' },
  { year: '2013', event: '产品出口东南亚市场，开启国际化布局' },
  { year: '2015', event: '荣获浙江省名牌产品称号' },
  { year: '2017', event: '获得国家高新技术企业证书' },
  { year: '2019', event: '参加中国国际工业博览会，品牌影响力进一步提升' },
  { year: '2024', event: '升级生产基地，产能与精度再上新台阶' },
];

const milestonesEn = [
  { year: '2000', event: 'Lishui Jiahe Automation Technology Co., Ltd. was established, focusing on the linear transmission industry' },
  { year: '2003', event: 'Introduced complete sets of imported precision machining equipment, significantly increasing production capacity' },
  { year: '2006', event: 'Official company website launched and operational' },
  { year: '2008', event: 'Product range expanded to 10 major categories, covering the full series of transmission components' },
  { year: '2010', event: 'Achieved ISO 9001:2008 International Quality Management System Certification' },
  { year: '2013', event: 'Products exported to Southeast Asian markets, beginning international expansion' },
  { year: '2015', event: 'Awarded the Zhejiang Province Famous Brand Product title' },
  { year: '2017', event: 'Obtained National High-Tech Enterprise Certificate' },
  { year: '2019', event: 'Participated in China International Industry Fair, further enhancing brand influence' },
  { year: '2024', event: 'Upgraded production base, reaching new levels in capacity and precision' },
];

export default function HistoryPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const milestones = language === 'en' ? milestonesEn : milestonesZh;

  const aboutNav = [
    { name: t('nav_profile'), path: '/about/profile' },
    { name: t('nav_history'), path: '/about/history' },
    { name: t('nav_production'), path: '/about/production' },
    { name: t('nav_certificates'), path: '/about/certificates' },
  ];

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_about_history_title')}
        description={t('seo_about_history_desc')}
      />
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('nav_home')}</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/about/profile" className="hover:text-primary-foreground transition-colors">{t('nav_about')}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">{t('about_history_title')}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('about_history_title')}
          </h1>
          <p className="text-primary-foreground/70 mt-2">{t('about_history_subtitle')}</p>
        </div>
      </div>

      <section className="py-10 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-xl overflow-hidden">
                {aboutNav.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 text-sm font-medium border-b border-border last:border-b-0 transition-colors ${
                      item.path === '/about/history'
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
                <h2 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  {t('about_history_title')}
                </h2>
                <div className="relative">
                  <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border" />
                  <div className="space-y-6">
                    {milestones.map((m, i) => (
                      <div key={i} className="flex items-start gap-6 relative">
                        <div className="w-[72px] shrink-0 text-right">
                          <span className="text-sm font-bold text-primary">{m.year}</span>
                        </div>
                        <div className="relative flex items-center justify-center shrink-0">
                          <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary-foreground shadow mt-1" />
                        </div>
                        <div className="flex-1 pb-2">
                          <p className="text-sm text-foreground leading-relaxed">{m.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
