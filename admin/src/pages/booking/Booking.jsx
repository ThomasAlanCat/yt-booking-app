import { useState, useEffect } from "react";
import "./booking.styles.scss";
import { useParams, useNavigate } from "react-router-dom";
import { deleteBooking, reset } from "../../features/booking/bookingSlice";
import { useDispatch, useSelector } from "react-redux";

// booking
const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  const { isSuccess } = useSelector((state) => state.booking);

  useEffect(() => {
    if (isSuccess) {
      //navigate to booking
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [isSuccess, navigate, dispatch]);

  useEffect(() => {
    const getBooking = async () => {
      try {
        const res = await fetch(`/api/bookings/${id}`);
        const data = await res.json();

        setBooking(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getBooking();
  }, [id]);

  const handleDelete = () => {
    console.log("handle delete");
    dispatch(deleteBooking(id));
  };

  return (
    <div id="booking">
      <h1 className="heading center">Booking</h1>

      {booking && (
        <div className="content-wrapper">
          <div className="text-wrapper">
            <h1 className="heading">{booking.name}</h1>

            <p className="email">{booking.email}</p>
            <p className="email">{booking.email}</p>
            <p className="email">check-in: {booking.checkInDate}</p>
            <p className="email">check-out: {booking.checkOutDate}</p>
          </div>

          <div className="cta-wrapper">
            <button>confirm</button>
            <button className="danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Booking;
