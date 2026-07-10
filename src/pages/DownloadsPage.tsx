import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { ChevronRight, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const downloads = [
  { key: 'dl_guide_manual', type: 'PDF', size: '2.4 MB' },
  { key: 'dl_screw_spec', type: 'PDF', size: '1.8 MB' },
  { key: 'dl_bearing_catalog', type: 'PDF', size: '3.2 MB' },
  { key: 'dl_support_guide', type: 'PDF', size: '1.5 MB' },
  { key: 'dl_coupling_guide', type: 'PDF', size: '1.1 MB' },
  { key: 'dl_module_params', type: 'PDF', size: '2.0 MB' },
  { key: 'dl_cad_drawings', type: 'ZIP', size: '15.6 MB' },
  { key: 'dl_inspection_report', type: 'DOC', size: '0.5 MB' },
];

export default function DownloadsPage() {
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
        title={t('seo_support_downloads_title')}
        description={t('seo_support_downloads_desc')}
      />
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
            <Link to="/" className="hover:text-primary-foreground transition-colors">{t('nav_home')}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">{t('nav_support')}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('downloads_title')}
          </h1>
          <p className="text-primary-foreground/70 mt-2">{t('downloads_subtitle')}</p>
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
                      item.path === '/support/downloads'
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
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="grid grid-cols-4 bg-muted/50 px-5 py-3 text-xs font-medium text-muted-foreground border-b border-border">
                  <span className="col-span-1">文件名</span>
                  <span className="col-span-1 hidden md:block">类型</span>
                  <span className="col-span-1 hidden md:block">文件大小</span>
                  <span className="col-span-3 md:col-span-1 text-right">操作</span>
                </div>
                {downloads.map((dl, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-4 items-center px-5 py-4 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
                  >
                    <div className="col-span-4 md:col-span-1 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground truncate">{t(dl.key)}</span>
                    </div>
                    <div className="hidden md:block text-xs text-muted-foreground">{dl.type}</div>
                    <div className="hidden md:block text-xs text-muted-foreground">{dl.size}</div>
                    <div className="col-span-4 md:col-span-1 flex justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" className="h-8 text-xs gap-1" onClick={() => toast.info('下载功能即将上线')}>
                        <Download className="w-3.5 h-3.5" />
                        {t('download_btn')}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
