import { Link } from 'react-router-dom';
import { useTranslation } from '@/data/i18n';
import { useLanguage } from '@/data/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';
import { products } from '@/data/products';

export default function Footer() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const quickLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_profile'), path: '/about/profile' },
    { name: t('nav_products'), path: '/products' },
    { name: t('nav_quality'), path: '/quality' },
    { name: t('nav_faq'), path: '/support/faq' },
    { name: t('nav_news'), path: '/news' },
    { name: t('nav_hr'), path: '/hr' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                {t('brand_name')}
              </div>
              <span className="font-bold text-white text-sm">
                {t('footer_company_name')}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {t('footer_company_desc')}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-gray-400">{t('footer_address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-400">{t('footer_phone')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-400">{t('footer_email')}</span>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{t('footer_quick_links')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 产品分类 */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{t('footer_product_cats')}</h3>
            <ul className="space-y-2">
              {products.slice(0, 8).map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/products/${p.id}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {language === 'en' ? p.name_en : p.name_zh}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{t('footer_contact_us')}</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <p className="text-gray-300 font-medium mb-1">{t('footer_presales')}</p>
                <p>{t('footer_phone')}</p>
              </div>
              <div>
                <p className="text-gray-300 font-medium mb-1">{t('footer_tech_support')}</p>
                <p>jhautomatic@outlook.com</p>
              </div>
              <div>
                <p className="text-gray-300 font-medium mb-1">{t('footer_work_hours_label')}</p>
                <p>{t('footer_work_hours')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 版权 */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>{t('footer_copyright')}</span>
          <span>{t('footer_icp')}</span>
        </div>
      </div>
    </footer>
  );
}
