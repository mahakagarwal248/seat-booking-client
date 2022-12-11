import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeatMap from "./components/SeatMap";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <Home />
            </div>
          }
        />
        <Route exact path="/seatMap/:inputSeats" element={<SeatMap />} />
      </Routes>
    </Router>
  );
}

export default App;
