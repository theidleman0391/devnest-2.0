import { mkdirSync, copyFileSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';

const outDir = 'dist/fonts';
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const files = [
  // Barlow latin weights we use: 300,400,500,600 normal
  ['@fontsource/barlow/files/barlow-latin-300-normal.woff2', 'barlow-300.woff2'],
  ['@fontsource/barlow/files/barlow-latin-400-normal.woff2', 'barlow-400.woff2'],
  ['@fontsource/barlow/files/barlow-latin-500-normal.woff2', 'barlow-500.woff2'],
  ['@fontsource/barlow/files/barlow-latin-600-normal.woff2', 'barlow-600.woff2'],
  // Instrument Serif 400 normal + italic
  ['@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2', 'instrument-serif-400.woff2'],
  ['@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2', 'instrument-serif-400-italic.woff2'],
];

for (const [src, out] of files) {
  copyFileSync(join('node_modules', src), join(outDir, out));
}

const css = `
@font-face{font-family:'Barlow';font-style:normal;font-weight:300;font-display:swap;src:url('fonts/barlow-300.woff2') format('woff2')}
@font-face{font-family:'Barlow';font-style:normal;font-weight:400;font-display:swap;src:url('fonts/barlow-400.woff2') format('woff2')}
@font-face{font-family:'Barlow';font-style:normal;font-weight:500;font-display:swap;src:url('fonts/barlow-500.woff2') format('woff2')}
@font-face{font-family:'Barlow';font-style:normal;font-weight:600;font-display:swap;src:url('fonts/barlow-600.woff2') format('woff2')}
@font-face{font-family:'Instrument Serif';font-style:normal;font-weight:400;font-display:swap;src:url('fonts/instrument-serif-400.woff2') format('woff2')}
@font-face{font-family:'Instrument Serif';font-style:italic;font-weight:400;font-display:swap;src:url('fonts/instrument-serif-400-italic.woff2') format('woff2')}
`.trim();

writeFileSync('dist/fonts.css', css);
console.log('fonts copied + fonts.css written');
