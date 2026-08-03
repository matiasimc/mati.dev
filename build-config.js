// build-config.js
// Runs during Netlify build to inject GOOGLE_CLIENT_ID environment variable into public/pointz/config.js
const fs = require('fs');
const path = require('path');

const clientId = process.env.GOOGLE_CLIENT_ID || 
                 process.env.VITE_GOOGLE_CLIENT_ID || 
                 process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || 
                 process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

const configContent = `window.ENV = { GOOGLE_CLIENT_ID: '${clientId}' };\n`;

// Target public/pointz/config.js directly
const targetPath = path.join(__dirname, 'public', 'pointz', 'config.js');

// Ensure directory exists
fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, configContent, 'utf8');

console.log(`✅ Netlify Build: Generated config.js at ${targetPath} (Client ID: ${clientId ? 'LOADED' : 'MISSING'})`);
