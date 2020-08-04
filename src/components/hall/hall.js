import React from "react";
import "./hall.css";
import PlaceButton from "../place-button";

const Hall = ({ seats, onSelected, selected, booked }) => {
    // console.log(booked);
    // console.log(selected);
    const rowsOfHall = seats.map((item) => {
        let id = seats.findIndex((el) => el === item);
        let row = id + 1;
        const elementsOfRow = item.map((seat) => {
            let key = [row, seat];

            let isSelected = false;
            selected.forEach(el => {
                if( (el[0] === key[0]) && (el[1] === key[1]) ) {
                    isSelected = true;
                }
            });

            let isBooked = false;
            booked.forEach( (el) => {
                // console.log(booked.length);
                if( (el[0] === key[0]) && (el[1] === key[1]) ) {
                    isBooked = true;
                }
            });

            return (
                <li key={seat} className="list-group-item">
                    <PlaceButton isBooked={isBooked} isSelected={isSelected} onSelected={() => onSelected(key)}
                                 row={row} place={seat}/>
                </li>
            );
        });
        return (
            <ul key={row} className="list-group list-group-horizontal-sm">
                <li className="list-group-item row-number">{row} row</li>
                {elementsOfRow}
            </ul>
        );
    });
    return (
        <ul className="list-group list-group-flush">
            {rowsOfHall}
        </ul>
    );
};

export default Hall;
