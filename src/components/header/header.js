import React from "react";
import "./header.css";
import Cart from "../cart";

const Header = ({inCart, onDeleted}) => {
    return (
        <div className="row header">
            <div className="col-md-10">
                <h2>Welcome to the cinema!</h2>
            </div>
            <div className="col-md-2">
                <Cart inCart={inCart} onDeleted={onDeleted} />
            </div>

        </div>
    );
};

export default Header;
