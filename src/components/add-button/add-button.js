import React from "react";
import "./add-button.css";

const AddButton = ({ count, disabled, onAddingTickets }) => {
    return (
        <button className="btn btn-success"
        disabled={disabled}
        onClick={onAddingTickets}>
            Add tickets({count}) to cart
        </button>
    );
};

export default AddButton;
