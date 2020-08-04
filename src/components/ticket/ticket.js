import React from "react";
import "./ticket.css";

const Ticket = ({row, seat, onDeleted}) => {
    return (
        <div>
            Row: {row}, Seat: {seat}
            <button type="button"
                    className="btn btn-danger btn-sm float-right"
                    onClick={onDeleted}>
                Remove from cart
            </button>
        </div>
    );
};

export default Ticket;
