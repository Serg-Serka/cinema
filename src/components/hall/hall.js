import React from "react";
import "./hall.css";
import PlaceButton from "../place-button";

const Hall = ({ places }) => {
    const elements = places.map((item) => {
        console.log(item);
        let row = item[0];
        let place = item[1];
        return (
            <li key={item} className="list-group-item">
                <PlaceButton isAble={true} isBooked={false} isSelected={false} row={row} place={place}/>
            </li>
        );
    });
    return (
        <ul className="list-group list-group-horizontal-sm list-group-flush">
            {elements}
        </ul>
    );
};

export default Hall;
