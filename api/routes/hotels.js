import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updatedHotel } from "../controllers/hotel.js";
const router = express.Router();

//create
router.post('/',verifyAdmin,createHotel);
//update 
router.put('/:id',verifyAdmin,updatedHotel);
//delete
router.delete('/:id',verifyAdmin,deleteHotel);
//get
router.get('/find/:id',getHotel);

//get all hotels
router.get('/',getHotels);
router.get('/countByCity',countByCity);
router.get('/countByType',countByType)
router.get("/room/:id", getHotelRooms);




export default router;
