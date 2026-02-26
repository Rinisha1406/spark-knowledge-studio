import { createRequire } from 'module';
import { readdirSync, statSync, copyFileSync } from 'fs';
import { join, basename } from 'path';

const require = createRequire(import.meta.url);
const sharp = require('sharp');
const fs = require('fs');

// Gallery images used in GallerySection.tsx
const galleryImages = [
    'abacus_practice.jpg',
    'achievement.jpg',
    'classroom_activities.jpg',
    'focused_study.jpg',
    'group_learning.jpg',
    'handwriting_class.jpg',
    'happy_learners.jpg',
    'hindi_class.jpg',
    'kids_at_play.jpg',
    'phonics_reading.jpg',
    'spoken_english_class.jpg',
    'vedic_maths_speed.jpg',
];

const assetsDir = './src/assets';
const backupDir = './src/assets/originals_backup';

// Create backup directory
if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
}

let totalBefore = 0;
let totalAfter = 0;

for (const filename of galleryImages) {
    const srcPath = join(assetsDir, filename);
    const backupPath = join(backupDir, filename);

    if (!fs.existsSync(srcPath)) {
        console.log(`⚠️  Not found: ${filename}`);
        continue;
    }

    const sizeBefore = statSync(srcPath).size;
    totalBefore += sizeBefore;

    // Backup original if not already backed up
    if (!fs.existsSync(backupPath)) {
        copyFileSync(srcPath, backupPath);
    }

    // Compress: resize to max 1280px wide, quality 80
    const tmpPath = srcPath + '.tmp.jpg';
    await sharp(backupPath)
        .resize({ width: 1280, withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toFile(tmpPath);

    // Replace original with compressed version
    fs.renameSync(tmpPath, srcPath);

    const sizeAfter = statSync(srcPath).size;
    totalAfter += sizeAfter;

    const reduction = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
    console.log(
        `✅ ${filename.padEnd(30)} ${(sizeBefore / 1024).toFixed(0).padStart(8)} KB → ${(sizeAfter / 1024).toFixed(0).padStart(6)} KB  (${reduction}% saved)`
    );
}

console.log('');
console.log(`📦 Total before : ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
console.log(`📦 Total after  : ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
console.log(`💾 Space saved  : ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)} MB`);
console.log('');
console.log('Originals backed up to: src/assets/originals_backup/');
