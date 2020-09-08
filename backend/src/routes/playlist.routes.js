import express from 'express';
import cors from 'cors';
import { playlistController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/', playlistController.get);
router.post('/', playlistController.post);

export default router;
