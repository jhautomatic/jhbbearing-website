import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '@/data/i18n';
import { useLanguage } from '@/data/LanguageContext';
import { Menu, ChevronDown, Globe } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavItem {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
}

export default function Header() {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const mainNav: NavItem[] = [
    { name: t('nav_home'), path: '/' },
    {
      name: t('nav_about'),
      path: '/about/profile',
      children: [
        { name: t('nav_profile'), path: '/about/profile' },
        { name: t('nav_history'), path: '/about/history' },
        { name: t('nav_production'), path: '/about/production' },
        { name: t('nav_certificates'), path: '/about/certificates' },
      ],
    },
    { name: t('nav_products'), path: '/products' },
    { name: t('nav_quality'), path: '/quality' },
    {
      name: t('nav_support'),
      path: '/support/faq',
      children: [
        { name: t('nav_faq'), path: '/support/faq' },
        { name: t('nav_downloads'), path: '/support/downloads' },
        { name: t('nav_software'), path: '/support/software' },
        { name: t('nav_calculator'), path: '/support/calculator' },
      ],
    },
    { name: t('nav_news'), path: '/news' },
    { name: t('nav_hr'), path: '/hr' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-bold text-sm">
              {t('brand_name')}
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold leading-tight text-foreground">
                {t('footer_company_name')}
              </div>
            </div>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-1 min-w-[160px]">
                    <div className="bg-white rounded-lg shadow-lg border border-border overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActive(child.path)
                              ? 'bg-primary/5 text-primary font-medium'
                              : 'text-foreground hover:bg-primary/5 hover:text-primary'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 语言切换 */}
          <button
            onClick={toggleLanguage}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md border border-border hover:bg-muted transition-colors text-foreground"
            title={language === 'zh' ? 'Switch to English' : '切换为中文'}
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'zh' ? 'EN' : '中'}</span>
          </button>

          {/* 移动端菜单 */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className="p-2 rounded-md text-foreground">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[340px] p-0 bg-sidebar">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
                  <span className="font-bold text-sidebar-foreground">{t('footer_company_name')}</span>
                </div>
                <nav className="flex-1 overflow-y-auto py-2">
                  {mainNav.map((item) => (
                    <div key={item.path}>
                      {item.children ? (
                        <>
                          <div className="px-4 py-3 text-sm font-medium text-sidebar-foreground border-b border-sidebar-border">
                            {item.name}
                          </div>
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => setMobileOpen(false)}
                              className={`block px-8 py-2.5 text-sm ${
                                isActive(child.path)
                                  ? 'text-primary font-medium'
                                  : 'text-sidebar-foreground/70 hover:text-sidebar-foreground'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setMobileOpen(false)}
                          className={`block px-4 py-3 text-sm font-medium border-b border-sidebar-border ${
                            isActive(item.path)
                              ? 'text-primary'
                              : 'text-sidebar-foreground hover:text-sidebar-foreground/80'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                {/* 移动端语言切换 */}
                <div className="p-4 border-t border-sidebar-border">
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setMobileOpen(false);
                    }}
                    className="flex items-center gap-2 text-sm font-medium text-sidebar-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language === 'zh' ? 'Switch to English' : '切换为中文'}</span>
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
