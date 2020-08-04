import React, {Component} from "react";
import "./cart.css";

export default class Cart extends Component {
    render() {
        const {inCart, onCartClick} = this.props;
        let count = inCart.length;
        return (
            <button className="btn btn-dark"
                    onClick={onCartClick}>
                Cart ({count})
            </button>
        );
    }
};
