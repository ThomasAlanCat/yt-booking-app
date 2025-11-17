import "./styles/app.styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Rooms from "./pages/rooms/Rooms";
import Room from "./pages/room/Room";
import Header from "./component/header/Header";
import Booking from "./pages/booking/Booking";
import Success from "./pages/success/Success";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/all/:id" element={<Room />} />
          <Route path="/bookings/:id" element={<Booking />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
