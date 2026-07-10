import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { newsItems } from '@/data/news';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const news = newsItems.find((n) => n.id === Number(id));

  if (!news) {
    return (
      <MainLayout>
      <PageMeta
        title={t('seo_news_detail_title')}
        description={t('seo_news_detail_desc')}
      />
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
          <p className="text-xl text-muted-foreground">{t('news_not_found')}</p>
          <Link to="/news" className="text-primary hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            {t('back_to_news')}
          </Link>
        </div>
    </MainLayout>
  );
  }

  return (
    <MainLayout>
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3 flex-wrap">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('news_breadcrumb_home')}</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/news" className="hover:text-primary-foreground transition-colors">{t('news_breadcrumb_news')}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground line-clamp-1">{news.title}</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-primary-foreground text-balance">{news.title}</h1>
        </div>
      </div>

      <section className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-card border border-border rounded-xl overflow-hidden mb-8">
            <div className="aspect-video overflow-hidden bg-muted">
              <img src={news.image_url} alt={news.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {news.category === 'company' ? t('nav_company_news') : t('nav_industry_news')}
                </span>
                <span>{news.publish_date}</span>
              </div>
              <h2 className="text-xl font-bold text-foreground mb-4">{news.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{news.summary}</p>
              <div className="text-muted-foreground leading-relaxed">
                <p>{news.content}</p>
              </div>
            </div>
          </div>

          <Link to="/news" className="text-primary hover:underline flex items-center gap-1 text-sm">
            <ArrowLeft className="w-4 h-4" />
            {t('back_to_news')}
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
