/**
 * 首页侧栏导航胶囊按钮样式，供 SidebarNav 与详情页「Back to homepage」等复用。
 */
export const SIDEBAR_NAV_LINK_BASE =
  "group flex items-center gap-2 rounded-full p-2.5 text-base font-semibold leading-[1.25] hover:bg-red-500/[0.06] hover:text-red-600";

export const SIDEBAR_NAV_LINK_DEFAULT = `${SIDEBAR_NAV_LINK_BASE} text-black/65`;
export const SIDEBAR_NAV_LINK_ACTIVE = `${SIDEBAR_NAV_LINK_BASE} text-red-600`;
