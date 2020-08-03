import React from "react";
import "./header.css";
import Cart from "../cart";

const Header = () => {
    return (
        <div className="row">
            <div className="col-xl-10">
                <h1>Welcome to the cinema!</h1>
            </div>
            <div className="col-xl-2">
                <Cart />
            </div>

        </div>
    );
};

export default Header;
