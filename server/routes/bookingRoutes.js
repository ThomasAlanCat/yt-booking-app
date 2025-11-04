const { Router } = require("express");
const { auth } = require("../middleware/authMiddleware");

const {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
  getSingleBooking,
} = require("../controllers/bookingControllers");

const router = Router();

router.get("/", auth, getBookings);
router.get("/:id", getSingleBooking);
router.post("/", createBooking);
router.put("/:id", auth, updateBooking);
router.delete("/:id", auth, deleteBooking);

module.exports = router;
