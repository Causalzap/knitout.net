import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// 1. 引入 Cloudflare 适配器
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.knitout.net',
  
  // 2. 显式设置为 'server' 或 'hybrid' (根据报错来看，你可能需要这个)
  // 如果你本来就是想做纯静态网站，也可以试试改成 'static'，那样就不需要适配器了。
  // 但为了兼容性，建议保留 server 模式并加上适配器。
  output: 'server', 

  trailingSlash: 'never',
  
  // 强制生成文件而不是文件夹 (这步最关键，能解决 cookingdom 的 308 问题)
  build: {
    format: 'file'
  },
  
  // 3. 添加适配器配置
  adapter: cloudflare({
    imageService: 'cloudflare', // 使用 Cloudflare 处理图片优化
  }),

  integrations: [sitemap()],
});