import { playlistRepo } from '../repositories';

export const playlistService = {
  async getPlaylists() {
    // try {
    //   const playlists = await playlistRepo.getPlaylists();
    //   return playlists;
    // } catch (error) {
    //   throw { error };
    // }
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
  
};
