import { trackRepo } from '../repositories';
import { musicParser } from '../utils/musicParser';

export const trackService = {
  async getTracks() {
    return await trackRepo.getAllTracks();
  },

  async getTrackById(trackId) {
    try {
      const track = await trackRepo.getTrackById(trackId);
      const meta = await musicParser(track[0].path);
      return meta;
    } catch (err) {
      throw { err }
    }
  },

  async addTrack(path) {
    return await trackRepo.addTrack(path);
  },

  async addTrackToPlaylist(playlistId, trackId) {
    return await trackRepo.addTrackToPlaylist(playlistId, trackId);
  },

  async deleteTrackFromPlaylist(playlistId, trackId) {
    return await trackRepo.deleteTrackFromPlaylist(playlistId, trackId);
  }
}
