import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ProfilePage from './pages/ProfilePage';
import HistoryPage from './pages/HistoryPage';
import ProductionPage from './pages/ProductionPage';
import CertificatesPage from './pages/CertificatesPage';
import QualityPage from './pages/QualityPage';
import FaqPage from './pages/FaqPage';
import DownloadsPage from './pages/DownloadsPage';
import SoftwarePage from './pages/SoftwarePage';
import CalculatorPage from './pages/CalculatorPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import type { ReactNode } from 'react';

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  public?: boolean;
}

export const routes: RouteConfig[] = [
  { name: '首页', path: '/', element: <HomePage />, public: true },
  { name: '公司简介', path: '/about/profile', element: <ProfilePage />, public: true },
  { name: '发展历程', path: '/about/history', element: <HistoryPage />, public: true },
  { name: '生产基地', path: '/about/production', element: <ProductionPage />, public: true },
  { name: '荣誉资质', path: '/about/certificates', element: <CertificatesPage />, public: true },
  { name: '产品中心', path: '/products', element: <ProductsPage />, public: true },
  { name: '产品详情', path: '/products/:id', element: <ProductDetailPage />, public: true },
  { name: '质量体系', path: '/quality', element: <QualityPage />, public: true },
  { name: '常见问题', path: '/support/faq', element: <FaqPage />, public: true },
  { name: '技术资料', path: '/support/downloads', element: <DownloadsPage />, public: true },
  { name: '实用软件', path: '/support/software', element: <SoftwarePage />, public: true },
  { name: '在线计算', path: '/support/calculator', element: <CalculatorPage />, public: true },
  { name: '新闻资讯', path: '/news', element: <NewsPage />, public: true },
  { name: '新闻详情', path: '/news/:id', element: <NewsDetailPage />, public: true },
  { name: '人才招聘', path: '/hr', element: <CareersPage />, public: true },
  { name: '联系我们', path: '/contact', element: <ContactPage />, public: true },
  { name: '404', path: '*', element: <NotFound />, public: true },
];
