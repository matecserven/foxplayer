import { playlistRepo } from '../repositories';
import { playlistService } from '../services';

export const playlistController = {

  get(req, res, next) {
    playlistService.getPlaylists()
      .then(result => res.json(result))
      .catch(error => next(error));
  },

  async post(req, res, next) {
    try {
      await playlistService.createPlaylist(req.body.title);
      res.json({ message: 'Playlist created' });
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      if (!req.params.id) {
        res.json({ error: 'No id provided' });
        return;
      }
      const result = await playlistService.deletePlaylist(req.params.playlist_id);

      if (result.affectedRows === 1) {
        res.json({ message: 'Playlist deleted' });
      } else {
        res.json({ message: "Playlist can't be deleted" });
      }
    } catch (error) {
      next(error);
    }
  },

  async getPlaylistWithTracks(req, res, next) {
    try {
      const result = await playlistService.getPlaylistWithTracks(req.params.playlist_id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

};
