import express from 'express';
import { registerUser, getUser, createHotelList, getUserListings } from '../controller/user'

const router = express.Router();

/* GET users listing. */
router.get('/:userId', getUserListings);
router.post('/register', registerUser);
router.post('/user/retrieve/r', getUser);
router.post('/hotel/list', createHotelList);

export default router;