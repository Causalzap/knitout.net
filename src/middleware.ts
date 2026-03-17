// src/middleware.ts
import type { APIContext, MiddlewareNext } from 'astro';

export async function onRequest(context: APIContext, next: MiddlewareNext) {
  const url = new URL(context.request.url);
  // 转为小写处理，防止因 /Level-Detail.html 等大小写问题导致拦截失效
  const pathname = url.pathname.toLowerCase();

  // =================================================
  // 1. 拦截 Sitemap 旧链接 (重要：统一 SEO 信号)
  // =================================================
  if (pathname === "/sitemap.xml") {
    // 强制跳转到新的索引地图
    return context.redirect("/sitemap-index.xml", 301);
  }

  // =================================================
  // 2. 拦截 Knit Out 旧链接 (/level-detail.html)
  // =================================================
  if (pathname === "/level-detail.html") {
    const id = url.searchParams.get("id");
    
    if (id) {
      // 301 重定向到新路径 /level/xxx
      return context.redirect(`/level/${id}`, 301);
    }
    return context.redirect("/levels", 301);
  }

  // =================================================
  // 3. 拦截 Cookingdom 旧链接
  // =================================================
  if (pathname === "/level-detail-cookingdom.html") {
    const id = url.searchParams.get("id");
    
    if (id) {
      return context.redirect(`/cookingdom/level/${id}`, 301);
    }
    return context.redirect("/cookingdom/levels", 301);
  }

  // =================================================
  // 4. 放行其他请求 (必须调用 next)
  // =================================================
  return next();
}