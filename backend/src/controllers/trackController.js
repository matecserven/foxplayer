import { trackService } from '../services';

export const trackController = {
  get(req, res, next) {
    trackService.getTracks()
      .then(result => res.json(result))
      .catch(error => next(error));
  },

  getTrackById(req, res, next) {
    trackService.getTrackById(req.params.track_id)
      .then(result => res.json(result))
      .catch(error => next(error))
  },

  post(req, res, next) {
    trackService.addTrack(req.body.path)
      .then(result => res.json(result))
      .catch(error => next(error));
  },

  addTrackToPlaylist(req, res, next) {
    trackService.addTrackToPlaylist(req.params.playlist_id, req.params.track_id)
      .then(result => res.json(result))
      .catch(error => next(error));
  },

  deleteTrackFromPlaylist(req, res, next) {
    trackService.deleteTrackFromPlaylist(req.params.playlist_id, req.params.track_id)
      .then(result => res.json(result))
      .catch(error => next(error));
  }
}
