import { Suspense } from "react";
import { ViewSwitcher } from "@/components/ViewSwitcher";

/** 静态导出时需声明要生成的路径 */
export function generateStaticParams() {
  return [{ slug: undefined }, { slug: ["detail"] }];
}

/**
 * 可选 catch-all：/ 与 /detail 均由本页处理，首页与详情双视图常驻 DOM，仅切换显示，避免返回时图片二次加载。
 * ViewSwitcher 内使用 useSearchParams（详情页侧栏高亮来源 section），需包在 Suspense 中。
 */
export default function CatchAllPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-white text-black">Loading...</div>}>
      <ViewSwitcher />
    </Suspense>
  );
}
