import React from "react";
import MessageModal from "./MessageModal";
import Seat from "./Seat";
import "./SeatMap.css";
import { useParams } from "react-router-dom";

function SeatMap() {
  const totalRows = 12;
  const maxSeatPerRow = 7;
  var totalSeats = 80;
  var counter = 0;

  const { inputSeats } = useParams();
  let selectedSeats = [];

  return (
    <div className="seatChart">
      {Array.from(Array(totalRows), (e, i) => {
        return (
          <div key={i}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {Array.from(
                Array(
                  totalSeats % maxSeatPerRow > 0
                    ? totalSeats % maxSeatPerRow
                    : maxSeatPerRow
                ),
                (e, i) => {
                  totalSeats = totalSeats - (totalSeats % 7);
                  counter = counter + 1;
                  return (
                    <div key={i}>
                      <Seat seatNumber={counter} inputSeats={inputSeats} selectedSeats={selectedSeats} />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
      <MessageModal selectedSeats={selectedSeats}/>
    </div>
  );
}

export default SeatMap;
