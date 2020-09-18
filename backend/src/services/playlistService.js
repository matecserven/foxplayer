import { playlistRepo } from '../repositories';
import { musicParser } from '../utils/musicParser';

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

  async getPlaylistWithTracks(playlistId) {
    try {
      const tracks = await playlistRepo.getPlaylistWithTracks(playlistId);
      const response =  Promise.all(tracks.map(async (track) => {
        const trackMeta = await musicParser(track.path);
        const trackObj = {
          id: track.id,
          title: trackMeta.title,
          artist: trackMeta.artist[0],
          duration: trackMeta.duration
        }
        return trackObj;
      }));
      return response;
    } catch (error) {
      throw { error };
    }
  }
  
};
