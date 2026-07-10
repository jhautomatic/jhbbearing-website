import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { Shield, Cog, FlaskConical, Microscope, Wrench, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const equipmentKeys = [
  'equip_1',
  'equip_2',
  'equip_3',
  'equip_4',
  'equip_5',
  'equip_6',
];
const equipmentImages = [
  'https://www.shacmotion.com/uploadfile/2019/0303/thumb_800_450_20190303063416336.jpg',
  'https://www.shacmotion.com/uploadfile/2019/0303/thumb_800_450_20190303063402217.jpg',
  'https://www.shacmotion.com/uploadfile/2019/0303/thumb_800_450_20190303063342541.jpg',
  'https://www.shacmotion.com/uploadfile/2019/0303/thumb_800_450_20190303063313405.jpg',
  'https://www.shacmotion.com/uploadfile/2019/0303/thumb_800_450_20190303063254769.jpg',
  'https://www.shacmotion.com/uploadfile/2019/0303/thumb_800_450_20190303063231691.jpg',
];

export default function QualityPage() {
  const { t } = useTranslation();

  const qualities = [
    { icon: Shield, title: t('quality_cert_iso'), desc: t('quality_cert_iso_desc') },
    { icon: Cog, title: t('quality_cert_precise'), desc: t('quality_cert_precise_desc') },
    { icon: Microscope, title: t('quality_cert_equipment'), desc: t('quality_cert_equipment_desc') },
    { icon: FlaskConical, title: t('quality_cert_material'), desc: t('quality_cert_material_desc') },
    { icon: Wrench, title: t('quality_cert_reliability'), desc: t('quality_cert_reliability_desc') },
    { icon: CheckCircle, title: t('quality_cert_trace'), desc: t('quality_cert_trace_desc') },
  ];

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_quality_title')}
        description={t('seo_quality_desc')}
      />
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <p className="text-primary-foreground/70 text-sm mb-1">{t('quality_subtitle')}</p>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('quality_title')}
          </h1>
        </div>
      </div>

      {/* 品质理念 */}
      <section className="py-16 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-1 font-medium tracking-widest uppercase">
              {t('quality_philosophy_label')}
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1 text-balance">
              {t('quality_philosophy_heading')}
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-4">
              <p className="text-pretty">
                {t('quality_philosophy_p1')}
              </p>
              <p className="text-pretty">
                {t('quality_philosophy_p2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 检测设备 */}
      <section className="py-16 bg-card">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <p className="text-sm text-muted-foreground mb-1 font-medium tracking-widest uppercase">
              {t('quality_equipment_label')}
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 text-balance">
              {t('quality_equipment_label')}
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {equipmentKeys.map((key, idx) => (
              <Card key={key} className="group overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={equipmentImages[idx]}
                    alt={t(key)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-3 text-center">
                  <p className="text-sm font-medium text-foreground text-balance">{t(key)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 质量保证措施 */}
      <section className="py-16 bg-card">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <p className="text-sm text-muted-foreground mb-1 font-medium tracking-widest uppercase">
              {t('quality_measures_label')}
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 text-balance">
              {t('quality_measures_label')}
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((q) => {
              const Icon = q.icon;
              return (
                <Card key={q.title} className="h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-balance">{q.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{q.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 荣誉资质 */}
      <section className="py-16 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <p className="text-sm text-muted-foreground mb-1 font-medium tracking-widest uppercase">
              {t('quality_certs_label')}
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 text-balance">
              {t('about_cert_title')}
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ISO 9001:2015', 'SGS Certified', 'Patent Certificates', 'High-Tech Enterprise'].map((cert) => (
              <Card key={cert}>
                <CardContent className="p-6 text-center">
                  <div className="aspect-[3/4] bg-muted rounded mb-3 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_c79d8ccb-fee1-4f31-8811-4925042012f0.jpg"
                      alt={cert}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <p className="text-sm font-medium text-foreground text-balance">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
