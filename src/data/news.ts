export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  image_url: string;
  category: 'company' | 'industry';
  publish_date: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 5,
    title: '工业4.0推动精密传动部件需求增长',
    summary: '随着工业4.0和智能制造的深入推进，市场对高精度传动部件的需求持续增长，行业迎来新一轮发展机遇。',
    content: '随着工业4.0和智能制造的深入推进，市场对高精度传动部件的需求持续增长，行业迎来新一轮发展机遇。家和传动作为行业领先企业，正积极布局智能化生产线，提升产品精度与产能。',
    image_url: 'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_827cd6b9-adf7-4d08-ab4c-8b8757996deb.jpg',
    category: 'industry',
    publish_date: '2024-10-15',
  },
  {
    id: 4,
    title: '家和传动参加2024中国国际工业博览会',
    summary: '家和传动科技有限公司携最新研发的精密传动部件亮相2024中国国际工业博览会，展示了公司在直线导轨和滚珠螺杆领域的最新技术成果。',
    content: '家和传动科技有限公司携最新研发的精密传动部件亮相2024中国国际工业博览会，展示了公司在直线导轨和滚珠螺杆领域的最新技术成果。展会期间，公司展台吸引了众多国内外客户的关注，现场洽谈气氛热烈。',
    image_url: 'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_1db0cf6f-054f-4b72-9413-29bf35c62e26.jpg',
    category: 'company',
    publish_date: '2024-09-20',
  },
  {
    id: 2,
    title: '直线导轨横截面比平面导轨复杂',
    summary: '作为导向的导轨为淬硬钢，经精磨后置于安装平面上。与平面导轨比较，直线导轨横截面的几何形状，比平面导轨复杂。',
    content: '作为导向的导轨为淬硬钢，经精磨后置于安装平面上。与平面导轨比较，直线导轨横截面的几何形状，比平面导轨复杂，复杂的原因是因为导轨上需要加工出沟槽，以利于滚动元件的运动。',
    image_url: 'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_ae80dc9f-88ba-4121-81a3-640cfad9c711.jpg',
    category: 'industry',
    publish_date: '2019-03-03',
  },
  {
    id: 3,
    title: '直线导轨的工作原理介绍',
    summary: '直线导轨的移动元件和固定元件之间不用中间介质，而用滚动钢球。因为滚动钢球适应于高速运动、摩擦系数小、灵敏度高，满足运动部件的工作要求。',
    content: '直线导轨的移动元件和固定元件之间不用中间介质，而用滚动钢球。因为滚动钢球适应于高速运动、摩擦系数小、灵敏度高，满足运动部件的工作要求。滚动钢球在导轨和滑块之间的循环运动，实现了高精度的直线运动。',
    image_url: 'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_dbbc4d2f-f452-493b-b33d-6a0748183ae5.jpg',
    category: 'industry',
    publish_date: '2019-03-03',
  },
  {
    id: 1,
    title: '丽水家和官网正式上线，欢迎访问！',
    summary: '丽水市家和自动化技术有限公司，始创于二十一世纪初，专注直线传动行业十多年。时至今日，丽水家和已成为一家集研发、生产、销售、贸易于一体的现代化企业。',
    content: '丽水市家和自动化技术有限公司，始创于二十一世纪初，专注直线传动行业十多年。时至今日，丽水家和已成为一家集研发、生产、销售、贸易于一体的现代化企业。公司秉承"品质第一、客户至上"的经营理念，致力于为客户提供高品质的传动功能部件。',
    image_url: 'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_63063d18-a680-4d37-8d1a-0e8f5bf1d5eb.jpg',
    category: 'company',
    publish_date: '2009-08-18',
  },
];
