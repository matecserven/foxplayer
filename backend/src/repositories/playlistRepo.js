import dbQuery from '../database';

export const playlistRepo = {
  async getPlaylists() {
    const query = 'SELECT * FROM playlists;';
    return await dbQuery(query, []);
  },

  async createPlaylist(title) {
    const query = 'INSERT INTO playlists (playlists.title) VALUES (?);';
    return await dbQuery(query, [title]);
  },

  async deletePlaylist(id) {
    const query = 'DELETE FROM playlists WHERE playlists.id = ? AND playlists.system = 0;';
    return await dbQuery(query, [id]);
  },
};
