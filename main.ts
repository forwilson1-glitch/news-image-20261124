// Entry for make.fun news-image-20261124: "Sum up 24 November's world
// news in one image". Node 22, standard library only, no network.
//
// The picture was drawn ahead of time (flat vector style, built with a
// Python/PIL script in this session) and ships as entry.png beside this
// file. This program only places an exact copy of it where the grader
// reads it: /output/entry.png, or MAKEFUN_OUTPUT_DIR when that is set
// (the local stand-in for /output outside the grader's container).
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");
const source = join(here, "entry.png");

// The shipped image is a 1024x1024 PNG under 1 MiB. Refuse to run with
// anything else missing rather than writing a half-finished output.
// Copying bytes verbatim keeps both grader runs identical by construction.
if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, readFileSync(source));
