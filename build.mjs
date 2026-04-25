import * as esbuild from 'esbuild';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const watch = process.argv.includes('--watch');
const srcDir = 'devnest';
const outDir = 'dist/devnest';

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const pagesDir = join(srcDir, 'pages');
const pagesOutDir = join(outDir, 'pages');
if (!existsSync(pagesOutDir)) mkdirSync(pagesOutDir, { recursive: true });

const entries = [
  ...readdirSync(srcDir).filter((f) => f.endsWith('.jsx')).map((f) => join(srcDir, f)),
  ...readdirSync(pagesDir).filter((f) => f.endsWith('.jsx')).map((f) => join(pagesDir, f)),
];

const opts = {
  entryPoints: entries,
  outdir: outDir,
  outbase: srcDir,
  bundle: false,
  minify: true,
  loader: { '.jsx': 'jsx' },
  jsx: 'transform',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  target: ['es2019'],
  sourcemap: false,
  logLevel: 'info',
  banner: { js: '(()=>{' },
  footer: { js: '})();' },
};

if (watch) {
  const ctx = await esbuild.context(opts);
  await ctx.watch();
  console.log('esbuild watching...');
} else {
  await esbuild.build(opts);
  console.log('esbuild done');
}
