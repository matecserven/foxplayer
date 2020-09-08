import dbQuery from '../database';

export const playlistRepo = {
  async getPlaylists() {
    const query = 'SELECT * FROM playlists;';
    const result = await dbQuery(query, []);
    return result;
  },

  async createPlaylist(title) {
    const query = 'INSERT INTO playlists (title) VALUES (?);';
    try {
      const result = await dbQuery(query, [title]);
      return result;
    } catch (err) {
      return err;
    }
  }
};
