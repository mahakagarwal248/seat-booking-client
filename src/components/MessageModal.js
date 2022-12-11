import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./SeatMap.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function MessageModal({ selectedSeats }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = async () => {
    const axiosCallRes = await axios
      .post("https://fair-red-ray-wrap.cyclic.app/bookSeat", {
        seatNumber: selectedSeats,
        coachId: 1,
      })
      .then((response) => {
        return response;
      });
    axiosCallRes.status === 200 ? setOpen(true) : window.alert("seat is already booked");
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <div>
      <button type="submit" onClick={handleOpen} className="submitSeatBtn">
        Submit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button className="closeBtn" onClick={handleClose}>
            X
          </button>
          <br />
          <h5 id="modal-modal-description">
            Your Seats selected successfully.
          </h5>
          <h5 id="modal-modal-description" style={{ marginTop: "20px" }}>
            Thank You.
          </h5>
        </Box>
      </Modal>
    </div>
  );
}
