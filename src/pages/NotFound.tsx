import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import PageMeta from '@/components/common/PageMeta';
import { useTranslation } from '@/data/i18n';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const { t } = useTranslation();

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_not_found_title')}
        description={t('seo_not_found_desc')}
      />
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">页面未找到</h2>
          <p className="text-muted-foreground mb-8">您访问的页面可能已被删除或不存在</p>
          <Link to="/">
            <Button className="gap-2">
              <Home className="w-4 h-4" />
              返回首页
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
