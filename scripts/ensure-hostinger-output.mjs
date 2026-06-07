import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const distDir = join(root, "dist");
const indexFile = join(outDir, "index.html");

if (!existsSync(indexFile)) {
  synthesizeStaticOutput();
}

rmSync(distDir, { recursive: true, force: true });
cpSync(outDir, distDir, { recursive: true });

console.log("Hostinger output ready: out/index.html");
console.log("Compatibility copy ready: dist/index.html");

function synthesizeStaticOutput() {
  const serverAppDir = join(root, ".next", "server", "app");
  const nextStaticDir = join(root, ".next", "static");
  const publicDir = join(root, "public");
  const serverIndex = join(serverAppDir, "index.html");
  const serverNotFound = join(serverAppDir, "_not-found.html");
  const serverIndexRsc = join(serverAppDir, "index.rsc");

  if (!existsSync(serverIndex) || !existsSync(nextStaticDir)) {
    const rootFiles = readdirSync(root).sort().join(", ");
    throw new Error(
      [
        "Hostinger output check failed: out/index.html was not generated.",
        "Could not synthesize out/ because .next/server/app/index.html or .next/static is missing.",
        `Repository root files: ${rootFiles}`,
      ].join("\n")
    );
  }

  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  if (existsSync(publicDir)) {
    cpSync(publicDir, outDir, { recursive: true });
  }

  cpSync(serverIndex, join(outDir, "index.html"));
  cpSync(nextStaticDir, join(outDir, "_next", "static"), { recursive: true });

  if (existsSync(serverNotFound)) {
    cpSync(serverNotFound, join(outDir, "404.html"));
  }

  if (existsSync(serverIndexRsc)) {
    cpSync(serverIndexRsc, join(outDir, "index.txt"));
  }

  console.log("Hostinger output synthesized from .next/server/app");
}
