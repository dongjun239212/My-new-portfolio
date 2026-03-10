"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

type StaticImageData = { src: string; height: number; width: number };

/** 详情页图片：容器浅灰底，加载失败时整块改为更深的灰色，避免白块或裂图 */
export function DetailImage({
  src,
  alt = "",
  className,
  fill,
  priority,
}: {
  src: StaticImageData | string;
  alt?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const onError = useCallback(() => setFailed(true), []);

  if (failed) {
    return (
      <div
        className={fill ? `absolute inset-0 ${className ?? ""}` : className}
        style={{ backgroundColor: "#e5e5e5" }}
        aria-hidden
      />
    );
  }

  const wrapperClass = fill
    ? "absolute inset-0 bg-[#f5f5f5]"
    : "relative bg-[#f5f5f5]";

  return (
    <div className={wrapperClass}>
      <Image
        src={src}
        alt={alt}
        className={className}
        fill={fill}
        priority={priority}
        onError={onError}
        unoptimized
      />
    </div>
  );
}
