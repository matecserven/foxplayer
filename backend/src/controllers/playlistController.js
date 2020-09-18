import { playlistService } from '../services';

export const playlistController = {
  // async get(req, res, next) {
  //   try {
  //     const result = await playlistService.getPlaylists();
  //     res.json(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // },

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
      const result = await playlistService.deletePlaylist(req.params.id);

      if (result.affectedRows === 1) {
        res.json({ message: 'Playlist deleted' });
      } else {
        res.json({ message: "Playlist can't be deleted" });
      }
    } catch (error) {
      next(error);
    }
  },

};
