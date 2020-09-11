import dbQuery from '../database';

export const playlistRepo = {
  async getPlaylists() {
    const query = 'SELECT * FROM playlists;';
    const result = await dbQuery(query, []).catch(error => error);
    return result;
  },

  async createPlaylist(title) {
    const query = 'INSERT INTO playlists (playlists.title) VALUES (?);';
      const result = await dbQuery(query, [title]).catch(error => error);
      return result;
  },

  async deletePlaylist(id) {
    const query = 'DELETE FROM playlists WHERE playlists.id = ? AND playlists.system = 0;';
      const result = await dbQuery(query, [id]).catch(error => error);
      return result;
  },
};
