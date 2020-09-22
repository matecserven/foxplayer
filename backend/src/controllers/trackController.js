import { trackService } from '../services';
import { appDir } from '../utils/config';

export const trackController = {
  get(req, res, next) {
    trackService.getTracks()
      .then(result => res.json(result))
      .catch(error => next(error));
  },

  getTrackDataById(req, res, next) {
    trackService.getTrackDataById(req.params.track_id)
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
  },

  getTrackFile(req, res, next) {
    trackService.getTrackPathById(req.params.track_id)
      .then(result => res.sendFile(`${appDir}/static/tracks/${result}`))
      .catch(error => next(error));
  },

}
