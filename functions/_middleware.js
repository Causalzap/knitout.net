// functions/_middleware.js

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // 1. 处理 Knit Out 关卡详情页
  if (url.pathname === "/level-detail.html") {
    const id = url.searchParams.get("id");
    if (id) {
      // 完美跳转: /level-detail.html?id=103 -> /level/103
      return Response.redirect(`${url.origin}/level/${id}`, 301);
    }
    return Response.redirect(`${url.origin}/levels`, 301);
  }

  // 2. 处理 Cookingdom 关卡详情页
  if (url.pathname === "/level-detail-cookingdom.html") {
    const id = url.searchParams.get("id");
    if (id) {
      // 完美跳转: /level-detail-cookingdom.html?id=95 -> /cookingdom/level/95
      return Response.redirect(`${url.origin}/cookingdom/level/${id}`, 301);
    }
    return Response.redirect(`${url.origin}/cookingdom/levels`, 301);
  }

  // 继续执行其他请求
  return context.next();
}