import fs from 'fs';
import musicMeta from 'musicmetadata';

export const musicParser = (path) =>
  new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(path);
    musicMeta(readStream, { duration: true }, (err, metadata) => {
      if (err) {
        console.log('Music parser err', err);
        reject('Music parser err');
      }
      resolve(metadata);
      readStream.close();
    })
  })

