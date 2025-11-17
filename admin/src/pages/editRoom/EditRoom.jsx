import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateRoom, reset } from "../../features/room/roomSlice";
import { useSelector, useDispatch } from "react-redux";

const EditRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isLoading } = useSelector((state) => state.room);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    desc: "",
    roomNumbers: "",
  });

  const { name, price, desc, roomNumbers } = formData;

  useEffect(() => {
    const getRoom = async () => {
      try {
        const res = await fetch(`/api/rooms/${id}`);
        const data = await res.json();

        const { roomNumbers, ...rest } = data;
        const roomMap = roomNumbers.map((item) => item.number);
        const roomString = roomMap.join(",");
        setFormData({ ...rest, roomNumbers: roomString });
        // return data;
      } catch (error) {
        console.log(error);
      }
    };
    getRoom();
  }, [id]);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      dispatch(reset());
      console.log("isSuccess", isSuccess);
      //navigate to rooms
      navigate("/rooms", { replace: true });
    }
  }, [isSuccess, isLoading, dispatch, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !roomNumbers) {
      return;
    }
    const roomArray = roomNumbers.split(",").map((item) => {
      return {
        number: parseInt(item),
        unavailableDates: [],
      };
    });
    const dataToSubmit = {
      name,
      price,
      desc,
      roomNumbers: roomArray,
      roomId: id,
    };
    dispatch(updateRoom(dataToSubmit));
    console.log(dataToSubmit);
  };

  return (
    <div className="container">
      <h1 className="heading">Edit Room</h1>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter room name"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={price}
              placeholder="Enter room price"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              onChange={handleChange}
              value={desc}
              rows="8"
            ></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="roomNumbers">Room Numbers</label>
            <textarea
              onChange={handleChange}
              value={roomNumbers}
              name="roomNumbers"
              placeholder="Enter room numbers seperated by commas eg: 202, 203, 204, 400"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default EditRoom;
