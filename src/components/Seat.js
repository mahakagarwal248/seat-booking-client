import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SeatMap.css";
let selected = 0;

function Seat({ seatNumber, inputSeats, selectedSeats }) {
  const coachId = 1;
  let [seatData, setSeatData] = useState([]);
  let bookedSeats = [];
  useEffect(() => {
    axios
      .get(`https://fair-red-ray-wrap.cyclic.app/getBooking/${coachId}`)
      .then((response) => {
        setSeatData(response.data);
      });
  }, []);

  const [select, setSelect] = useState(false);

  const handleClick = (seatNumber) => {
    bookedSeats.includes(seatNumber)
      ? window.alert("seat cannot be selected")
      : select
      ? handleDeselect()
      : selected < inputSeats
      ? handleSelected(seatNumber)
      : window.alert("Oops! Looks like you have selected your all seats.");
  };
  const handleDeselect = () => {
    setSelect(false);
    selected = selected - 1;
  };
  const handleSelected = () => {
    setSelect(true);
    selectedSeats.push(seatNumber);
    selected = selected + 1;
  };

  seatData?.seatDetails?.map((seat) =>
    seat.isReserved === true ? bookedSeats.push(seat.seatNumber) : ""
  );
  return (
    <div
      className={
        bookedSeats.includes(seatNumber)
          ? "bookedSeat"
          : select
          ? "selectedSeat"
          : "seat"
      }
      onClick={() => handleClick(seatNumber)}
    >
      <p>{seatNumber}</p>
    </div>
  );
}

export default Seat;
