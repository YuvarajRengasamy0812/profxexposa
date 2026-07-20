const fs = require('fs');
const path = require('path');

const target = process.argv[2];

if (!target || !['development', 'production'].includes(target)) {
  console.error('Usage: node scripts/set-build-version.js <development|production>');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');
const envFile = path.join(rootDir, `.env.${target}.local`);
const buildVersion = new Date()
  .toISOString()
  .replace(/[-:]/g, '')
  .replace(/\..+/, '')
  .replace('T', '-');

const content = `REACT_APP_BUILD_VERSION=${buildVersion}\n`;

fs.writeFileSync(envFile, content, 'utf8');

console.log(`Build version set for ${target}: ${buildVersion}`);