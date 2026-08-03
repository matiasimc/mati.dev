// build-config.js
// Runs during Netlify build to inject GOOGLE_CLIENT_ID environment variable into config.js
const fs = require('fs');
const path = require('path');

const clientId = process.env.GOOGLE_CLIENT_ID || '';

const configContent = `// Auto-generated during Netlify build from GOOGLE_CLIENT_ID env variable
window.ENV = {
  GOOGLE_CLIENT_ID: '${clientId}'
};
`;

// Target pointz/config.js if pointz directory exists, otherwise web/config.js or config.js
let targetDir = __dirname;
if (fs.existsSync(path.join(__dirname, 'pointz'))) {
  targetDir = path.join(__dirname, 'pointz');
} else if (fs.existsSync(path.join(__dirname, 'web'))) {
  targetDir = path.join(__dirname, 'web');
}

const targetPath = path.join(targetDir, 'config.js');
fs.writeFileSync(targetPath, configContent, 'utf8');
console.log(`✅ Netlify Build: Successfully generated config.js at ${targetPath}`);
