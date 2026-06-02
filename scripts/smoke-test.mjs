import { readFileSync, existsSync } from 'node:fs';

const required = [
  'index.html',
  'assets/styles.css',
  'assets/app.js',
  'src/project-manifest.ts',
  'project.json',
  'README.md'
];

for (const file of required) {
  if (!existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const html = readFileSync('index.html', 'utf8');
if (!html.includes('assets/styles.css') || !html.includes('assets/app.js')) {
  throw new Error('index.html must reference external CSS and JavaScript assets.');
}
if (/<style[\s>]/i.test(html) || /<script>\s*[\s\S]*?\s*<\/script>/i.test(html)) {
  throw new Error('index.html should not contain inline style or script blocks.');
}

const app = readFileSync('assets/app.js', 'utf8');
new Function(app);

const css = readFileSync('assets/styles.css', 'utf8');
if (!css.includes('Professional polish layer')) {
  throw new Error('Professional polish CSS layer is missing.');
}

console.log('Smoke test passed.');
