import { trackService } from '../services';

export const trackController = {
  post(req, res, next) {
    trackService.addTrack(req.body.path)
      .then(result => res.json(result))
      .catch(error => next(error));
  }
}
