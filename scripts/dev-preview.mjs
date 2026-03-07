#!/usr/bin/env node
/**
 * 开发服务器预览：清理 lock、可选释放 3000 端口后启动 next dev
 * 基于排查结论：避免多实例/锁文件导致无法预览
 */
import { spawn } from "node:child_process";
import { rmSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd());
const lockPath = join(root, ".next", "dev", "lock");

if (existsSync(lockPath)) {
  try {
    rmSync(lockPath, { force: true });
    console.log("[dev:preview] 已清除 .next/dev/lock");
  } catch (e) {
    console.warn("[dev:preview] 清除 lock 失败:", e.message);
  }
}

const child = spawn("npx", ["next", "dev"], {
  cwd: root,
  stdio: "inherit",
  shell: false,
});

child.on("exit", (code) => process.exit(code ?? 0));
