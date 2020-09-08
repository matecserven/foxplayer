import { playlistService } from '../services';

export const playlistController = {
  async get(req, res) {
    const result = await playlistService.getPlaylists();
    if (result.error) {
      res.json({ message: 'No playlists' });
    } else {
      res.json(result);
    }
  },

  async post(req, res) {
    const result = await playlistService.createPlaylist(req.body.title);
    if (result.error) {
      res.json(
        { 
          message: 'Error',
          error: result
        }
      );
    } else {
      res.json({ message: 'Playlist created' });
    }
  }
};
