/**
 * 本地 SVG 图标，替代 Google Material Symbols，避免国内加载 fonts.googleapis.com 慢/被墙
 */
const PATHS: Record<string, string> = {
  arrow_back:
    "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
  apps: "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0-6h4V4h-4v4z",
  psychology:
    "M13 3.08c3.88.5 7 3.98 7 8.42 0 2.12-.75 4.07-2 5.61V21c0 .55-.45 1-1 1h-4v-4h-2v4H7c-.55 0-1-.45-1-1v-4.89C3.75 15.57 3 13.62 3 11.5 3 7.06 6.12 3.58 10 3.08V2h2v1.08c.33-.05.66-.08 1-.08s.67.03 1 .08V2h2v1.08zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z",
  person:
    "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
};

type IconName = keyof typeof PATHS;

type Props = {
  name: IconName;
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};

export function Icon({ name, className = "", size = 24, "aria-hidden": ariaHidden }: Props) {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <span className={`inline-block shrink-0 select-none ${className}`} aria-hidden={ariaHidden}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        className="block"
      >
        <path d={path} />
      </svg>
    </span>
  );
}
