import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { newsItems } from '@/data/news';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function NewsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'company' | 'industry'>('all');

  const filtered = filter === 'all' ? newsItems : newsItems.filter((n) => n.category === filter);

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_news_title')}
        description={t('seo_news_desc')}
      />
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('nav_home')}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">{t('news_title')}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('news_title')}
          </h1>
          <p className="text-primary-foreground/70 mt-2">{t('news_subtitle')}</p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex gap-2 mb-8">
            {[
              { key: 'all', label: t('news_all') },
              { key: 'company', label: t('nav_company_news') },
              { key: 'industry', label: t('nav_industry_news') },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as typeof filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === tab.key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((news) => (
              <Link key={news.id} to={`/news/${news.id}`}>
                <Card className="group h-full flex flex-col hover:shadow-lg transition-all cursor-pointer">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={news.image_url}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <span className={`text-xs px-2 py-0.5 rounded-full w-fit mb-3 ${news.category === 'company' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      {news.category === 'company' ? t('nav_company_news') : t('nav_industry_news')}
                    </span>
                    <h3 className="font-semibold text-foreground text-pretty leading-snug mb-3 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 text-pretty flex-1">
                      {news.summary}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">{news.publish_date}</span>
                      <span className="text-xs text-primary font-medium flex items-center gap-0.5">
                        {t('news_read_more')}
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">暂无新闻</div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
