import "./bookingList.styles.scss";
import { Link } from "react-router-dom";

const BookingList = ({ data }) => {
  const handleAction = () => {
    console.log("test");
  };
  return (
    <div className="container">
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Room</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id}>
                  <td data-label="Name">{item.name}</td>
                  <td data-label="Email">{item.email}</td>
                  <td data-label="Room">{item.roomId.name}</td>
                  <td>
                    <Link to={`/bookings/${item._id}`} className="view-btn">
                      View
                    </Link>
                  </td>
                  {/* <td data-label="Action">
                    <button onClick={() => handleAction(item._id, "edit")}>
                      Edit
                    </button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default BookingList;
