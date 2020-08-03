import React from "react";
import "./header.css";
import Cart from "../cart";

const Header = () => {
    return (
        <div className="row">
            <div className="col-md-11">
                <h2>Welcome to the cinema!</h2>
            </div>
            <div className="col-md-1">
                <Cart />
            </div>

        </div>
    );
};

export default Header;
