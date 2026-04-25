import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';
import { execFileSync } from 'child_process';
import { mkdirSync, existsSync, statSync } from 'fs';
import { join } from 'path';

const outDir = 'dist/assets';
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

// ── Images ───────────────────────────────────────────
const images = [
  { in: 'logo.png', outBase: 'logo', width: 112 }, // 2× of 56px render
];

for (const img of images) {
  if (!existsSync(img.in)) continue;
  const webp = join(outDir, `${img.outBase}.webp`);
  const avif = join(outDir, `${img.outBase}.avif`);
  await sharp(img.in).resize(img.width).webp({ quality: 82 }).toFile(webp);
  await sharp(img.in).resize(img.width).avif({ quality: 60 }).toFile(avif);
  console.log(`img → ${webp} (${statSync(webp).size} B)`);
  console.log(`img → ${avif} (${statSync(avif).size} B)`);
}

// ── Videos ───────────────────────────────────────────
const videos = [
  { in: 'stripe1.mp4', out: 'stripe1', width: 1280, crf: 30, fps: 24 },
  { in: 'stripe2.mp4', out: 'stripe2', width: 1280, crf: 30, fps: 24 },
];

for (const v of videos) {
  if (!existsSync(v.in)) continue;
  const mp4Out = join(outDir, `${v.out}.mp4`);
  const webmOut = join(outDir, `${v.out}.webm`);
  const posterOut = join(outDir, `${v.out}-poster.webp`);

  // H.264 mp4 — broad support
  execFileSync(ffmpegPath, [
    '-y', '-i', v.in,
    '-vf', `scale=${v.width}:-2,fps=${v.fps}`,
    '-c:v', 'libx264', '-crf', String(v.crf), '-preset', 'slow',
    '-movflags', '+faststart', '-an',
    mp4Out,
  ], { stdio: 'inherit' });

  // VP9 webm — smaller for Chromium
  execFileSync(ffmpegPath, [
    '-y', '-i', v.in,
    '-vf', `scale=${v.width}:-2,fps=${v.fps}`,
    '-c:v', 'libvpx-vp9', '-crf', '35', '-b:v', '0', '-an',
    webmOut,
  ], { stdio: 'inherit' });

  // Poster (first frame)
  execFileSync(ffmpegPath, [
    '-y', '-i', v.in,
    '-vf', `scale=${v.width}:-2`, '-frames:v', '1',
    posterOut.replace('.webp', '.png'),
  ], { stdio: 'inherit' });
  await sharp(posterOut.replace('.webp', '.png')).webp({ quality: 70 }).toFile(posterOut);

  console.log(`video → ${mp4Out} (${statSync(mp4Out).size} B)`);
  console.log(`video → ${webmOut} (${statSync(webmOut).size} B)`);
}

console.log('compression done');
