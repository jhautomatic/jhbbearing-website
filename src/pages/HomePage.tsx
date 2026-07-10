import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { products } from '@/data/products';
import { newsItems } from '@/data/news';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const bannerImages = [
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpz5lndnjoxs/app-cku4hf2twpvl/20260702/1_1782978893203.jpg',
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpz5lndnjoxs/app-cku4hf2twpvl/20260709/11(1).jpg',
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpz5lndnjoxs/app-cku4hf2twpvl/20260709/2.png',
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpz5lndnjoxs/app-cku4hf2twpvl/20260702/5_1782980103380.jpg',
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpz5lndnjoxs/app-cku4hf2twpvl/20260709/3.png',
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpz5lndnjoxs/app-cku4hf2twpvl/20260702/ABUIABACGAAgi9SFjgYosKOVvAMwsAk4qwY_1782981256991.jpg',
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpz5lndnjoxs/app-cku4hf2twpvl/20260702/6_1782981256989.jpg',
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpz5lndnjoxs/app-cku4hf2twpvl/20260702/ABUIABACGAAgmdOpjgYo-P3utwYwgA849QU_1782981256990.jpg',
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpz5lndnjoxs/app-cku4hf2twpvl/20260702/ABUIABACGAAgrdWFjgYojq2N9AMwsAk4qwY_1782981256990.jpg',
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpz5lndnjoxs/app-cku4hf2twpvl/20260702/4_1782979922933.jpg',
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpz5lndnjoxs/app-cku4hf2twpvl/20260702/3_1782978916074.jpg',
];

