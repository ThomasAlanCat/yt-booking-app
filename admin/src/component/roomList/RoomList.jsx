import "./roomList.styles.scss";
import { Link } from "react-router-dom";
// import Carousel from "../carousel/Carousel";

const RoomList = ({ data }) => {
  return (
    <div id="room-list">
      {data.map((item, index) => {
        return (
          <Link
            to={`/rooms/all/${item._id}`}
            key={item._id}
            className="room-unit"
          >
            <div className="img-wrapper">
              {/* <Carousel data={item.img} /> */}
              <img src={item.img[0]} alt="" />
              <p className="name">{item.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default RoomList;
