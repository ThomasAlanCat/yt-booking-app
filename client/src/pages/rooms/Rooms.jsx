import { getRooms, reset } from "../../features/room/roomSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import RoomList from "../../component/roomList/RoomList";

const Rooms = () => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.room);
  useEffect(() => {
    dispatch(getRooms());
    dispatch(reset());
  }, [dispatch]);

  return (
    <div>
      <h1 className="heading center">Rooms CLIENT</h1>
      {rooms.length > 0 ? <RoomList data={rooms} /> : null}
    </div>
  );
};
export default Rooms;
