// One-off image optimization pass. Run with: node scripts/optimize-images.mjs
// Requires `sharp` (and `png-to-ico` for the favicon) — install with:
//   npm install --no-save sharp png-to-ico
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const asset = (...p) => path.join(root, "src", "assets", ...p);
const pub = (...p) => path.join(root, "public", ...p);

const size = async (p) => {
  try {
    const s = await stat(p);
    return s.size;
  } catch {
    return 0;
  }
};

const report = async (label, before, after) => {
  const b = await size(before);
  const a = await size(after);
  console.log(
    `${label}: ${(b / 1024).toFixed(0)}KB -> ${(a / 1024).toFixed(0)}KB (${(100 - (a / b) * 100).toFixed(0)}% smaller)`
  );
};

// --- Oversized content JPGs: resize to a sane max width, re-encode ---
const contentImages = [
  { file: asset("oil-colors.jpg"), maxWidth: 1600, quality: 78 },
  { file: asset("solvent-dyes.jpg"), maxWidth: 1600, quality: 78 },
  { file: asset("PigmentDyes.jpg"), maxWidth: 1600, quality: 78 },
  { file: asset("DischargeDyes.jpg"), maxWidth: 1600, quality: 78 },
  { file: asset("TextileProcessing.jpg"), maxWidth: 1600, quality: 78 },
  { file: asset("FluorescentDyes.jpg"), maxWidth: 1600, quality: 78 },
];

for (const { file, maxWidth, quality } of contentImages) {
  const before = await size(file);
  const buffer = await sharp(file)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toBuffer();
  await writeFile(file, buffer);
  const after = buffer.length;
  console.log(
    `${path.basename(file)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (${(100 - (after / before) * 100).toFixed(0)}% smaller)`
  );
}

// --- Logo: shrink + recompress for the JSON-LD `logo` reference ---
{
  const src = pub("logo.png");
  const before = await size(src);
  const buffer = await sharp(src)
    .resize({ width: 512, height: 512, fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ quality: 85, compressionLevel: 9 })
    .toBuffer();
  await writeFile(src, buffer);
  console.log(`logo.png: ${(before / 1024).toFixed(0)}KB -> ${(buffer.length / 1024).toFixed(0)}KB`);
}

// --- Favicons, generated from the navbar logo mark ---
const navLogo = pub("lovable-uploads", "20f50eae-d19f-4dcb-949b-a5e4ef9f76aa.png");

const favicons = [
  { out: pub("favicon-16x16.png"), size: 16 },
  { out: pub("favicon-32x32.png"), size: 32 },
  { out: pub("apple-touch-icon.png"), size: 180 },
  { out: pub("android-chrome-192x192.png"), size: 192 },
  { out: pub("android-chrome-512x512.png"), size: 512 },
];

for (const { out, size: s } of favicons) {
  await sharp(navLogo)
    .resize(s, s, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(out);
  console.log(`generated ${path.basename(out)} (${s}x${s})`);
}

// --- favicon.ico: proper small multi-size ICO instead of the 156KB placeholder ---
{
  const icoBuffer = await pngToIco([pub("favicon-16x16.png"), pub("favicon-32x32.png")]);
  const before = await size(pub("favicon.ico"));
  await writeFile(pub("favicon.ico"), icoBuffer);
  console.log(`favicon.ico: ${(before / 1024).toFixed(0)}KB -> ${(icoBuffer.length / 1024).toFixed(0)}KB`);
}

console.log("\nDone.");
