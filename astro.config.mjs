import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// 🔴 必须引入这两个 Node.js 内置模块来处理路径
import path from 'path';
import { fileURLToPath } from 'url';

// 🔴 在 ES Module (.mjs) 环境下，手动构造 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  site: 'https://www.knitout.net',
  
  // 使用 server 模式配合 Cloudflare 适配器
  output: 'server', 

  trailingSlash: 'never',
  
  // 强制生成文件而不是文件夹
  build: {
    format: 'file'
  },

  // ✅ 此时配置 Vite 别名，path 和 __dirname 就能完美生效了
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  
  adapter: cloudflare({
    imageService: 'cloudflare', 
  }),

  integrations: [sitemap()],
});