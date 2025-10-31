const { Router } = require("express");
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
router.post("/", createRoom);

// get single room

router.get("/:id", getRoom);

// update single room
router.put("/:id", updateRoom);

// delete single room
router.delete("/:id", deleteRoom);

module.exports = router;
