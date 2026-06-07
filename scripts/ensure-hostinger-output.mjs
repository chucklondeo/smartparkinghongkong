import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const distDir = join(root, "dist");
const indexFile = join(outDir, "index.html");

if (!existsSync(indexFile)) {
  const rootFiles = readdirSync(root).sort().join(", ");
  throw new Error(
    [
      "Hostinger output check failed: out/index.html was not generated.",
      "Expected Next.js static export output in the out/ directory.",
      `Repository root files: ${rootFiles}`,
    ].join("\n")
  );
}

rmSync(distDir, { recursive: true, force: true });
cpSync(outDir, distDir, { recursive: true });

console.log("Hostinger output ready: out/index.html");
console.log("Compatibility copy ready: dist/index.html");
