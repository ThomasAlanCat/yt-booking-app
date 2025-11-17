import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBookings } from "../../features/booking/bookingSlice";
import BookingList from "../../component/bookingList/BookingList";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { bookings } = useSelector((state) => state.booking);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getBookings());
  }, [user, dispatch, navigate]);

  return (
    <div>
      <h1 className="heading center">Dashboard ADMIN</h1>
      {bookings.length > 0 ? <BookingList data={bookings} /> : null}
    </div>
  );
};
export default Dashboard;
