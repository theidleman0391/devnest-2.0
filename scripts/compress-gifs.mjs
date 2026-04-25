import ffmpegPath from 'ffmpeg-static';
import { execFileSync } from 'child_process';
import { mkdirSync, existsSync, statSync } from 'fs';
import { join } from 'path';

const outDir = 'dist/assets';
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const gifs = [
  { in: 'temp/gif1.gif', out: 'feature1', width: 540 },
  { in: 'temp/gif2.gif', out: 'feature2', width: 540 },
];

for (const g of gifs) {
  if (!existsSync(g.in)) { console.log('skip', g.in); continue; }
  const webp = join(outDir, `${g.out}.webp`);
  execFileSync(ffmpegPath, [
    '-y', '-i', g.in,
    '-vf', `scale=${g.width}:-2,fps=12`,
    '-c:v', 'libwebp_anim',
    '-lossless', '0',
    '-q:v', '50',
    '-loop', '0',
    '-preset', 'picture',
    '-an', '-vsync', '0',
    webp,
  ], { stdio: 'inherit' });
  console.log(`gif → ${webp} (${(statSync(webp).size / 1024).toFixed(1)} KB)`);
}
