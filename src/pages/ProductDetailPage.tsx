import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { useLanguage } from '@/data/LanguageContext';
import { products } from '@/data/products';
import { ChevronRight, ImageOff, ChevronLeft, ChevronRight as ChevronRightIcon, Info } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { language } = useLanguage();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSub, setSelectedSub] = useState(0);

  if (!product) {
    return (
      <MainLayout>
      <PageMeta
        title={t('seo_product_detail_title')}
        description={t('seo_product_detail_desc')}
      />
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
          <p className="text-xl text-muted-foreground">{t('product_not_found')}</p>
          <Link to="/products" className="text-primary hover:underline flex items-center gap-1">
            <ChevronRight className="w-4 h-4 rotate-180" />
            {t('back_to_products')}
          </Link>
        </div>
    </MainLayout>
  );
  }

  const currentSub = product.sub_products[selectedSub];
  const prevSub = selectedSub > 0 ? product.sub_products[selectedSub - 1] : null;
  const nextSub = selectedSub < product.sub_products.length - 1 ? product.sub_products[selectedSub + 1] : null;

  return (
    <MainLayout>
      {/* 页面横幅 */}
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3 flex-wrap">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('nav_home')}</Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <Link to="/products" className="hover:text-primary-foreground transition-colors">{t('products_title')}</Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-primary-foreground">{language === 'en' ? product.name_en : product.name_zh}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {language === 'en' ? product.name_en : product.name_zh}
          </h1>
          <p className="text-primary-foreground/70 mt-1">{language === 'en' ? product.name_zh : product.name_en}</p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 左侧型号列表 */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border rounded-xl overflow-hidden">
              <div className="px-4 py-3 bg-muted/50 border-b border-border text-sm font-semibold text-foreground">
                {t('product_series')}
              </div>
              {product.sub_products.map((sub, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSub(i)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm border-b border-border last:border-b-0 transition-colors ${
                    selectedSub === i
                      ? 'bg-primary/5 text-primary font-medium'
                      : 'text-foreground hover:bg-muted/50'
                  }`}
                >
                  <span className="text-xs text-muted-foreground w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-pretty">{sub.name}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* 右侧详情 */}
          <div className="lg:col-span-3 space-y-6">
            {/* 产品简介卡片 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="px-4 py-3 bg-muted/50 border-b border-border flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">{t('product_desc_label')}</span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{product.description}</p>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{product.sub_products.length}</div>
                    <div className="text-xs text-muted-foreground">{t('product_model_count')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{language === 'en' ? product.name_en : product.name_zh}</div>
                    <div className="text-xs text-muted-foreground">{t('product_name_label')}</div>
                  </div>
                </div>
              </div>
            </div>

            {currentSub && (
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-4 border-b border-border bg-muted/50 flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-foreground">{currentSub.name}</h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {prevSub && (
                      <button
                        onClick={() => setSelectedSub(selectedSub - 1)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded hover:bg-muted"
                      >
                        <ChevronLeft className="w-3 h-3" />
                        {t('prev_model')}
                      </button>
                    )}
                    {nextSub && (
                      <button
                        onClick={() => setSelectedSub(selectedSub + 1)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded hover:bg-muted"
                      >
                        {t('next_model')}
                        <ChevronRightIcon className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  {currentSub.image_url ? (
                    <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted mb-6 relative">
                      <img
                        src={currentSub.image_url}
                        alt={currentSub.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] flex items-center justify-center bg-muted rounded-lg mb-6 text-muted-foreground">
                      <ImageOff className="w-12 h-12" />
                    </div>
                  )}

                  {/* 参数图 */}
                  {currentSub.param_images && currentSub.param_images.length > 0 ? (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">
                        {t('spec_params')}
                      </h4>
                      <div className="space-y-4">
                        {currentSub.param_images.map((imgUrl, j) => (
                          <div key={j} className="border border-border rounded-lg overflow-hidden relative">
                            <img src={imgUrl} alt={`参数图 ${j + 1}`} className="w-full h-auto" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-8 border border-dashed border-border rounded-lg bg-muted/30">
                      <div className="text-center">
                        <ImageOff className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">{t('no_params')}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
