// functions/_middleware.js

export async function onRequest(context) {
    const url = new URL(context.request.url);
  
    // 1. 处理 Knit Out 关卡详情页
    // 旧: /level-detail.html?id=103
    // 新: /level/103
    if (url.pathname === "/level-detail.html") {
      const id = url.searchParams.get("id");
      if (id) {
        // 构造新地址，301 永久重定向
        return Response.redirect(`${url.origin}/level/${id}`, 301);
      }
      // 如果没有 id，就跳到列表页
      return Response.redirect(`${url.origin}/levels`, 301);
    }
  
    // 2. 处理 Cookingdom 关卡详情页
    // 旧: /level-detail-cookingdom.html?id=95
    // 新: /cookingdom/level/95
    if (url.pathname === "/level-detail-cookingdom.html") {
      const id = url.searchParams.get("id");
      if (id) {
        return Response.redirect(`${url.origin}/cookingdom/level/${id}`, 301);
      }
      return Response.redirect(`${url.origin}/cookingdom/levels`, 301);
    }
  
    // 如果不是以上情况，继续执行正常的请求
    return context.next();
  }