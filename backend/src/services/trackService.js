import { trackRepo } from '../repositories';

export const trackService = {
  async addTrack(path) {
    return await trackRepo.addTrack(path);
  }
}
