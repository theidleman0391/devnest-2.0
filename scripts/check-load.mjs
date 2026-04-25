import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
const errors = [];
const failed = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
page.on('requestfailed', (r) => failed.push(r.url() + ' ' + r.failure()?.errorText));
page.on('response', (r) => { if (r.status() >= 400) failed.push(r.status() + ' ' + r.url()); });

const pages = ['index.html', 'precios.html', 'portafolio.html', 'servicios.html', 'proceso.html', 'privacidad.html', 'terminos.html'];
for (const p of pages) {
  errors.length = 0; failed.length = 0;
  await page.goto('http://127.0.0.1:5500/' + p, { waitUntil: 'networkidle0', timeout: 15000 });
  const len = await page.$eval('#root', (el) => el.innerHTML.length);
  console.log(p, 'root=', len, 'errs=', errors.length, 'fail=', failed.length);
  if (errors.length) console.log('  ', errors.slice(0, 3));
  if (failed.length) console.log('  ', failed.slice(0, 3));
}
await browser.close();
