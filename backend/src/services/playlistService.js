import { playlistRepo } from '../repositories';
import { tracklistParser } from '../utils/musicParser';

export const playlistService = {
  async getPlaylists() {
    return await playlistRepo.getPlaylists();
  },

  async createPlaylist(title) {
    const result = await playlistRepo.createPlaylist(title);
    return result;
  },

  async deletePlaylist(id) {
    const result = await playlistRepo.deletePlaylist(id);
    return result;
  },

  async getPlaylistWithTracks(playlistId) {
    try {
      const tracks = await playlistRepo.getPlaylistWithTracks(playlistId);
      const response = await tracklistParser(tracks);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  
};
