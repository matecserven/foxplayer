import dbQuery from '../database';

export const trackRepo = {
  async addTrack(path) {
    const query = 'INSERT INTO tracks (foxplayer.tracks) VALUES (?);';
    return await dbQuery(query, [path]);
  }
}
