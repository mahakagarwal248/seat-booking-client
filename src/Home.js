import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [value, setValue] = useState(1);
  return (
    <div className="selectDiv">
      <h2>Select number of seats</h2>
      <select
        value={value}
        className="selectSeatDiv"
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <br />
      <Link to={`/seatMap/${value}`}>
        <button className="submitBtn">Submit</button>
      </Link>
    </div>
  );
}

export default Home;
