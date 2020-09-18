import express from 'express';
import cors from 'cors';
import { playlistController, trackController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/', playlistController.get);
router.post('/', playlistController.post);
router.delete('/:id?', playlistController.delete);

router.post('/', trackController.post);

export default router;
