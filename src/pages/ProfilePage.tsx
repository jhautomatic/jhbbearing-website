import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

export default function ProfilePage() {
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
        title={t('seo_about_profile_title')}
        description={t('seo_about_profile_desc')}
      />
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('nav_home')}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">{t('nav_about')}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('about_profile_title')}
          </h1>
        </div>
      </div>

      <section className="py-10 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 侧边导航 */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-xl overflow-hidden">
                {aboutNav.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 text-sm font-medium border-b border-border last:border-b-0 transition-colors ${
                      item.path === '/about/profile'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* 内容 */}
            <div className="lg:col-span-3 space-y-8">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_1db0cf6f-054f-4b72-9413-29bf35c62e26.jpg"
                    alt="公司概貌"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('about_profile_title')}</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                    <p>{t('about_profile_desc_1')}</p>
                    <p>{t('about_profile_desc_2')}</p>
                    <p>{t('about_profile_desc_3')}</p>
                  </div>
                </div>
              </div>

              {/* 联系信息 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t('about_phone_label')}</p>
                    <p className="font-medium text-foreground text-sm">{t('footer_phone')}</p>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t('about_email_label')}</p>
                    <p className="font-medium text-foreground text-sm">{t('footer_email')}</p>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t('about_address_label')}</p>
                    <p className="font-medium text-foreground text-sm">{t('footer_address')}</p>
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
