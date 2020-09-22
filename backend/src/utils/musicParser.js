import fs from 'fs';
import { appDir } from './config';
import musicMeta from 'musicmetadata';

export const musicParser = (filePath) =>
  new Promise((resolve, reject) => {
    try {
      const readStream = fs.createReadStream(`${appDir}/static/tracks/${filePath}`);
      musicMeta(readStream, { duration: true }, (err, metadata) => {
        if (err) {
          console.log('Music parser err', err);
          throw { err };
        }
        resolve(metadata);
        readStream.close();
      })
    } catch (error) {
      reject(error);
    }
  });

export const tracklistParser = (listOfTracks) => {
  return Promise.all(listOfTracks.map(async (track) => {
    const trackMeta = await musicParser(track.path);
    const trackObj = {
      id: track.id,
      title: trackMeta.title,
      artist: trackMeta.artist[0],
      duration: trackMeta.duration
    }
    return trackObj;
  }));
}
