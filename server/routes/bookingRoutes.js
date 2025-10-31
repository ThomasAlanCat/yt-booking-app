const { Router } = require("express");
const {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
  getSingleBooking,
} = require("../controllers/bookingControllers");

const router = Router();

router.get("/", getBookings);
router.get("/:id", getSingleBooking);
router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
