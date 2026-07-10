import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { ChevronRight } from 'lucide-react';

const facilities = [
  { name: '数控磨床', desc: '精密加工，确保导轨和丝杆的高精度表面质量' },
  { name: '加工中心', desc: '高效率复合加工，满足多样化零部件生产需求' },
  { name: '精密线切割机', desc: '精密切割，保证复杂形状零件的加工精度' },
  { name: '三坐标测量仪', desc: '精密检测，确保产品尺寸符合设计规格' },
  { name: '硬度检测仪', desc: '材料硬度检测，保证产品耐磨性和使用寿命' },
  { name: '精度测试台', desc: '成品精度验证，确保出厂产品达到标准' },
];

export default function ProductionPage() {
  const { t } = useTranslation();

  const aboutNav = [
    { name: t('nav_profile'), path: '/about/profile' },
    { name: t('nav_history'), path: '/about/history' },
    { name: t('nav_production'), path: '/about/production' },
    { name: t('nav_certificates'), path: '/about/certificates' },
  ];

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_about_production_title')}
        description={t('seo_about_production_desc')}
      />
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('nav_home')}</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/about/profile" className="hover:text-primary-foreground transition-colors">{t('nav_about')}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">{t('about_production_title')}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('about_production_title')}
          </h1>
          <p className="text-primary-foreground/70 mt-2">{t('about_production_subtitle')}</p>
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
                      item.path === '/about/production'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-foreground mb-4">{t('about_production_title')}</h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p>{t('about_production_desc_1')}</p>
                  <p>{t('about_production_desc_2')}</p>
                  <p>{t('about_production_desc_3')}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  <img
                    src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_1db0cf6f-054f-4b72-9413-29bf35c62e26.jpg"
                    alt="公司生产车间"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  <img
                    src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_827cd6b9-adf7-4d08-ab4c-8b8757996deb.jpg"
                    alt="精密加工设备"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-primary rounded-full" />
                  主要生产设备
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {facilities.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-muted/40 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <p className="font-medium text-sm text-foreground">{f.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
