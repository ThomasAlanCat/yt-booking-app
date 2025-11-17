import "./room.styles.scss";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoom, reset } from "../../features/room/roomSlice";

import Carousel from "../../component/carousel/Carousel";

const Room = () => {
  const { isSuccess } = useSelector((state) => state.room);

  // console.log("isAdmin", user.isAdmin);
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      // navigate to rooms
      navigate("/rooms");
      // dispatch reset
      dispatch(reset());
    }
  });

  useEffect(() => {
    const getRoom = async () => {
      // dispatch(reset());
      try {
        const res = await fetch(`/api/rooms/${id}`);
        if (res.ok) {
          const data = await res.json();
          // console.log(data)
          setRoom(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRoom();
  }, [id]);

  return (
    <div id="room">
      <h1 className="heading center">Room CLIENT</h1>

      <div className="container">
        {room ? (
          <div>
            <div className="img-wrapper">
              <Carousel data={room.img} />
              {/* <img src={room.img[0]} alt="room img" /> */}
            </div>
            <h1 className="heading center">{room.name}</h1>

            <div className="text-wrapper">
              <p>{room.desc}</p>
              <h2>${room.price.toFixed(2)}</h2>
              <div className="cta-wrapper">
                <Link to={`/bookings/${room._id}`}>Book Now</Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Room;
