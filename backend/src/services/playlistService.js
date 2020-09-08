import { playlistRepo } from '../repositories';

export const playlistService = {
  async getPlaylists() {
    const playlists = await playlistRepo.getPlaylists();
    return playlists;
  },

  async createPlaylist(title) {
    const result = await playlistRepo.createPlaylist(title);
    return result;
  }
};
