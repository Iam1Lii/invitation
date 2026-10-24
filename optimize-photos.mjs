// Usage: put original photos in photos-src/, run `npm run photos`.
// Makes WebP at 640/1280/2000 px, strips EXIF/GPS, writes public/img/webp/ and gallery.json.
import sharp from 'sharp'; import fs from 'fs'; import path from 'path';
const src='photos-src', out='public/img/webp'; fs.mkdirSync(out,{recursive:true});
const list=[];
for (const f of fs.readdirSync(src).filter(f=>/\.(jpe?g|png)$/i.test(f)).sort()) {
  const base=path.parse(f).name.replace(/\s+/g,'-');
  for (const w of [640,1280,2000]) await sharp(path.join(src,f)).rotate().resize({width:w,withoutEnlargement:true}).webp({quality:78}).toFile(`${out}/${base}-${w}.webp`);
  list.push(base);
}
fs.writeFileSync('public/img/webp/gallery.json', JSON.stringify(list,null,2));
console.log('Done:', list.length, 'photos');
