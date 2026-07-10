import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { ChevronRight, Award, Shield, Star, Cpu } from 'lucide-react';

const certs = [
  { icon: Shield, name: 'ISO 9001:2015', desc: '国际质量管理体系认证', org: '中国质量认证中心', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Award, name: '国家高新技术企业', desc: '国家高新技术企业证书', org: '科技部、财政部、税务总局', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: Star, name: '浙江省名牌产品', desc: '浙江省名牌产品证书', org: '浙江省市场监督管理局', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: Cpu, name: '发明专利', desc: '发明专利证书', org: '国家知识产权局', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Cpu, name: '实用新型专利', desc: '实用新型专利证书', org: '国家知识产权局', color: 'text-rose-600', bg: 'bg-rose-50' },
  { icon: Award, name: '外观设计专利', desc: '外观设计专利证书', org: '国家知识产权局', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: Shield, name: '中国制造质量认证', desc: '中国制造质量认证证书', org: '中国制造认证机构', color: 'text-red-600', bg: 'bg-red-50' },
];

export default function CertificatesPage() {
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
        title={t('seo_about_certificates_title')}
        description={t('seo_about_certificates_desc')}
      />
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('nav_home')}</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/about/profile" className="hover:text-primary-foreground transition-colors">{t('nav_about')}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">{t('about_cert_title')}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('about_cert_title')}
          </h1>
          <p className="text-primary-foreground/70 mt-2">{t('about_cert_subtitle')}</p>
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
                      item.path === '/about/certificates'
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certs.map((cert, i) => {
                  const Icon = cert.icon;
                  return (
                    <div key={i} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 h-full">
                      <div className={`w-12 h-12 rounded-xl ${cert.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-6 h-6 ${cert.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{cert.desc}</p>
                        <p className="text-xs text-muted-foreground/70">颁发机构：{cert.org}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
