import React, {Component} from "react";
import "./hall.css";
import PlaceButton from "../place-button";

export default class Hall extends Component{

    setPropByComparingInArray = (arr, key) => {
        let prop = false;
        arr.forEach( el => {
            if ( el[0] === key[0] && el[1] === key[1] ) {
                prop = true;
            }
            return prop;
        });
        return prop;
    };

    render() {
        const { seats, onSelected, selected, booked } = this.props;

        const rowOfHall = seats.map((item) => {
            let row = seats.findIndex((el) => el === item) + 1;
            const elementsOfRow = item.map((seat) => {
                let key = [row, seat];
                let isSelected = this.setPropByComparingInArray(selected, key);
                let isBooked = this.setPropByComparingInArray(booked, key);

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
                {rowOfHall}
            </ul>
        );
    }
};
