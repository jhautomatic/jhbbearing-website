import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { ChevronRight, Monitor, Download, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const tools = [
  { key: 'software_lifecalc', desc: '丝杆轴承寿命在线计算器', icon: Wrench },
  { key: 'software_mountcalc', desc: '导轨安装误差计算', icon: Monitor },
  { key: 'software_torquecalc', desc: '驱动扭矩辅助计算器', icon: Monitor },
  { key: 'software_convert', desc: '常用参数单位换算工具', icon: Wrench },
];

export default function SoftwarePage() {
  const { t } = useTranslation();

  const supportNav = [
    { name: t('nav_faq'), path: '/support/faq' },
    { name: t('nav_downloads'), path: '/support/downloads' },
    { name: t('nav_software'), path: '/support/software' },
    { name: t('nav_calculator'), path: '/support/calculator' },
  ];

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_support_software_title')}
        description={t('seo_support_software_desc')}
      />
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('nav_home')}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">{t('nav_support')}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('software_title')}
          </h1>
          <p className="text-primary-foreground/70 mt-2">{t('software_subtitle')}</p>
        </div>
      </div>

      <section className="py-10 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-xl overflow-hidden">
                {supportNav.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 text-sm font-medium border-b border-border last:border-b-0 transition-colors ${
                      item.path === '/support/software'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="grid grid-cols-4 bg-muted/50 px-5 py-3 text-xs font-medium text-muted-foreground border-b border-border">
                  <span className="col-span-2">软件名称</span>
                  <span className="col-span-1 hidden md:block">功能说明</span>
                  <span className="col-span-2 md:col-span-1 text-right">操作</span>
                </div>
                {tools.map((tool, i) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={i}
                      className="grid grid-cols-4 items-center px-5 py-4 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
                    >
                      <div className="col-span-2 flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{t(tool.key)}</span>
                      </div>
                      <div className="hidden md:block text-xs text-muted-foreground">{tool.desc}</div>
                      <div className="col-span-2 md:col-span-1 flex justify-end gap-2">
                        <Button size="sm" variant="outline" className="h-8 text-xs gap-1" onClick={() => toast.info('下载功能即将上线')}>
                          <Download className="w-3.5 h-3.5" />
                          {t('download_btn')}
                        </Button>
                        {i === 0 && (
                          <Link to="/support/calculator">
                            <Button size="sm" variant="secondary" className="h-8 text-xs">
                              在线计算器
                            </Button>
                          </Link>
                        )}
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
