import { getRooms } from "../../features/room/roomSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomList from "../../component/roomList/RoomList";

const Rooms = () => {
  const dispatch = useDispatch();
  const { rooms, isLoading } = useSelector((state) => state.room);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  // console.log(rooms);

  if (isLoading) {
    return (
      <div>
        <h1 className="heading center">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading center">Rooms</h1>
        {rooms.length > 0 ? <RoomList data={rooms} /> : null}
      </div>
    </div>
  );
};
export default Rooms;