export default function HomePage() {
  const { t } = useTranslation();
  const [currentBanner, setCurrentBanner] = useState(0);

  const prevBanner = useCallback(() => {
    setCurrentBanner((c) => (c - 1 + bannerImages.length) % bannerImages.length);
  }, []);
  const nextBanner = useCallback(() => {
    setCurrentBanner((c) => (c + 1) % bannerImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextBanner, 5000);
    return () => clearInterval(timer);
  }, [nextBanner]);

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_home_title')}
        description={t('seo_home_desc')}
      />
      {/* ===== Banner ===== */}
      <section className="relative h-[420px] md:h-[560px] overflow-hidden">
        {bannerImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === currentBanner ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-12 md:pb-16">
              <div className="text-center text-white px-4 max-w-3xl">
                <div className="flex items-center justify-center gap-4">
                  <Link to="/products">
                    <Button size="lg" variant="secondary" className="hover:bg-secondary/90 shadow-lg">
                      {t('btn_view_products')}
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="border border-white/60 text-white hover:bg-white/10 shadow-lg"
                    >
                      {t('btn_contact_us')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* 左右箭头 */}
        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 rounded flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 rounded flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        {/* 底部指示器 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentBanner(i)}
              className={`h-1.5 rounded transition-all ${i === currentBanner ? 'bg-white w-6' : 'bg-white/40 w-6'}`}
            />
          ))}
        </div>
      </section>

      {/* ===== 产品中心 ===== */}
      <section className="py-16 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm text-muted-foreground mb-1 font-medium tracking-widest uppercase">
                {t('products_subtitle')}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
                {t('products_title')}
              </h2>
              <div className="w-12 h-0.5 bg-primary mt-3" />
            </div>
            <Link to="/products" className="hidden md:block">
              <Button variant="outline" className="flex items-center gap-2">
                {t('view_all')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Card className="group h-full flex flex-col hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 cursor-pointer">
                  <div className="aspect-square overflow-hidden bg-muted">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name_zh}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                        {t('no_image')}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-3 flex-1 flex flex-col">
                    <div className="text-xs text-muted-foreground mb-1">{product.name_en}</div>
                    <h3 className="text-sm font-semibold text-foreground text-balance group-hover:text-primary transition-colors">
                      {product.name_zh}
                    </h3>
                    {product.sub_products.length > 0 && (
                      <div className="mt-auto pt-1.5">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                          {product.sub_products.length}
                          {t('models_count')}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8 md:hidden">
            <Link to="/products">
              <Button variant="outline" className="flex items-center gap-2">
                {t('view_all')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 关于我们 ===== */}
      <section className="py-16 bg-card">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-muted-foreground mb-1 font-medium tracking-widest uppercase">
                {t('company_profile_subtitle')}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1 text-balance">
                {t('company_profile')}
              </h2>
              <div className="w-12 h-0.5 bg-primary mb-6" />
              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p className="text-pretty">{t('home_about_desc_1')}</p>
                <p className="text-pretty">{t('home_about_desc_2')}</p>
                <p className="text-pretty">{t('home_about_desc_3')}</p>
              </div>
              <div className="flex gap-8 mt-8">
                {[
                  { value: '20+', labelKey: 'stat_years_exp' },
                  { value: '10+', labelKey: 'stat_product_series' },
                  { value: '50+', labelKey: 'stat_countries' },
                ].map((stat) => (
                  <div key={stat.labelKey} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t(stat.labelKey)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
              <img
                src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_1db0cf6f-054f-4b72-9413-29bf35c62e26.jpg"
                alt="公司概貌"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 新闻资讯 ===== */}
      <section className="py-16 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm text-muted-foreground mb-1 font-medium tracking-widest uppercase">
                {t('news_subtitle')}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
                {t('news_title')}
              </h2>
              <div className="w-12 h-0.5 bg-primary mt-3" />
            </div>
            <Link to="/news" className="hidden md:block">
              <Button variant="outline" className="flex items-center gap-2">
                {t('view_more')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.slice(0, 3).map((news) => (
              <Link key={news.id} to={`/news/${news.id}`}>
                <Card className="group h-full flex flex-col hover:shadow-md transition-all duration-150 cursor-pointer">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={news.image_url}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded ${news.category === 'company' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                        {news.category === 'company' ? t('company_news') : t('industry_news')}
                      </span>
                      <span className="text-xs text-muted-foreground">{news.publish_date}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-balance flex-1">
                      {news.title}
                    </h3>
                    {news.summary && (
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2 text-pretty">
                        {news.summary}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8 md:hidden">
            <Link to="/news">
              <Button variant="outline" className="flex items-center gap-2">
                {t('view_more')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 联系我们 ===== */}
      <ContactSection />
    </MainLayout>
  );
}

function ContactSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', phone: '', email: '', content: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.content.trim()) {
      toast.error(t('contact_required'));
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(t('contact_success'));
      setForm({ name: '', phone: '', email: '', content: '' });
    } catch {
      toast.error(t('contact_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-card">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm text-muted-foreground mb-1 font-medium tracking-widest uppercase">
              Contact
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1 text-balance">
              {t('contact_title')}
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-foreground mb-1">{t('footer_company_name')}</p>
                <p className="text-sm text-muted-foreground">Lishui Jiahe Automation Technology Co., Ltd</p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground font-medium">{t('contact_address_label')}：</span>
                  {t('footer_address')}
                </p>
                <p>
                  <span className="text-foreground font-medium">{t('contact_phone_label')}：</span>
                  {t('footer_phone')}
                </p>
                <p>
                  <span className="text-foreground font-medium">E-mail：</span>
                  {t('footer_email')}
                </p>
              </div>
            </div>
          </div>
          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-4">{t('online_message')}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t('contact_form_hint')}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-normal mb-1.5 block">
                    {t('contact_name_label')} <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t('contact_name_placeholder')}
                    className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-normal mb-1.5 block">
                    {t('contact_phone_label')}
                  </label>
                  <input
                    id="phone"
                    type="text"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t('contact_phone_placeholder')}
                    className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-normal mb-1.5 block">
                  {t('contact_email_label')}
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t('contact_email_placeholder')}
                  className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="content" className="text-sm font-normal mb-1.5 block">
                  {t('contact_content_label')} <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="content"
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder={t('contact_content_placeholder')}
                  rows={4}
                  className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 min-h-[80px]"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t('contact_submitting') : t('contact_submit')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
