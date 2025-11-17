import "./app.styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Header from "../src/component/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateRoom from "./pages/CreateRoom";
import Rooms from "./pages/rooms/Rooms";
import Room from "./pages/room/Room";
import EditRoom from "./pages/editRoom/EditRoom";
import Booking from "./pages/booking/Booking";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/create" element={<CreateRoom />} />
          <Route path="/rooms/all/:id" element={<Room />} />
          <Route path="/rooms/edit/:id" element={<EditRoom />} />
          <Route path="/bookings/:id" element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
