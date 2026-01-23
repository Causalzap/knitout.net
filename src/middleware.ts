// src/middleware.ts
import type { APIContext, MiddlewareNext } from 'astro';

export async function onRequest(context: APIContext, next: MiddlewareNext) {
  const url = new URL(context.request.url);

  // =================================================
  // 1. 拦截 Knit Out 旧链接 (/level-detail.html)
  // =================================================
  if (url.pathname === "/level-detail.html") {
    const id = url.searchParams.get("id");
    
    // 如果有 ID，301 重定向到新关卡页
    if (id) {
      return context.redirect(`/level/${id}`, 301);
    }
    // 没有 ID，301 重定向到列表页
    return context.redirect("/levels", 301);
  }

  // =================================================
  // 2. 拦截 Cookingdom 旧链接
  // =================================================
  if (url.pathname === "/level-detail-cookingdom.html") {
    const id = url.searchParams.get("id");
    
    if (id) {
      return context.redirect(`/cookingdom/level/${id}`, 301);
    }
    return context.redirect("/cookingdom/levels", 301);
  }

  // =================================================
  // 3. 放行其他请求 (必须调用 next)
  // =================================================
  return next();
}