import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { Phone, Mail, MapPin, Send, MessageSquare, User, Smartphone, Users } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

export default function ContactPage() {
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

  const contactCards = [
    {
      icon: Users,
      label: '业务联系人',
      value: '徐经理',
      href: `tel:${t('footer_phone')}`,
      color: 'bg-violet-50 text-violet-600 dark:bg-violet-950/30 dark:text-violet-400',
    },
    {
      icon: Phone,
      label: t('contact_phone_label'),
      value: t('footer_phone'),
      href: `tel:${t('footer_phone')}`,
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400',
    },
    {
      icon: Mail,
      label: t('contact_email_label'),
      value: t('footer_email'),
      href: `mailto:${t('footer_email')}`,
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400',
    },
    {
      icon: MapPin,
      label: t('contact_address_label'),
      value: t('footer_address'),
      href: '#',
      color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/30 dark:text-sky-400',
    },
  ];

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_contact_title')}
        description={t('seo_contact_desc')}
      />
      {/* 页面标题 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80 py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-8 bg-primary-foreground/40" />
            <span className="text-primary-foreground/60 text-sm font-medium tracking-wider uppercase">
              {t('contact_subtitle')}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('contact_title')}
          </h1>
          <p className="text-primary-foreground/70 mt-3 max-w-xl text-sm md:text-base">
            我们期待与您的沟通，无论产品咨询、技术支持还是商务合作，欢迎随时联系
          </p>
        </div>
      </div>

      {/* 联系信息卡片 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <a
                  key={i}
                  href={card.href}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{card.label}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {card.value}
                  </p>
                </a>
              );
            })}
          </div>

          {/* 表单与地图区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* 左侧：地图 */}
            <Card className="overflow-hidden border border-border">
              <div className="p-5 md:p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('contact_map_title')}</h3>
                    <p className="text-xs text-muted-foreground">{t('contact_map_subtitle')}</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full aspect-[16/10] bg-muted">
                <iframe
                  title="公司位置"
                  className="absolute inset-0 w-full h-full border-0"
                  src="https://uri.amap.com/marker?position=119.8700,28.4500&name=丽水市家和自动化技术有限公司&src=mysite&coordinate=gaode&callnative=0"
                  allowFullScreen
                />
              </div>
              <div className="p-5 md:p-6 bg-muted/30">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{t('footer_address')}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      浙江省丽水市莲都区水阁工业区百仙路12号
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* 右侧：在线留言表单 */}
            <Card className="border border-border">
              <div className="p-5 md:p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('contact_form_title')}</h3>
                    <p className="text-xs text-muted-foreground">{t('contact_form_hint')}</p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {t('contact_name_label')} <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      <Input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={t('contact_name_placeholder')}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('contact_phone_label')}</Label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      <Input
                        id="phone"
                        type="text"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder={t('contact_phone_placeholder')}
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact_email_label')}</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={t('contact_email_placeholder')}
                      className="pl-9"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">
                    {t('contact_content_label')} <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="content"
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    placeholder={t('contact_content_placeholder')}
                    rows={4}
                    className="min-h-[100px] resize-none"
                  />
                </div>
                <Button type="submit" className="w-full h-11" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? t('contact_submitting') : t('contact_submit')}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
