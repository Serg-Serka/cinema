import React, {Component} from "react";
import "./place-button.css";

export default class PlaceButton extends Component {

    render() {
        let {isAble, isBooked, isSelected, row, place} = this.props;
        let classNames = "btn btn-warning btn-sm";
        if (!isAble) {
            classNames = "btn btn-secondary btn-sm";
        }
        if (isSelected) {
            classNames = "btn btn-light btn-sm";
        }
        if (isBooked) {
            classNames = "btn btn-success btn-sm";
        }
        return (
            <button className={classNames}
            >
                {place}
            </button>
        );
    }
}
