# 家和自动化官网部署说明

## 一、部署前准备

1. 确保已有自己的域名（如 `www.jhbbearing.com`）并已解析到服务器。
2. 准备一台可以访问互联网的 Linux 服务器（推荐 Ubuntu 22.04 LTS）。
3. 在服务器上安装 Nginx：
   ```bash
   sudo apt update
   sudo apt install nginx
   ```
4. 准备 SSL 证书（推荐使用 Let's Encrypt / Certbot 免费证书）。

## 二、修改配置

在此文件夹中需要替换域名的地方：

1. `nginx.conf`
   - 将 `www.jhbbearing.com` 和 `jhbbearing.com` 替换为你的实际域名。
   - 将 `/var/www/jhbbearing/dist` 替换为你的实际部署路径。
   - 如需 HTTPS，取消 HTTPS 服务块的注释，并填入证书路径。

2. `../public/robots.txt`
   - 将 `https://www.jhbbearing.com/sitemap.xml` 替换为你的实际域名地址。

3. `../public/sitemap.xml`
   - 将 `https://www.jhbbearing.com` 替换为你的实际域名。
   - 如有新增或删除页面，及时更新 `<url>` 节点。

## 三、构建项目

在项目根目录执行：

```bash
npm run build
```

构建完成后，会在项目根目录下生成 `dist/` 文件夹。

## 四、部署到服务器

### 方式一：手动上传

```bash
# 将本地 dist 上传到服务器（修改为你的服务器 IP 和路径）
scp -r dist root@your-server-ip:/var/www/jhbbearing/
```

### 方式二：CI/CD 自动部署

可以配合 GitHub Actions / GitLab CI 在代码推送后自动构建并部署到服务器。

## 五、配置 Nginx

1. 将 `nginx.conf` 复制到 Nginx 配置目录：
   ```bash
   sudo cp deploy/nginx.conf /etc/nginx/sites-available/jhbbearing
   sudo ln -s /etc/nginx/sites-available/jhbbearing /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

2. 如使用 Let's Encrypt 证书，运行：
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d www.jhbbearing.com -d jhbbearing.com
   ```

## 六、提交搜索引擎收录

### 百度
1. 访问 https://ziyuan.baidu.com 
2. 添加网站（使用域名或站点验证）。
3. 在「网站支持 → sitemap」中提交：`https://www.jhbbearing.com/sitemap.xml`。
4. 在「快速收录 → 链接提交」中提交首页和重要产品页面。

### Google
1. 访问 https://search.google.com/search-console 
2. 添加属性（域名验证推荐）。
3. 在「Sitemaps」中提交：`https://www.jhbbearing.com/sitemap.xml`。
4. 等待 Google 爬虫自然抓取。

### Bing
1. 访问 https://www.bing.com/webmasters 
2. 添加站点并验证。
3. 提交 sitemap。

## 七、部署后验证

1. 访问域名首页，确认页面正常显示。
2. 检查源代码 `<title>` 和 `<meta name="description">` 是否正确。
3. 访问 `https://www.jhbbearing.com/sitemap.xml` 确认 sitemap 可访问。
4. 访问 `https://www.jhbbearing.com/robots.txt` 确认 robots.txt 可访问。
