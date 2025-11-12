import "./room.styles.scss";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoom, reset } from "../../features/room/roomSlice";

const Room = () => {
  const { user } = useSelector((state) => state.auth);
  const { isSuccess } = useSelector((state) => state.room);

  console.log("xxx", user.isAdmin);
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

  const handleDelete = () => {
    dispatch(deleteRoom(id));
  };

  return (
    <div id="room">
      <div className="container">
        {room ? (
          <div>
            <div className="img-wrapper">
              <img src={room.img[0]} alt="room img" />
            </div>
            <h1 className="heading center">{room.name}</h1>

            <div className="text-wrapper">
              <p>{room.desc}</p>
              <h2>${room.price.toFixed(2)}</h2>
              <div className="cta-wrapper">
                <Link to={`/rooms/edit/${room._id}`}>Edit Room</Link>
                {/* {user?.isAdmin && <button>Delete Room</button>} */}
                {user?.isAdmin && (
                  <button onClick={handleDelete}>Delete Room</button>
                )}
              </div>
            </div>
          </div>
        ) : (
          "no room was found"
        )}
      </div>
    </div>
  );
};
export default Room;
