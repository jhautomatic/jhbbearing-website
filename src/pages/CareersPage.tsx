import MainLayout from '@/components/layouts/MainLayout';
import { useTranslation } from '@/data/i18n';
import PageMeta from '@/components/common/PageMeta';
import { MapPin, Clock, DollarSign, GraduationCap, Briefcase, Send, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const jobs = [
  { title: '机械设计工程师', dept: '研发部', location: '丽水', salary: '面议', education: '本科及以上', experience: '2年以上', tags: ['机械设计', 'CAD', 'SolidWorks'] },
  { title: '生产主管', dept: '生产部', location: '丽水', salary: '面议', education: '大专及以上', experience: '5年以上', tags: ['生产管理', '质量管控'] },
  { title: '质检工程师', dept: '品质部', location: '丽水', salary: '面议', education: '大专及以上', experience: '2年以上', tags: ['品质检测', '仪器操作'] },
  { title: '外贸业务员', dept: '国际部', location: '丽水', salary: '面议', education: '大专及以上', experience: '1年以上', tags: ['外贸', '英语', '国际贸易'] },
  { title: '行政专员', dept: '行政部', location: '丽水', salary: '面议', education: '大专及以上', experience: '1年以上', tags: ['行政管理', '人事'] },
];

export default function CareersPage() {
  const { t } = useTranslation();
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [resumeForm, setResumeForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeForm.name.trim() || !resumeForm.phone.trim()) {
      toast.error(t('hr_required'));
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(t('hr_submit_success'));
      setResumeForm({ name: '', phone: '', email: '', message: '' });
      setSelectedJob(null);
    } catch {
      toast.error(t('hr_submit_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <MainLayout>
      <PageMeta
        title={t('seo_careers_title')}
        description={t('seo_careers_desc')}
      />
      <div className="bg-primary py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground text-balance">
            {t('careers_title')}
          </h1>
          <p className="text-primary-foreground/70 mt-2">{t('careers_subtitle')}</p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          {/* 企业文化 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: GraduationCap, title: t('hr_culture_training'), desc: t('hr_culture_training_desc') },
              { icon: DollarSign, title: t('hr_culture_benefits'), desc: t('hr_culture_benefits_desc') },
              { icon: Briefcase, title: t('hr_culture_team'), desc: t('hr_culture_team_desc') },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              );
            })}
          </div>

          {/* 招聘信息 */}
          <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />
            {t('hr_positions_title')}
          </h2>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setSelectedJob(selectedJob === index ? null : index)}
                  className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 hover:bg-muted/30 transition-colors text-left"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{job.title}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{job.dept}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{job.salary}</span>
                      <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" />{job.education}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.experience}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${selectedJob === index ? 'rotate-90' : ''}`} />
                </button>

                {selectedJob === index && (
                  <div className="border-t border-border p-5">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">{t('hr_position_label')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <form onSubmit={handleApply} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={resumeForm.name}
                        onChange={(e) => setResumeForm({ ...resumeForm, name: e.target.value })}
                        placeholder={`${t('hr_name_label')} *`}
                        className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                      <input
                        type="text"
                        value={resumeForm.phone}
                        onChange={(e) => setResumeForm({ ...resumeForm, phone: e.target.value })}
                        placeholder={`${t('hr_phone_label')} *`}
                        className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                      <input
                        type="email"
                        value={resumeForm.email}
                        onChange={(e) => setResumeForm({ ...resumeForm, email: e.target.value })}
                        placeholder={t('hr_email_label')}
                        className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                      <div className="md:col-span-2">
                        <Button type="submit" size="sm" disabled={isSubmitting}>
                          <Send className="w-3.5 h-3.5 mr-1" />
                          {t('hr_apply_title')}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
