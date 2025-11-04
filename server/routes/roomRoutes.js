const { Router } = require("express");
const { auth } = require("../middleware/authMiddleware");
const {
  getRooms,
  createRoom,
  getRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");
const router = Router();

// get all rooms
router.get("/", getRooms);

// create room
router.post("/", auth, createRoom);

// get single room
router.get("/:id", getRoom);

// update single room
router.put("/:id", auth, updateRoom);

// delete single room
router.delete("/:id", auth, deleteRoom);

module.exports = router;
