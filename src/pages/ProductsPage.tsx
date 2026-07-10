import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { useLanguage } from '@/data/LanguageContext';
import { products } from '@/data/products';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ProductsPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_products_title')}
        description={t('seo_products_desc')}
      />
      {/* 页面横幅 */}
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('nav_home')}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">{t('products_title')}</span>
          </div>
          <p className="text-primary-foreground/70 text-sm mb-1">{t('products_subtitle')}</p>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('products_title')}
          </h1>
        </div>
      </div>

      {/* 产品列表 */}
      <section className="py-16 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Card className="group h-full flex flex-col hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 cursor-pointer">
                  <div className="aspect-square overflow-hidden bg-muted">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={language === 'en' ? product.name_en : product.name_zh}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        {t('no_image')}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-primary/40">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs text-muted-foreground">{language === 'en' ? product.name_zh : product.name_en}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
                      {language === 'en' ? product.name_en : product.name_zh}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2 flex-1 text-pretty">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all">
                        {t('view_details')}
                        <ArrowRight className="h-3 w-3" />
                      </div>
                      {product.sub_products.length > 0 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                          {product.sub_products.length}
                          {t('models_count')}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
