import React, {Component} from "react";
import "./place-button.css";

export default class PlaceButton extends Component {

    render() {
        let {isBooked, isSelected, place, onSelected} = this.props;
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
    }
}
