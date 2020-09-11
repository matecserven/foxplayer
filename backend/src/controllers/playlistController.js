import { playlistService } from '../services';

export const playlistController = {
  async get(req, res, next) {
    const result = await playlistService.getPlaylists();
    if (result.error) {
      next(result.error);
      return;
    }
    if (result.length < 1) {
      res.json({ message: 'No playlists' });
    } else {
      res.json(result);
    }
  },

  async post(req, res, next) {
    const result = await playlistService.createPlaylist(req.body.title);
    if (result.error) {
      next(result.error);
    } else {
      res.json({ message: 'Playlist created' });
    }
  },

  async delete(req, res, next) {
    if (!req.params.id) {
      res.json({ error: 'No id provided' });
      return;
    }
    const result = await playlistService.deletePlaylist(req.params.id);
    if (result.error) {
      next(result.error);
    } else if (result.affectedRows === 1) {
      res.json({ message: 'Playlist deleted' });
    } else {
      res.json({ message: "Playlist can't be deleted" });
    }
  },

};
