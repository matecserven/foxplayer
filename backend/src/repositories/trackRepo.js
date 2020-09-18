import dbQuery from '../database';

export const trackRepo = {
  async getAllTracks() {
    const query = 'SELECT * FROM tracks;';
    return await dbQuery(query, []);
  },

  async getTrackById(trackId) {
    const query = 'SELECT * FROM tracks WHERE tracks.id = ?;';
    return await dbQuery(query, [trackId]);
  },

  async addTrack(path) {
    const query = 'INSERT INTO tracks (path) VALUES (?);';
    return await dbQuery(query, [path]);
  },

  async addTrackToPlaylist(playlistId, trackId) {
    const query = 'INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (?, ?);';
    return await dbQuery(query, [playlistId, trackId]);
  },

  async deleteTrackFromPlaylist(playlistId, trackId) {
    const query = 'DELETE FROM playlists_tracks WHERE playlist_id = ? AND trackId = ?;';
    return await dbQuery(query, [playlistId, trackId]);
  }
}
