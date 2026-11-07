import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Replace with your actual live Vercel portfolio URL
const portfolioUrl = 'https://my-personal-portfolio-mpz5.vercel.app/';
const outputPath = path.join(__dirname, 'portfolio-qr.png');

// Generate a high-resolution PNG image suitable for printing
QRCode.toFile(outputPath, portfolioUrl, {
  color: {
    dark: '#000000',  // QR code dots color (Black)
    light: '#ffffff'  // Background color (White)
  },
  width: 1000 // High pixel width so it doesn't blur when printed
}, (err) => {
  if (err) throw err;
  console.log('\n✅ Success! QR code image generated.');
  console.log(`📁 Saved to your project folder as: portfolio-qr.png`);
  console.log(`🔗 Direct Link: ${portfolioUrl}\n`);
});