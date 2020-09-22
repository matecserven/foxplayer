import { trackRepo } from '../repositories';
import { musicParser, tracklistParser } from '../utils/musicParser';

export const trackService = {
  async getTracks() {
    try {
      const trackList =  await trackRepo.getAllTracks();
      const trackListWithMeta = await tracklistParser(trackList);
      return trackListWithMeta;
    } catch (error) {
      throw { error }
    }
  },

  async getTrackPathById(trackId) {
    try {
      const track = await trackRepo.getTrackById(trackId);
      return track[0].path;
    } catch (err) {
      throw { err };
    }
  },

  async getTrackDataById(trackId) {
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
