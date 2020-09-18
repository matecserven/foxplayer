import express from 'express';
import cors from 'cors';
import { playlistController, trackController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/playlist', playlistController.get);
router.post('/playlist', playlistController.post);
router.delete('/playlist/:playlist_id?', playlistController.delete);
router.get('/playlist/:playlist_id', playlistController.getPlaylistWithTracks);

router.post('/tracks', trackController.post);
router.get('/tracks', trackController.get);
router.get('/tracks/:track_id', trackController.getTrackById);
router.post('/tracks/:playlist_id/:track_id', trackController.addTrackToPlaylist);
router.delete('/tracks/:playlist_id/:track_id', trackController.deleteTrackFromPlaylist);

export default router;
