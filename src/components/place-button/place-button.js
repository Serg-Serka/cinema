import React from "react";
import "./place-button.css";

const PlaceButton = ({ isBooked, isSelected, place, onSelected }) => {
    let classNames = "btn btn-warning btn-sm";
    if (isSelected) {
        classNames = "btn btn-success btn-sm";
    }
    if (isBooked) {
        classNames = "btn btn-danger btn-sm";
    }
    return (
        <button className={classNames}
                onClick={onSelected} disabled={isBooked}>
            {place}
        </button>
    );
};

export default PlaceButton;
