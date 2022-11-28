import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Flights from "./pages/flights/flights";
import Cars from "./pages/car_rentals/car_rentals";
import Gallery from "./pages/gallery/gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/flights" element={<Flights/>}/>
        <Route path="/car_rentals" element={<Cars/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
